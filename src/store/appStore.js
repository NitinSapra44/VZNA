import { create } from "zustand";

export const useAppStore = create(set => ({
  mode: "all",
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
  
  language: "en", // Default to "en", will be updated on mount
  
  setLanguage: lang =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("app-lang", lang);
      }
      return { language: lang };
    }),
}));

// Initialize language from localStorage after mount
if (typeof window !== "undefined") {
  const savedLang = localStorage.getItem("app-lang");
  if (savedLang) {
    useAppStore.setState({ language: savedLang });
  }
}