"use client";
import { useEffect, useRef } from "react";

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const isLocked = useRef(false);
  const currentPage = useRef(0);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const PAGE_COUNT = children.length;
    const THRESHOLD = 40;

    /* -----------------------------------------
       SCROLL END → unlock ONLY when animation ends
    ------------------------------------------- */
    const unlockScroll = () => {
      isLocked.current = false;
    };

    container.addEventListener("scrollend", unlockScroll);

    /* -----------------------------------------
       WHEEL (Desktop)
    ------------------------------------------- */
    const handleWheel = (e) => {
      e.preventDefault();

      if (isLocked.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const next = currentPage.current + direction;

      if (next < 0 || next >= PAGE_COUNT) return;

      isLocked.current = true;
      currentPage.current = next;

      container.scrollTo({
        top: window.innerHeight * currentPage.current,
        behavior: "smooth",
      });
    };

    /* -----------------------------------------
       TOUCH (Mobile)
    ------------------------------------------- */
    let startY = 0;

    const handleTouchStart = (e) => {
      const interactive = e.target.closest(
        "button, a, input, textarea, select, [role='button']"
      );
      if (interactive) return;

      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isLocked.current) return;

      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) < THRESHOLD) {
        // Snap back
        container.scrollTo({
          top: window.innerHeight * currentPage.current,
          behavior: "smooth",
        });
        return;
      }

      const direction = diff > 0 ? 1 : -1;
      const next = currentPage.current + direction;

      if (next < 0 || next >= PAGE_COUNT) {
        container.scrollTo({
          top: window.innerHeight * currentPage.current,
          behavior: "smooth",
        });
        return;
      }

      isLocked.current = true;
      currentPage.current = next;

      container.scrollTo({
        top: window.innerHeight * currentPage.current,
        behavior: "smooth",
      });
    };

    /* -----------------------------------------
       LISTENERS
    ------------------------------------------- */
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scrollend", unlockScroll);
    };
  }, [children.length]);

  return (
    <div
      ref={ref}
      className="h-[100svh] w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children.map((child, i) => (
        <div key={i} className="snap-start w-full h-[100svh]">
          {child}
        </div>
      ))}
    </div>
  );
}
