"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function SolutionsHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-6 lg:mb-8"
        >
          {isAr ? "الحلول" : "Solutions"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
          className={`text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-light text-[#727272] mb-8 ${isAr ? "lg:max-w-[70%]" : "lg:max-w-[88%]"}`}
        >
          {isAr
            ? "ترتكز أعمال نسما للبنية التحتية والتقنية على قطاعين رئيسيين يجمعان بين الهندسة الميدانية وأنظمة المؤسسات لخدمة العمليات الحيوية في جميع أنحاء المملكة العربية السعودية. ومن الطاقة والمياه والاتصالات والمنشآت الصناعية، إلى مراكز البيانات والحوسبة السحابية والأمن السيبراني والخدمات المُدارة، تدعم أعمالنا القطاعات التي تكون فيها الموثوقية في المقام الأول."
            : "Built around two core verticals, NIT brings field engineering and enterprise systems together for critical operations across Saudi Arabia. From power, water, communications, and industrial facilities to data centers, cloud, cybersecurity, and managed services, our work supports sectors where reliability matters most."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        >
          <Button variant="primary">{isAr ? "تواصل معنا" : "CONNECT WITH US"}</Button>
        </motion.div>
      </div>
    </section>
  );
}
