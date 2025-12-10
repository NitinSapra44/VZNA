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
        min-h-[100dvh]
        ${mounted ? "overflow-hidden bg-white" : ""}
        relative
      `}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
    </div>
  );
}