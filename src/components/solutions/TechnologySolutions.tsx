"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

type IconProps = { active?: boolean };

const DigitalTransformationIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M34.7812 24.8438C36.6107 24.8438 38.0938 23.3607 38.0938 21.5312C38.0938 19.7018 36.6107 18.2188 34.7812 18.2188C32.9518 18.2188 31.4688 19.7018 31.4688 21.5312C31.4688 23.3607 32.9518 24.8438 34.7812 24.8438Z" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.2188 38.0938C20.0482 38.0938 21.5312 36.6107 21.5312 34.7812C21.5312 32.9518 20.0482 31.4688 18.2188 31.4688C16.3893 31.4688 14.9062 32.9518 14.9062 34.7812C14.9062 36.6107 16.3893 38.0938 18.2188 38.0938Z" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31.4688 44.7188V33.125L18.2188 19.875V8.28125" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.2188 31.4688V19.875" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M43.0625 8.28125H9.9375C9.02278 8.28125 8.28125 9.02278 8.28125 9.9375V43.0625C8.28125 43.9772 9.02278 44.7188 9.9375 44.7188H43.0625C43.9772 44.7188 44.7188 43.9772 44.7188 43.0625V9.9375C44.7188 9.02278 43.9772 8.28125 43.0625 8.28125Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28.1562 8.28125V14.9062L32.4397 19.1897" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DataAIIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M26.5 26.5C36.5619 26.5 44.7188 22.0508 44.7188 16.5625C44.7188 11.0742 36.5619 6.625 26.5 6.625C16.4381 6.625 8.28125 11.0742 8.28125 16.5625C8.28125 22.0508 16.4381 26.5 26.5 26.5Z" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.28125 16.5625V26.5C8.28125 31.9884 16.4383 36.4375 26.5 36.4375C36.5617 36.4375 44.7188 31.9884 44.7188 26.5V16.5625" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.28125 26.5V36.4375C8.28125 41.9259 16.4383 46.375 26.5 46.375C36.5617 46.375 44.7188 41.9259 44.7188 36.4375V26.5" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ERPIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M36.4375 13.25H16.5625V23.1875H36.4375V13.25Z" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M43.0625 44.7188V8.28125C43.0625 7.36653 42.321 6.625 41.4062 6.625L11.5938 6.625C10.679 6.625 9.9375 7.36653 9.9375 8.28125V44.7188C9.9375 45.6335 10.679 46.375 11.5938 46.375H41.4062C42.321 46.375 43.0625 45.6335 43.0625 44.7188Z" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.2188 32.7109C19.3622 32.7109 20.2891 31.784 20.2891 30.6406C20.2891 29.4972 19.3622 28.5703 18.2188 28.5703C17.0753 28.5703 16.1484 29.4972 16.1484 30.6406C16.1484 31.784 17.0753 32.7109 18.2188 32.7109Z" fill={active ? "#FFFFFF" : "#2E368F"} />
    <path d="M26.5 32.7109C27.6434 32.7109 28.5703 31.784 28.5703 30.6406C28.5703 29.4972 27.6434 28.5703 26.5 28.5703C25.3566 28.5703 24.4297 29.4972 24.4297 30.6406C24.4297 31.784 25.3566 32.7109 26.5 32.7109Z" fill={active ? "#FFFFFF" : "#2E368F"} />
    <path d="M34.7812 32.7109C35.9247 32.7109 36.8516 31.784 36.8516 30.6406C36.8516 29.4972 35.9247 28.5703 34.7812 28.5703C33.6378 28.5703 32.7109 29.4972 32.7109 30.6406C32.7109 31.784 33.6378 32.7109 34.7812 32.7109Z" fill={active ? "#FFFFFF" : "#2E368F"} />
    <path d="M18.2188 40.9922C19.3622 40.9922 20.2891 40.0653 20.2891 38.9219C20.2891 37.7785 19.3622 36.8516 18.2188 36.8516C17.0753 36.8516 16.1484 37.7785 16.1484 38.9219C16.1484 40.0653 17.0753 40.9922 18.2188 40.9922Z" fill={active ? "#FFFFFF" : "#2E368F"} />
    <path d="M26.5 40.9922C27.6434 40.9922 28.5703 40.0653 28.5703 38.9219C28.5703 37.7785 27.6434 36.8516 26.5 36.8516C25.3566 36.8516 24.4297 37.7785 24.4297 38.9219C24.4297 40.0653 25.3566 40.9922 26.5 40.9922Z" fill={active ? "#FFFFFF" : "#2E368F"} />
    <path d="M34.7812 40.9922C35.9247 40.9922 36.8516 40.0653 36.8516 38.9219C36.8516 37.7785 35.9247 36.8516 34.7812 36.8516C33.6378 36.8516 32.7109 37.7785 32.7109 38.9219C32.7109 40.0653 33.6378 40.9922 34.7812 40.9922Z" fill={active ? "#FFFFFF" : "#2E368F"} />
  </svg>
);

const BlockchainIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M29.2703 13.3904L31.5476 11.1131C32.4439 10.2165 33.508 9.50534 34.6792 9.02012C35.8504 8.5349 37.1057 8.28516 38.3734 8.28516C39.6412 8.28516 40.8965 8.5349 42.0677 9.02012C43.2388 9.50534 44.303 10.2165 45.1993 11.1131C46.0958 12.0094 46.807 13.0735 47.2922 14.2447C47.7774 15.4159 48.0272 16.6712 48.0272 17.9389C48.0272 19.2066 47.7774 20.4619 47.2922 21.6331C46.807 22.8043 46.0958 23.8684 45.1993 24.7647L40.1518 29.8121L38.0111 31.9528C37.1138 32.8503 36.0483 33.5621 34.8756 34.0473C33.7029 34.5326 32.4461 34.7819 31.177 34.7809C29.9078 34.78 28.6514 34.5288 27.4794 34.0417C26.3075 33.5547 25.243 32.8413 24.3471 31.9425C23.4197 31.0154 22.6915 29.9086 22.2073 28.6899C21.7232 27.4713 21.4932 26.1666 21.5314 24.8558" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.7297 39.6091L21.4524 41.8864C20.5551 42.7839 19.4896 43.4956 18.3169 43.9809C17.1442 44.4662 15.8873 44.7155 14.6182 44.7145C13.3491 44.7136 12.0926 44.4624 10.9207 43.9753C9.74872 43.4883 8.68431 42.7749 7.78834 41.8761C5.983 40.0644 4.97033 37.6105 4.97266 35.0529C4.97499 32.4953 5.99213 30.0431 7.80076 28.2348L14.9889 21.0467C15.8852 20.1501 16.9493 19.4389 18.1205 18.9537C19.2917 18.4685 20.547 18.2188 21.8147 18.2188C23.0824 18.2188 24.3377 18.4685 25.5089 18.9537C26.6801 19.4389 27.7442 20.1501 28.6405 21.0467C29.5718 21.9737 30.3031 23.0817 30.7895 24.3023C31.2759 25.5229 31.507 26.8303 31.4686 28.1437" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloudServicesIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M16.5628 26.5C16.5628 23.2243 17.5342 20.0221 19.3541 17.2984C21.174 14.5747 23.7608 12.4518 26.7872 11.1983C29.8136 9.94468 33.1437 9.61668 36.3565 10.2558C39.5693 10.8948 42.5205 12.4722 44.8368 14.7886C47.1531 17.1049 48.7305 20.056 49.3696 23.2688C50.0087 26.4816 49.6807 29.8118 48.4271 32.8382C47.1735 35.8646 45.0507 38.4513 42.327 40.2712C39.6033 42.0911 36.4011 43.0625 33.1253 43.0625H14.9066C13.2627 43.0605 11.638 42.7089 10.1403 42.031C8.64269 41.3532 7.30631 40.3646 6.21988 39.1308C5.13345 37.8971 4.32182 36.4464 3.83883 34.8751C3.35584 33.3037 3.21255 31.6476 3.41845 30.0166C3.62436 28.3857 4.17475 26.8171 5.03312 25.4151C5.89149 24.0131 7.0382 22.8096 8.39717 21.8846C9.75613 20.9596 11.2963 20.3342 12.9154 20.0498C14.5345 19.7654 16.1956 19.8286 17.7885 20.2352" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.8438 28.1562L29.8125 33.125L39.75 23.1875" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CybersecurityIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M10.4941 38.2842C12.3127 34.6225 13.2561 30.5885 13.2497 26.5C13.2462 24.512 13.6912 22.5488 14.5515 20.7566C15.4117 18.9643 16.6652 17.3892 18.2185 16.1484" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5 26.5C26.5098 33.2363 24.7995 39.8636 21.5312 45.7539" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.875 26.5C19.875 24.7429 20.573 23.0578 21.8154 21.8154C23.0578 20.573 24.7429 19.875 26.5 19.875C28.2571 19.875 29.9422 20.573 31.1846 21.8154C32.427 23.0578 33.125 24.7429 33.125 26.5C33.1346 33.329 31.63 40.0752 28.7194 46.2529" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45.2484 38.0938C45.9994 34.2749 46.3766 30.392 46.3747 26.5C46.3747 21.2288 44.2807 16.1735 40.5534 12.4463C36.8261 8.71897 31.7708 6.625 26.4997 6.625C21.2285 6.625 16.1732 8.71897 12.4459 12.4463C8.71862 16.1735 6.62465 21.2288 6.62465 26.5C6.62681 28.7567 6.24382 30.9972 5.49219 33.125" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.2143 33.125C18.5069 36.6074 17.24 39.9522 15.4629 43.0294" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24.8438 13.3534C25.3933 13.2861 25.9464 13.2522 26.5 13.252C30.0141 13.252 33.3843 14.6479 35.8692 17.1328C38.354 19.6176 39.75 22.9878 39.75 26.502C39.7485 28.7167 39.6102 30.9292 39.3359 33.127" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38.0812 39.75C37.7665 40.9756 37.409 42.1833 37.0088 43.373" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ManagedServicesIcon = ({ active }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
    <path d="M8.28125 29.8125V9.9375C8.28125 9.49824 8.45575 9.07696 8.76635 8.76635C9.07696 8.45575 9.49824 8.28125 9.9375 8.28125H43.0625C43.5018 8.28125 43.923 8.45575 44.2336 8.76635C44.5443 9.07696 44.7188 9.49824 44.7188 9.9375V43.0625C44.7188 43.5018 44.5443 43.923 44.2336 44.2336C43.923 44.5443 43.5018 44.7188 43.0625 44.7188H28.1562" stroke={active ? "#FFFFFF" : "#2E368F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.28125 39.75L13.25 44.7188L24.8438 33.125" stroke={active ? "#FFFFFF" : "#81D1E8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tabs = [
  {
    tab: { en: "Digital Transformation", ar: "التحول الرقمي" },
    icon: DigitalTransformationIcon,
    graphic: "/images/svg1.png",
    title: { en: "Digital Transformation", ar: "التحول الرقمي" },
    description: {
      en: "Integration of technology into all areas of a business, resulting in fundamental changes to how operations run, decisions get made, and value is delivered.",
      ar: "دمج التقنية في جميع مجالات الأعمال، بما يؤدي إلى تغييرات جوهرية في آلية تنفيذ العمليات، واتخاذ القرارات، وتقديم القيمة.",
    },
    chips: [
      { en: "Software modernization", ar: "تحديث البرمجيات" },
      { en: "Industry 4.0", ar: "الصناعة 4.0" },
      { en: "Digital workplace", ar: "بيئة العمل الرقمية" },
      { en: "Business automation", ar: "أتمتة الأعمال" },
      { en: "Digital customer experience", ar: "تجربة العميل الرقمية" },
    ],
  },
  {
    tab: { en: "Data & AI", ar: "البيانات والذكاء الاصطناعي" },
    icon: DataAIIcon,
    graphic: "/images/svg2.png",
    title: { en: "Data & AI", ar: "البيانات والذكاء الاصطناعي" },
    description: {
      en: "Leveraging the synergistic relationship between AI and big data to improve decision-making processes.",
      ar: "الاستفادة من العلاقة التكاملية بين الذكاء الاصطناعي والبيانات الضخمة لتحسين عمليات اتخاذ القرار.",
    },
    chips: [
      { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
      { en: "Machine Learning", ar: "التعلم الآلي" },
      { en: "Data Management", ar: "إدارة البيانات" },
      { en: "Data Analytics", ar: "تحليلات البيانات" },
      { en: "Business Intelligence", ar: "ذكاء الأعمال" },
    ],
  },
  {
    tab: { en: "ERP Solutions", ar: "حلول تخطيط موارد المؤسسة" },
    icon: ERPIcon,
    graphic: "/images/svg3.png",
    title: { en: "ERP Solutions", ar: "حلول تخطيط موارد المؤسسة" },
    description: {
      en: "ERP solutions that manage day-to-day business activities by connecting planning, logistics, maintenance, and supply chain workflows for better operational control.",
      ar: "حلول تخطيط موارد المؤسسات التي تدير الأنشطة اليومية للأعمال من خلال ربط التخطيط واللوجستيات والصيانة وسلسلة الإمداد لتحقيق تحكم تشغيلي أفضل.",
    },
    chips: [
      { en: "ERP Implementation", ar: "تنفيذ أنظمة تخطيط الموارد" },
      { en: "Logistics Planning", ar: "تخطيط اللوجستيات" },
      { en: "MRO and Supply Chain", ar: "الصيانة والإصلاح والتشغيل وسلسلة الإمداد" },
    ],
  },
  {
    tab: { en: "Blockchain", ar: "سلاسل الكتل" },
    icon: BlockchainIcon,
    graphic: "/images/svg4.png",
    title: { en: "Blockchain", ar: "سلاسل الكتل" },
    description: {
      en: "Utilization of a distributed ledger to facilitate the recording of transactions and tracking of assets.",
      ar: "الاستفادة من دفتر الأستاذ الموزّع لتسهيل تسجيل المعاملات وتتبع الأصول.",
    },
    chips: [
      { en: "Blockchain as a Service", ar: "البلوك تشين كخدمة" },
      { en: "Blockchain Government Solutions", ar: "حلول البلوك تشين الحكومية" },
      { en: "Blockchain Integration Solutions", ar: "حلول تكامل البلوك تشين" },
      { en: "Product Development", ar: "تطوير المنتجات" },
    ],
  },
  {
    tab: { en: "Cloud services", ar: "الخدمات السحابية" },
    icon: CloudServicesIcon,
    graphic: "/images/svg5.png",
    title: { en: "Cloud Services", ar: "الخدمات السحابية" },
    description: {
      en: "Complete support for cloud deployment, migration, monitoring, reporting, and application development with stronger control and operational visibility.",
      ar: "دعم متكامل لنشر السحابة والانتقال إليها، والمراقبة، وإعداد التقارير، وتطوير التطبيقات، مع تحكم ووضوح تشغيلي أقوى.",
    },
    chips: [
      { en: "Cloud Deployment", ar: "نشر السحابة" },
      { en: "Cloud Migration Services", ar: "خدمات الانتقال إلى السحابة" },
      { en: "Cloud Monitoring & Reporting", ar: "مراقبة السحابة وإعداد التقارير" },
      { en: "App Development", ar: "تطوير التطبيقات" },
    ],
  },
  {
    tab: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    icon: CybersecurityIcon,
    graphic: "/images/svg6.png",
    title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    description: {
      en: "Protection for systems, networks, and digital operations through security monitoring, fraud prevention, and encryption controls.",
      ar: "حماية الأنظمة والشبكات والعمليات الرقمية من خلال مراقبة الأمن، ومنع الاحتيال، وضوابط التشفير.",
    },
    chips: [
      { en: "Network Security", ar: "أمن الشبكات" },
      { en: "Monitoring Tools", ar: "أدوات المراقبة" },
      { en: "Fraud Protection", ar: "الحماية من الاحتيال" },
      { en: "Encryption Tools", ar: "أدوات التشفير" },
    ],
  },
  {
    tab: { en: "Managed services", ar: "الخدمات المُدارة" },
    icon: ManagedServicesIcon,
    graphic: "/images/svg7.png",
    title: { en: "Managed Services", ar: "الخدمات المُدارة" },
    description: {
      en: "Partial or complete support for IT development, migration, monitoring, and reporting to keep business operations running smoothly.",
      ar: "دعم جزئي أو كامل لتطوير تقنية المعلومات والانتقال والمراقبة وإعداد التقارير للحفاظ على سير عمليات الأعمال بسلاسة.",
    },
    chips: [
      { en: "IT Development & Deployment", ar: "تطوير ونشر تقنية المعلومات" },
      { en: "IT Migration Services", ar: "خدمات الانتقال التقني" },
      { en: "IT Monitoring & Reporting", ar: "مراقبة تقنية المعلومات وإعداد التقارير" },
    ],
  },
];

export function TechnologySolutions() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  const prevTab = () => setActiveIndex((i) => (i === 0 ? tabs.length - 1 : i - 1));
  const nextTab = () => setActiveIndex((i) => (i === tabs.length - 1 ? 0 : i + 1));

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        {/* Heading + Nav — kept LTR so the arrows stay on the same side as the rest of the site's sliders */}
        <div dir="ltr" className="flex items-center justify-between">
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            {isAr ? "حلول التقنية" : "Technology solutions"}
          </h2>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
              aria-label={isAr ? "السابق" : "Previous"}
              onClick={prevTab}
              className="text-gray-400 hover:text-[#2E368F] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={isAr ? "" : "rotate-180"}>
                <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <button
              aria-label={isAr ? "التالي" : "Next"}
              onClick={nextTab}
              className="text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={isAr ? "rotate-180" : ""}>
                <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs — kept LTR so tab order never reorders by language */}
        <div dir="ltr" className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            const Icon = tab.icon;
            return (
              <button
                key={tab.tab.en}
                onClick={() => setActiveIndex(i)}
                className={`flex flex-col items-start gap-3 p-4 sm:p-5 text-left transition-colors duration-300 ${
                  isActive ? "bg-[#2E368F]" : "bg-[#F7F7F7] hover:bg-gray-100"
                }`}
              >
                <span className="[&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-9 sm:[&>svg]:h-9">
                  <Icon active={isActive} />
                </span>
                <span className={`text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase ${isActive ? "text-white" : "text-[#2E368F]"}`}>
                  {isAr ? tab.tab.ar : tab.tab.en}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel — kept LTR so the graphic always sits on the same side as the text */}
        <div dir="ltr" className="mt-6 lg:mt-8 bg-[#2E368F] p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:h-[560px]">
          <div className="flex flex-col h-full">
            <h3 dir={isAr ? "rtl" : "ltr"} className="text-white text-[28px] sm:text-[34px] lg:text-[38px] font-extralight tracking-tight">
              {isAr ? active.title.ar : active.title.en}
            </h3>
            <p dir={isAr ? "rtl" : "ltr"} className="mt-4 text-white/70 text-[17px] sm:text-[19px] leading-relaxed font-light max-w-xl">
              {isAr ? active.description.ar : active.description.en}
            </p>

            <div dir={isAr ? "rtl" : "ltr"} className="mt-6 flex flex-wrap gap-2.5">
              {active.chips.map((chip) => (
                <span
                  key={chip.en}
                  className="rounded px-4 py-2 text-[13px] font-medium tracking-wide text-white/90 bg-white/10"
                >
                  {isAr ? chip.ar : chip.en}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Button href="/contact" variant="secondary" iconOutline>
                {isAr ? "تواصل معنا" : "Connect with Us"}
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative h-full">
            <Image src={active.graphic} alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
