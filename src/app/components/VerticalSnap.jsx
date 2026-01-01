"use client";
import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const touchRef = useRef({
    startY: 0,
    startTime: 0,
    lastY: 0,
    lastTime: 0,
    velocities: [],
  });

  const slides = useMemo(() => children, [children]);

  useEffect(() => {
    if (!swiperRef.current) return;
    if (isDrawerOpen) {
      swiperRef.current.disable();
    } else {
      swiperRef.current.enable();
    }
  }, [isDrawerOpen]);

  const handleSwiper = useCallback((swiper) => {
    swiperRef.current = swiper;
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionTimingFunction = "linear";
    }
  }, []);

  // Calculate end velocity from recent samples
  const getEndVelocity = useCallback(() => {
    const velocities = touchRef.current.velocities;
    if (velocities.length === 0) return 0;
    
    // Get last 3-5 samples for end velocity
    const recent = velocities.slice(-4);
    return recent.reduce((a, b) => a + b, 0) / recent.length;
  }, []);

  // Native touch handlers for velocity tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchRef.current = {
        startY: touch.clientY,
        startTime: Date.now(),
        lastY: touch.clientY,
        lastTime: Date.now(),
        velocities: [],
      };
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const now = Date.now();
      const dt = now - touchRef.current.lastTime;

      if (dt > 0) {
        // Velocity in px/ms (negative = swipe up)
        const velocity = (touch.clientY - touchRef.current.lastY) / dt;
        touchRef.current.velocities.push(velocity);
        
        // Keep only last 10 samples
        if (touchRef.current.velocities.length > 10) {
          touchRef.current.velocities.shift();
        }
      }

      touchRef.current.lastY = touch.clientY;
      touchRef.current.lastTime = now;
    };

    const handleTouchEnd = () => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      const endVelocity = getEndVelocity();
      const totalDistance = touchRef.current.lastY - touchRef.current.startY;
      const totalTime = Date.now() - touchRef.current.startTime;
      
      const absVelocity = Math.abs(endVelocity);
      const absDistance = Math.abs(totalDistance);
      const slideHeight = swiper.height || window.innerHeight;

      // Direction: negative velocity or negative distance = swipe up = next slide
      const direction = endVelocity < 0 || (endVelocity === 0 && totalDistance < 0) ? 1 : -1;

      let shouldSlide = false;

      // CASE 1: Fast flick (short swipe) - velocity based
      if (totalTime < 300 && absVelocity > 0.3) {
        shouldSlide = true;
      }
      // CASE 2: Long swipe with 50% threshold
      else if (absDistance > slideHeight * 0.5) {
        shouldSlide = true;
      }
      // CASE 3: Long drag + flick at end (key feature!)
      else if (totalTime >= 300 && absVelocity > 0.5) {
        shouldSlide = true;
      }

      if (shouldSlide) {
        const currentIndex = swiper.activeIndex;
        const targetIndex = currentIndex + direction;

        if (targetIndex >= 0 && targetIndex < slides.length) {
          // Force the slide change
          requestAnimationFrame(() => {
            swiper.slideTo(targetIndex, 150);
          });
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [slides.length, getEndVelocity]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Swiper
        direction="vertical"
        modules={[Virtual, Mousewheel]}
        slidesPerView={1}
        speed={150}
        virtual={{
          enabled: true,
          addSlidesBefore: 2,
          addSlidesAfter: 2,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        touchStartPreventDefault={true}
        passiveListeners={false}
        preventInteractionOnTransition={true}
        // Disable Swiper's built-in swipe detection - we handle it ourselves
        threshold={10000}
        longSwipes={false}
        shortSwipes={false}
        // Still allow finger following
        followFinger={true}
        touchRatio={1}
        touchAngle={45}
        resistance={true}
        resistanceRatio={0.85}
        allowTouchMove={!isDrawerOpen}
        watchSlidesProgress={true}
        preloadImages={false}
        lazy={true}
        onSwiper={handleSwiper}
        className="w-full h-full vertical-snap-linear"
        style={{
          width: "100%",
          height: "100%",
          touchAction: "pan-y",
        }}
      >
        {slides.map((child, i) => (
          <SwiperSlide key={i} virtualIndex={i} className="w-full h-full">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}