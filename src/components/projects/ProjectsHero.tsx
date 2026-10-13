"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function ProjectsHero() {
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
            src="/images/pr-banner.png"
            alt="NIT engineers on site across the Kingdom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <motion.h1
            dir={isAr ? "rtl" : "ltr"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className={`absolute top-6 sm:top-8 lg:top-10 ${isAr ? "right-6 sm:right-8 lg:right-10 text-right" : "left-6 sm:left-8 lg:left-10"} text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight`}
          >
            {isAr ? (
              <>
                مشروعات نُفِّذت
                <br />
                في مختلف أنحاء المملكة
              </>
            ) : (
              <>
                Projects delivered
                <br />
                across the kingdom
              </>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className={`absolute bottom-6 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}
          >
            <Button href="/contact" variant="secondary">
              {isAr ? "تواصلوا معنا" : "Connect with Us"}
            </Button>
          </motion.div>
        </motion.div>

        <div className={`flex mt-10 lg:mt-14 ${isAr ? "justify-start" : "justify-end"}`}>
          <div dir={isAr ? "rtl" : "ltr"} className="max-w-xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "تعرّفوا على المشروعات الجارية والمكتملة التي تنفذها نسما للبنية التحتية والتقنية في مختلف أنحاء المملكة العربية السعودية، والمصنّفة حسب القطاع والمنطقة وحالة التنفيذ، بدءًا من الأعمال المستمرة وصولًا إلى الإنجازات المكتملة."
                : "Explore NIT's active and completed projects across Saudi Arabia, organized by sector, region, and delivery status. From ongoing work to completed milestones."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "تعكس محفظة المشروعات سجل إنجازات نسما للبنية التحتية والتقنية في قطاعَي البنية التحتية والتقنية."
                : "The portfolio reflects NIT's delivery record across Infrastructure and Technology."}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
