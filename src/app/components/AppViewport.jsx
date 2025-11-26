export default function AppViewport({ children }) {
  return (
    <div
      className="
        mx-auto
        max-w-[560px]
        w-full
        h-dvh
        overflow-hidden
        bg-black
        relative
      "
    >
      {children}
    </div>
  );
}
