"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetail from "./ProductDetail";
import { PlusIcon } from "lucide-react";

export default function MenuTile({
  item,
  index,
  language,
  onDrawerToggle,
  hideContent = false,
  swipeDirection = 0,
}) {
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

  // Animation variants based on swipe direction
  // swipeDirection: 1 = swipe up (exit up, enter from bottom)
  // swipeDirection: -1 = swipe down (exit down, enter from top)
  const getAnimationVariants = () => {
    if (swipeDirection === 1) {
      // Swiping UP
      return {
        initial: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -30, opacity: 0 },
      };
    } else if (swipeDirection === -1) {
      // Swiping DOWN
      return {
        initial: { y: -30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 30, opacity: 0 },
      };
    }
    // Default (first render)
    return {
      initial: { y: 0, opacity: 1 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -30, opacity: 0 },
    };
  };

  const variants = getAnimationVariants();

  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image_url})` }}
      />

      {/* Bottom Card */}
      {!hideContent && (
        <div className="absolute bottom-[5px] inset-x-2.5 z-20">
          <div className="rounded-[35px] flex bg-white shadow-lg p-5!">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col overflow-hidden">
              <p className="font-inter font-medium text-black/40 text-xs">Name des Gerichts</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id || index}-${title}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter mt-3  text-lg"
                >
                  {title}
                </motion.p>
              </AnimatePresence>
              </div>

            <div className="flex flex-col overflow-hidden">
              <p className="font-inter font-medium text-black/40 text-xs">Preis</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id || index}-${subtitle}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter mt-3  text-lg"
                >
                  {subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
            </div>
            <div className="absolute right-0 bottom-0 p-5! ">
              <div className="bg-[#e5e5e5] flex flex-row items-center rounded-[25px] gap-4 pl-[15px]! pr-[5px]! py-1!">
                  <p className="font-inter font-medium">{language === "de" ? "Mehr Infos" : "More Info"}</p>
                  <div className="p-1! rounded-full bg-black/40">
                    <PlusIcon className="w-5 h-5" color="white"/>
                  </div>


              </div>


            </div>
          </div>
        </div>
      )}

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
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
