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
      swiperRef.current.allowTouchMove = false;
    } else {
      swiperRef.current.enable();
      swiperRef.current.allowTouchMove = true;
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
      
      // SNAPPIER SPEED - TikTok uses ~300ms with aggressive easing
      speed={300}
      
      // CSS easing for that "snap" feel - aggressive ease-out
      cssMode={false}
      
      loop={true}
      loopAdditionalSlides={1}
      loopPreventsSliding={false}
      
      virtual={{
        enabled: true,
        addSlidesBefore: 2,
        addSlidesAfter: 2,
        cache: true, // Enable cache for smoother transitions
      }}
      
      // TOUCH SETTINGS - More responsive like TikTok
      touchRatio={1.5} // Increased - more responsive to finger movement
      touchAngle={60} // Wider angle tolerance for vertical swipes
      threshold={5} // Slightly higher to prevent accidental swipes
      
      // SWIPE DETECTION - Key for TikTok feel
      longSwipesRatio={0.1} // Lower = easier to trigger full swipe
      longSwipesMs={100} // Faster detection
      shortSwipes={true}
      
      followFinger={true}
      allowTouchMove={!isDrawerOpen}
      simulateTouch={true}
      touchStartPreventDefault={false}
      passiveListeners={true}
      
      // RESISTANCE - Bouncy edge feel
      resistance={true}
      resistanceRatio={0.65} // Lower = more resistance at edges (bouncier)
      
      // MOMENTUM - Important for snap feel
      freeMode={false}
      
      // EDGE SWIPE
      edgeSwipeDetection={true}
      edgeSwipeThreshold={20}
      
      updateOnWindowResize={false}
      onSwiper={handleSwiper}
      
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
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