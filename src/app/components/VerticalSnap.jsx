"use client";
import { useEffect, useRef, useState } from "react";

// Mock store for demo - replace with your actual store
const useAppStore = (selector) => {
  const [scrollRef, setScrollRef] = useState(null);
  return selector({ setScrollRef });
};

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const setScrollRef = useAppStore((state) => state.setScrollRef);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const touchStartY = useRef(0);
  const currentPage = useRef(0);
  const wheelAccumulator = useRef(0);
  const wheelTimeout = useRef(null);

  useEffect(() => {
    setScrollRef(ref.current);
  }, [setScrollRef]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const pageHeight = () => window.innerHeight;

    const scrollToPage = (pageIndex) => {
      if (pageIndex < 0 || pageIndex >= children.length) return;

      isScrolling.current = true;
      currentPage.current = pageIndex;

      container.scrollTo({
        top: pageIndex * pageHeight(),
        behavior: "smooth",
      });

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    // Wheel event handler
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      // Accumulate wheel delta
      wheelAccumulator.current += e.deltaY;

      // Clear previous timeout
      clearTimeout(wheelTimeout.current);

      // Set timeout to trigger scroll
      wheelTimeout.current = setTimeout(() => {
        if (Math.abs(wheelAccumulator.current) > 60) { // Adjusted threshold
          const direction = wheelAccumulator.current > 0 ? 1 : -1;
          const targetPage = currentPage.current + direction;
          wheelAccumulator.current = 0;

          scrollToPage(targetPage);
        } else {
          wheelAccumulator.current = 0;
        }
      }, 100); // Adjusted timeout
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        "button, a, input, textarea, select, [role='button']"
      );

      if (isInteractive) return;

      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        "button, a, input, textarea, select, [role='button']"
      );

      if (isInteractive || touchStartY.current === 0) {
        touchStartY.current = 0;
        return;
      }

      if (isScrolling.current) {
        touchStartY.current = 0;
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      const threshold = 100; // Increased threshold to prevent accidental scrolls

      // Handle swipe direction
      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 1 : -1; // Swipe up = +1, Swipe down = -1
        const targetPage = currentPage.current + direction;

        scrollToPage(targetPage);
      } else {
        scrollToPage(currentPage.current);
      }
      touchStartY.current = 0;
    };

    const handleTouchMove = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        "button, a, input, textarea, select, [role='button']"
      );

      if (isInteractive || touchStartY.current === 0) return;

      e.preventDefault(); // Prevent rubber-band effect
    };

    // Manual scroll syncing
    const handleScroll = () => {
      if (isScrolling.current) return;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const nearestPage = Math.round(scrollTop / pageHeight());

        if (nearestPage !== currentPage.current) {
          scrollToPage(nearestPage);
        }
      }, 150); // Adjusted delay
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Remove event listeners
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scroll", handleScroll);

      clearTimeout(scrollTimeout.current);
      clearTimeout(wheelTimeout.current);
    };
  }, [children.length]);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-scroll no-scrollbar"
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children.map((child, i) => (
        <div key={i} className="h-full w-full flex-shrink-0">
          {child}
        </div>
      ))}
    </div>
  );
}
