"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetail from "./ProductDetail";
import { PlusIcon } from "lucide-react";

export default function FixedCard({
  item,
  language,
  swipeDirection = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!item) return null;

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
        exit: { y: -10, opacity: 0 },
      };
    } else if (swipeDirection === -1) {
      // Swiping DOWN
      return {
        initial: { y: -10, opacity: 0 },
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
    <>
      {/* Fixed Bottom Card */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-[5px] inset-x-2.5 z-20 pointer-events-none"
      >
        <div className="rounded-[35px] flex bg-white shadow-lg p-5! pointer-events-none">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col overflow-hidden">
              <p className="font-inter font-medium text-black/40 text-xs">
                Name des Gerichts
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id}-${title}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter mt-3 text-lg"
                >
                  {title}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-col overflow-hidden">
              <p className="font-inter font-medium text-black/40 text-xs">
                Preis
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id}-${subtitle}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter mt-3 text-lg"
                >
                  {subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-3! ">
            <div
              onClick={handleOpen}
              className="bg-[#e5e5e5] flex flex-row items-center rounded-[25px] gap-6 pl-[15px]! pr-[5px]! py-1! cursor-pointer pointer-events-auto"
            >
              <p className="font-inter font-medium">
                {language === "de" ? "Mehr Infos" : "More Info"}
              </p>
              <div className="p-2! rounded-full bg-black/40">
                <PlusIcon className="w-6 h-6" color="white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
    </>
  );
}
