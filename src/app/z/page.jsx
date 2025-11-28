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

  const navigateToMenu = () => {
    router.push(`/z/${language}`);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 30) navigateToMenu();
    };

    const handleTouchStart = (e) => {
      swipeStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (swipeStartY.current - endY > 50) navigateToMenu();
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

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
