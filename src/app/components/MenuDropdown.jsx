"use client";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

export default function MenuDropdown({ 
  isOpen, 
  onToggle, 
  categories, 
  selectedCategory,
  selectedSubcategory,
  onSelectCategory, 
  onSelectSubcategory,
  onBack,
  onShowAll,
  language,
  showSubcategories
}) {
  // Determine what to show on the button
  const getButtonContent = () => {
    if (selectedSubcategory) {
      return (
        <>
          <ChevronLeft className="w-5 h-5" />
          {language === "de" ? selectedSubcategory.name_de : selectedSubcategory.name_en}
        </>
      );
    } else if (selectedCategory && !showSubcategories) {
      return (
        <>
          <ChevronLeft className="w-5 h-5" />
          {language === "de" ? selectedCategory.name_de : selectedCategory.name_en}
        </>
      );
    } else if (showSubcategories) {
      return (
        <>
          <ChevronLeft className="w-5 h-5" />
          {language === "de" ? selectedCategory?.name_de : selectedCategory?.name_en}
        </>
      );
    } else {
      return (
        <>
          Menü
          <ChevronRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </>
      );
    }
  };

  const handleButtonClick = () => {
    // If we have a selected subcategory, go back to all items
    if (selectedSubcategory) {
      onShowAll();
    }
    // If we have a selected category (but no subcategory), go back to all items
    else if (selectedCategory && !showSubcategories) {
      onShowAll();
    }
    // If we're showing subcategories, go back to categories
    else if (showSubcategories) {
      onBack();
    }
    // Otherwise, toggle the menu
    else {
      onToggle();
    }
  };

  return (
    <div 
  className="absolute right-4 z-40"
  style={{ 
    top: "calc(env(safe-area-inset-top, 47px) + 12px)"
  }}
>
      {/* Menu Button */}
      <button
        onClick={handleButtonClick}
        className="bg-white rounded-lg px-6 py-3 shadow-lg flex items-center gap-2 font-semibold"
      >
        {getButtonContent()}
      </button>

      {/* Dropdown Menu */}
      {isOpen && !selectedCategory && !showSubcategories && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl w-64 max-h-96 overflow-y-auto">
          {/* Main Categories */}
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="w-full text-left px-6 py-4 hover:bg-gray-100 flex justify-between items-center border-b border-gray-100 last:border-b-0"
            >
              <span className="font-medium">
                {language === "de" ? category.name_de : category.name_en}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      )}

      {/* Subcategories Dropdown */}
      {isOpen && showSubcategories && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl w-64 max-h-96 overflow-y-auto">
          {selectedCategory?.subcategories?.map(subCategory => (
            <button
              key={subCategory.id}
              onClick={() => onSelectSubcategory(subCategory)}
              className="w-full text-left px-6 py-4 hover:bg-gray-100 flex justify-between items-center border-b border-gray-100 last:border-b-0"
            >
              <span className="font-medium">
                {language === "de" ? subCategory.name_de : subCategory.name_en}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}