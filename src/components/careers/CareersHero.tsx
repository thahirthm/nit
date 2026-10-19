"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function CareersHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className="relative w-full h-[320px] sm:h-[440px] lg:h-[600px] overflow-hidden"
        >
          <Image quality={95}
            src="/images/career-banner.png"
            alt={isAr ? "فريق نسما في الموقع" : "NIT team on site"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            dir={isAr ? "rtl" : "ltr"}
            className={`absolute top-6 sm:top-8 lg:top-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight ${
              isAr ? "right-6 sm:right-8 lg:right-10" : "left-6 sm:left-8 lg:left-10"
            }`}
          >
            {isAr ? "انضم إلى فريقنا" : "Join our team"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className={`absolute bottom-6 sm:bottom-8 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}
          >
            <Button href="#apply-form" variant="secondary">
              {isAr ? "فرصنا الوظيفية" : "Our opportunities"}
            </Button>
          </motion.div>
        </motion.div>

        {/* Arabic (desktop): the text sits in the left half, starting at the page centre and running left */}
        <div className={`flex mt-10 lg:mt-14 ${isAr ? "justify-start lg:justify-end" : "justify-end"}`}>
          <div dir={isAr ? "rtl" : "ltr"} className={`max-w-xl space-y-6 ${isAr ? "lg:w-1/2 lg:max-w-none lg:pe-0" : ""}`}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "على مدى أكثر من ثلاثة عقود، نفّذت فرق نسما للبنية التحتية والتقنية أعمالًا تدعم العمليات الحيوية في مختلف أنحاء المملكة العربية السعودية. ويجمع موظفونا بين الانضباط الهندسي والخبرة التقنية والخبرة الميدانية في مشروعات البنية التحتية والتقنية."
                : "For more than three decades, NIT teams have delivered work that supports critical operations across Saudi Arabia. Our people bring engineering discipline, technical expertise, and field experience to projects across infrastructure and technology."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "انضم إلى فريق تسهم أعماله في تنفيذ مشروعات على نطاق وطني، وتعزيز موثوقية العمليات، ودعم المرحلة المقبلة من نمو المملكة."
                : "Join a team where your work contributes to national-scale projects, reliable operations, and the Kingdom's next phase of growth."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
              className="sm:hidden"
            >
              <Button
                variant="primary"
                onClick={() =>
                  document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {isAr ? "الانتقال إلى النموذج" : "Go to form"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
