"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const primaryTabs = ["Infrastructure", "Technology"] as const;

const sectorChips = [
  { label: "What's hot", count: 9 },
  { label: "Water", count: 3 },
  { label: "Energy", count: 2 },
  { label: "Technology", count: 2 },
  { label: "Industrial", count: 1 },
  { label: "Communication", count: 1 },
];

type Project = {
  title: string;
  description: string;
  image: string;
  badges: string[];
  value: string;
  year: string;
  scope: string;
};

const projects: Project[] = [
  {
    title: "Jubail–Buraydah Pipeline",
    description: "587 km bidirectional water transmission. 650,000 m³/day capacity.",
    image: "/images/pr-1.png",
    badges: ["PROJECT OF THE YEAR", "WATER"],
    value: "8.5B SAR",
    year: "2025",
    scope: "EPC",
  },
  {
    title: "Al Henakiyah Solar PV",
    description: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
    image: "/images/pr-2.png",
    badges: ["PROJECT OF THE YEAR", "ENERGY"],
    value: "3.75B SAR",
    year: "2023",
    scope: "EPC",
  },
  {
    title: "Rumah 380kV BSP 9077",
    description: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation.",
    image: "/images/pr-3.png",
    badges: ["COMMS"],
    value: "443M SAR",
    year: "2024",
    scope: "Design+Build",
  },
  {
    title: "NEOM Fixed Network",
    description: "Optical network across access, aggregation, and backbone layers.",
    image: "/images/pr-3.png",
    badges: ["COMMS"],
    value: "443M SAR",
    year: "2024",
    scope: "Design+Build",
  },
  {
    title: "Al Henakiyah Solar PV",
    description: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
    image: "/images/pr-2.png",
    badges: ["PROJECT OF THE YEAR", "ENERGY"],
    value: "3.75B SAR",
    year: "2023",
    scope: "EPC",
  },
  {
    title: "Jubail–Buraydah Pipeline",
    description: "587 km bidirectional water transmission. 650,000 m³/day capacity.",
    image: "/images/pr-1.png",
    badges: ["PROJECT OF THE YEAR", "WATER"],
    value: "8.5B SAR",
    year: "2025",
    scope: "EPC",
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<(typeof primaryTabs)[number]>("Infrastructure");
  const [activeChip, setActiveChip] = useState("What's hot");

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        {/* Heading + Nav */}
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            Solutions, Delivered.
          </h2>
          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            <button className="text-gray-300 cursor-not-allowed" aria-label="Previous" disabled>
              <ArrowIcon className="rotate-180" />
            </button>
            <button className="text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300" aria-label="Next">
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Primary tabs */}
        <div className="mt-8 flex gap-3">
          {primaryTabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Sector chips */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-gray-200 pt-3 pb-4">
          {sectorChips.map((chip) => {
            const isActive = chip.label === activeChip;
            return (
              <button
                key={chip.label}
                onClick={() => setActiveChip(chip.label)}
                className={`text-[13px] font-medium tracking-wide uppercase pb-1 border-b-2 transition-colors duration-300 ${
                  isActive ? "text-[#2E368F] border-[#2E368F]" : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {chip.label}
                {chip.count !== null && <span className="ml-1">{chip.count}</span>}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-y-16">
          {projects.map((project, i) => (
            <article key={`${project.title}-${i}`} className="h-full flex flex-col">
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {project.badges.map((badge, bi) => (
                    <span
                      key={badge}
                      className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white ${
                        bi === 0 && project.badges.length > 1 ? "bg-[#2E368F]/90" : "bg-[#81D1E8]/90 text-[#2E368F]"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-5 text-[26px] sm:text-[28px] font-extralight tracking-tight text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 min-h-[56px] sm:min-h-[60px] text-[17px] sm:text-[18px] text-gray-500 font-light leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="mt-auto pt-5">
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">Value</span>
                    <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                      {project.value}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">Year</span>
                    <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">Scope</span>
                    <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                      {project.scope}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <Button variant="secondary">READ MORE</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
