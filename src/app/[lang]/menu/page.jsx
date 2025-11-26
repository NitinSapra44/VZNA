"use client"
import { useParams } from "next/navigation"
import { useAppStore } from "@/store/appStore"
import AppViewport from "@/app/components/AppViewport"
import VerticalSnap from "@/app/components/VerticalSnap"
import CategoryView from "@/app/components/CategoryView"
import MenuTile from "@/app/components/MenuTile"
import CategoryPanel from "@/app/components/CategoryPanel"
import useMenuData from "@/hooks/useMenuData"

export default function MenuPage() {
  const params = useParams()
  const lang = params.lang // "en" or "de"

  const mode = useAppStore(state => state.mode)
  const { categories, items } = useMenuData(lang) // 👈 pass lang to fetch correct DB items

  return (
    <AppViewport>
      <CategoryPanel categories={categories} />
      
      {mode === "all" && (
        <VerticalSnap>
          {items.map((item, i) => (
            <MenuTile key={item.id} item={item} index={i} />
          ))}
        </VerticalSnap>
      )}

      {mode === "category" && <CategoryView items={items} />}

      {mode === "product" && (
        <VerticalSnap>
          {items.map((item, i) => (
            <MenuTile key={item.id} item={item} index={i} />
          ))}
        </VerticalSnap>
      )}
    </AppViewport>
  )
}
