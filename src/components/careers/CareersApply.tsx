"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Honeypot } from "@/components/ui/Honeypot";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { submitApplication, type CareerOptions } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
import { useApiForm } from "@/lib/useApiForm";

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

function FieldError({ error, isAr }: { error?: string; isAr: boolean }) {
  if (!error) return null;
  return (
    <span dir={isAr ? "rtl" : "ltr"} className="block mt-2 text-[13px] text-red-600">
      {error}
    </span>
  );
}

function TextField({
  label,
  name,
  required,
  type = "text",
  autoComplete,
  error,
  isAr,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  error?: string;
  isAr: boolean;
}) {
  return (
    <label className="block">
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        dir={isAr ? "rtl" : "ltr"}
        placeholder={required ? `${label} *` : label}
        className={`w-full bg-transparent border-b pb-3 text-gray-900 placeholder:text-gray-500 placeholder:font-light text-[15px] focus:outline-none focus:border-[#2E368F] transition-colors ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <FieldError error={error} isAr={isAr} />
    </label>
  );
}

type Option = { value: string; label: string };

function SelectField({
  label,
  name,
  required,
  options = [],
  error,
  isAr,
}: {
  label: string;
  name: string;
  required?: boolean;
  options?: Option[];
  error?: string;
  isAr: boolean;
}) {
  return (
    <label className="block relative">
      <div dir={isAr ? "rtl" : "ltr"} className={`flex items-center justify-between border-b pb-3 ${error ? "border-red-500" : "border-gray-300"}`}>
        {/* Uncontrolled so form.reset() clears it. `required` only drives the :invalid placeholder
            styling — the form uses noValidate and the API decides what's actually required. */}
        <select
          name={name}
          defaultValue=""
          required
          aria-invalid={error ? true : undefined}
          className="w-full bg-transparent text-[15px] text-gray-900 invalid:text-gray-500 invalid:font-light focus:outline-none appearance-none cursor-pointer"
        >
          <option value="" disabled hidden>
            {required ? `${label} *` : label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronIcon className={`text-gray-400 shrink-0 pointer-events-none ${isAr ? "-mr-6" : "-ml-6"}`} />
      </div>
      <FieldError error={error} isAr={isAr} />
    </label>
  );
}

const nationalityOptions = {
  en: ["Saudi Arabian", "Egyptian", "Jordanian", "Indian", "Pakistani", "Filipino", "Lebanese", "Syrian", "Yemeni", "Sudanese", "British", "American", "Other"],
  ar: ["سعودي", "مصري", "أردني", "هندي", "باكستاني", "فلبيني", "لبناني", "سوري", "يمني", "سوداني", "بريطاني", "أمريكي", "أخرى"],
};

// Labels follow the site language; the submitted value is always the English name.
const nationalitySelectOptions = (isAr: boolean): Option[] =>
  nationalityOptions.en.map((value, i) => ({ value, label: isAr ? nationalityOptions.ar[i] : value }));

export function CareersApply() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [fileName, setFileName] = useState<string | null>(null);
  // Education values/labels come from the API (labels translated, values always English).
  const educationOptions = useApiData<CareerOptions>("/career-options/").data?.education ?? [];
  const application = useApiForm(
    (form) => submitApplication(new FormData(form), language),
    () => setFileName(null)
  );

  return (
    <section id="apply-form" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-10 lg:mb-14">
            {isAr ? "فرصتك الوظيفية القادمة تبدأ من هنا" : "Your next opportunity starts here"}
          </h2>
        </Reveal>

        <form className="relative w-full" noValidate onSubmit={application.onSubmit} onChange={application.onChange}>
          <Honeypot />
          <Reveal delay={0.12} duration={0.8} y={30} className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
            <TextField label={isAr ? "الاسم الأول" : "First Name"} name="first_name" autoComplete="given-name" required error={application.fieldError("first_name")} isAr={isAr} />
            <TextField label={isAr ? "اسم العائلة" : "Last Name"} name="last_name" autoComplete="family-name" error={application.fieldError("last_name")} isAr={isAr} />
            <TextField label={isAr ? "البريد الإلكتروني" : "Email Address"} name="email" required type="email" autoComplete="email" error={application.fieldError("email")} isAr={isAr} />
            <TextField label={isAr ? "رقم الجوال" : "Mobile Number"} name="mobile" required type="tel" autoComplete="tel" error={application.fieldError("mobile")} isAr={isAr} />
            <TextField label={isAr ? "موقعك الحالي" : "Current Location"} name="current_location" required error={application.fieldError("current_location")} isAr={isAr} />
            <SelectField
              label={isAr ? "الجنسية" : "Nationality"}
              name="nationality"
              options={nationalitySelectOptions(isAr)}
              error={application.fieldError("nationality")}
              isAr={isAr}
            />
            <SelectField
              label={isAr ? "المستوى التعليمي" : "Education"}
              name="education"
              required
              options={educationOptions}
              error={application.fieldError("education")}
              isAr={isAr}
            />
            <TextField label={isAr ? "المؤهل العلمي" : "Degree"} name="degree" required error={application.fieldError("degree")} isAr={isAr} />
          </Reveal>

          <Reveal delay={0.24} duration={0.7} y={24} dir={isAr ? "rtl" : "ltr"} className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
            <label className={`flex items-center justify-between gap-6 w-full sm:w-[220px] border px-4 py-3 ${application.fieldError("cv") ? "border-red-500" : "border-gray-300"} cursor-pointer hover:border-[#2E368F] transition-colors`}>
              <span className="text-gray-500 text-[15px] font-light">{isAr ? "إرفاق السيرة الذاتية" : "Attach Your CV"}</span>
              <PaperclipIcon className="text-gray-400 shrink-0" />
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
            <span className="text-gray-400 text-[15px] font-light">
              {fileName ?? (isAr ? "لم يتم اختيار أي ملف" : "No files chosen")}
              <span className="text-gray-400">*</span>
            </span>
            <span className="w-full">
              <FieldError error={application.fieldError("cv")} isAr={isAr} />
            </span>
          </Reveal>

          {application.message && (
            <p
              role="status"
              dir={isAr ? "rtl" : "ltr"}
              className={`mt-8 text-[15px] ${application.status === "success" ? "text-[#2E368F]" : "text-red-600"}`}
            >
              {application.message}
            </p>
          )}

          <Reveal delay={0.32} duration={0.7} y={24} className="mt-10 lg:mt-14">
            <Button type="submit" variant="primary" disabled={application.submitting} className={application.submitting ? "opacity-60 pointer-events-none" : ""}>
              {application.submitting ? (isAr ? "جارٍ الإرسال..." : "Sending...") : isAr ? "إرسال" : "Submit"}
            </Button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
