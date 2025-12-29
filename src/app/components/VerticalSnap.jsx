"use client";

import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const slides = useMemo(() => children, [children]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Enable / disable swiper when drawer opens
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

  // TikTok-style snap logic
  const handleSlideChange = useCallback((swiper) => {
    const swipeDistance = swiper.touches.diff;

    // Fast swipe → instant snap (no animation)
    if (Math.abs(swipeDistance) > 60) {
      swiper.setTransition(0);
    } else {
      // Slow swipe → smooth snap
      swiper.setTransition(180);
    }

    setActiveIndex(swiper.activeIndex);
  }, []);

  return (
    <Swiper
      direction="vertical"
      modules={[Virtual, Mousewheel]}
      slidesPerView={1}

      /* TikTok snap speed */
      speed={180}

      /* IMPORTANT: no follow animation while dragging */
      followFinger={false}

      /* Strong commit swipe */
      threshold={25}
      longSwipesRatio={0.15}
      longSwipesMs={150}
      shortSwipes={true}

      /* No rubber-band */
      resistance={false}

      /* Mouse wheel for desktop */
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
      }}

      /* Virtual slides for performance */
      virtual={{
        enabled: true,
        addSlidesBefore: 1,
        addSlidesAfter: 1,
      }}

      /* Prevent conflicts */
      preventInteractionOnTransition={true}
      touchStartPreventDefault={true}
      passiveListeners={false}

      /* Lock when drawer open */
      allowTouchMove={!isDrawerOpen}

      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}

      className="w-full h-full"
      style={{
        width: "100%",
        height: "100vh",
        touchAction: "pan-y",
      }}
    >
      {slides.map((child, i) => (
        <SwiperSlide
          key={i}
          virtualIndex={i}
          className="w-full h-full"
        >
          {/* Fullscreen slide — no scaling, no opacity tricks */}
          <div className="w-full h-full">
            {child}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
