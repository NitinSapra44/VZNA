"use client";
import { useState, useEffect } from "react";
import AppViewport from "@/app/components/AppViewport";
import VerticalSnap from "@/app/components/VerticalSnap";
import MenuTile from "@/app/components/MenuTile";
import MenuDropdown from "@/app/components/MenuDropdown";
import ProductDetail from "@/app/components/ProductDetail";
import { menuData } from "@/data/menuData";


/* ---------------------------------------------
   SORTING LOGIC (GLOBAL + REUSABLE)
---------------------------------------------- */
function sortItems(a, b) {
  const catA = menuData.categories.find(c => c.id === a.category_id);
  const catB = menuData.categories.find(c => c.id === b.category_id);

  // Sort by category order_index
  if (catA.order_index !== catB.order_index) {
    return catA.order_index - catB.order_index;
  }

  // If both have subcategories, sort them
  if (a.subcategory_id && b.subcategory_id) {
    const subA = catA.subcategories?.find(s => s.id === a.subcategory_id);
    const subB = catB.subcategories?.find(s => s.id === b.subcategory_id);

    if (subA?.order_index !== subB?.order_index) {
      return subA.order_index - subB.order_index;
    }
  }

  // Sort by item order within group
  return a.order_index - b.order_index;
}


export default function MenuPage() {
  const lang = "en";  
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sort categories once (no accidental mutation)
  const categories = [...menuData.categories].sort(
    (a, b) => a.order_index - b.order_index
  );

  useEffect(() => {
    // Load all sorted items initially
    const sorted = [...menuData.items].sort(sortItems);
    setCurrentItems(sorted);
  }, []);

  /* ---------------------------------------------
     FILTER HANDLERS
  ---------------------------------------------- */
  const handleShowAll = () => {
    setCurrentItems([...menuData.items].sort(sortItems));
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setShowSubcategories(false);
    setMenuOpen(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);

    if (category.has_subcategories && category.subcategories) {
      setShowSubcategories(true);
    } else {
      const filtered = menuData.items
        .filter(i => i.category_id === category.id)
        .sort(sortItems);

      setCurrentItems(filtered);
      setMenuOpen(false);
      setShowSubcategories(false);
      setSelectedSubcategory(null);
    }
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);

    const filtered = menuData.items
      .filter(i => 
        i.category_id === selectedCategory.id &&
        i.subcategory_id === subcategory.id
      )
      .sort(sortItems);

    setCurrentItems(filtered);
    setMenuOpen(false);
    setShowSubcategories(false);
  };

  const handleBackToCategories = () => {
    setShowSubcategories(false);
    setSelectedSubcategory(null);
  };

  const handleOpenProduct = (index) => {
    setSelectedItem(currentItems[index]);
  };

  /* ---------------------------------------------
     UI COMPONENT
  ---------------------------------------------- */

  return (
    <AppViewport>
      <div className="relative h-full w-full">

        {/* Dropdown navigation */}
        <MenuDropdown
          isOpen={menuOpen}
          onToggle={() => setMenuOpen(!menuOpen)}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onSelectSubcategory={handleSelectSubcategory}
          onBack={handleBackToCategories}
          onShowAll={handleShowAll}
          language={lang}
          showSubcategories={showSubcategories}
        />

        {/* Items View */}
        {currentItems.length > 0 ? (
          <VerticalSnap>
            {currentItems.map((item, index) => (
              <MenuTile
                key={item.id}
                item={item}
                index={index}
                language={lang}
                onOpenProduct={handleOpenProduct}
              />
            ))}
          </VerticalSnap>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-2">
                {lang === "de" ? "Wähle eine Kategorie" : "Select a category"}
              </h2>
              <p className="text-gray-600">
                {lang === "de"
                  ? "Öffne das Menü oben rechts, um zu beginnen"
                  : "Use the menu in the top right to start"}
              </p>
            </div>
          </div>
        )}

        {/* Product Popup */}
        {selectedItem && (
          <ProductDetail
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            language={lang}
          />
        )}
      </div>
    </AppViewport>
  );
}
