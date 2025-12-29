"use client";
import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/effect-creative";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const slides = useMemo(() => children, [children]);
  const [activeIndex, setActiveIndex] = useState(0);

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
    setActiveIndex(swiper.activeIndex);
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  return (
    <Swiper
      direction="vertical"
      modules={[Virtual, Mousewheel, EffectCreative]}
      slidesPerView={1}

      // SMOOTH CREATIVE EFFECT
      effect="creative"
      creativeEffect={{
        prev: {
          translate: [0, "-100%", -400],
          opacity: 0.8,
        },
        next: {
          translate: [0, "100%", -400],
          opacity: 0.8,
        },
      }}

      // SMOOTH TRANSITION
      speed={400}

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
      onSlideChange={handleSlideChange}

      className="w-full h-full"
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
          style={{
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              opacity: Math.abs(i - activeIndex) <= 1 ? 1 : 0,
              transform: `scale(${i === activeIndex ? 1 : 0.95})`,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {child}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}