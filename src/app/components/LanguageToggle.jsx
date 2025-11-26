"use client";
import { useAppStore } from "@/store/appStore";

export default function LanguageToggle() {
  const { language, setLanguage } = useAppStore();

  return (
    <div className="relative bg-[#9B9B9B] w-[250px] h-[60px] rounded-full flex items-center px-2">
      {/* Active Slider */}
      <div
        className={`absolute w-[120px] h-[50px] bg-white rounded-full transition-all duration-300`}
        style={{ left: language === "de" ? "5px" : "125px" }}
      ></div>

      <div className="flex w-full relative z-10">
        {/* Deutsch */}
        <button
          className={`flex-1 flex justify-center text-lg font-semibold transition-all duration-300 ${
            language === "de" ? "text-black" : "text-white"
          }`}
          onClick={() => setLanguage("de")}
        >
          Deutsch
        </button>

        {/* English */}
        <button
          className={`flex-1 flex justify-center text-lg font-semibold transition-all duration-300 ${
            language === "en" ? "text-black" : "text-white"
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
      </div>
    </div>
  );
}
