"use client";

export default function AppViewport({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <div className="mx-auto max-w-[560px] w-full h-full relative">
        {children}
      </div>
    </div>
  );
}