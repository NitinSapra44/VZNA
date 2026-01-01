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
  }, []);

  const getEndVelocity = useCallback(() => {
    const velocities = touchRef.current.velocities;
    if (velocities.length === 0) return 0;
    const recent = velocities.slice(-4);
    return recent.reduce((a, b) => a + b, 0) / recent.length;
  }, []);

  const handleTouchStart = useCallback((swiper, e) => {
    const touch = e.touches ? e.touches[0] : e;
    
    // Remove any transition during touch
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionDuration = "0ms";
    }
    
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

      // CASE 1: Fast flick
      if (totalTime < 300 && absVelocity > 0.2) {
        shouldSlide = true;
      }
      // CASE 2: Passed 50% threshold
      else if (absDistance > slideHeight * 0.5) {
        shouldSlide = true;
      }
      // CASE 3: Long drag + flick at end
      else if (totalTime >= 300 && absVelocity > 0.4) {
        shouldSlide = true;
      }

      const startIndex = touchRef.current.startIndex;
      const targetIndex = startIndex + direction;

      // Calculate remaining distance to animate
      const currentTranslate = swiper.getTranslate();
      const targetSlideIndex = shouldSlide && targetIndex >= 0 && targetIndex < slides.length
        ? targetIndex
        : startIndex;
      const targetTranslate = -targetSlideIndex * slideHeight;
      const remainingDistance = Math.abs(targetTranslate - currentTranslate);

      // Calculate duration based on remaining distance (constant speed)
      // Speed: ~1000px per 150ms = 6.67 px/ms
      const speed = 6.67;
      const duration = Math.min(Math.max(remainingDistance / speed, 50), 300);

      // Apply smooth transition from current position
      if (swiper.wrapperEl) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionTimingFunction = "ease-out";
      }

      swiper.slideTo(targetSlideIndex, duration);
    },
    [slides.length, getEndVelocity]
  );

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
      threshold={5}
      followFinger={true}
      touchRatio={1}
      touchAngle={45}
      longSwipes={false}
      shortSwipes={false}
      resistance={true}
      resistanceRatio={0.85}
      allowTouchMove={!isDrawerOpen}
      watchSlidesProgress={true}
      preloadImages={false}
      lazy={true}
      // CRITICAL: Disable Swiper's built-in transition handling
      cssMode={false}
      onSwiper={handleSwiper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        touchAction: "none",
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