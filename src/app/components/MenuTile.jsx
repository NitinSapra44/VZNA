"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductDetail from "./ProductDetail";

export default function MenuTile({ item, index, language, onDrawerToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    onDrawerToggle(true); // freeze VerticalSnap
  };

  const handleClose = () => {
    setIsOpen(false);
    onDrawerToggle(false); // unfreeze VerticalSnap
  };

  const title = language === "de" ? item.title_de : item.title_en;
  const subtitle = language === "de" ? item.subtitle_de : item.subtitle_en;

  return (
    <div className="relative w-full h-[100svh] snap-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image_url})` }}
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 text-white max-w-md">
        <h1 className="text-base mb-2" style={{ fontFamily: "var(--font-fira-sans)" }}>
          {title}
        </h1>
        <p className="text-base opacity-90" style={{ fontFamily: "var(--font-fira-sans)" }}>
          {subtitle}
        </p>
      </div>

      {/* Info Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="absolute bottom-6 right-6 bg-white z-30 px-6 py-3 font-semibold rounded-full shadow-md"
        >
          <div className="flex items-center gap-2">
            Information <span className="text-xl">+</span>
          </div>
        </button>
      )}

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <ProductDetail item={item} onClose={handleClose} language={language} />
        )}
      </AnimatePresence>
    </div>
  );
}
