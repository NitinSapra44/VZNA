"use client";

export default function MenuTile({ item }) {
  return (
    <div className="relative w-full h-full">
      {/* Background - This is what swipes */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image_url})` }}
      />
    </div>
  );
}
