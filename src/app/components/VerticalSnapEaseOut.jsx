"use client";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";

export default function VerticalSnapEaseOut({ children, isDrawerOpen }) {
  const swiperRef = useRef(null);
  const slides = useMemo(() => children, [children]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

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

    // Detect when user starts scrolling - use linear movement
    swiper.on('touchStart', () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Apply linear timing while user is actively scrolling
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
    });

    swiper.on('touchMove', () => {
      isScrollingRef.current = true;
      // Keep linear while finger is moving
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
    });

    // Detect when user stops scrolling - apply easing for snap
    swiper.on('touchEnd', () => {
      // Small delay to ensure we're in snap phase
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        // Apply ease-out for the final snap (fast start, slow end)
        swiper.wrapperEl.style.transitionTimingFunction = 'ease-out';
      }, 10);
    });

    // Handle mousewheel separately
    swiper.on('scroll', () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Linear during scroll
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';

      // Ease-out when scroll stops
      scrollTimeoutRef.current = setTimeout(() => {
        swiper.wrapperEl.style.transitionTimingFunction = 'ease-out';
      }, 50);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Swiper
      direction="vertical"
      modules={[Virtual, Mousewheel]}
      slidesPerView={1}

      // SMOOTH TRANSITION with easing curve
      speed={350}

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

      // SMOOTH FOLLOW - immediate response while touching
      followFinger={true}
      touchRatio={1}
      touchAngle={45}

      // RESISTANCE AT EDGES
      resistance={true}
      resistanceRatio={0.85}

      allowTouchMove={!isDrawerOpen}

      // PERFORMANCE
      watchSlidesProgress={true}
      preloadImages={false}
      lazy={true}

      onSwiper={handleSwiper}

      className="w-full h-full vertical-snap-ease-out"
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
