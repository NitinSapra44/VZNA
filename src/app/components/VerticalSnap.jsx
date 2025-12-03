"use client";
import { useEffect, useRef } from "react";

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const currentPage = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const PAGE_COUNT = children.length;
    const SNAP_DELAY = 700; // lock time while snapping
    const THRESHOLD = 40;   // swipe movement threshold

    /* ----------------------- WHEEL (Desktop) ----------------------- */
    const handleWheel = (e) => {
      e.preventDefault();

      const now = Date.now();
      if (isScrolling.current || now - lastScrollTime.current < SNAP_DELAY) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextPage = currentPage.current + direction;

      if (nextPage < 0 || nextPage >= PAGE_COUNT) return;

      isScrolling.current = true;
      lastScrollTime.current = now;
      currentPage.current = nextPage;

      container.scrollTo({
        top: window.innerHeight * currentPage.current,
        behavior: "smooth",
      });

      setTimeout(() => (isScrolling.current = false), SNAP_DELAY);
    };

    /* ----------------------- TOUCH (Mobile) ----------------------- */
    const handleTouchStart = (e) => {
      const isInteractive = e.target.closest(
        "button, a, input, textarea, select, [role='button']"
      );
      if (isInteractive) return;

      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const isInteractive = e.target.closest(
        "button, a, input, textarea, select, [role='button']"
      );
      if (isInteractive) return;

      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;

      if (Math.abs(diff) < THRESHOLD) {
        // Not a real swipe → return to current slide
        container.scrollTo({
          top: window.innerHeight * currentPage.current,
          behavior: "smooth",
        });
        return;
      }

      if (isScrolling.current) return;

      const direction = diff > 0 ? 1 : -1;
      const nextPage = currentPage.current + direction;

      if (nextPage < 0 || nextPage >= PAGE_COUNT) {
        // Out of range → snap back
        container.scrollTo({
          top: window.innerHeight * currentPage.current,
          behavior: "smooth",
        });
        return;
      }

      isScrolling.current = true;
      lastScrollTime.current = Date.now();
      currentPage.current = nextPage;

      container.scrollTo({
        top: window.innerHeight * currentPage.current,
        behavior: "smooth",
      });

      setTimeout(() => (isScrolling.current = false), SNAP_DELAY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [children.length]);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        overscrollBehavior: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children.map((child, i) => (
        <div key={i} className="snap-start h-screen w-full">
          {child}
        </div>
      ))}
    </div>
  );
}
