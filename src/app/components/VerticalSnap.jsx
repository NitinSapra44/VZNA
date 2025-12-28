"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);

  // Disable/enable swiper when drawer opens/closes
  useEffect(() => {
    if (!swiperRef.current) return;

    if (isDrawerOpen) {
      swiperRef.current.disable();
    } else {
      swiperRef.current.enable();
    }
  }, [isDrawerOpen]);

  return (
    <Swiper
      direction="vertical"
      modules={[Mousewheel, Keyboard]}
      slidesPerView={1}
      speed={500}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: false,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      loop={true}
      allowTouchMove={!isDrawerOpen}
      threshold={10}
      longSwipesRatio={0.25}
      longSwipesMs={300}
      shortSwipes={true}
      resistanceRatio={0}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children.map((child, i) => (
        <SwiperSlide key={i} className="w-full h-full">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}