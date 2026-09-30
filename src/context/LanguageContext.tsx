"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "ar";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always starts as "en" so the client's first render matches the server-rendered
  // markup; the stored preference (if any) is applied right after mount below.
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("nit-language");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage, which isn't available during SSR/first render
    if (stored === "ar" || stored === "en") setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  // Only user-initiated changes write to storage — the restore effect above must
  // never be clobbered by this running with the still-stale "en" on first mount.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem("nit-language", lang);
  };

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        dir: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
