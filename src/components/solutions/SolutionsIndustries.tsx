"use client";

import { useState } from "react";

type Industry = {
  title: string;
  description: string;
  icon: (active: boolean) => React.ReactNode;
};

const industries: Industry[] = [
  {
    title: "Energy & Power",
    description: "Power infrastructure for national utilities and industrial operations.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path d="M28.875 2.75V11" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.57529" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.125 2.75V11" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.57529" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 33V41.25" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.57529" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 11H38.5" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.57529" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M9.625 11V27.5C9.625 28.9587 10.2045 30.3576 11.2359 31.3891C12.2674 32.4205 13.6663 33 15.125 33H28.875C30.3337 33 31.7326 32.4205 32.7641 31.3891C33.7955 30.3576 34.375 28.9587 34.375 27.5V11"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.57529"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6875 27.5L24.75 22H19.25L21.3125 16.5"
          stroke={active ? "#FFFFFF" : "#81D1E8"}
          strokeWidth="1.57529"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Telecommunications",
    description: "Network infrastructure enabling nationwide connectivity and communications.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path d="M9.625 39.875L22 15.125L34.375 39.875" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15.235 16.3572C15.0557 15.3668 15.096 14.349 15.3532 13.3758C15.6103 12.4027 16.0781 11.4978 16.7233 10.7253C17.3686 9.9527 18.1756 9.33124 19.0873 8.9048C19.9991 8.47835 20.9934 8.25732 22 8.25732C23.0066 8.25732 24.0009 8.47835 24.9127 8.9048C25.8244 9.33124 26.6314 9.9527 27.2767 10.7253C27.9219 11.4978 28.3897 12.4027 28.6468 13.3758C28.904 14.349 28.9443 15.3668 28.765 16.3572"
          stroke={active ? "#FFFFFF" : "#81D1E8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1223 22.5809C10.736 20.744 9.88938 18.5569 9.67754 16.2653C9.46571 13.9738 9.89707 11.6685 10.9232 9.60858C11.9493 7.54865 13.5295 5.81566 15.4862 4.6043C17.4429 3.39295 19.6987 2.75122 22 2.75122C24.3013 2.75122 26.5571 3.39295 28.5138 4.6043C30.4706 5.81566 32.0507 7.54865 33.0768 9.60858C34.1029 11.6685 34.5343 13.9738 34.3225 16.2653C34.1106 18.5569 33.264 20.744 31.8777 22.5809"
          stroke={active ? "#FFFFFF" : "#81D1E8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.375 34.375H31.625" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.125 28.875H28.875" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Water & Utilities",
    description: "Water treatment and distribution systems built for scale and reliability.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path
          d="M35.75 24.75C35.75 12.375 22 2.75 22 2.75C22 2.75 8.25 12.375 8.25 24.75C8.25 28.3967 9.69866 31.8941 12.2773 34.4727C14.8559 37.0513 18.3533 38.5 22 38.5C25.6467 38.5 29.1441 37.0513 31.7227 34.4727C34.3013 31.8941 35.75 28.3967 35.75 24.75Z"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M23.375 33C26.8125 32.4208 29.6673 29.5625 30.25 26.125" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Oil & Gas",
    description: "Engineering solutions supporting upstream and downstream operations.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path
          d="M21.1939 5.5H34.375C34.7397 5.5 35.0894 5.64487 35.3473 5.90273C35.6051 6.16059 35.75 6.51033 35.75 6.875V37.125C35.75 37.4897 35.6051 37.8394 35.3473 38.0973C35.0894 38.3551 34.7397 38.5 34.375 38.5H9.625C9.26033 38.5 8.91059 38.3551 8.65273 38.0973C8.39487 37.8394 8.25 37.4897 8.25 37.125V18.4439C8.25017 18.0797 8.39481 17.7305 8.65219 17.4728L20.2228 5.90219C20.4805 5.64481 20.8297 5.50017 21.1939 5.5Z"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M23.375 11H30.25" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.75 20.625L30.25 33" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30.25 20.625L13.75 33" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M11.4023 14.7229L8.65229 11.9729C8.52445 11.8452 8.42303 11.6936 8.35384 11.5266C8.28464 11.3597 8.24902 11.1808 8.24902 11.0001C8.24902 10.8194 8.28464 10.6405 8.35384 10.4736C8.42303 10.3066 8.52445 10.155 8.65229 10.0273L12.7773 5.90229C12.905 5.77445 13.0566 5.67303 13.2236 5.60384C13.3905 5.53464 13.5694 5.49902 13.7501 5.49902C13.9308 5.49902 14.1097 5.53464 14.2766 5.60384C14.4436 5.67303 14.5952 5.77445 14.7229 5.90229L17.4729 8.65229"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Transport & Mobility",
    description: "Smart transport systems connecting the Kingdom's cities and regions.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path d="M2.75 19.25H41.25" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M38.5 30.25V34.375C38.5 34.7397 38.3551 35.0894 38.0973 35.3473C37.8394 35.6051 37.4897 35.75 37.125 35.75H33C32.6353 35.75 32.2856 35.6051 32.0277 35.3473C31.7699 35.0894 31.625 34.7397 31.625 34.375V30.25"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.375 30.25V34.375C12.375 34.7397 12.2301 35.0894 11.9723 35.3473C11.7144 35.6051 11.3647 35.75 11 35.75H6.875C6.51033 35.75 6.16059 35.6051 5.90273 35.3473C5.64487 35.0894 5.5 34.7397 5.5 34.375V30.25"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11 24.75H13.75" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30.25 24.75H33" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M38.5 19.25L33.3627 7.69141C33.2546 7.4484 33.0784 7.24194 32.8554 7.09703C32.6324 6.95213 32.3722 6.875 32.1063 6.875H11.8937C11.6278 6.875 11.3676 6.95213 11.1446 7.09703C10.9216 7.24194 10.7454 7.4484 10.6373 7.69141L5.5 19.25V30.25H38.5V19.25Z"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Renewable Energy",
    description: "Solar and wind systems advancing the Kingdom's clean energy goals.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path
          d="M25.4547 10.6321L12.3922 2.94073C12.2363 2.84781 12.0636 2.78667 11.8839 2.76083C11.7043 2.735 11.5213 2.74497 11.3456 2.79019C11.1698 2.83541 11.0048 2.91497 10.8599 3.02429C10.715 3.13361 10.5933 3.27052 10.5016 3.42714L8.43907 6.92308C8.34622 7.07907 8.28518 7.2519 8.25947 7.4316C8.23376 7.6113 8.24388 7.79431 8.28926 7.97008C8.33464 8.14585 8.41438 8.31089 8.52387 8.45568C8.63336 8.60047 8.77044 8.72215 8.92719 8.8137L35.0694 24.2C35.2261 24.2915 35.3632 24.4132 35.4727 24.558C35.5822 24.7028 35.6619 24.8678 35.7073 25.0436C35.7527 25.2193 35.7628 25.4024 35.7371 25.5821C35.7114 25.7618 35.6504 25.9346 35.5575 26.0906L33.495 29.5865C33.4033 29.7431 33.2815 29.88 33.1367 29.9894C32.9918 30.0987 32.8267 30.1782 32.651 30.2235C32.4752 30.2687 32.2923 30.2787 32.1126 30.2528C31.933 30.227 31.7603 30.1658 31.6044 30.0729L18.5419 22.3815"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1324 13.0453L8.44098 26.1078C8.34806 26.2636 8.28691 26.4364 8.26108 26.616C8.23524 26.7956 8.24522 26.9786 8.29043 27.1544C8.33565 27.3301 8.41521 27.4952 8.52453 27.6401C8.63385 27.7849 8.77077 27.9067 8.92738 27.9984L12.4233 30.0609C12.5793 30.1537 12.7521 30.2148 12.9318 30.2405C13.1115 30.2662 13.2946 30.2561 13.4703 30.2107C13.6461 30.1653 13.8111 30.0856 13.9559 29.9761C14.1007 29.8666 14.2224 29.7295 14.3139 29.5728L29.6933 3.43745C29.7849 3.28069 29.9065 3.14361 30.0513 3.03412C30.1961 2.92463 30.3612 2.8449 30.5369 2.79952C30.7127 2.75414 30.8957 2.74401 31.0754 2.76972C31.2551 2.79543 31.428 2.85647 31.5839 2.94932L35.0799 5.01182C35.2365 5.10351 35.3734 5.22529 35.4827 5.37015C35.5921 5.51501 35.6716 5.68008 35.7168 5.85583C35.762 6.03159 35.772 6.21456 35.7462 6.39419C35.7204 6.57382 35.6592 6.74656 35.5663 6.90245L27.8749 19.9649"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.5 39.875H38.5" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.5933 28.282L30.2501 39.875" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5152 27.5188L13.75 39.8749" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Government & Defense",
    description: "Mission-critical systems built to national security standards.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path d="M22 16.5V23.375" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.125 20.625L22 23.375" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.875 28.875L22 23.375" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.125 28.875L22 23.375" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.875 20.625L22 23.375" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M37.125 19.25V9.625C37.125 9.26033 36.9801 8.91059 36.7223 8.65273C36.4644 8.39487 36.1147 8.25 35.75 8.25H8.25C7.88533 8.25 7.53559 8.39487 7.27773 8.65273C7.01987 8.91059 6.875 9.26033 6.875 9.625V19.25C6.875 35.75 22 39.875 22 39.875C22 39.875 37.125 35.75 37.125 19.25Z"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Technology & Digital",
    description: "Digital platforms and infrastructure powering the Kingdom's transformation.",
    icon: (active) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" className="w-9 h-9 sm:w-10 sm:h-10">
        <path
          d="M28.875 20.625C30.3938 20.625 31.625 19.3938 31.625 17.875C31.625 16.3562 30.3938 15.125 28.875 15.125C27.3562 15.125 26.125 16.3562 26.125 17.875C26.125 19.3938 27.3562 20.625 28.875 20.625Z"
          stroke={active ? "#FFFFFF" : "#81D1E8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.125 31.625C16.6438 31.625 17.875 30.3938 17.875 28.875C17.875 27.3562 16.6438 26.125 15.125 26.125C13.6062 26.125 12.375 27.3562 12.375 28.875C12.375 30.3938 13.6062 31.625 15.125 31.625Z"
          stroke={active ? "#FFFFFF" : "#81D1E8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M26.125 37.125V27.5L15.125 16.5V6.875" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.125 26.125V16.5" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M35.75 6.875H8.25C7.49061 6.875 6.875 7.49061 6.875 8.25V35.75C6.875 36.5094 7.49061 37.125 8.25 37.125H35.75C36.5094 37.125 37.125 36.5094 37.125 35.75V8.25C37.125 7.49061 36.5094 6.875 35.75 6.875Z"
          stroke={active ? "#FFFFFF" : "#2E368F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M23.375 6.875V12.375L26.9311 15.9311" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function SolutionsIndustries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-6 lg:mb-8">
          Industries we serve
        </h2>

        <p className="text-[17px] sm:text-[19px] leading-relaxed font-light text-[#727272] max-w-2xl mb-10 lg:mb-14">
          The Kingdom&apos;s most critical sectors rely on the systems we engineer — from energy giants and water
          authorities to defense, telecom, and national institutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {industries.map((industry, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={industry.title}
                className="relative h-[160px] sm:h-[190px] lg:h-[210px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer overflow-hidden bg-white border border-gray-200"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex((current) => (current === i ? null : current))}
                onClick={() => setActiveIndex((current) => (current === i ? null : i))}
              >
                {/* Blue fill slides up to cover the card, matching the site-wide hover reveal */}
                <div
                  className={`absolute inset-0 bg-[#2E368F] transition-transform duration-500 ease-in-out z-0 ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                <div className="relative z-10">
                  <h3
                    className={`text-[22px] sm:text-[26px] font-extralight tracking-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p
                    className={`mt-3 text-[14px] sm:text-[16px] leading-relaxed font-light max-w-[220px] transition-opacity duration-300 ${
                      isActive ? "text-white/80 opacity-100" : "text-transparent opacity-0"
                    }`}
                  >
                    {industry.description}
                  </p>
                </div>

                <div className={`relative z-10 self-end transition-colors duration-300 ${isActive ? "text-white" : "text-[#2E368F]"}`}>
                  {industry.icon(isActive)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
