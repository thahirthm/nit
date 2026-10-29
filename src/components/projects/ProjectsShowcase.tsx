"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectOffcanvas, type ProjectOffcanvasProject } from "@/components/ui/ProjectOffcanvas";
import { infrastructureCategories, technologyCategories, type ProjectCategory } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";

const primaryTabs = [
  { en: "Infrastructure", ar: "البنية التحتية" },
  { en: "Technology", ar: "التقنية" },
] as const;

// Sector chips per primary tab — each chip shows its own projects; the count is derived from the list.
const tabChips: Record<(typeof primaryTabs)[number]["en"], ProjectCategory[]> = {
  Infrastructure: infrastructureCategories,
  // Data Centers is hidden for now (also on the Technology page); drop the filter to bring it back.
  Technology: technologyCategories.filter((c) => c.key !== "data-centers"),
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ProjectsShowcase() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState<(typeof primaryTabs)[number]["en"]>("Infrastructure");
  const [activeChip, setActiveChip] = useState("whats-hot");
  const [selectedProject, setSelectedProject] = useState<ProjectOffcanvasProject | null>(null);
  const searchParams = useSearchParams();

  // Deep links from the map panel (/projects?tab=…&chip=…) pre-select a tab and sector chip.
  // Synced during render (not in an effect) whenever the query string changes.
  const query = searchParams.toString();
  const [appliedQuery, setAppliedQuery] = useState<string | null>(null);
  if (query !== appliedQuery) {
    setAppliedQuery(query);
    const tab = primaryTabs.find((t) => t.en === searchParams.get("tab"))?.en;
    if (tab) {
      const chip = searchParams.get("chip");
      setActiveTab(tab);
      setActiveChip(chip && tabChips[tab].some((c) => c.key === chip) ? chip : "whats-hot");
    }
  }
  const sectorChips = tabChips[activeTab];
  const projects = (sectorChips.find((chip) => chip.key === activeChip) ?? sectorChips[0]).projects;

  const renderCard = (project: ProjectOffcanvasProject) => (
    // The whole card opens the details panel, not just the READ MORE button.
    <div
      role="button"
      tabIndex={0}
      onClick={() => setSelectedProject(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSelectedProject(project);
        }
      }}
      className="group/card h-full flex flex-col cursor-pointer"
    >
      <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
        <Image quality={95} src={project.image} alt={project.title.en} fill className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105" />
        <div className={`absolute top-4 flex items-center gap-2 ${isAr ? "right-4" : "left-4"}`}>
          {project.badges.map((badge, bi) => (
            <span
              key={badge.en}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white ${
                bi === 0 && project.badges.length > 1 ? "bg-[#2E368F]/90 border border-transparent" : "border border-white bg-transparent"
              }`}
            >
              {isAr ? badge.ar : badge.en}
            </span>
          ))}
        </div>
      </div>

      <h3 className={`mt-5 font-extralight tracking-tight text-gray-900 ${isAr ? "text-[21px] sm:text-[23px] leading-snug" : "text-[26px] sm:text-[28px]"}`}>
        {isAr ? project.title.ar : project.title.en}
      </h3>
      <p className="mt-2 min-h-[56px] sm:min-h-[60px] text-[17px] sm:text-[18px] text-gray-500 font-light leading-relaxed line-clamp-2">
        {isAr ? project.description.ar : project.description.en}
      </p>

      <div className="mt-auto pt-5">
        <div dir="ltr" className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div>
            <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
              {isAr ? "القيمة" : "Value"}
            </span>
            <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
              {project.value}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
              {isAr ? "السنة" : "Year"}
            </span>
            <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
              {project.year}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
              {project.completion ? (isAr ? "موعد الإنجاز" : "Completion on") : isAr ? "نطاق الأعمال" : "Scope"}
            </span>
            <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
              {project.completion ?? (isAr ? project.scope.ar : project.scope.en)}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <Button variant="secondary" onClick={() => setSelectedProject(project)}>
            {isAr ? "اقرؤوا المزيد" : "READ MORE"}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    // Anchor target for the map section's "See our projects" button (/projects#projects-showcase)
    <section id="projects-showcase" className={`w-full bg-white pt-[60px] lg:pt-[100px] scroll-mt-8 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:site-gutter">
        <Reveal delay={0} duration={0.8} y={30}>
          {/* Heading + Nav */}
          <div className="flex items-center justify-between">
            <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
              {isAr ? "حلول تتحول إلى إنجازات" : "Solutions, Delivered."}
            </h2>
            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              <button className="text-gray-300 cursor-not-allowed" aria-label="Previous" disabled>
                <ArrowIcon className={isAr ? "" : "rotate-180"} />
              </button>
              <button className="text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300" aria-label="Next">
                <ArrowIcon className={isAr ? "rotate-180" : ""} />
              </button>
            </div>
          </div>

          {/* Primary tabs */}
          <div className="mt-8 flex gap-3">
            {primaryTabs.map((tab) => {
              const isActive = tab.en === activeTab;
              return (
                <button
                  key={tab.en}
                  onClick={() => {
                    setActiveTab(tab.en);
                    setActiveChip("whats-hot");
                  }}
                  className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                    isActive
                      ? "bg-[#2E368F] text-white border-[#2E368F]"
                      : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                  }`}
                >
                  {isAr ? tab.ar : tab.en}
                </button>
              );
            })}
          </div>

          {/* Sector chips */}
          <div className="mt-5 flex flex-nowrap sm:flex-wrap items-center gap-x-6 gap-y-2 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-gray-200 pt-3 pb-4">
            {sectorChips.map((chip) => {
              const isActive = chip.key === activeChip;
              return (
                <button
                  key={chip.key}
                  onClick={(e) => {
                    setActiveChip(chip.key);
                    // On mobile the chips are a horizontal slider — bring the tapped chip into view
                    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                  }}
                  className={`shrink-0 whitespace-nowrap text-[13px] font-medium tracking-wide uppercase pb-1 border-b-2 transition-colors duration-300 ${
                    isActive ? "text-[#2E368F] border-[#2E368F]" : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {isAr ? chip.label.ar : chip.label.en}
                  {chip.projects.length > 0 && <span className="mx-1">{chip.projects.length}</span>}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project cards — Swiper slider on mobile, grid from sm up */}
        <div className="mt-8 lg:mt-10 sm:hidden -mx-6">
          <Swiper
            // Remount on language change so Swiper re-reads the page direction (RTL in Arabic),
            // and on tab/chip change so the slider starts from the first card of the new list.
            key={`${language}-${activeTab}-${activeChip}`}
            // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
            // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
            dir={isAr ? "rtl" : "ltr"}
            // Fixed-width slides: card lines up with the page gutter and the next card peeks ~32px in
            slidesPerView="auto"
            spaceBetween={16}
            slidesOffsetBefore={24}
            slidesOffsetAfter={24}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={`${project.title.en}-${i}`} className="!w-[calc(100%-72px)] !h-auto">
                {renderCard(project)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 lg:mt-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16">
          {projects.map((project, i) => (
            <Reveal key={`${activeTab}-${activeChip}-${project.title.en}-${i}`} delay={(i % 3) * 0.1} duration={0.7} y={40} className="h-full flex flex-col">
              {renderCard(project)}
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectOffcanvas project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
