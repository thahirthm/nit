"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type SubLink = { en: string; ar: string; href: string };

export const submenus: Record<string, SubLink[]> = {
  about: [
    { en: "WHO WE ARE", ar: "من نحن", href: "/about#who-we-are" },
    { en: "MISSION & VISION", ar: "الرسالة والرؤية", href: "/about#mission-vision" },
    { en: "OUR HISTORY", ar: "تاريخنا", href: "/about#our-history" },
    { en: "OUR STATS", ar: "أرقامنا", href: "/about#our-stats" },
    { en: "CLIENTS & PARTNERS", ar: "العملاء والشركاء", href: "/about#clients-partners" },
    { en: "OUR TEAM", ar: "فريقنا", href: "/about#our-team" },
    { en: "CERTIFICATIONS", ar: "الشهادات", href: "/about#certifications" },
  ],
  solutions: [
    { en: "OVERVIEW", ar: "نظرة عامة", href: "/solutions" },
    { en: "INFRASTRUCTURE", ar: "البنية التحتية", href: "/solutions/infrastructure" },
    { en: "TECHNOLOGY", ar: "التقنية", href: "/solutions/technology" },
    { en: "OUR GROWTH", ar: "نموّنا", href: "/solutions#our-growth" },
    { en: "INDUSTRIES", ar: "القطاعات", href: "/solutions#industries" },
  ],
};

type NavLink = {
  name: { en: string; ar: string };
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
  key?: string;
};

interface HeaderMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function HeaderMegaMenu({ isOpen, onClose, navLinks }: HeaderMegaMenuProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const currentPageLink = navLinks.find((l) => l.active) ?? null;
  // No submenu is shown until the visitor hovers a link that has one — the
  // initially-highlighted link is just whichever page they're already on.
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) setHoveredKey(null);
  }, [isOpen]);

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

  const activeSublinks = hoveredKey ? submenus[hoveredKey] : null;
  const Chevron = ChevronRight;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] bg-[#2E368F] overflow-hidden transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundImage: "url(/images/mega-menu-bg.png)",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={onClose}
        aria-label={isAr ? "إغلاق" : "Close"}
        // Opposite the logo: right in English, left in Arabic (the logo moves right in RTL)
        className={`absolute z-20 top-6 lg:top-10 ${isAr ? "left-6 lg:left-12" : "right-6 lg:right-12"} text-white/80 hover:text-white transition-colors cursor-pointer`}
      >
        <X className="w-7 h-7" strokeWidth={1.5} />
      </button>

      <div className="relative z-10 h-full flex flex-col">
        <div className="px-6 lg:px-12 pt-8 lg:pt-10">
          <Image quality={95} src="/images/nit-logo.svg" alt="Nesma Infrastructure & Technology" width={200} height={50} className="h-7 w-auto object-contain brightness-0 invert" />
        </div>

        <div
          dir={isAr ? "rtl" : "ltr"}
          className={`flex-1 flex flex-col lg:flex-row px-6 lg:px-12 pt-10 lg:pt-16 gap-8 lg:gap-16 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}
        >
          {/* Main nav column */}
          <nav className="relative flex flex-col gap-6 lg:gap-7 shrink-0">
            {navLinks.map((link) => {
              // Highlighted = the submenu currently being hovered, or (when nothing's
              // hovered) whichever link is the current page.
              const isHighlighted = hoveredKey
                ? link.key === hoveredKey
                : link.href === currentPageLink?.href;
              const isDim = !!hoveredKey && link.hasDropdown && link.key !== hoveredKey;
              return (
                <div
                  key={link.name.en}
                  onMouseEnter={() => setHoveredKey(link.hasDropdown && link.key ? link.key : null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && onClose()}
                    className={`flex items-center gap-2 text-[22px] lg:text-[26px] font-light tracking-wide transition-colors duration-300 ${
                      isHighlighted ? "text-white" : isDim ? "text-white/40 hover:text-white/70" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {isAr ? link.name.ar : link.name.en}
                    {link.hasDropdown && (
                      <Chevron
                        className={`w-4 h-4 transition-transform duration-300 ${hoveredKey === link.key ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                      />
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Divider — sized to this column's own content height (not the full-height row),
                so it ends exactly where the last nav link ends, same as the nav items above it. */}
            <div
              className={`hidden lg:block absolute top-0 bottom-0 w-px bg-white/20 ${isAr ? "left-0 lg:-translate-x-8" : "right-0 lg:translate-x-8"}`}
            />
          </nav>

          {/* Submenu column */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {activeSublinks?.map((sub) => (
              <Link
                key={sub.en}
                href={sub.href}
                onClick={onClose}
                className="text-[18px] lg:text-[22px] font-light tracking-wide text-white/60 hover:text-white transition-colors duration-300"
              >
                {isAr ? sub.ar : sub.en}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
