"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 20.5v-6.7c0-3.58-1.91-5.25-4.46-5.25-2.06 0-2.98 1.13-3.49 1.93V8.5H9.17c.05 1 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.3-.72.97-1.47 2.1-1.47 1.48 0 2.07 1.13 2.07 2.78v6.37h3.65Z"
      fill="white"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18.9 4h2.9l-6.4 7.3L23 20h-5.9l-4.6-6-5.3 6H4.3l6.8-7.8L4 4h6l4.2 5.5L18.9 4Z" fill="white" />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5.5" width="20" height="13" rx="4" stroke="white" strokeWidth="1.8" />
    <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="white" />
  </svg>
);

const socials = [
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "X", icon: XIcon },
  { name: "YouTube", icon: YouTubeIcon },
];

function TextField({
  label,
  required,
  type = "text",
  isAr,
}: {
  label: string;
  required?: boolean;
  type?: string;
  isAr: boolean;
}) {
  return (
    <label className="block">
      <input
        type={type}
        dir={isAr ? "rtl" : "ltr"}
        placeholder={required ? `${label}*` : label}
        className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder:text-gray-500 placeholder:font-light text-[15px] focus:outline-none focus:border-[#2E368F] transition-colors"
      />
    </label>
  );
}

export function ContactHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] pb-16 lg:pb-24 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: intro + contact details */}
        <div dir={isAr ? "rtl" : "ltr"} className="flex flex-col">
          <h1 className="text-gray-900 text-[40px] sm:text-[48px] lg:text-[54px] font-extralight leading-[1.15] tracking-tight">
            {isAr ? (
              "تواصل مع خبرائنا"
            ) : (
              <>
                Connect with
                <br />
                our experts
              </>
            )}
          </h1>

          <p className="mt-6 text-gray-500 text-[17px] sm:text-[18px] leading-relaxed font-light max-w-sm">
            {isAr
              ? "للاستفسارات المتعلقة بالمشروعات، أو الشراكات، أو علاقات المستثمرين، أو للحصول على معلومات عامة، يُرجى التواصل مع الفريق المختص في نسما للبنية التحتية والتقنية."
              : "For project inquiries, partnerships, investor relations, or general information, connect with the relevant NIT team."}
          </p>

          <div className="mt-auto pt-16 flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <span className="block text-gray-400 text-[16px] font-light">
                {isAr ? "البريد الإلكتروني" : "Email Address"}
              </span>
              <span dir="ltr" className={`block mt-1 text-gray-900 text-[22px] font-light ${isAr ? "text-right" : ""}`}>
                info@Nesma-nit.com
              </span>
            </div>
            <div>
              <span className="block text-gray-400 text-[16px] font-light">{isAr ? "الهاتف" : "Phone"}</span>
              <span dir="ltr" className={`block mt-1 text-gray-900 text-[22px] font-light ${isAr ? "text-right" : ""}`}>
                +966550634599
              </span>
            </div>
          </div>

          <div className="mt-10">
            <span className="block text-gray-400 text-[16px] font-light mb-3">
              {isAr ? "حسابات التواصل الاجتماعي" : "Socials"}
            </span>
            <div dir="ltr" className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center bg-[#2E368F] hover:bg-[#1c2260] transition-colors duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="bg-[#F7F7F7] p-6 sm:p-10 lg:p-10">
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[32px] sm:text-[36px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? "نموذج التواصل" : "Contact form"}
          </h2>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <TextField label={isAr ? "الاسم الأول" : "First Name"} required isAr={isAr} />
            <TextField label={isAr ? "اسم العائلة" : "Last Name"} required isAr={isAr} />
            <TextField label={isAr ? "اسم الشركة" : "Company Name"} isAr={isAr} />
            <TextField label={isAr ? "رقم الهاتف" : "Phone Number"} type="tel" isAr={isAr} />
            <TextField label={isAr ? "البريد الإلكتروني" : "Email Address"} type="email" isAr={isAr} />
            <TextField label={isAr ? "الرسالة" : "Message"} isAr={isAr} />

            <div className="pt-4">
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
