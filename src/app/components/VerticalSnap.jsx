"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

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
      modules={[Mousewheel]}
      slidesPerView={1}

      // TIKTOK-LIKE SETTINGS
      speed={300} // Smooth transition like TikTok

      // NO LOOP - TikTok doesn't loop back
      loop={false}

      // MOUSEWHEEL SUPPORT
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: false,
      }}

      // TOUCH RESPONSE
      touchStartPreventDefault={false}
      touchStartForcePreventDefault={false}
      preventInteractionOnTransition={true} // Prevent multiple swipes during transition

      // SWIPE THRESHOLD - Like TikTok (needs ~50% swipe or velocity)
      threshold={5} // Small initial threshold to start tracking
      longSwipesRatio={0.5} // Need 50% swipe to trigger
      longSwipesMs={300} // Time window for swipe
      shortSwipes={true} // Allow fast swipes

      // FOLLOW FINGER SMOOTHLY
      followFinger={true}
      touchRatio={1} // 1:1 touch movement
      touchAngle={45} // Vertical swipe detection

      // RESISTANCE AT EDGES (like TikTok)
      resistance={true}
      resistanceRatio={0.85} // Strong resistance at boundaries

      allowTouchMove={!isDrawerOpen}

      // PERFORMANCE
      watchSlidesProgress={true}
      watchOverflow={true}

      onSwiper={handleSwiper}

      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {slides.map((child, i) => (
        <SwiperSlide
          key={i}
          className="w-full h-full"
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}