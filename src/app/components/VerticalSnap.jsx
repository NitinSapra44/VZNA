"use client";
import { useEffect, useRef } from "react";
import { useAppStore } from "@/store/appStore";

export default function VerticalSnap({ children }) {
  const ref = useRef(null);
  const setScrollRef = useAppStore(state => state.setScrollRef);

  useEffect(() => {
    setScrollRef(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
    >
      {children.map((child, i) => (
        <div key={i} className="snap-start h-full">
          {child}
        </div>
      ))}
    </div>
  );
}
