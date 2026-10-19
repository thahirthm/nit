"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MediaHero() {
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
          <Image
            quality={95}
            src="/images/media-banner.png"
            alt={isAr ? "مهندس نسما في موقع العمل" : "NIT engineer on site"}
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
            {isAr ? "المركز الإعلامي" : "Media centre"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className={`absolute bottom-6 sm:bottom-8 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}
          >
            <Button href="/contact" variant="secondary">
              {isAr ? "تواصل معنا" : "Connect with us"}
            </Button>
          </motion.div>
        </motion.div>

        {/* Arabic: text sits in the 2nd (left) column of a half/half grid, starting from the page's midpoint */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className={`mt-10 lg:mt-14 ${isAr ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" : "flex justify-end"}`}
        >
          <div dir={isAr ? "rtl" : "ltr"} className={`max-w-xl space-y-6 ${isAr ? "lg:col-start-2" : ""}`}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "اطّلع على أحدث إعلانات نسما للبنية التحتية والتقنية، وإنجازاتها، وجوائزها، وأخبارها المؤسسية في مكان واحد."
                : "Discover NIT's latest announcements, milestones, awards, and corporate news—all in one place."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light"
            >
              {isAr
                ? "يجمع المركز الإعلامي أبرز المستجدات والتكريمات والشراكات والقصص المتعلقة بأعمالنا في قطاعي البنية التحتية والتقنية."
                : "The Media Centre centralizes key updates, recognitions, partnerships, and stories from our infrastructure and technology operations."}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
