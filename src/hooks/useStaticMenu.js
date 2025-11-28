import { useState, useEffect } from "react";
import { menuData } from "@/data/menuData";

export default function useStaticMenu(lang = "en") {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Sort by order index
    const sortedItems = [...menuData.items].sort((a, b) => a.order_index - b.order_index);

    setCategories(menuData.categories);
    setItems(sortedItems);
  }, [lang]);

  return { categories, items };
}
