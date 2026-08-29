"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import "swiper/css";

const projects = [
  {
    category: "INFRASTRUCTURAL",
    title: "Oxagon village",
    location: "KSA",
    client: "NEOM",
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/neom-white.png",
    logoAlt: "NEOM",
    description: [
      "Dedicated living community within NEOM's Oxagon, designed to house approximately 20,000 residents.",
      "The project integrates schools, healthcare, retail, hospitality, and walkable smart mobility systems, creating a sustainable urban environment that connects directly with Oxagon's industrial and innovation hub.",
    ],
  },
  {
    category: "INFRASTRUCTURAL",
    title: "400 MW Wind farm",
    location: "Dumat Al Jandal",
    client: "Principal Buyer",
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/vis.png",
    logoAlt: "Vision 2030",
    description: [
      "One of the largest wind energy facilities in the Middle East, delivering clean power to the national grid.",
      "The project supports the Kingdom's renewable energy targets under Vision 2030, reducing carbon emissions while strengthening long-term energy security.",
    ],
  },
  {
    category: "TECHNOLOGY",
    title: "Smart Grid Rollout",
    location: "KSA",
    client: "NEOM",
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/neom-white.png",
    logoAlt: "NEOM",
    description: [
      "A nationwide smart grid deployment enabling real-time monitoring, automated fault detection, and demand-responsive distribution.",
      "The system lays the digital backbone for NEOM's fully connected, sustainable energy network.",
    ],
  },
  {
    category: "INFRASTRUCTURAL",
    title: "Water Desalination Plant",
    location: "Jeddah",
    client: "Principal Buyer",
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/vis.png",
    logoAlt: "Vision 2030",
    description: [
      "A large-scale desalination facility securing sustainable freshwater supply for Jeddah and surrounding communities.",
      "Built with energy-efficient reverse osmosis technology, the plant supports the Kingdom's long-term water security strategy.",
    ],
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ProjectsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="w-full overflow-x-hidden bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      {/* Heading + Nav */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-12 flex items-center justify-between">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          Featured projects
        </h2>

        <div className="flex items-center gap-4 lg:gap-6">
          <button
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
          >
            <ArrowIcon className="rotate-180" />
          </button>
          <button
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full pl-6 lg:pl-16">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={24}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="!w-[80vw] lg:!w-[1000px]">
              <div className="group relative w-full h-[420px] sm:h-[550px] lg:h-[700px] overflow-hidden">
                {/* Base image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover animate-kenburns"
                />

                {/* Hover image — slides down from the top to cover the base image */}
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out overflow-hidden">
                  <Image
                    src={project.hoverImage}
                    alt={`${project.title} at night`}
                    fill
                    className="object-cover animate-kenburns"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/70" />

                <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-white">
                  {/* Top: category, title, meta */}
                  <div>
                    <span className="text-xs font-medium tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-[28px] sm:text-[38px] lg:text-[48px] font-normal leading-none">
                      {project.title}
                    </h3>

                    <div className="mt-6 grid grid-cols-[90px_auto] gap-y-2 text-xs font-medium tracking-wider uppercase">
                      <span className="opacity-70">Location</span>
                      <span>{project.location}</span>
                      <span className="opacity-70">Client</span>
                      <span>{project.client}</span>
                    </div>
                  </div>

                  {/* Bottom: logo + CTA (default state) */}
                  <div className="flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex flex-col items-start gap-2">
                      <div className={`relative w-[90px] h-[90px] ${project.logoAlt === "Vision 2030" ? "bg-white/95 p-2" : ""}`}>
                        <Image src={project.logo} alt={project.logoAlt} fill className="object-contain" />
                      </div>
                   
                    </div>

                    <Button variant="secondary">READ MORE</Button>
                  </div>
                </div>

                {/* Hover panel — description slides up from the bottom */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150 bg-white/15 backdrop-blur-md p-6 lg:p-8 flex flex-col sm:flex-row sm:items-end gap-6 text-white">
                  <div className={`relative w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] shrink-0 ${project.logoAlt === "Vision 2030" ? "bg-white/95 p-2" : ""}`}>
                    <Image src={project.logo} alt={project.logoAlt} fill className="object-contain" />
                  </div>

                  <div className="flex-1 space-y-3">
                    {project.description.map((paragraph, idx) => (
                      <p key={idx} className="text-sm lg:text-base font-light leading-relaxed text-white/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="shrink-0">
                    <Button variant="secondary">READ MORE</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
