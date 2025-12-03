"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductDetail from "./ProductDetail";

export default function MenuTile({ item, index, language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowDrawer(true);
    }
  };

  const handleClose = () => {
    setShowDrawer(false);
    setIsOpen(false);
  };

  const title = language === "de" ? item.title_de : item.title_en;
  const subtitle = language === "de" ? item.subtitle_de : item.subtitle_en;

  return (
    <div className="relative w-full h-[100svh] snap-center">
      {/* Background Image */}
      <img
        src={item.image_url}
        alt={title}
        className="absolute inset-0 w-full h-[100svh] object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-6 text-white max-w-md">
        <h1
          style={{ fontFamily: "var(--font-fira-sans)" }}
          className="text-base mb-2"
        >
          {title}
        </h1>
        <p
          style={{ fontFamily: "var(--font-fira-sans)" }}
          className="text-base opacity-90"
        >
          {subtitle}
        </p>
      </div>

      {/* Bottom-right static button (NO ANIMATIONS) */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="absolute bottom-6 right-6 bg-white z-30 flex items-center justify-center px-6 py-3 font-semibold shadow-md"
          style={{
            borderRadius: 9999,
            height: 60,
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <div className="flex items-center gap-2">
            Information
            <span className="text-xl">+</span>
          </div>
        </button>
      )}

      {/* Product Detail Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <ProductDetail
            item={item}
            onClose={handleClose}
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
