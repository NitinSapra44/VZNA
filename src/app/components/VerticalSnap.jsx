"use client";
import { useEffect, useRef } from "react";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const containerRef = useRef(null);
  const pageIndex = useRef(0);
  const scrollLocked = useRef(false);
  const touchStartY = useRef(0);
  const scrollTimeout = useRef(null);

  const PAGE_COUNT = children.length;
  const PAGE_HEIGHT = () => window.innerHeight;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset scroll lock when drawer state changes
    if (!isDrawerOpen) {
      scrollLocked.current = false;
      // Maintain current scroll position when drawer closes
      const currentScroll = container.scrollTop;
      const currentPage = Math.round(currentScroll / PAGE_HEIGHT());
      pageIndex.current = currentPage;
    }

    const scrollToPage = (index, instant = false) => {
      if (isDrawerOpen) return; // Don't scroll if drawer is open
      if (scrollLocked.current && !instant) return;

      scrollLocked.current = true;
      pageIndex.current = index;

      container.scrollTo({
        top: index * PAGE_HEIGHT(),
        behavior: instant ? "instant" : "smooth",
      });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrollLocked.current = false;
      }, 600);
    };

    const handleScrollEnd = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = null;
      }

      if (isDrawerOpen) return;

      const target = pageIndex.current * PAGE_HEIGHT();
      const diff = Math.abs(container.scrollTop - target);

      if (diff > 1) {
        scrollLocked.current = false;
        container.scrollTo({ top: target });
      } else {
        scrollLocked.current = false;
      }
    };

    container.addEventListener("scrollend", handleScrollEnd);

    /* ------------------------
        DESKTOP WHEEL
    ------------------------ */
    let wheelTimeout = null;

    const handleWheel = (e) => {
      if (isDrawerOpen) return; // Disable scrolling during drawer open

      e.preventDefault();

      if (wheelTimeout) clearTimeout(wheelTimeout);

      if (scrollLocked.current) {
        wheelTimeout = setTimeout(() => {
          if (!scrollLocked.current) {
            processWheelScroll(e.deltaY);
          }
        }, 50);
        return;
      }

      processWheelScroll(e.deltaY);
    };

    const processWheelScroll = (deltaY) => {
      const direction = deltaY > 0 ? 1 : -1;
      let next = pageIndex.current + direction;

      // INFINITE LOOP
      if (next < 0) next = PAGE_COUNT - 1;
      if (next >= PAGE_COUNT) next = 0;

      scrollToPage(next);
    };

    /* ------------------------
        MOBILE TOUCH
    ------------------------ */
    const handleTouchStart = (e) => {
      if (isDrawerOpen) return; // No swipe start if drawer open

      const isInteractive = e.target.closest(
        "button, a, input, textarea, select, [role='button']"
      );
      if (isInteractive) return;

      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (scrollLocked.current || isDrawerOpen) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (isDrawerOpen) return; // No swipe if drawer open
      if (scrollLocked.current) return;

      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;

      if (Math.abs(diff) < 50) {
        scrollToPage(pageIndex.current);
        return;
      }

      const direction = diff > 0 ? 1 : -1;
      let next = pageIndex.current + direction;

      // INFINITE LOOP
      if (next < 0) next = PAGE_COUNT - 1;
      if (next >= PAGE_COUNT) next = 0;

      scrollToPage(next);
    };

    /* ------------------------
        SCROLL CORRECTION
    ------------------------ */
    const handleScroll = () => {
      if (isDrawerOpen) return; // Auto-snap OFF when drawer open
      if (scrollLocked.current) return;

      const target = pageIndex.current * PAGE_HEIGHT();
      const current = container.scrollTop;
      const diff = Math.abs(current - target);

      // Only correct if significantly off-target and drawer is closed
      if (diff > 10 && !isDrawerOpen) {
        container.scrollTo({ top: target, behavior: "instant" });
      }
    };

    /* ------------------------
        EVENT LISTENERS
    ------------------------ */
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize to current scroll position instead of forcing to 0
    const initialScroll = container.scrollTop;
    const initialPage = Math.round(initialScroll / PAGE_HEIGHT());
    pageIndex.current = initialPage;

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scrollend", handleScrollEnd);
      container.removeEventListener("scroll", handleScroll);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [PAGE_COUNT, isDrawerOpen]);

  return (
    <div
      ref={containerRef}
      className="h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children.map((child, index) => (
        <div key={index} className="h-[100svh] w-full snap-start">
          {child}
        </div>
      ))}
    </div>
  );
}