"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
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
    // Apply linear timing for constant-speed transitions
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
    }
  }, []);

  return (
    <Swiper
      direction="vertical"
      modules={[Virtual, Mousewheel]}
      slidesPerView={1}

      // SMOOTH TRANSITION
      speed={150}

      // VIRTUAL SLIDES FOR PERFORMANCE
      virtual={{
        enabled: true,
        addSlidesBefore: 2,
        addSlidesAfter: 2,
      }}

      // MOUSEWHEEL
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}

      // CRITICAL: PREVENT DEFAULT TO AVOID PAGE RELOAD
      touchStartPreventDefault={true}
      passiveListeners={false}

      // PREVENT INTERACTION DURING TRANSITION
      preventInteractionOnTransition={true}

      // SWIPE SETTINGS - TikTok style
      threshold={10}
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

      onSwiper={handleSwiper}

      className="w-full h-full vertical-snap-linear"
      style={{
        width: "100%",
        height: "100%",
        touchAction: "pan-y",
      }}
    >
      {slides.map((child, i) => (
        <SwiperSlide
          key={i}
          virtualIndex={i}
          className="w-full h-full"
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}