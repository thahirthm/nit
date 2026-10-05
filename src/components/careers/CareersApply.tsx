"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

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

function TextField({ label, required, type = "text" }: { label: string; required?: boolean; type?: string }) {
  return (
    <label className="block">
      <input
        type={type}
        placeholder={required ? `${label} *` : label}
        className="w-full bg-transparent border-b border-gray-300 pb-3 text-gray-900 placeholder:text-gray-500 placeholder:font-light text-[15px] focus:outline-none focus:border-[#2E368F] transition-colors"
      />
    </label>
  );
}

function SelectField({ label, required, options = [] }: { label: string; required?: boolean; options?: string[] }) {
  const [value, setValue] = useState("");

  return (
    <label className="block relative">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3">
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
        <ChevronIcon className="text-gray-400 shrink-0 -ml-6 pointer-events-none" />
      </div>
    </label>
  );
}

const nationalityOptions = [
  "Saudi Arabian",
  "Egyptian",
  "Jordanian",
  "Indian",
  "Pakistani",
  "Filipino",
  "Lebanese",
  "Syrian",
  "Yemeni",
  "Sudanese",
  "British",
  "American",
  "Other",
];

const educationOptions = ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"];

export function CareersApply() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-10 lg:mb-14">
          Your next opportunity starts here
        </h2>

        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
            <TextField label="First Name" required />
            <TextField label="Last Name" />
            <TextField label="Email Address" required type="email" />
            <TextField label="Mobile Number" required type="tel" />
            <TextField label="Current Location" required />
            <SelectField label="Nationality" options={nationalityOptions} />
            <SelectField label="Education" required options={educationOptions} />
            <TextField label="Degree" required />
          </div>

          <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
            <label className="flex items-center justify-between gap-6 w-full sm:w-[220px] border border-gray-300 px-4 py-3 cursor-pointer hover:border-[#2E368F] transition-colors">
              <span className="text-gray-500 text-[15px] font-light">Attach Your CV</span>
              <PaperclipIcon className="text-gray-400 shrink-0" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
            <span className="text-gray-400 text-[15px] font-light">
              {fileName ?? "No files chosen"}
              <span className="text-gray-400">*</span>
            </span>
          </div>

          <div className="mt-10 lg:mt-14">
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
