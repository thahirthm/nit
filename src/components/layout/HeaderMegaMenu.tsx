"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type SubLink = { en: string; ar: string; href: string };

const submenus: Record<string, SubLink[]> = {
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
  const firstDropdownKey = navLinks.find((l) => l.hasDropdown)?.key ?? null;
  const [activeKey, setActiveKey] = useState<string | null>(firstDropdownKey);

  useEffect(() => {
    if (isOpen) setActiveKey(firstDropdownKey);
  }, [isOpen, firstDropdownKey]);

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

  const activeSublinks = activeKey ? submenus[activeKey] : null;
  const Chevron = isAr ? ChevronRight : ChevronLeft;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] bg-[#2E368F] overflow-hidden transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Decorative dotted world map, bleeding off the right edge */}
      <div
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[260px] w-[1000px] h-[1000px] rounded-full overflow-hidden pointer-events-none"
        style={{ background: "radial-gradient(circle at 40% 45%, rgba(255,255,255,0.06), rgba(255,255,255,0) 70%)" }}
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundColor: "#81D1E8",
            WebkitMaskImage: "url(/images/globe-plain.png)",
            maskImage: "url(/images/globe-plain.png)",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        {[
          { top: "15%", left: "62%" }, { top: "26%", left: "78%" }, { top: "44%", left: "33%" },
          { top: "48%", left: "52%" }, { top: "47%", left: "69%" }, { top: "62%", left: "41%" },
          { top: "67%", left: "57%" }, { top: "82%", left: "44%" },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute w-[6px] h-[6px] rounded-full bg-[#81D1E8]"
            style={{ top: pos.top, left: pos.left, boxShadow: "0 0 8px 2px rgba(129,209,232,0.7)" }}
          />
        ))}
      </div>

      <button
        onClick={onClose}
        aria-label={isAr ? "إغلاق" : "Close"}
        className="absolute top-6 right-6 lg:top-10 lg:right-12 text-white/80 hover:text-white transition-colors"
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
          <nav className="flex flex-col gap-6 lg:gap-7 shrink-0">
            {navLinks.map((link) => {
              const isActiveDropdown = !!link.key && link.key === activeKey;
              const isDim = !!activeKey && link.hasDropdown && !isActiveDropdown;
              return (
                <div
                  key={link.name.en}
                  onMouseEnter={() => link.hasDropdown && link.key && setActiveKey(link.key)}
                >
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && onClose()}
                    className={`flex items-center gap-2 text-[22px] lg:text-[26px] font-light tracking-wide transition-colors duration-300 ${
                      isActiveDropdown ? "text-white" : isDim ? "text-white/40 hover:text-white/70" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {isAr ? link.name.ar : link.name.en}
                    {link.hasDropdown && <Chevron className="w-4 h-4" strokeWidth={1.5} />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/20 self-stretch" />

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
