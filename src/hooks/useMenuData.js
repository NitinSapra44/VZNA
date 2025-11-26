import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function useMenuData() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const { data: cat } = await supabase
        .from("categories")
        .select("*")
        .order("order_index");

      const { data: menu } = await supabase
        .from("menu_items")
        .select("*")
        .order("order_index");

      setCategories(cat);
      setItems(menu);
    }

    load();
  }, []);

  return { categories, items };
}
