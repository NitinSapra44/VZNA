"use client";
import { useEffect, useRef, useState } from "react";

// Mock store for demo - replace with your actual store
const useAppStore = (selector) => {
  const [scrollRef, setScrollRef] = useState(null);
  return selector({ setScrollRef });
};

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const setScrollRef = useAppStore(state => state.setScrollRef);
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
        behavior: 'smooth'
      });

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    // Handle wheel events with accumulation to prevent multi-page jumps
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling.current) return;

      // Accumulate wheel delta
      wheelAccumulator.current += e.deltaY;

      // Clear previous timeout
      clearTimeout(wheelTimeout.current);

      // Set new timeout - only trigger scroll after wheel stops
      wheelTimeout.current = setTimeout(() => {
        // Determine direction from accumulated delta
        if (Math.abs(wheelAccumulator.current) > 30) {
          const direction = wheelAccumulator.current > 0 ? 1 : -1;
          const targetPage = currentPage.current + direction;
          
          // Reset accumulator
          wheelAccumulator.current = 0;
          
          // Scroll exactly one page
          scrollToPage(targetPage);
        } else {
          wheelAccumulator.current = 0;
        }
      }, 50); // Short delay to accumulate wheel events
    };

    // Handle touch events
    const handleTouchStart = (e) => {
      // Allow interaction with buttons and inputs
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]');
      
      if (isInteractive) return;
      
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]');
      
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
      const threshold = 50;

      // ALWAYS move exactly ONE page based on swipe direction
      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 1 : -1; // Swipe up = +1, Swipe down = -1
        const targetPage = currentPage.current + direction;
        
        scrollToPage(targetPage);
      } else {
        // Snap back to current page if swipe too small
        scrollToPage(currentPage.current);
      }

      touchStartY.current = 0;
    };

    // Prevent default touch move to avoid rubber band effect
    const handleTouchMove = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]');
      
      if (isInteractive || touchStartY.current === 0) return;
      
      e.preventDefault();
    };

    // Sync page number when user tries to scroll manually
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const scrollTop = container.scrollTop;
        const nearestPage = Math.round(scrollTop / pageHeight());
        
        if (nearestPage !== currentPage.current) {
          scrollToPage(nearestPage);
        }
      }, 100);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
      clearTimeout(wheelTimeout.current);
    };
  }, [children.length]);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-scroll no-scrollbar"
      style={{ 
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
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