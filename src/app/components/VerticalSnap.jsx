"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const touchDataRef = useRef({
    velocities: [],
    lastY: 0,
    lastTime: 0,
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

  const handleTouchStart = useCallback((swiper, event) => {
    const touch = event.touches?.[0] || event;
    touchDataRef.current = {
      velocities: [],
      lastY: touch.clientY || touch.pageY,
      lastTime: Date.now(),
      startIndex: swiper.activeIndex,
    };
  }, []);

  const handleTouchMove = useCallback((swiper, event) => {
    const touch = event.touches?.[0] || event;
    const currentY = touch.clientY || touch.pageY;
    const currentTime = Date.now();

    const deltaY = currentY - touchDataRef.current.lastY;
    const deltaTime = currentTime - touchDataRef.current.lastTime;

    if (deltaTime > 0) {
      const velocity = deltaY / deltaTime;
      // Keep last 5 velocity samples
      touchDataRef.current.velocities.push(velocity);
      if (touchDataRef.current.velocities.length > 5) {
        touchDataRef.current.velocities.shift();
      }
    }

    touchDataRef.current.lastY = currentY;
    touchDataRef.current.lastTime = currentTime;
  }, []);

  const handleTransitionStart = useCallback((swiper) => {
    const velocities = touchDataRef.current.velocities;
    if (velocities.length === 0) return;

    // Get average of last few velocity samples (end velocity)
    const recentVelocities = velocities.slice(-3);
    const avgVelocity =
      recentVelocities.reduce((a, b) => a + b, 0) / recentVelocities.length;
    const absVelocity = Math.abs(avgVelocity);

    const startIndex = touchDataRef.current.startIndex;
    const currentTarget = swiper.activeIndex;

    // If high end velocity but Swiper decided to stay on same slide
    if (absVelocity > 0.3 && currentTarget === startIndex) {
      const direction = avgVelocity < 0 ? 1 : -1;
      const targetIndex = startIndex + direction;

      if (targetIndex >= 0 && targetIndex < slides.length) {
        // Override Swiper's decision
        setTimeout(() => {
          swiper.slideTo(targetIndex, 150);
        }, 0);
      }
    }

    // Clear velocities
    touchDataRef.current.velocities = [];
  }, [slides.length]);

  // Backup: also check on slideChangeTransitionEnd
  const handleSlideResetTransitionEnd = useCallback((swiper) => {
    // This fires when swiper resets to same slide
    const velocities = touchDataRef.current.velocities;
    if (velocities.length === 0) return;

    const recentVelocities = velocities.slice(-3);
    const avgVelocity =
      recentVelocities.reduce((a, b) => a + b, 0) / recentVelocities.length;
    const absVelocity = Math.abs(avgVelocity);

    if (absVelocity > 0.3) {
      const direction = avgVelocity < 0 ? 1 : -1;
      const targetIndex = swiper.activeIndex + direction;

      if (targetIndex >= 0 && targetIndex < slides.length) {
        swiper.slideTo(targetIndex, 150);
      }
    }

    touchDataRef.current.velocities = [];
  }, [slides.length]);

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
      longSwipesRatio={0.5}
      longSwipesMs={300}
      shortSwipes={true}
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTransitionStart={handleTransitionStart}
      onSlideResetTransitionEnd={handleSlideResetTransitionEnd}
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