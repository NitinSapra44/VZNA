"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const touchDataRef = useRef({
    lastY: 0,
    lastTime: 0,
    velocity: 0,
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

  // Track velocity during touch move
  const handleTouchMove = useCallback((swiper, event) => {
    const touch = event.touches?.[0] || event;
    const currentY = touch.clientY || touch.pageY;
    const currentTime = Date.now();

    const deltaY = currentY - touchDataRef.current.lastY;
    const deltaTime = currentTime - touchDataRef.current.lastTime;

    if (deltaTime > 0) {
      // Calculate instantaneous velocity (px/ms)
      touchDataRef.current.velocity = deltaY / deltaTime;
    }

    touchDataRef.current.lastY = currentY;
    touchDataRef.current.lastTime = currentTime;
  }, []);

  const handleTouchStart = useCallback((swiper, event) => {
    const touch = event.touches?.[0] || event;
    touchDataRef.current = {
      lastY: touch.clientY || touch.pageY,
      lastTime: Date.now(),
      velocity: 0,
    };
  }, []);

  // Check velocity at end - if user flicked at the end, force slide change
  const handleTouchEnd = useCallback((swiper) => {
    const velocity = touchDataRef.current.velocity;
    const absVelocity = Math.abs(velocity);

    // If ending velocity is high (user flicked), force slide change
    // Velocity threshold: ~0.5 px/ms = fast flick
    if (absVelocity > 0.5) {
      const currentIndex = swiper.activeIndex;
      const direction = velocity < 0 ? 1 : -1; // negative velocity = swipe up = next slide

      const targetIndex = currentIndex + direction;

      // Ensure within bounds
      if (targetIndex >= 0 && targetIndex < swiper.slides.length) {
        // Small delay to override Swiper's default behavior
        requestAnimationFrame(() => {
          swiper.slideTo(targetIndex);
        });
      }
    }
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
      // SWIPE SETTINGS
      threshold={5}
      longSwipesRatio={0.5}
      longSwipesMs={300}
      shortSwipes={true}
      // SMOOTH FOLLOW
      followFinger={true}
      touchRatio={1}
      touchAngle={45}
      // RESISTANCE
      resistance={true}
      resistanceRatio={0.85}
      allowTouchMove={!isDrawerOpen}
      // PERFORMANCE
      watchSlidesProgress={true}
      preloadImages={false}
      lazy={true}
      // EVENT HANDLERS
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