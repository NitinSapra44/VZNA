"use client";
import { useAppStore } from "@/store/appStore";

export default function MenuTile({ item, index }) {
  const { openProduct } = useAppStore();

  return (
    <div className="relative h-screen w-full snap-center">
      {/* Background Image */}
      <img
        src={item.image_url}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-2xl font-bold">{item.title_de}</h1>
        <p className="opacity-70">
          ab {item.price_small ?? item.price_big}.– Fr.
        </p>
      </div>

      {/* Bottom-right button */}
      <button
        onClick={() => openProduct(index)}
        className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-md"
      >
        Info +
      </button>
    </div>
  );
}
