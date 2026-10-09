"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function InvestorsNewsletter() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="bg-[#F7F7F7] px-6 sm:px-10 py-10 sm:py-12 lg:py-14">
          <p dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[20px] sm:text-[22px] font-light leading-relaxed max-w-lg">
            {isAr
              ? "اشترك في النشرة الإخبارية لنسما للاطلاع على أحدث الأخبار والاستراتيجيات ورؤى الطرح العام الأولي."
              : "Subscribe to NIT's newsletter for the latest news, strategy, and IPO insights."}
          </p>

          <form className="mt-10 sm:mt-14" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              dir={isAr ? "rtl" : "ltr"}
              placeholder={isAr ? "البريد الإلكتروني" : "Your Email"}
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-900 placeholder:text-gray-400 text-base focus:outline-none focus:border-[#2E368F] transition-colors"
            />
            <div className="mt-6">
              <Button type="submit" variant="primary">
                {isAr ? "إرسال" : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
