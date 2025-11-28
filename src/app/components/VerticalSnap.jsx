// src/app/components/VerticalSnap.jsx
"use client";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/store/appStore";

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const setScrollRef = useAppStore(state => state.setScrollRef);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    setScrollRef(ref.current);
  }, [setScrollRef]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Handle wheel events (desktop)
    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      // Prevent multiple scrolls within 800ms
      if (now - lastScrollTime.current < 800) return;
      if (isScrolling.current) return;
      
      const currentScroll = container.scrollTop;
      const itemHeight = window.innerHeight;
      const currentIndex = Math.round(currentScroll / itemHeight);
      
      if (e.deltaY > 30 && currentIndex < children.length - 1) {
        // Scroll down
        lastScrollTime.current = now;
        isScrolling.current = true;
        container.scrollTo({
          top: (currentIndex + 1) * itemHeight,
          behavior: 'smooth'
        });
        setTimeout(() => { isScrolling.current = false; }, 800);
      } else if (e.deltaY < -30 && currentIndex > 0) {
        // Scroll up
        lastScrollTime.current = now;
        isScrolling.current = true;
        container.scrollTo({
          top: (currentIndex - 1) * itemHeight,
          behavior: 'smooth'
        });
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };

    // Handle touch events (mobile)
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        const currentScroll = container.scrollTop;
        const itemHeight = window.innerHeight;
        const currentIndex = Math.round(currentScroll / itemHeight);
        
        lastScrollTime.current = now;
        isScrolling.current = true;
        
        if (diff > 0 && currentIndex < children.length - 1) {
          // Swipe up - go to next
          container.scrollTo({
            top: (currentIndex + 1) * itemHeight,
            behavior: 'smooth'
          });
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe down - go to previous
          container.scrollTo({
            top: (currentIndex - 1) * itemHeight,
            behavior: 'smooth'
          });
        }
        
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [children.length, setScrollRef]);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
    >
      {children.map((child, i) => (
        <div key={i} className="snap-start h-full w-full">
          {child}
        </div>
      ))}
    </div>
  );
}