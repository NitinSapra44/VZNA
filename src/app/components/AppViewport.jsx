"use client";

export default function AppViewport({ children }) {
  return (
    <>
      {/* Background image that extends behind Dynamic Island */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/placeholder_01_1080x1920.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      
      {/* Main content container */}
      <div
        className="flex items-center justify-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <div className="max-w-[560px] w-full h-full relative">
          {children}
        </div>
      </div>
    </>
  );
}