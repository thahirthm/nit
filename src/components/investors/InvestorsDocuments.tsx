"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const documents = [
  {
    en: "NIT Corporate Profile",
    ar: "الملف التعريفي المؤسسي لنسما للبنية التحتية والتقنية",
    href: "/documents/nit-capability-deck.pdf",
  },
  {
    en: "Company Overview & Capabilities",
    ar: "نبذة عن الشركة وإمكاناتها",
    href: "/documents/nit-company-overview.pdf",
  },
  { en: "Annual Report 2025", ar: "التقرير السنوي لعام 2025", href: "/documents/annual-report-2025.pdf" },
  { en: "Annual Report 2024", ar: "التقرير السنوي لعام 2024", href: "/documents/annual-report-2024.pdf" },
  { en: "Sustainability Report", ar: "تقرير الاستدامة", href: "/documents/sustainability-report.pdf" },
];

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1V10.5M8 10.5L4.5 7M8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.5 13H14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export function InvestorsDocuments() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight">
          {isAr ? "مكتبة الوثائق" : "Document library"}
        </h2>

        <div className="relative w-full h-[160px] sm:h-[220px] lg:h-[260px] mt-8 lg:mt-10 overflow-hidden">
          <Image src="/images/invest.png" alt="NIT corporate brand" fill className="object-cover" />
        </div>

        <div className="mt-2 border-t border-gray-200">
          {documents.map((doc) => (
            <a
              key={doc.en}
              href={doc.href}
              dir={isAr ? "rtl" : "ltr"}
              className="group flex items-center justify-between py-5 border-b border-gray-200 transition-colors duration-300"
            >
              <span className="text-[#2E368F] text-[18px] sm:text-[20px] font-light group-hover:text-[#1c2260] transition-colors duration-300">
                {isAr ? doc.ar : doc.en}
              </span>
              <DownloadIcon className="text-gray-400 group-hover:text-[#2E368F] transition-colors duration-300 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
