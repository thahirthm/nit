"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export interface ProjectOffcanvasProject {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  detail?: { en: string; ar: string };
  image: string;
  /** Optional project/company logo, shown above the title. */
  logo?: { src: string; alt: { en: string; ar: string } };
  badges: { en: string; ar: string }[];
  /** Plain string, or per-language text when the stat isn't a number (e.g. a client name). */
  value: string | { en: string; ar: string };
  /** Optional label override for the value stat (default "Value"), e.g. "Client". */
  valueLabel?: { en: string; ar: string };
  year: string | { en: string; ar: string };
  /** Optional label override for the year stat (default "Year"), e.g. "Awarded". */
  yearLabel?: { en: string; ar: string };
  scope: { en: string; ar: string };
  /** Optional label override for the scope stat (default "Scope"), e.g. "Consortium". */
  scopeLabel?: { en: string; ar: string };
  /** When set, the third stat shows "Completion on" with this year instead of the scope. */
  completion?: string;
}

interface ProjectOffcanvasProps {
  project: ProjectOffcanvasProject | null;
  onClose: () => void;
}

export function ProjectOffcanvas({ project, onClose }: ProjectOffcanvasProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const isOpen = project !== null;

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
  const valueLabel = isAr ? "القيمة" : "VALUE";
  const yearLabel = isAr ? "السنة" : "YEAR";
  const scopeLabel = isAr ? "النطاق" : "SCOPE";
  const localize = (v: string | { en: string; ar: string }) => (typeof v === "string" ? v : isAr ? v.ar : v.en);
  // Anek Latin has no Arabic glyphs, so per-language (word) stats use the page font in Arabic.
  const statFont = (v: string | { en: string; ar: string }) =>
    typeof v === "string" || !isAr ? "font-[family-name:var(--font-anek-latin)]" : "";

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] overflow-hidden ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        dir="ltr"
        className={`absolute top-0 ${isAr ? "left-0" : "right-0"} h-full w-full max-w-[960px] bg-white shadow-2xl transition-transform duration-500 ease-in-out overflow-y-auto ${
          isOpen
            ? "translate-x-0"
            : isAr
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {project && (
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

            <div className="relative w-full h-[320px] sm:h-[400px]">
              <Image quality={95} src={project.image} alt={isAr ? project.title.ar : project.title.en} fill className="object-cover" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                {project.badges.map((badge, bi) => (
                  <span
                    key={bi}
                    className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white ${
                      bi === 0 && project.badges.length > 1 ? "bg-[#2E368F]/90 border border-transparent" : "border border-white bg-transparent"
                    }`}
                  >
                    {isAr ? badge.ar : badge.en}
                  </span>
                ))}
              </div>
            </div>

            <div dir={isAr ? "rtl" : "ltr"} className={`p-6 sm:p-10 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
              {project.logo && (
                <div className="relative w-[180px] h-[72px] mb-6">
                  <Image
                    src={project.logo.src}
                    alt={isAr ? project.logo.alt.ar : project.logo.alt.en}
                    fill
                    sizes="180px"
                    className={`object-contain ${isAr ? "object-right" : "object-left"}`}
                  />
                </div>
              )}
              <h3 className="text-[28px] sm:text-[34px] font-extralight tracking-tight text-gray-900">
                {isAr ? project.title.ar : project.title.en}
              </h3>
              {/* Key figures sit right under the title, separated by the divider line.
                  Phones: three rows (label beside value). sm+: three columns. */}
              <div dir="ltr" className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-4 pt-6 border-t border-gray-200">
                <div dir={isAr ? "rtl" : "ltr"} className="flex items-baseline gap-4 sm:block">
                  <span className="block w-[90px] shrink-0 sm:w-auto text-[11px] font-medium tracking-wider uppercase text-gray-400">{project.valueLabel ? (isAr ? project.valueLabel.ar : project.valueLabel.en) : valueLabel}</span>
                  <span className={`${statFont(project.value)} block sm:mt-1 text-[16px] sm:text-[20px] leading-snug font-normal text-[#2E368F]`}>{localize(project.value)}</span>
                </div>
                <div dir={isAr ? "rtl" : "ltr"} className="flex items-baseline gap-4 sm:block">
                  <span className="block w-[90px] shrink-0 sm:w-auto text-[11px] font-medium tracking-wider uppercase text-gray-400">{project.yearLabel ? (isAr ? project.yearLabel.ar : project.yearLabel.en) : yearLabel}</span>
                  <span className={`${statFont(project.year)} block sm:mt-1 text-[16px] sm:text-[20px] leading-snug font-normal text-[#2E368F]`}>{localize(project.year)}</span>
                </div>
                <div dir={isAr ? "rtl" : "ltr"} className="flex items-baseline gap-4 sm:block">
                  <span className="block w-[90px] shrink-0 sm:w-auto text-[11px] font-medium tracking-wider uppercase text-gray-400">
                    {project.completion
                      ? isAr ? "موعد الإنجاز" : "COMPLETION ON"
                      : project.scopeLabel ? (isAr ? project.scopeLabel.ar : project.scopeLabel.en) : scopeLabel}
                  </span>
                  <span className={`${statFont(project.completion ?? project.scope)} block sm:mt-1 text-[16px] sm:text-[20px] leading-snug font-normal text-[#2E368F]`}>
                    {project.completion ?? (isAr ? project.scope.ar : project.scope.en)}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-[16px] sm:text-[17px] text-gray-500 font-light leading-relaxed">
                {isAr ? project.description.ar : project.description.en}
              </p>

              {project.detail && (
                <p className="mt-6 text-[15px] sm:text-[16px] text-gray-600 font-light leading-relaxed">
                  {isAr ? project.detail.ar : project.detail.en}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
