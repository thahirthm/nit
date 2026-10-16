"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export interface LeadershipOffcanvasPerson {
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  image: string;
  bio: { en: string; ar: string };
  linkedin?: string;
}

interface LeadershipOffcanvasProps {
  person: LeadershipOffcanvasPerson | null;
  onClose: () => void;
}

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3.4 5.8H1V14H3.4V5.8ZM2.2 4.7C3 4.7 3.6 4.1 3.6 3.3C3.6 2.5 3 1.9 2.2 1.9C1.4 1.9 0.8 2.5 0.8 3.3C0.8 4.1 1.4 4.7 2.2 4.7ZM9.2 5.6C7.9 5.6 7.2 6.3 6.9 6.8H6.8V5.8H4.5V14H6.9V9.9C6.9 8.8 7.1 7.7 8.5 7.7C9.9 7.7 9.9 9 9.9 10V14H12.3V9.5C12.3 7.3 11.8 5.6 9.2 5.6Z"
      fill="currentColor"
    />
  </svg>
);

export function LeadershipOffcanvas({ person, onClose }: LeadershipOffcanvasProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const isOpen = person !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const closeLabel = isAr ? "إغلاق" : "Close";

  return (
    <div aria-hidden={!isOpen} className={`fixed inset-0 z-[100] overflow-hidden ${isOpen ? "" : "pointer-events-none"}`}>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel — closed transform uses calc(100% + inset) rather than plain translate-x-full:
          the panel is inset from the viewport edge (right-4/right-10 for the floating-card
          look), so shifting it by only its own width (100%) left a sliver equal to that inset
          still on-screen. Adding the inset to the translate distance clears it fully. */}
      <div
        dir="ltr"
        className={`absolute top-6 bottom-6 sm:top-10 sm:bottom-10 ${isAr ? "left-4 sm:left-10" : "right-4 sm:right-10"} w-[calc(100%-2rem)] sm:w-full max-w-[480px] bg-white shadow-2xl transition-transform duration-500 ease-in-out overflow-y-auto ${
          isOpen
            ? "translate-x-0"
            : isAr
            ? "-translate-x-[calc(100%+1rem)] sm:-translate-x-[calc(100%+2.5rem)]"
            : "translate-x-[calc(100%+1rem)] sm:translate-x-[calc(100%+2.5rem)]"
        }`}
      >
        {person && (
          <>
            <button
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white text-[#2E368F] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>

            <div className={`p-4 sm:p-6 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
              <div className="relative w-full h-[380px] sm:h-[440px] bg-gray-100">
                <Image
                  quality={95}
                  src={person.image}
                  alt={isAr ? person.name.ar : person.name.en}
                  fill
                  className="object-cover"
                />
              </div>

              <div dir={isAr ? "rtl" : "ltr"} className="pt-6 sm:pt-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[13px] font-medium tracking-widest uppercase text-[#2E368F]">
                    {isAr ? person.role.ar : person.role.en}
                  </span>
                  <a
                    href={person.linkedin ?? "#"}
                    aria-label="LinkedIn"
                    className="shrink-0 flex items-center justify-center w-9 h-9 bg-[#2E368F] text-white hover:bg-[#1c2260] transition-colors duration-300"
                  >
                    <LinkedInIcon />
                  </a>
                </div>

                <h3 className="mt-3 text-[26px] sm:text-[28px] font-light text-gray-900">
                  {isAr ? person.name.ar : person.name.en}
                </h3>

                <p className="mt-6 text-[15px] sm:text-[16px] text-gray-500 font-light leading-relaxed">
                  {isAr ? person.bio.ar : person.bio.en}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
