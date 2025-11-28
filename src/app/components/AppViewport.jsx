"use client";
import { useState, useEffect } from "react";

export default function AppViewport({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className={`
        mx-auto
        max-w-[560px]
        w-full
        ${mounted ? "h-full overflow-hidden bg-white" : "h-auto"}
        relative
      `}
    >
      {children}
    </div>
  );
}
