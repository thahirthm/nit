"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    title: "Infrastructure",
    slug: "infrastructure",
    image: "/images/infra-banner.png",
    capabilities: [
      "Energy Infrastructure",
      "Transmission & Distribution",
      "Water & MEP Systems",
      "Industrial Infrastructure",
      "Operations & Maintenance",
    ],
  },
  {
    title: "Technology",
    slug: "technology",
    image: "/images/banner.png",
    capabilities: [
      "Digital Transformation",
      "Data & AI",
      "Cloud Services",
      "Cybersecurity",
      "Managed Services",
    ],
  },
];

export function SolutionsCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {cards.map((card) => {
          const isActive = activeCard === card.title;
          return (
            <div
              key={card.title}
              className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden"
              onMouseEnter={() => setActiveCard(card.title)}
              onMouseLeave={() => setActiveCard((current) => (current === card.title ? null : current))}
              onClick={() => setActiveCard((current) => (current === card.title ? null : card.title))}
            >
              <Image src={card.image} alt={card.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10" />

              <h3 className="absolute top-6 left-6 sm:top-8 sm:left-8 text-white text-[28px] sm:text-[36px] lg:text-[42px] font-extralight tracking-tight">
                {card.title}
              </h3>

              <div
                className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8"
                onClick={(e) => e.stopPropagation()}
              >
                <Button href={`/solutions/${card.slug}`} variant="secondary" iconOutline>
                  Read more
                </Button>
              </div>

              {/* Capabilities panel — slides in from the right on hover (desktop) / tap (mobile) */}
              <div
                className={`absolute top-4 right-4 bottom-4 sm:top-5 sm:right-5 sm:bottom-5 lg:top-6 lg:right-6 lg:bottom-6 w-[80%] sm:w-[65%] lg:w-[55%] bg-[#F5F5F5] flex flex-col px-6 sm:px-7 lg:px-8 py-6 sm:py-7 transition-transform duration-500 ease-out ${
                  isActive ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"
                }`}
              >
                <h4 className="text-gray-900 text-[22px] sm:text-[26px] lg:text-[30px] font-extralight tracking-tight">
                  Our Capabilities:
                </h4>
                <div className="border-t border-gray-300 mt-auto">
                  {card.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center justify-between py-2.5 sm:py-3 border-b border-gray-300"
                    >
                      <span className="text-gray-600 text-[15px] sm:text-[17px] lg:text-[19px] font-light">
                        {capability}
                      </span>
                      <span className="text-gray-400 text-lg font-light shrink-0 ml-4">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
