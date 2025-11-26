"use client";
import { useAppStore } from "../../store/appStore";

export default function CategoryPanel({ categories }) {
  const setMode = useAppStore((state) => state.setMode);
  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory);

  if (!categories || categories.length === 0) return null;

  return (
    <div className="absolute top-4 right-4 z-30 bg-white rounded-2xl p-4 shadow-lg w-56">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            setMode("category");
            setSelectedCategory(cat.id);
          }}
          className="flex w-full items-center justify-between py-2 text-left text-base font-medium border-b border-gray-200 last:border-b-0"
        >
          <span className="text-black">{cat.name_en}</span>
          <span className="opacity-60 text-lg">›</span>
        </button>
      ))}
    </div>
  );
}
