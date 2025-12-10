"use client";

export default function AppViewport({ children }) {
  return (
    <div
      className="mx-auto max-w-[560px] w-full relative overflow-hidden"
      style={{
        height: "100dvh",
        background: "#000",
      }}
    >
      <div
        className="h-full w-full relative"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {children}
      </div>
    </div>
  );
}