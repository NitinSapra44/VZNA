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
<div className="absolute top-6 right-4 z-40">
      {/* Menu Button */}
      <button
        onClick={handleButtonClick}
        className="bg-white/95 backdrop-blur-sm text-black rounded-xl px-7 py-3.5 shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] active:scale-90 transition-all duration-300 flex items-center gap-2.5 font-bold hover:bg-white border-2 border-white/20"
      >
        {getButtonContent()}
      </button>

      {/* Dropdown Menu */}
      {isOpen && !selectedCategory && !showSubcategories && (
        <div className="absolute top-full right-0 mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-72 max-h-96 overflow-y-auto border border-gray-200/50">
          {/* Main Categories */}
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="w-full text-left px-6 py-4 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 flex justify-between items-center border-b border-gray-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl group"
            >
              <span className="font-semibold text-gray-800 group-hover:text-black transition-colors">
                {language === "de" ? category.name_de : category.name_en}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      )}

      {/* Subcategories Dropdown */}
      {isOpen && showSubcategories && (
        <div className="absolute top-full right-0 mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-72 max-h-96 overflow-y-auto border border-gray-200/50">
          {selectedCategory?.subcategories?.map(subCategory => (
            <button
              key={subCategory.id}
              onClick={() => onSelectSubcategory(subCategory)}
              className="w-full text-left px-6 py-4 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 flex justify-between items-center border-b border-gray-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl group"
            >
              <span className="font-semibold text-gray-800 group-hover:text-black transition-colors">
                {language === "de" ? subCategory.name_de : subCategory.name_en}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}