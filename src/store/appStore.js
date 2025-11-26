import { create } from "zustand";

export const useAppStore = create(set => ({
  mode: "all", // all | category | product
  category: null,
  productIndex: 0,

  setMode: mode => set({ mode }),
  selectCategory: category => set({ mode: "category", category }),
  openProduct: index => set({ mode: "product", productIndex: index }),

  scrollRef: null,
  setScrollRef: ref => set({ scrollRef: ref }),
  scrollTo: index =>
    set(state => {
      if (state.scrollRef) {
        state.scrollRef.scrollTo({
          top: window.innerHeight * index,
          behavior: "smooth",
        });
      }
      return {};
    }),

  /** ------------------- NEW LANGUAGE STATE ------------------- **/
  language: typeof window !== "undefined" 
    ? localStorage.getItem("app-lang") || "en"
    : "en",

  setLanguage: lang =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("app-lang", lang);
      }
      return { language: lang };
    }),
}));
