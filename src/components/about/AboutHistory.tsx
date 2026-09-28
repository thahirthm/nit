"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const milestones = [
  {
    year: "1979",
    label: "Group foundation",
    title: "Nesma group founded by H.E. Saleh Al Turki",
    description:
      "A privately owned Saudi Arabian company is established in Jeddah, building a reputation for financial strength, business integrity, and world-class quality across multiple sectors.",
  },
  {
    year: "1988",
    label: "NIT founded",
    title: "NIT Established in Riyadh, KSA",
    description:
      "Nesma Infrastructure & Technology is founded in Riyadh, beginning its journey as a specialized infrastructure and technology solutions provider focusing on energy solutions and communication systems across the Kingdom.",
  },
  {
    year: "1995",
    label: "Expansion",
    title: "Expansion into industrial infrastructure",
    description:
      "NIT broadens its portfolio into industrial and energy infrastructure, delivering complex projects for national clients.",
  },
  {
    year: "2011",
    label: "Technology division",
    title: "Technology division launched",
    description:
      "A dedicated technology arm is formed to support digital transformation across energy, government, and telecom sectors.",
  },
  {
    year: "2014",
    label: "Strategic partnerships",
    title: "Key strategic partnerships formed",
    description:
      "NIT forges alliances with leading international technology and engineering firms to strengthen local delivery capability.",
  },
  {
    year: "2017",
    label: "Vision 2030 alignment",
    title: "Aligning with Vision 2030",
    description:
      "NIT realigns its strategy to support the Kingdom's Vision 2030 goals, focusing on local content and digital infrastructure.",
  },
  {
    year: "2019",
    label: "Smart infrastructure",
    title: "Smart infrastructure projects begin",
    description:
      "Investment in smart grid, IoT, and connected infrastructure solutions accelerates across major Saudi cities.",
  },
  {
    year: "2021",
    label: "Digital transformation",
    title: "Enterprise digital transformation",
    description:
      "NIT scales its technology services, delivering ERP, cloud, and cybersecurity solutions to government and private clients.",
  },
  {
    year: "2023",
    label: "NEOM & giga-projects",
    title: "Entry into NEOM and giga-projects",
    description:
      "NIT secures major contracts supporting NEOM and other national giga-projects, reinforcing its role in the Kingdom's future.",
  },
  {
    year: "2024",
    label: "60,000+ workforce",
    title: "In-Kingdom workforce surpasses 60,000",
    description:
      "The Nesma Group workforce crosses 60,000, reflecting sustained growth across infrastructure and technology sectors.",
  },
  {
    year: "2026",
    label: "Looking ahead",
    title: "Continuing the journey",
    description:
      "NIT continues to engineer and deliver critical infrastructure and technology solutions across the Kingdom and beyond.",
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutHistory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = milestones[activeIndex];
  const lastIndex = milestones.length - 1;

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lastIndex, i + 1));

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-12">
          Our history
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
          {/* Big year — slides in from the top on change */}
          <div className="overflow-hidden h-[120px] sm:h-[160px] lg:h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h3
                key={active.year}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-anek-latin)] text-[90px] sm:text-[130px] lg:text-[170px] font-light text-[#2E368F] leading-none"
              >
                {active.year}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Right: label + title + description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.year}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-2 text-[14px] lg:text-[15px] font-normal bg-gray-100 text-[#2E368F]">
                {active.label}
              </span>
              <h4 className="mt-4 text-[22px] lg:text-[28px] font-normal text-gray-900">
                {active.title}
              </h4>
              <p className="mt-3 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline track */}
        <div className="mt-10 lg:mt-14 flex items-start gap-4 lg:gap-10">
          {/* Arrows — aligned with the year-label row below the dots */}
          <div className="flex items-center gap-4 shrink-0 pt-[46px] lg:pt-[50px]">
            <button
              aria-label="Previous"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className={`transition-colors ${activeIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              aria-label="Next"
              onClick={goNext}
              disabled={activeIndex === lastIndex}
              className={`transition-colors ${activeIndex === lastIndex ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
            >
              <ArrowIcon />
            </button>
          </div>

          {/* Dots + line, and year labels — share the same width so each label sits under its dot */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              <div className="absolute top-[8px] left-[5px] right-[5px] h-px bg-gray-200" />
              <div
                className="absolute top-[8px] left-0 h-px bg-[#2E368F] transition-all duration-500 ease-out"
                style={{ width: `${(activeIndex / lastIndex) * 100}%` }}
              />
              <div className="relative flex justify-between">
                {milestones.map((m, i) => (
                  <button
                    key={m.year}
                    aria-label={`Show ${m.year}`}
                    onClick={() => setActiveIndex(i)}
                    className="p-1"
                  >
                    <span
                      className={`block w-[11px] h-[11px] rounded-full border-2 transition-colors duration-500 ${
                        i <= activeIndex ? "bg-[#2E368F] border-[#2E368F]" : "bg-white border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              {milestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => setActiveIndex(i)}
                  className={`font-[family-name:var(--font-anek-latin)] text-[13px] sm:text-sm lg:text-base transition-colors duration-300 ${
                    i === activeIndex ? "text-[#2E368F] font-medium" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
