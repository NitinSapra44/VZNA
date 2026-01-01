"use client";
import { useRef, useEffect, useMemo, useCallback, useState } from "react";

export default function VerticalSnap({ children, isDrawerOpen }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const touchRef = useRef({
    startY: 0,
    startTime: 0,
    lastY: 0,
    lastTime: 0,
    lastVelocity: 0,
    startTranslate: 0,
  });

  const slides = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );
  const slideCount = slides.length;

  // Set container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        setContainerHeight(height);
        setTranslateY(-currentIndex * height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [currentIndex]);

  const handleTouchStart = useCallback(
    (e) => {
      if (isDrawerOpen || !containerHeight) return;

      const touch = e.touches[0];

      touchRef.current = {
        startY: touch.clientY,
        startTime: Date.now(),
        lastY: touch.clientY,
        lastTime: Date.now(),
        lastVelocity: 0,
        startTranslate: -currentIndex * containerHeight,
      };

      setIsDragging(true);
    },
    [currentIndex, isDrawerOpen, containerHeight]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isDrawerOpen || !isDragging || !containerHeight) return;

      const touch = e.touches[0];
      const now = Date.now();
      const deltaY = touch.clientY - touchRef.current.startY;
      const dt = now - touchRef.current.lastTime;

      if (dt > 0) {
        touchRef.current.lastVelocity =
          (touch.clientY - touchRef.current.lastY) / dt;
      }

      touchRef.current.lastY = touch.clientY;
      touchRef.current.lastTime = now;

      let newTranslate = touchRef.current.startTranslate + deltaY;
      const minTranslate = -(slideCount - 1) * containerHeight;
      const maxTranslate = 0;

      // Resistance at edges
      if (newTranslate > maxTranslate) {
        const over = newTranslate - maxTranslate;
        newTranslate = maxTranslate + over * 0.2;
      } else if (newTranslate < minTranslate) {
        const over = newTranslate - minTranslate;
        newTranslate = minTranslate + over * 0.2;
      }

      setTranslateY(newTranslate);
    },
    [isDragging, isDrawerOpen, slideCount, containerHeight]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging || !containerHeight) return;

    setIsDragging(false);

    const velocity = touchRef.current.lastVelocity;
    const totalDistance = touchRef.current.lastY - touchRef.current.startY;
    const totalTime = Date.now() - touchRef.current.startTime;

    const absVelocity = Math.abs(velocity);
    const absDistance = Math.abs(totalDistance);
    const direction = totalDistance < 0 ? 1 : -1;

    let newIndex = currentIndex;

    // Fast flick (< 250ms with velocity)
    if (totalTime < 250 && absVelocity > 0.2) {
      newIndex = currentIndex + direction;
    }
    // 50% threshold
    else if (absDistance > containerHeight * 0.5) {
      newIndex = currentIndex + direction;
    }
    // Long drag + flick at end
    else if (absVelocity > 0.4) {
      newIndex = currentIndex + direction;
    }

    // Clamp
    newIndex = Math.max(0, Math.min(slideCount - 1, newIndex));

    setCurrentIndex(newIndex);
    setTranslateY(-newIndex * containerHeight);
  }, [isDragging, currentIndex, slideCount, containerHeight]);

  // Mouse wheel
  const wheelLockRef = useRef(false);
  const handleWheel = useCallback(
    (e) => {
      if (isDrawerOpen || isDragging || wheelLockRef.current) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(slideCount - 1, currentIndex + direction)
      );

      if (newIndex !== currentIndex) {
        wheelLockRef.current = true;
        setCurrentIndex(newIndex);
        setTranslateY(-newIndex * containerHeight);

        setTimeout(() => {
          wheelLockRef.current = false;
        }, 400);
      }
    },
    [currentIndex, slideCount, isDrawerOpen, isDragging, containerHeight]
  );

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        touchAction: "none",
        position: "relative",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onWheel={handleWheel}
    >
      <div
        ref={wrapperRef}
        style={{
          width: "100%",
          transform: `translate3d(0, ${translateY}px, 0)`,
          transition: isDragging ? "none" : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          willChange: "transform",
        }}
      >
        {slides.map((child, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: containerHeight || "100vh",
              flexShrink: 0,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}