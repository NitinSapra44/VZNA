"use client";
import { useRouter } from "next/navigation";
import { useAppStore } from "../../store/appStore";
import { useEffect, useRef } from "react";
import AppViewport from "../components/AppViewport";
import LanguageToggle from "../components/LanguageToggle";
import Lottie from 'lottie-react';
import animationData from "../../../public/animation_01_1920x1080.json"

export default function LanguageScreen() {
  const router = useRouter();
  const { language } = useAppStore();
  const swipeStartY = useRef(null);
  const isNavigating = useRef(false);
  const lastScrollTime = useRef(0);

  const navigateToMenu = () => {
    if (isNavigating.current) return;
    
    const now = Date.now();
    if (now - lastScrollTime.current < 800) return; // Debounce: prevent multiple triggers
    
    lastScrollTime.current = now;
    isNavigating.current = true;
    router.push(`/d/${language}`);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return; // Debounce scroll events
      
      if (event.deltaY > 30) {
        navigateToMenu();
      }
    };

    const handleTouchStart = (e) => {
      swipeStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const swipeDistance = swipeStartY.current - endY;
      
      if (swipeDistance > 50) {
        navigateToMenu();
      }
      
      swipeStartY.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [language]);

  return (
    <AppViewport>
      <div className="flex flex-col items-center justify-center h-full gap-8 bg-[#DBDBDB]">
        <div className="bg-white h-[95%] w-[90%] rounded-3xl flex flex-col items-center justify-center gap-6">
          <h2 className="text-xl font-semibold text-gray-600">Sprache wählen</h2>
          <LanguageToggle />
          <div style={{ width: '120%'}}>
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
          <p className="text-sm text-gray-400">Swipe nach oben zum Fortfahren ⬆️</p>
        </div>
      </div>
    </AppViewport>
  );
}