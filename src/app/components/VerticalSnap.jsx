"use client";
import { useEffect, useRef } from "react";

// Mock store for demo - replace with your actual store
const useAppStore = (selector) => {
  const [scrollRef, setScrollRef] = (function () {
    // tiny mock hook for demo only
    let ref = null;
    return [ref, (v) => (ref = v)];
  })();
  return selector({ setScrollRef });
};

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const setScrollRef = useAppStore((state) => state.setScrollRef);
  const isScrolling = useRef(false); // lock while animating
  const scrollTimeout = useRef(null);
  const touchStartY = useRef(0);
  const currentPage = useRef(0);
  const lastWheelAt = useRef(0);

  useEffect(() => {
    setScrollRef && setScrollRef(ref.current);
  }, [setScrollRef]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const pageHeight = () => window.innerHeight;
    const maxPage = Math.max(0, children.length - 1);

    // call to scroll to page index, clamps and sets lock
    const scrollToPage = (pageIndex) => {
      const target = Math.max(0, Math.min(maxPage, pageIndex));
      if (target === currentPage.current) {
        // still align perfectly
        container.scrollTo({ top: target * pageHeight(), behavior: "smooth" });
        return;
      }

      currentPage.current = target;
      isScrolling.current = true;

      container.scrollTo({
        top: target * pageHeight(),
        behavior: "smooth",
      });

      // Keep lock slightly longer than CSS smoothness to avoid interruption.
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 600); // tweak this (ms) for your preferred lock duration
    };

    // Initialize currentPage from current scroll position (useful on refresh)
    const initPageFromScroll = () => {
      const nearest = Math.round(container.scrollTop / pageHeight());
      currentPage.current = Math.max(0, Math.min(maxPage, nearest));
      // snap immediately (no animation) to avoid fractional positions
      container.scrollTo({ top: currentPage.current * pageHeight(), behavior: "auto" });
    };
    initPageFromScroll();

    // Wheel handler: use direction + short throttle
    const handleWheel = (e) => {
      // Prevent default so native scroll doesn't fight us
      e.preventDefault();

      // If locked, ignore
      if (isScrolling.current) return;

      const now = Date.now();
      const throttleMs = 200; // disallow repeated wheel actions within this window
      if (now - lastWheelAt.current < throttleMs) {
        return;
      }
      lastWheelAt.current = now;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 5) return; // tiny wheel movement ignore

      const direction = deltaY > 0 ? 1 : -1;
      scrollToPage(currentPage.current + direction);
    };

    // touch handlers (kept mostly as you had)
    const handleTouchStart = (e) => {
      const target = e.target;
      const isInteractive = target.closest &&
        target.closest("button, a, input, textarea, select, [role='button']");
      if (isInteractive) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const target = e.target;
      const isInteractive = target.closest &&
        target.closest("button, a, input, textarea, select, [role='button']");
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
      const threshold = 80; // swipe threshold (tweak as desired)

      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 1 : -1;
        scrollToPage(currentPage.current + direction);
      } else {
        // small swipe -> snap back to current
        scrollToPage(currentPage.current);
      }
      touchStartY.current = 0;
    };

    const handleTouchMove = (e) => {
      const target = e.target;
      const isInteractive = target.closest &&
        target.closest("button, a, input, textarea, select, [role='button']");
      if (isInteractive || touchStartY.current === 0) return;
      // prevent rubber-band on iOS
      e.preventDefault();
    };

    // sync on manual scroll (e.g., keyboard or programmatic)
    const handleScroll = () => {
      if (isScrolling.current) return;
      // debounce to avoid too many recalcs
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const nearest = Math.round(scrollTop / pageHeight());
        if (nearest !== currentPage.current) {
          scrollToPage(nearest);
        }
      }, 120);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scroll", handleScroll);

      clearTimeout(scrollTimeout.current);
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
        // Optional: enable CSS scroll-snap for even stronger native snapping.
        // Uncomment to try CSS snapping — it's often smoother and more reliable.
        // scrollSnapType: "y mandatory",
      }}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className="h-full w-full flex-shrink-0"
          style={{
            // If you enable scroll-snap on container, enable this on items:
            // scrollSnapAlign: "start",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}