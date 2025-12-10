"use client";

export default function AppViewport({ children }) {
  return (
    <div
      className="mx-auto max-w-[560px] w-full relative overflow-hidden"
      style={{
        height: "100vh",
        height: "100dvh",
        minHeight: "-webkit-fill-available",
        background: "#000",
      }}
    >
      <div
        className="h-full w-full relative"
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}