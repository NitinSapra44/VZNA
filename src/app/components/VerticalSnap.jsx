"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);

  // Memoize children array to prevent unnecessary re-renders
  const slides = useMemo(() => children, [children]);

  // Disable/enable swiper when drawer opens/closes
  useEffect(() => {
    if (!swiperRef.current) return;

    if (isDrawerOpen) {
      swiperRef.current.disable();
      swiperRef.current.allowTouchMove = false;
    } else {
      swiperRef.current.enable();
      swiperRef.current.allowTouchMove = true;
    }
  }, [isDrawerOpen]);

  // Memoize the swiper callback to prevent re-renders
  const handleSwiper = useCallback((swiper) => {
    swiperRef.current = swiper;
  }, []);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      speed={300}
      loop={true}
      loopAdditionalSlides={2}
      loopPreventsSliding={false}
      touchRatio={1}
      touchAngle={45}
      threshold={3}
      longSwipesRatio={0.2}
      longSwipesMs={200}
      followFinger={true}
      shortSwipes={true}
      allowTouchMove={!isDrawerOpen}
      simulateTouch={true}
      touchStartPreventDefault={false}
      passiveListeners={true}
      resistance={true}
      resistanceRatio={0.85}
      freeMode={false}
      cssMode={false}
      updateOnWindowResize={false}
      observer={false}
      observeParents={false}
      onSwiper={handleSwiper}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {slides.map((child, i) => (
        <SwiperSlide key={i} className="w-full h-full">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}