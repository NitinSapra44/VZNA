"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
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

  return (
    <Swiper
      direction="vertical"
      modules={[Virtual]}
      slidesPerView={1}
      
      // FASTER TRANSITION
      speed={200}
      
      loop={true}
      loopAdditionalSlides={1}
      
      virtual={{
        enabled: true,
        addSlidesBefore: 1,
        addSlidesAfter: 1,
        cache: true,
      }}
      
      // IMMEDIATE RESPONSE - Key for removing lag
      touchStartPreventDefault={false}
      touchStartForcePreventDefault={false}
      touchMoveStopPropagation={false}
      preventInteractionOnTransition={false}
      
      // TOUCH SETTINGS
      touchRatio={1}
      touchAngle={45}
      threshold={0} // No threshold = immediate response
      
      // 50% THRESHOLD
      longSwipesRatio={0.5}
      longSwipesMs={300}
      shortSwipes={false}
      
      // CRITICAL: These improve responsiveness
      followFinger={true}
      watchSlidesProgress={true}
      
      allowTouchMove={!isDrawerOpen}
      
      // REMOVE RESISTANCE for snappier feel
      resistance={false}
      
      freeMode={false}
      
      // PERFORMANCE
      watchOverflow={false}
      updateOnWindowResize={false}
      resizeObserver={false}
      observer={false}
      
      onSwiper={handleSwiper}
      
      // USE GPU ACCELERATION
      cssMode={false}
      
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        willChange: "transform",
      }}
    >
      {slides.map((child, i) => (
        <SwiperSlide 
          key={i} 
          virtualIndex={i} 
          className="w-full h-full"
          style={{ willChange: "transform" }}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}