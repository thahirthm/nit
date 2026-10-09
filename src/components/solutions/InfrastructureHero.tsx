"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function InfrastructureHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[520px] overflow-hidden">
          <Image
            src="/images/infra-banner.png"
            alt={isAr ? "منظر جوي لأفق مدينة سعودية" : "Aerial view of a Saudi Arabian city skyline"}
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
                صُممت لتشغيل الطاقة.
                <br />
                وبُنيت لتحقيق الترابط.
              </>
            ) : (
              <>
                Engineered to power.
                <br />
                Built to connect.
              </>
            )}
          </h1>

          <div className={`absolute bottom-6 sm:bottom-8 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}>
            <Button href="/contact" variant="secondary">
              {isAr ? "تواصل معنا" : "Connect with us"}
            </Button>
          </div>
        </div>

        <div className={`flex mt-10 lg:mt-14 ${isAr ? "justify-start" : "justify-end"}`}>
          <div dir={isAr ? "rtl" : "ltr"} className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "تصمم نسما للبنية التحتية والتقنية (NIT) وتنفّذ البنية التحتية الحيوية التي تشغّل المملكة العربية السعودية، بدءًا من المحطات الفرعية وخطوط أنابيب المياه، وصولًا إلى الأنظمة الصناعية وشبكات الاتصالات، وعمليات التشغيل طويلة الأمد التي تضمن استمرار عملها."
                : "NIT engineers and delivers the critical infrastructure that powers Saudi Arabia — from substations and water pipelines to industrial systems, communication networks, and the long-term operations that keep them running."}
            </p>
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "بصفتها مقاولًا من الدرجة الأولى، ومعتمدة لتنفيذ أعمال الهندسة والمشتريات والإنشاءات (EPC) حتى جهد 380 كيلوفولت، وبخبرة تمتد لثلاثة عقود في تنفيذ أكثر المشاريع تطلبًا في المملكة."
                : "A 1st-Class contractor, approved for EPC work up to 380kV, with three decades of execution across the Kingdom's most demanding projects."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
