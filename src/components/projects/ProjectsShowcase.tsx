"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectOffcanvas, type ProjectOffcanvasProject } from "@/components/ui/ProjectOffcanvas";
import { useLanguage } from "@/context/LanguageContext";

const primaryTabs = [
  { en: "Infrastructure", ar: "البنية التحتية" },
  { en: "Technology", ar: "التقنية" },
] as const;

const sectorChips = [
  { en: "What's hot", ar: "الأبرز", count: 9 },
  { en: "Water", ar: "المياه", count: 3 },
  { en: "Energy", ar: "الطاقة", count: 2 },
  { en: "Technology", ar: "التقنية", count: 2 },
  { en: "Industrial", ar: "الصناعي", count: 1 },
  { en: "Communication", ar: "الاتصالات", count: 1 },
];

type Project = ProjectOffcanvasProject;

const badgeOfTheYear = { en: "PROJECT OF THE YEAR", ar: "مشروع العام" };
const badgeWater = { en: "WATER", ar: "المياه" };
const badgeEnergy = { en: "ENERGY", ar: "الطاقة" };
const badgeComms = { en: "COMMS", ar: "الاتصالات" };
const scopeEpc = { en: "EPC", ar: "الهندسة والتوريد والإنشاء (EPC)" };
const scopeDesignBuild = { en: "Design+Build", ar: "التصميم والتنفيذ" };

const projects: Project[] = [
  {
    title: { en: "Jubail–Buraydah Pipeline", ar: "خط أنابيب المياه بين الجبيل وبريدة" },
    description: {
      en: "587 km bidirectional water transmission. 650,000 m³/day capacity.",
      ar: "خط لنقل المياه في الاتجاهين بطول 587 كيلومترًا، وبطاقة نقل تبلغ 650,000 متر مكعب يوميًا.",
    },
    image: "/images/pr-1.png",
    badges: [badgeOfTheYear, badgeWater],
    value: "8.5B SAR",
    year: "2025",
    scope: scopeEpc,
  },
  {
    title: { en: "Al Henakiyah Solar PV", ar: "مشروع الحناكية للطاقة الشمسية الكهروضوئية" },
    description: {
      en: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
      ar: "مشروع للطاقة الشمسية الكهروضوئية بقدرة 1,100 ميجاواط، يوفّر الطاقة اللازمة لنحو 87,700 منزل سنويًا في المملكة.",
    },
    image: "/images/pr-2.png",
    badges: [badgeOfTheYear, badgeEnergy],
    value: "3.75B SAR",
    year: "2023",
    scope: scopeEpc,
  },
  {
    title: { en: "Rumah 380kV BSP 9077", ar: "محطة تحويل روضة 380 كيلوفولت BSP 9077" },
    description: {
      en: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation.",
      ar: "تصميم محطة تحويل روضة 380 كيلوفولت (BSP) — القسمين (A وB) — وتوريد مكوناتها وإنشائها وتركيبها وإجراء الاختبارات اللازمة ووضعها في الخدمة.",
    },
    image: "/images/pr-3.png",
    badges: [badgeComms],
    value: "443M SAR",
    year: "2024",
    scope: scopeDesignBuild,
  },
  {
    title: { en: "NEOM Fixed Network", ar: "شبكة نيوم الثابتة" },
    description: {
      en: "Optical network across access, aggregation, and backbone layers.",
      ar: "شبكة ألياف ضوئية تشمل طبقات الوصول وتجميع البيانات والشبكة الأساسية.",
    },
    image: "/images/pr-3.png",
    badges: [badgeComms],
    value: "443M SAR",
    year: "2024",
    scope: scopeDesignBuild,
  },
  {
    title: { en: "Al Henakiyah Solar PV", ar: "مشروع الحناكية للطاقة الشمسية الكهروضوئية" },
    description: {
      en: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
      ar: "مشروع للطاقة الشمسية الكهروضوئية بقدرة 1,100 ميجاواط، يوفّر الطاقة اللازمة لنحو 87,700 منزل سنويًا في المملكة.",
    },
    image: "/images/pr-2.png",
    badges: [badgeOfTheYear, badgeEnergy],
    value: "3.75B SAR",
    year: "2023",
    scope: scopeEpc,
  },
  {
    title: { en: "Jubail–Buraydah Pipeline", ar: "خط أنابيب المياه بين الجبيل وبريدة" },
    description: {
      en: "587 km bidirectional water transmission. 650,000 m³/day capacity.",
      ar: "خط لنقل المياه في الاتجاهين بطول 587 كيلومترًا، وبطاقة نقل تبلغ 650,000 متر مكعب يوميًا.",
    },
    image: "/images/pr-1.png",
    badges: [badgeOfTheYear, badgeWater],
    value: "8.5B SAR",
    year: "2025",
    scope: scopeEpc,
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ProjectsShowcase() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState<(typeof primaryTabs)[number]["en"]>("Infrastructure");
  const [activeChip, setActiveChip] = useState("What's hot");
  const [selectedProject, setSelectedProject] = useState<ProjectOffcanvasProject | null>(null);

  return (
    // Anchor target for the map section's "See our projects" button (/projects#projects-showcase)
    <section id="projects-showcase" className={`w-full bg-white pt-[60px] lg:pt-[100px] scroll-mt-8 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:px-16">
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
                  onClick={() => setActiveTab(tab.en)}
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
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-gray-200 pt-3 pb-4">
            {sectorChips.map((chip) => {
              const isActive = chip.en === activeChip;
              return (
                <button
                  key={chip.en}
                  onClick={() => setActiveChip(chip.en)}
                  className={`text-[13px] font-medium tracking-wide uppercase pb-1 border-b-2 transition-colors duration-300 ${
                    isActive ? "text-[#2E368F] border-[#2E368F]" : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {isAr ? chip.ar : chip.en}
                  {chip.count !== null && <span className="mx-1">{chip.count}</span>}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project cards */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16">
          {projects.map((project, i) => (
            <Reveal key={`${project.title.en}-${i}`} delay={(i % 3) * 0.1} duration={0.7} y={40} className="h-full flex flex-col">
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
                <Image quality={95} src={project.image} alt={project.title.en} fill className="object-cover" />
                <div className={`absolute top-4 flex items-center gap-2 ${isAr ? "right-4" : "left-4"}`}>
                  {project.badges.map((badge, bi) => (
                    <span
                      key={badge.en}
                      className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white ${
                        bi === 0 && project.badges.length > 1 ? "bg-[#2E368F]/90" : "bg-[#81D1E8]/90 text-[#2E368F]"
                      }`}
                    >
                      {isAr ? badge.ar : badge.en}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-5 text-[26px] sm:text-[28px] font-extralight tracking-tight text-gray-900">
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
                      {isAr ? "نطاق الأعمال" : "Scope"}
                    </span>
                    <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                      {isAr ? project.scope.ar : project.scope.en}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <Button variant="secondary" onClick={() => setSelectedProject(project)}>
                    {isAr ? "اقرؤوا المزيد" : "READ MORE"}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectOffcanvas project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
