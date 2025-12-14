"use client";

export default function AppViewport({ children }) {
  return (
    <div
      className="mx-auto max-w-[560px] w-full relative overflow-hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}