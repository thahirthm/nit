"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const PaperclipIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M10.5 4.5 5.44 9.56a1.5 1.5 0 0 0 2.12 2.12L12.5 6.6a3 3 0 0 0-4.24-4.24L3.2 7.42a4.5 4.5 0 0 0 6.36 6.36"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
        placeholder={required ? `${label} *` : label}
        className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder:text-gray-500 placeholder:font-light text-[15px] focus:outline-none focus:border-[#2E368F] transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  required,
  options = [],
  isAr,
}: {
  label: string;
  required?: boolean;
  options?: string[];
  isAr: boolean;
}) {
  const [value, setValue] = useState("");

  return (
    <label className="block relative">
      <div dir={isAr ? "rtl" : "ltr"} className="flex items-center justify-between border-b border-gray-300 pb-3">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full bg-transparent text-[15px] focus:outline-none appearance-none cursor-pointer ${
            value ? "text-gray-900" : "text-gray-500 font-light"
          }`}
        >
          <option value="" disabled hidden>
            {required ? `${label} *` : label}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-gray-900">
              {option}
            </option>
          ))}
        </select>
        <ChevronIcon className={`text-gray-400 shrink-0 pointer-events-none ${isAr ? "-mr-6" : "-ml-6"}`} />
      </div>
    </label>
  );
}

const nationalityOptions = {
  en: ["Saudi Arabian", "Egyptian", "Jordanian", "Indian", "Pakistani", "Filipino", "Lebanese", "Syrian", "Yemeni", "Sudanese", "British", "American", "Other"],
  ar: ["سعودي", "مصري", "أردني", "هندي", "باكستاني", "فلبيني", "لبناني", "سوري", "يمني", "سوداني", "بريطاني", "أمريكي", "أخرى"],
};

const educationOptions = {
  en: ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"],
  ar: ["الثانوية العامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"],
};

export function CareersApply() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-10 lg:mb-14">
          {isAr ? "فرصتك الوظيفية القادمة تبدأ من هنا" : "Your next opportunity starts here"}
        </h2>

        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
            <TextField label={isAr ? "الاسم الأول" : "First Name"} required isAr={isAr} />
            <TextField label={isAr ? "اسم العائلة" : "Last Name"} isAr={isAr} />
            <TextField label={isAr ? "البريد الإلكتروني" : "Email Address"} required type="email" isAr={isAr} />
            <TextField label={isAr ? "رقم الجوال" : "Mobile Number"} required type="tel" isAr={isAr} />
            <TextField label={isAr ? "موقعك الحالي" : "Current Location"} required isAr={isAr} />
            <SelectField
              label={isAr ? "الجنسية" : "Nationality"}
              options={isAr ? nationalityOptions.ar : nationalityOptions.en}
              isAr={isAr}
            />
            <SelectField
              label={isAr ? "المستوى التعليمي" : "Education"}
              required
              options={isAr ? educationOptions.ar : educationOptions.en}
              isAr={isAr}
            />
            <TextField label={isAr ? "المؤهل العلمي" : "Degree"} required isAr={isAr} />
          </div>

          <div dir={isAr ? "rtl" : "ltr"} className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
            <label className="flex items-center justify-between gap-6 w-full sm:w-[220px] border border-gray-300 px-4 py-3 cursor-pointer hover:border-[#2E368F] transition-colors">
              <span className="text-gray-500 text-[15px] font-light">{isAr ? "إرفاق السيرة الذاتية" : "Attach Your CV"}</span>
              <PaperclipIcon className="text-gray-400 shrink-0" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
            <span className="text-gray-400 text-[15px] font-light">
              {fileName ?? (isAr ? "لم يتم اختيار أي ملف" : "No files chosen")}
              <span className="text-gray-400">*</span>
            </span>
          </div>

          <div className="mt-10 lg:mt-14">
            <Button type="submit" variant="primary">
              {isAr ? "إرسال" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
