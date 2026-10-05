"use client";

import { useState } from "react";

type IconProps = { active?: boolean };

const BriefcaseIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 46" fill="none">
    <path d="M38.8125 11.5H7.1875C6.39359 11.5 5.75 12.1436 5.75 12.9375V35.9375C5.75 36.7314 6.39359 37.375 7.1875 37.375H38.8125C39.6064 37.375 40.25 36.7314 40.25 35.9375V12.9375C40.25 12.1436 39.6064 11.5 38.8125 11.5Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30.1875 11.5V8.625C30.1875 7.8625 29.8846 7.13123 29.3454 6.59207C28.8063 6.0529 28.075 5.75 27.3125 5.75H18.6875C17.925 5.75 17.1937 6.0529 16.6546 6.59207C16.1154 7.13123 15.8125 7.8625 15.8125 8.625V11.5" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.75 27.3125H40.25" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrendIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 46" fill="none">
    <path d="M41.6875 10.0625L24.4375 27.3125L17.25 20.125L4.3125 33.0625" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.4375" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41.6875 21.5625V10.0625H30.1875" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.4375" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HandshakeIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 46" fill="none">
    <path d="M35.9375 27.3125L28.75 34.5L17.25 31.625L7.1875 24.4375" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.0605 12.6913L23.0009 10.0625L32.9412 12.6913" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.17494 10.8568L1.58931 20.0316C1.41889 20.3724 1.39073 20.7669 1.51102 21.1284C1.6313 21.4899 1.89019 21.7889 2.2308 21.9597L7.18658 24.4375L13.0588 12.6914L8.10478 10.2153C7.93596 10.1306 7.75211 10.08 7.56374 10.0665C7.37536 10.0529 7.18616 10.0766 7.00694 10.1361C6.82772 10.1957 6.66199 10.29 6.51923 10.4137C6.37648 10.5373 6.25948 10.6879 6.17494 10.8568Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38.8116 24.4375L43.7674 21.9597C44.108 21.7889 44.3669 21.4899 44.4872 21.1284C44.6075 20.7669 44.5793 20.3724 44.4089 20.0316L39.8233 10.8568C39.7387 10.6879 39.6217 10.5373 39.479 10.4137C39.3362 10.29 39.1705 10.1957 38.9913 10.1361C38.8121 10.0766 38.6229 10.0529 38.4345 10.0665C38.2461 10.08 38.0623 10.1306 37.8934 10.2153L32.9395 12.6914L38.8116 24.4375Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33.0633 12.9375H25.8758L17.6713 20.8959C17.5188 21.0483 17.4025 21.2331 17.3311 21.4366C17.2597 21.6401 17.235 21.857 17.2588 22.0713C17.2826 22.2857 17.3543 22.4919 17.4687 22.6747C17.583 22.8576 17.737 23.0123 17.9193 23.1276C21.0656 25.1383 25.3368 24.9999 28.7508 21.5625L35.9383 27.3125L38.8133 24.4375" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.292 38.8125L14.7955 36.9384L10.0625 33.5566" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HourglassIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 46" fill="none">
    <path d="M23 23L12.075 14.8063C11.8965 14.6724 11.7516 14.4987 11.6518 14.2991C11.552 14.0995 11.5 13.8794 11.5 13.6562V7.1875C11.5 6.80625 11.6515 6.44062 11.921 6.17103C12.1906 5.90145 12.5563 5.75 12.9375 5.75H33.0625C33.4437 5.75 33.8094 5.90145 34.079 6.17103C34.3486 6.44062 34.5 6.80625 34.5 7.1875V13.5916C34.4993 13.8132 34.4474 14.0317 34.3482 14.2299C34.2491 14.4282 34.1055 14.6008 33.9286 14.7344L23 23Z" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 23L12.075 31.1938C11.8965 31.3276 11.7516 31.5013 11.6518 31.7009C11.552 31.9005 11.5 32.1206 11.5 32.3438V38.8125C11.5 39.1937 11.6515 39.5594 11.921 39.829C12.1906 40.0986 12.5563 40.25 12.9375 40.25H33.0625C33.4437 40.25 33.8094 40.0986 34.079 39.829C34.3486 39.5594 34.5 39.1937 34.5 38.8125V32.4084C34.4999 32.1862 34.4482 31.967 34.349 31.7681C34.2499 31.5692 34.106 31.3959 33.9286 31.262L23 23Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const reasons = [
  {
    icon: BriefcaseIcon,
    title: "Meaningful Projects",
    description:
      "Work on high-impact national infrastructure and technology initiatives across energy, telecom, transportation, and smart systems.",
  },
  {
    icon: TrendIcon,
    title: "Career Goal",
    description: "Access mentorship, technical development programs, certifications, and leadership opportunities.",
  },
  {
    icon: HandshakeIcon,
    title: "Innovation Driven Growth",
    description:
      "Collaborate with experts in digital transformation, AI, cloud services, cybersecurity, and sustainable infrastructure.",
  },
  {
    icon: HourglassIcon,
    title: "Long-term Visibility",
    description:
      "Join one of Saudi Arabia's established infrastructure and technology organizations with decades of industry leadership.",
  },
];

export function CareersWhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
          Why work with us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isActive = hoveredIndex === i;
            return (
              <div
                key={reason.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
                className="relative border border-gray-200 p-6 sm:p-7 overflow-hidden cursor-pointer"
              >
                {/* Slide-up navy background on hover */}
                <div
                  className={`absolute inset-0 bg-[#2E368F] transition-transform duration-500 ease-in-out z-0 ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                <div className="relative z-10">
                  <Icon active={isActive} />
                  <h3
                    className={`mt-5 text-[15px] sm:text-[16px] font-normal tracking-wide uppercase transition-colors duration-500 ${
                      isActive ? "text-white" : "text-[#2E368F]"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={`mt-3 text-[18px] sm:text-[19px] leading-relaxed font-light transition-colors duration-500 ${
                      isActive ? "text-white/80" : "text-gray-400"
                    }`}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
