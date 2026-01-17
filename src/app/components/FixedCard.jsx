"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetail from "./ProductDetail";
import { PlusIcon } from "lucide-react";
import AppViewport from "./AppViewport";

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
        className="absolute bottom-2.5 left-2.5 right-2.5 z-20 pointer-events-none  "
      >
        <div className="rounded-[35px] flex bg-white shadow-lg p-5!  pointer-events-none">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col overflow-hidden gap-3">
              <p className="font-inter font-medium leading-[9px] text-black/40 text-xs">
                Name des Gerichts
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id}-${title}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter  text-lg leading-3.5"
                >
                  {title}
                </motion.p>
              </AnimatePresence>
            </div>
  
            <div className="flex flex-col gap-3 overflow-hidden">
              <p className="font-inter font-medium leading-[9px] text-black/40 text-xs">
                Preis
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${item.id}-${subtitle}`}
                  initial={variants.initial}
                  animate={variants.animate}
                  exit={variants.exit}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-inter text-lg leading-3.5"
                >
                  {subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-3! ">
            <div
              onClick={handleOpen}
              className="bg-[#e5e5e5] h-[50px] w-44 flex flex-row items-center justify-between rounded-[25px]  pl-[15px]! pr-[5px]! py-1! cursor-pointer pointer-events-auto"
            >
              <p className="font-inter font-medium text-lg">
                {language === "de" ? "Mehr Infos" : "More Info"}
              </p>
              <div className="w-10 h-10 items-center flex justify-center rounded-full bg-black/40">
                <PlusIcon className="w-5 h-5 " color="white" />
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
