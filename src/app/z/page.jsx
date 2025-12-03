"use client";
import { useRouter } from "next/navigation";
import { useAppStore } from "../../store/appStore";
import { useEffect, useState, useRef } from "react";
import AppViewport from "../components/AppViewport";
import LanguageToggle from "../components/LanguageToggle";
import Lottie from "lottie-react";
import animationData from "../../../public/animation_01_1920x1080.json";
import animationData2 from "../../../public/animation_rz.json";
import Link from "next/link";
import { Check } from "lucide-react";

export default function LanguageScreen() {
  const router = useRouter();
  const { language } = useAppStore();

  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  const [frozenFrame, setFrozenFrame] = useState(null);

  const introLottieRef = useRef(null);

  /* --------------------------------------------------
     PERFECT SMOOTH EXIT WITH 3-FRAME FIX
  --------------------------------------------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);

      setTimeout(() => {
        try {
          if (introLottieRef.current) {
            introLottieRef.current.stop();

            const canvas =
              introLottieRef.current.getLottie().renderer.canvas;

            if (canvas) {
              const png = canvas.toDataURL("image/png");
              setFrozenFrame(png);

              // ⭐ Preload the PNG to ensure it's fully decoded
              const img = new Image();
              img.src = png;

              img.onload = () => {
                // ⭐ Wait 3 frames before exit for PERFECT smoothness
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      setIsExiting(true);
                      setTimeout(() => setRemoveIntro(true), 850);
                    });
                  });
                });
              };
            }
          }
        } catch (err) {
          console.log("Freeze frame error:", err);

          // Safe fallback
          setIsExiting(true);
          setTimeout(() => setRemoveIntro(true), 850);
        }
      }, 80);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppViewport>
      {/* MAIN SCREEN */}
      <div className="flex flex-col items-center justify-center h-full gap-8 bg-[#DBDBDB] absolute inset-0">
        <div className="bg-white h-[95%] w-[90%] rounded-3xl flex flex-col items-center justify-center gap-6">
          <Link href={language === "de" ? "/d/impressum" : "/d/imprint"}>
            <button
              style={{ fontFamily: "var(--font-fira-sans)" }}
              className="text-xl font-semibold text-gray-600 border-b-2 border-gray-600 hover:cursor-pointer"
            >
              {language === "de" ? "Impressum" : "Imprint"}
            </button>
          </Link>

          <LanguageToggle />

          <div style={{ width: "100%" }}>
            <Lottie animationData={animationData} loop autoplay />
          </div>

          <p
            style={{ fontFamily: "var(--font-fira-sans)" }}
            className="text-center text-gray-600 text-lg px-6 leading-snug"
          >
            {language === "de"
              ? "Streiche nach oben, um das Menü zu entdecken."
              : "Swipe up to discover the menu."}
          </p>

          <button
            style={{ fontFamily: "var(--font-fira-sans)" }}
            onClick={() => router.push(`/z/${language}`)}
            className="flex items-center gap-4 bg-[#4CAF50] text-white font-semibold px-6 py-3 rounded-full text-lg active:scale-95 transition-all shadow-md"
          >
            {language === "de" ? "Verstanden" : "Got it"}
            <span className="bg-[#2E7D32] rounded-full w-8 h-8 flex items-center justify-center">
              <Check className="w-6 h-6" color="white" />
            </span>
          </button>
        </div>
      </div>

      {/* INTRO WITH FREEZE-FRAME REPLACEMENT */}
      {!removeIntro && (
        <div
          className={`pointer-events-none will-change-transform flex items-center justify-center h-full w-full bg-[#DBDBDB] transition-transform duration-800 ease-in-out absolute inset-0 z-10 ${
            isExiting ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {frozenFrame ? (
            <img
              src={frozenFrame}
              alt="intro frame"
              className="w-full h-full object-contain"
            />
          ) : (
            <Lottie
              lottieRef={introLottieRef}
              animationData={animationData2}
              autoplay
              loop={false}
            />
          )}
        </div>
      )}

      <style jsx>{`
        .duration-800 {
          transition-duration: 800ms;
        }
      `}</style>
    </AppViewport>
  );
}
