"use client";

import { useState } from "react";
import Image from "next/image";

const awards = [
  {
    year: "2026",
    title: "Visionary Leader in Digital & Energy Infrastructure Transformation",
    date: "Apr 14",
    body: "Global Economics Awards",
    tag: "Leadership",
    image: "/images/re1.png",
  },
  {
    year: "2025",
    title: "Fastest Growing EPC Solutions Provider — Power & Energy",
    date: "Mar 12",
    body: "Global Business Outlook Awards",
    tag: "EPC Solutions",
    image: "/images/re2.png",
  },
  {
    year: "2026",
    title: "Leading Smart Infrastructure Partner — Digital Construction",
    date: "Jul 20",
    body: "Global Economics Awards",
    tag: "Smart Infrastructure",
    image: "/images/re3.png",
  },
  {
    year: "2025",
    title: "Most Innovative Infrastructure Technology Integrator",
    date: "Dec 28",
    body: "Global Business Outlook Awards",
    tag: "Innovation",
    image: "/images/re4.png",
  },
];

export function MediaAwards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
          Recognized for excellence
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="border-t border-gray-200">
            {awards.map((award, i) => (
              <div
                key={award.title}
                onMouseEnter={() => setActiveIndex(i)}
                className="group py-4 border-b border-gray-200 cursor-default"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-anek-latin)] text-[#2E368F] text-[28px] sm:text-[32px] font-normal shrink-0">
                    {award.year}
                  </span>
                  <h3 className="text-gray-700 text-[22px] sm:text-[26px] font-light group-hover:text-[#2E368F] transition-colors duration-300">
                    {award.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-400 text-[16px] sm:text-[17px] font-light">
                  {award.date}
                  <span className="mx-1">·</span>
                  {award.body}
                  <span className="mx-1.5">|</span>
                  {award.tag}
                </p>
              </div>
            ))}
          </div>

          {/* Award image — swaps per hovered row */}
          <div className="hidden lg:block relative w-full h-[420px]">
            <div key={activeIndex} className="absolute inset-0 animate-fade-in">
              <Image src={awards[activeIndex].image} alt={awards[activeIndex].title} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
