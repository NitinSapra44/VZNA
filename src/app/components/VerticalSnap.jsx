"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const touchRef = useRef({
    startY: 0,
    startTime: 0,
    lastY: 0,
    lastTime: 0,
    velocities: [],
    startIndex: 0,
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

  const getEndVelocity = useCallback(() => {
    const velocities = touchRef.current.velocities;
    if (velocities.length === 0) return 0;
    const recent = velocities.slice(-4);
    return recent.reduce((a, b) => a + b, 0) / recent.length;
  }, []);

  const handleTouchStart = useCallback((swiper, e) => {
    const touch = e.touches ? e.touches[0] : e;
    touchRef.current = {
      startY: touch.clientY,
      startTime: Date.now(),
      lastY: touch.clientY,
      lastTime: Date.now(),
      velocities: [],
      startIndex: swiper.activeIndex,
    };
  }, []);

  const handleTouchMove = useCallback((swiper, e) => {
    const touch = e.touches ? e.touches[0] : e;
    const now = Date.now();
    const dt = now - touchRef.current.lastTime;

    if (dt > 10) {
      const velocity = (touch.clientY - touchRef.current.lastY) / dt;
      touchRef.current.velocities.push(velocity);

      if (touchRef.current.velocities.length > 10) {
        touchRef.current.velocities.shift();
      }

      touchRef.current.lastY = touch.clientY;
      touchRef.current.lastTime = now;
    }
  }, []);

  const handleTouchEnd = useCallback(
    (swiper) => {
      const endVelocity = getEndVelocity();
      const totalDistance = touchRef.current.lastY - touchRef.current.startY;
      const totalTime = Date.now() - touchRef.current.startTime;

      const absVelocity = Math.abs(endVelocity);
      const absDistance = Math.abs(totalDistance);
      const slideHeight = swiper.height || window.innerHeight;

      // Direction: negative = swipe up = next slide
      const direction = totalDistance < 0 ? 1 : -1;

      let shouldSlide = false;

      // CASE 1: Fast flick (< 300ms) with some velocity
      if (totalTime < 300 && absVelocity > 0.2) {
        shouldSlide = true;
      }
      // CASE 2: Long swipe passed 50% threshold
      else if (absDistance > slideHeight * 0.5) {
        shouldSlide = true;
      }
      // CASE 3: Long drag + flick at end (TikTok style!)
      else if (totalTime >= 300 && absVelocity > 0.4) {
        shouldSlide = true;
      }

      const startIndex = touchRef.current.startIndex;
      const targetIndex = startIndex + direction;

      if (shouldSlide && targetIndex >= 0 && targetIndex < slides.length) {
        swiper.slideTo(targetIndex, 150);
      } else {
        // Snap back to start
        swiper.slideTo(startIndex, 150);
      }
    },
    [slides.length, getEndVelocity]
  );

  // Prevent Swiper's default slide decision
  const handleSlideChangeTransitionStart = useCallback(() => {
    // We handle transitions ourselves in handleTouchEnd
  }, []);

  return (
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
      // Let finger follow work
      threshold={5}
      followFinger={true}
      touchRatio={1}
      touchAngle={45}
      // Disable Swiper's auto slide decision
      longSwipes={false}
      shortSwipes={false}
      // Resistance at edges
      resistance={true}
      resistanceRatio={0.85}
      allowTouchMove={!isDrawerOpen}
      watchSlidesProgress={true}
      preloadImages={false}
      lazy={true}
      onSwiper={handleSwiper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
  );
}