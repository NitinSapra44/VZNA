"use client";
import { useAppStore } from "@/store/appStore";

export default function CategoryView({ items }) {
  const { category, openProduct } = useAppStore();

  const filtered = items.filter(i => i.category_id === category.id);

  return (
    <div className="bg-white p-6 h-full overflow-auto">
      {filtered.map(item => (
        <button
          key={item.id}
          onClick={() => {
            const globalIndex = items.findIndex(x => x.id === item.id);
            openProduct(globalIndex);
          }}
          className="flex justify-between py-4 border-b"
        >
          <span>{item.title_de}</span>
          <span>{item.price_small ?? item.price_big}.– Fr.</span>
        </button>
      ))}
    </div>
  );
}
