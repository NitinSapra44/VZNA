"use client";

export default function AppViewport({ children }) {
  return (
    <div
      className="mx-auto max-w-[560px] w-full relative overflow-hidden"
      style={{
        height: "100dvh",
      }}
    >
      {children}
    </div>
  );
}