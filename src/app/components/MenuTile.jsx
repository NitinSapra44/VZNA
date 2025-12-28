"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductDetail from "./ProductDetail";

export default function MenuTile({ item, index, language, onDrawerToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    onDrawerToggle(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    onDrawerToggle(false);
  };

  const title = language === "de" ? item.title_de : item.title_en;
  const subtitle = language === "de" ? item.subtitle_de : item.subtitle_en;

  return (
    <div
      className="relative w-full h-full snap-center overflow-hidden"
    >
      {/* Background - must start from absolute top */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${item.image_url})`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Text */}
      <div className="absolute bottom-24 left-6 text-white max-w-md">
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
          className="absolute bottom-24 right-6 bg-white/95 backdrop-blur-sm text-black z-30 px-8 py-3.5 font-bold rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] active:scale-90 transition-all duration-300 hover:bg-white border-2 border-white/20"
        >
          <div className="flex items-center gap-2.5">
            <span className="tracking-wide">Information</span>
            <span className="text-2xl font-light">+</span>
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