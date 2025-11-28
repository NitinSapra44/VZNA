"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function ProductDetail({ item, onClose, language }) {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option.type)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option.type));
    } else {
      setSelectedOptions([...selectedOptions, option.type]);
    }
  };

  const title = language === "de" ? item.title_de : item.title_en;
  const ingredients = language === "de" ? item.ingredients_de : item.ingredients_en;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="w-full max-w-[560px] mx-auto relative">
        {/* Background Image (peek at top) */}
        {/* <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
          <img 
            src={item.image_url} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div> */}

        {/* White Modal Container */}
        <div className="bg-white rounded-t-3xl mt-32 p-6 pb-8 shadow-2xl relative z-10">
          {/* Product Title & Ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{ingredients}</p>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <div className="flex gap-3">
              {item.sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 border-2 rounded-lg p-3 text-center transition-all ${
                    selectedSize === size ? 'border-black bg-gray-50' : 'border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-sm">
                    {language === "de" ? size.label_de : size.label_en}
                  </div>
                  <div className="text-lg font-bold mt-1">{size.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Options */}
          {item.options && item.options.length > 0 && (
            <div className="mb-6">
              <div className="flex gap-3">
                {item.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleOption(option)}
                    className={`flex-1 border-2 rounded-lg p-3 text-center transition-all ${
                      selectedOptions.includes(option.type) ? 'border-black bg-gray-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      {option.type === 'glutenfrei' && (
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                          <circle cx="50" cy="50" r="45" />
                          <line x1="20" y1="80" x2="80" y2="20" />
                          <path d="M 50 20 L 45 35 L 30 35 L 42 45 L 37 60 L 50 50 L 63 60 L 58 45 L 70 35 L 55 35 Z" fill="currentColor" />
                        </svg>
                      )}
                      {option.type === 'vegan' && (
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                          <circle cx="50" cy="50" r="45" />
                          <path d="M 50 30 Q 35 45 35 60 Q 35 75 50 85 Q 65 75 65 60 Q 65 45 50 30 Z" fill="none" />
                          <path d="M 50 30 L 65 45" />
                        </svg>
                      )}
                      {option.type === 'vollkorn' && (
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                          <circle cx="50" cy="50" r="45" />
                          <path d="M 50 25 L 50 75 M 40 35 L 50 25 L 60 35 M 35 50 L 65 50 M 40 65 L 50 75 L 60 65" />
                        </svg>
                      )}
                    </div>
                    <div className="font-semibold text-xs">
                      {language === "de" ? option.label_de : option.label_en}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {option.price_modifier}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-black text-white rounded-full py-4 font-semibold flex items-center justify-center gap-2"
          >
            {language === "de" ? "Schliessen" : "Close"}
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}