"use client";
import { useEffect, useRef } from "react";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const containerRef = useRef(null);
  const pageIndex = useRef(0);
  const scrollLocked = useRef(false);
  const touchStartY = useRef(0);
  const isTouching = useRef(false);
  const touchStartTime = useRef(0);

  const PAGE_COUNT = children.length;
  const PAGE_HEIGHT = () => window.innerHeight;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isDrawerOpen) {
      scrollLocked.current = true;
      const freezeTop = pageIndex.current * PAGE_HEIGHT();
      container.scrollTo({ top: freezeTop, behavior: "instant" });
    } else {
      setTimeout(() => {
        scrollLocked.current = false;
        const target = pageIndex.current * PAGE_HEIGHT();
        container.scrollTo({ top: target, behavior: "instant" });
      }, 100);
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollToPage = (index, instant = false) => {
      if (scrollLocked.current) return;
      if (isDrawerOpen) return;

      scrollLocked.current = true;
      pageIndex.current = index;

      container.scrollTo({
        top: index * PAGE_HEIGHT(),
        behavior: instant ? "instant" : "smooth",
      });

      setTimeout(() => {
        scrollLocked.current = false;
      }, 200);
    };

    let wheelTimeout = null;
    const handleWheel = (e) => {
      if (isDrawerOpen) return;
      e.preventDefault();
      if (scrollLocked.current) return;

      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        let next = pageIndex.current + direction;

        if (next < 0) next = PAGE_COUNT - 1;
        if (next >= PAGE_COUNT) next = 0;

        scrollToPage(next);
      }, 10);
    };

    const handleTouchStart = (e) => {
      if (isDrawerOpen) return;
      if (scrollLocked.current) return;
      
      isTouching.current = true;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e) => {
      if (isDrawerOpen) return;
      if (scrollLocked.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (isDrawerOpen) return;
      isTouching.current = false;
      
      if (scrollLocked.current) return;

      const diff = touchStartY.current - e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime.current;
      const velocity = Math.abs(diff) / touchDuration;
      
      if (Math.abs(diff) < 20) {
        scrollToPage(pageIndex.current, false);
        return;
      }

      const direction = diff > 0 ? 1 : -1;
      let next = pageIndex.current + direction;

      if (velocity > 1.5 && Math.abs(diff) > 100) {
        const pagesToSkip = Math.min(Math.floor(velocity / 2), 2);
        next = pageIndex.current + (direction * Math.max(1, pagesToSkip));
      }

      if (next < 0) next = PAGE_COUNT - 1;
      if (next >= PAGE_COUNT) next = 0;

      scrollToPage(next, false);
    };

    let scrollTimeout = null;
    const handleScroll = () => {
      if (isDrawerOpen) return;
      if (scrollLocked.current) return;
      if (isTouching.current) return;

      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const target = pageIndex.current * PAGE_HEIGHT();
        const diff = Math.abs(container.scrollTop - target);

        if (diff > 50) {
          container.scrollTo({ top: target, behavior: "instant" });
        }
      }, 50);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scroll", handleScroll);

      if (wheelTimeout) clearTimeout(wheelTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [PAGE_COUNT, isDrawerOpen]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      style={{
        height: "100%",
        scrollSnapType: "y mandatory",
        overscrollBehavior: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children.map((child, i) => (
        <div 
          key={i} 
          className="w-full snap-start"
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}