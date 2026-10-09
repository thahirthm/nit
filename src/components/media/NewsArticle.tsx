"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { newsPosts, type NewsPost } from "@/data/newsPosts";
import { useLanguage } from "@/context/LanguageContext";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 20.5v-6.7c0-3.58-1.91-5.25-4.46-5.25-2.06 0-2.98 1.13-3.49 1.93V8.5H9.17c.05 1 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.3-.72.97-1.47 2.1-1.47 1.48 0 2.07 1.13 2.07 2.78v6.37h3.65Z"
      fill="white"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18.9 4h2.9l-6.4 7.3L23 20h-5.9l-4.6-6-5.3 6H4.3l6.8-7.8L4 4h6l4.2 5.5L18.9 4Z" fill="white" />
  </svg>
);

function renderBody(paragraph: string) {
  const parts = paragraph.split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[([^\]]+)\]\]$/);
    if (match) {
      return (
        <span key={i} className="underline underline-offset-2 text-gray-700">
          {match[1]}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function NewsArticle({ post }: { post: NewsPost }) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const similar = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const title = isAr ? post.title.ar : post.title.en;

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        {/* Hero image + share row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
          <div className="relative w-full lg:flex-1 h-[280px] sm:h-[400px] lg:h-[480px] overflow-hidden">
            <Image src={post.image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E368F]/50 via-transparent to-transparent" />
          </div>

          <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:w-[140px] shrink-0">
            <span className="text-gray-500 text-[13px] font-medium tracking-wide uppercase lg:mb-1">
              {isAr ? "شارك المقال:" : "Share Articles:"}
            </span>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Share on LinkedIn" className="w-7 h-7 flex items-center justify-center bg-[#2E368F] hover:bg-[#1c2260] transition-colors duration-300">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Share on Instagram" className="w-7 h-7 flex items-center justify-center bg-[#2E368F] hover:bg-[#1c2260] transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Share on X" className="w-7 h-7 flex items-center justify-center bg-[#2E368F] hover:bg-[#1c2260] transition-colors duration-300">
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div dir="ltr" className="mt-6 flex flex-wrap items-center gap-2">
          <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
            {isAr ? post.date.ar : post.date.en}
          </span>
          <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
            {isAr ? post.badge.ar : post.badge.en}
          </span>
          <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
            {isAr ? post.location.ar : post.location.en}
          </span>
        </div>

        {/* Title + body */}
        <h1 dir={isAr ? "rtl" : "ltr"} className="mt-8 text-gray-900 text-[28px] sm:text-[36px] lg:text-[42px] font-extralight tracking-tight max-w-4xl">
          {title}
        </h1>

        <div dir={isAr ? "rtl" : "ltr"} className="mt-6 max-w-4xl space-y-5">
          {(isAr ? post.body.ar : post.body.en).map((paragraph, i) => (
            <p key={i} className="text-gray-500 text-[17px] sm:text-[18px] leading-relaxed font-light">
              {renderBody(paragraph)}
            </p>
          ))}
        </div>

        {/* Similar news & announcements */}
        {similar.length > 0 && (
          <div className="mt-16 lg:mt-24 pt-10 lg:pt-14 border-t border-gray-200 pb-16 lg:pb-24">
            <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
              {isAr ? "أخبار وإعلانات مشابهة" : "Similar news & announcements"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {similar.map((item) => {
                const itemTitle = isAr ? item.title.ar : item.title.en;
                return (
                  <article key={item.slug} className="group flex flex-col">
                    <Link href={`/media/${item.slug}`} className="relative block w-full h-[220px] sm:h-[260px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={itemTitle}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </Link>

                    <div dir="ltr" className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? item.date.ar : item.date.en}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? item.badge.ar : item.badge.en}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? item.location.ar : item.location.en}
                      </span>
                    </div>

                    <Link href={`/media/${item.slug}`}>
                      <h3
                        dir={isAr ? "rtl" : "ltr"}
                        className="mt-4 text-[22px] sm:text-[24px] font-light text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2E368F] transition-colors duration-300"
                      >
                        {itemTitle}
                      </h3>
                    </Link>

                    <div className="mt-5">
                      <Button href={`/media/${item.slug}`} variant="secondary">
                        {isAr ? "اقرأ المزيد" : "READ MORE"}
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
