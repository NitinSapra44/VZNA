"use client";
import { useRef, useEffect, useMemo, useCallback, useState } from "react";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const touchRef = useRef({
    startY: 0,
    startTime: 0,
    lastY: 0,
    lastTime: 0,
    lastVelocity: 0,
    startTranslate: 0,
  });

  const slides = useMemo(() => children, [children]);
  const slideCount = slides.length;

  // Get container height
  const getHeight = useCallback(() => {
    return containerRef.current?.clientHeight || window.innerHeight;
  }, []);

  // Handle touch start
  const handleTouchStart = useCallback(
    (e) => {
      if (isDrawerOpen) return;

      const touch = e.touches[0];
      const height = getHeight();

      touchRef.current = {
        startY: touch.clientY,
        startTime: Date.now(),
        lastY: touch.clientY,
        lastTime: Date.now(),
        lastVelocity: 0,
        startTranslate: -currentIndex * height,
      };

      setIsDragging(true);
    },
    [currentIndex, isDrawerOpen, getHeight]
  );

  // Handle touch move
  const handleTouchMove = useCallback(
    (e) => {
      if (isDrawerOpen || !isDragging) return;

      const touch = e.touches[0];
      const now = Date.now();
      const deltaY = touch.clientY - touchRef.current.startY;
      const dt = now - touchRef.current.lastTime;

      // Calculate velocity
      if (dt > 0) {
        touchRef.current.lastVelocity =
          (touch.clientY - touchRef.current.lastY) / dt;
      }

      touchRef.current.lastY = touch.clientY;
      touchRef.current.lastTime = now;

      // Calculate new translate with resistance at edges
      let newTranslate = touchRef.current.startTranslate + deltaY;
      const height = getHeight();
      const minTranslate = -(slideCount - 1) * height;
      const maxTranslate = 0;

      // Apply resistance at edges
      if (newTranslate > maxTranslate) {
        newTranslate = maxTranslate + (newTranslate - maxTranslate) * 0.3;
      } else if (newTranslate < minTranslate) {
        newTranslate = minTranslate + (newTranslate - minTranslate) * 0.3;
      }

      setTranslateY(newTranslate);
    },
    [isDragging, isDrawerOpen, slideCount, getHeight]
  );

  // Handle touch end
  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);

    const height = getHeight();
    const velocity = touchRef.current.lastVelocity;
    const totalDistance =
      touchRef.current.lastY - touchRef.current.startY;
    const totalTime = Date.now() - touchRef.current.startTime;

    const absVelocity = Math.abs(velocity);
    const absDistance = Math.abs(totalDistance);

    // Determine direction: negative distance = swipe up = next
    const direction = totalDistance < 0 ? 1 : -1;

    let newIndex = currentIndex;

    // CASE 1: Fast flick (short swipe)
    if (totalTime < 300 && absVelocity > 0.3) {
      newIndex = currentIndex + direction;
    }
    // CASE 2: Passed 50% threshold
    else if (absDistance > height * 0.5) {
      newIndex = currentIndex + direction;
    }
    // CASE 3: Long drag + flick at end (TikTok style)
    else if (totalTime >= 300 && absVelocity > 0.5) {
      newIndex = currentIndex + direction;
    }

    // Clamp index
    newIndex = Math.max(0, Math.min(slideCount - 1, newIndex));

    setCurrentIndex(newIndex);
    setTranslateY(-newIndex * height);
  }, [isDragging, currentIndex, slideCount, getHeight]);

  // Mouse wheel support
  const handleWheel = useCallback(
    (e) => {
      if (isDrawerOpen || isDragging) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(slideCount - 1, currentIndex + direction)
      );

      if (newIndex !== currentIndex) {
        const height = getHeight();
        setCurrentIndex(newIndex);
        setTranslateY(-newIndex * height);
      }
    },
    [currentIndex, slideCount, isDrawerOpen, isDragging, getHeight]
  );

  // Update translateY on resize
  useEffect(() => {
    const handleResize = () => {
      const height = getHeight();
      setTranslateY(-currentIndex * height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, getHeight]);

  // Debounced wheel handler
  const wheelTimeoutRef = useRef(null);
  const handleDebouncedWheel = useCallback(
    (e) => {
      if (wheelTimeoutRef.current) return;

      handleWheel(e);

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 200);
    },
    [handleWheel]
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden"
      style={{ touchAction: "none" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onWheel={handleDebouncedWheel}
    >
      <div
        className="w-full"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
          willChange: "transform",
        }}
      >
        {slides.map((child, i) => (
          <div
            key={i}
            className="w-full"
            style={{ height: "100vh" }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}