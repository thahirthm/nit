"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <main className="min-h-screen">
      <section className={`w-full bg-white pt-[140px] lg:pt-[180px] pb-16 lg:pb-24 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
        <div className="w-full px-6 lg:px-16">
          <div className="bg-[#F7F7F7] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              dir={isAr ? "rtl" : "ltr"}
              className={`border-gray-200 ${isAr ? "lg:border-l lg:pl-16" : "lg:border-r lg:pr-16"}`}
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

              <div className="mt-10">
                <Button href="/" variant="primary">
                  {isAr ? "استكشف الصفحة الرئيسية" : "Explore our home"}
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <span
                aria-hidden="true"
                style={{ WebkitTextStroke: "1.5px #9CA3AF", color: "transparent" }}
                className="font-[family-name:var(--font-futura)] font-extralight text-[140px] sm:text-[200px] lg:text-[240px] leading-none select-none tracking-tight"
              >
                404
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
