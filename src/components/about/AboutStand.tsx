"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const values = {
  en: ["Safety", "Collaboration", "Initiative", "Accountability", "Excellence"],
  ar: ["السلامة", "التعاون", "روح المبادرة", "المساءلة", "التميز"],
};

export function AboutStand() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
          {isAr ? "ما نقوم عليه" : "What we stand on"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.9fr]">
          <div className="relative w-full h-[320px] sm:h-[440px] lg:h-auto">
            <Image
              src="/images/abt-stand.png"
              alt={isAr ? "ما نقوم عليه" : "What we stand on"}
              fill
              className="object-cover"
            />
          </div>

          <div dir={isAr ? "rtl" : "ltr"} className="bg-[#F2F2F2] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <h3 className="text-[36px] lg:text-[44px] font-extralight text-gray-900 leading-none">
              {isAr ? "القيم" : "Values"}
            </h3>
            <p className="mt-4 text-gray-500 text-sm lg:text-base">
              {(isAr ? values.ar : values.en).join(" • ")}
            </p>

            <div className="border-t border-gray-300 my-6 lg:my-8" />

            <h3 className="text-[36px] lg:text-[44px] font-extralight text-gray-900 leading-none">
              {isAr ? "الرؤية" : "Vision"}
            </h3>
            <p className="mt-4 text-gray-500 text-sm lg:text-base leading-relaxed">
              {isAr
                ? "أن نكون الشريك الأكثر قيمة لعملائنا وموردينا ومجتمعاتنا، مع بناء ثقافة من روح المبادرة والتعلّم تستقطب زملاء يتحلّون بروح ريادية وشغف بصنع الفرق."
                : "To be the most valued partner to our clients, suppliers, and communities while creating a culture of initiative and learning that attracts entrepreneurial colleagues who are passionate about making a difference."}
            </p>
            <p className="mt-4 text-gray-500 text-sm lg:text-base leading-relaxed">
              {isAr
                ? "ومن خلال تعزيز بيئة من التعاون والتميز، نمكّن أعضاء فريقنا من تحقيق كامل إمكاناتهم وقيادة تغيير حقيقي في مجتمعنا."
                : "By fostering an environment of collaboration and excellence, we can empower our team members to achieve their full potential and drive meaningful change in our society"}
            </p>

            <div className="border-t border-gray-300 my-6 lg:my-8" />

            <h3 className="text-[36px] lg:text-[44px] font-extralight text-gray-900 leading-none">
              {isAr ? "المهمة" : "Mission"}
            </h3>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-gray-500 text-sm lg:text-base">
                {isAr
                  ? "تصميم وتنفيذ حلول البنية التحتية والتقنية الحيوية."
                  : "To engineer and deliver critical infrastructure and technology solutions."}
              </p>
              <div className="shrink-0">
                <Button variant="primary">{isAr ? "تواصل معنا" : "CONNECT WITH US"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
