"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function TechnologyHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/tech-banner.png"
            alt={isAr ? "تصور رقمي مجرد للتقنية" : "Abstract digital technology render"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <h1
            dir={isAr ? "rtl" : "ltr"}
            className={`absolute top-6 sm:top-8 lg:top-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight ${
              isAr ? "right-6 sm:right-8 lg:right-10 text-right" : "left-6 sm:left-8 lg:left-10"
            }`}
          >
            {isAr ? (
              <>
                الذكاء الذي يقف وراء
                <br />
                العمليات الحديثة.
              </>
            ) : (
              <>
                The intelligence behind
                <br />
                modern operations.
              </>
            )}
          </h1>

          <div className={`absolute bottom-6 sm:bottom-8 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}>
            <Button href="/contact" variant="secondary">
              {isAr ? "تواصل معنا" : "Connect with Us"}
            </Button>
          </div>
        </div>

        <div className={`flex mt-10 lg:mt-14 ${isAr ? "justify-start" : "justify-end"}`}>
          <div dir={isAr ? "rtl" : "ltr"} className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "تقدم نسما للبنية التحتية والتقنية حلولًا تقنية متقدمة تساعد الجهات في المملكة على تحديث أعمالها، وتعزيز أمنها، والتوسع في مجالات التحول الرقمي، والبيانات والذكاء الاصطناعي، والحوسبة السحابية، ومراكز البيانات من المستوى الثالث (Tier III)، والأمن السيبراني. وقد أثبتت هذه الحلول كفاءتها في أكثر البرامج طموحًا في المملكة."
                : "NIT delivers advanced technology solutions that help the Kingdom's organizations modernize, secure, and scale across digital transformation, data and AI, cloud, Tier III data centers, and cybersecurity. Proven on the Kingdom's most ambitious programs."}
            </p>
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "بدءًا من شبكة الألياف الضوئية الثابتة في نيوم، وصولًا إلى منصات سلاسل الكتل والبنية التحتية الوطنية للذكاء الاصطناعي."
                : "From NEOM's fixed optical network to blockchain platforms and national AI infrastructure."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
