export default function TestPage() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(to bottom, red, blue)",
      }}
    >
      <p style={{ color: "white", paddingTop: "60px", paddingLeft: "20px" }}>
        If this works, the gradient should extend behind the Dynamic Island
      </p>
    </div>
  );
}