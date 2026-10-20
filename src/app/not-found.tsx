"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <main className="min-h-screen">
      <section className={`w-full bg-white pt-[140px] lg:pt-[180px] pb-16 lg:pb-24 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
        <div className="w-full px-6 lg:site-gutter">
          <div className="bg-[#F7F7F7] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 min-h-[480px] lg:min-h-[620px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div
              dir={isAr ? "rtl" : "ltr"}
              className={`flex flex-col border-gray-200 ${isAr ? "lg:border-l lg:pl-16" : "lg:border-r lg:pr-16"}`}
            >
              <h1 className="text-gray-900 text-[32px] sm:text-[40px] lg:text-[44px] font-extralight tracking-tight leading-[1.15]">
                {isAr ? "عذرًا! الصفحة غير موجودة" : "Oops! Page not found"}
              </h1>

              <p className="mt-5 text-gray-500 text-[16px] sm:text-[17px] leading-relaxed font-light">
                {isAr ? (
                  <>
                    تعذّر علينا العثور على الصفحة التي تبحث عنها؛
                    <br />
                    من المحتمل أن يكون الرابط معطلاً.
                  </>
                ) : (
                  <>
                    We can&apos;t find the page you&apos;re looking for;
                    <br />
                    Probably the link is broken.
                  </>
                )}
              </p>

              <div className="mt-auto pt-10">
                <Button href="/" variant="primary">
                  {isAr ? "استكشف الصفحة الرئيسية" : "Explore our home"}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <svg
                aria-hidden="true"
                viewBox="0 0 716 456"
                className="w-[260px] sm:w-[380px] lg:w-[460px] h-auto select-none"
                fill="none"
              >
                {/* "4" */}
                <path
                  d="M180 40 L20 300 L210 300 M180 40 L180 416"
                  stroke="#9CA3AF"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* "0" — stadium/pill shape */}
                <rect
                  x="250"
                  y="40"
                  width="180"
                  height="376"
                  rx="90"
                  stroke="#9CA3AF"
                  strokeWidth="10"
                />
                {/* "4" */}
                <path
                  d="M650 40 L490 300 L680 300 M650 40 L650 416"
                  stroke="#9CA3AF"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
