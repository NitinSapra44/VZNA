"use client";
import { useState, useEffect, useRef } from "react";
import AppViewport from "@/app/components/AppViewport";
import VerticalSnapEaseIn from "@/app/components/VerticalSnapEaseIn";
import MenuTile from "@/app/components/MenuTile";
import MenuDropdown from "@/app/components/MenuDropdown";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { menuData } from "@/data/menuData";

/* ---------------------------------------------
   SORTING LOGIC (GLOBAL + REUSABLE)
---------------------------------------------- */
function sortItems(a, b) {
  const catA = menuData.categories.find(c => c.id === a.category_id);
  const catB = menuData.categories.find(c => c.id === b.category_id);

  if (catA.order_index !== catB.order_index) {
    return catA.order_index - catB.order_index;
  }

  if (a.subcategory_id && b.subcategory_id) {
    const subA = catA.subcategories?.find(s => s.id === a.subcategory_id);
    const subB = catB.subcategories?.find(s => s.id === b.subcategory_id);

    if (subA?.order_index !== subB?.order_index) {
      return subA.order_index - subB.order_index;
    }
  }

  return a.order_index - b.order_index;
}

export default function MenuPage() {
  const lang = "de";  

  const verticalSnapRef = useRef(null);   // ✅ IMPORTANT

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  // Track if drawer is open → disable VerticalSnap scroll
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categories = [...menuData.categories].sort(
    (a, b) => a.order_index - b.order_index
  );

  useEffect(() => {
    const sorted = [...menuData.items].sort(sortItems);
    setCurrentItems(sorted);
  }, []);

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

  return (
    <ErrorBoundary>
    <AppViewport>
      <div className="relative h-full w-full">

        {/* Fixed Logo */}
        <div className="absolute top-6 left-6 z-50 pointer-events-none">
          <img
            src="/logo.svg"
            alt="Restaurant Logo"
            className="h-16 w-auto drop-shadow-lg border-b-2 border-white pb-3"
          />
          <p className="text-white text-xl">Dübendorf</p>
        </div>
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
          <VerticalSnapEaseIn ref={verticalSnapRef} isDrawerOpen={drawerOpen}>
            {currentItems.map((item, index) => (
              <MenuTile
                key={item.id}
                item={item}
                index={index}
                language={lang}
                onDrawerToggle={setDrawerOpen}
                verticalSnapRef={verticalSnapRef}   // ✅ SEND REF HERE
              />
            ))}
          </VerticalSnapEaseIn>
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
      </div>
    </AppViewport>
  </ErrorBoundary>
  );
}
