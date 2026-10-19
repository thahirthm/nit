"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { BlogDetail, Seed } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
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

export function NewsArticle({ initialPost }: { initialPost: Seed<BlogDetail> & { data: BlogDetail } }) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  // Server renders English; the Arabic version is fetched client-side when that language is active.
  const post = useApiData<BlogDetail>(initialPost.path, initialPost).data ?? initialPost.data;
  const similar = post.related;
  const title = post.title;

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        {/* Article + share column. Desktop: two columns, with the share icons in a right-hand column that
            spans the whole article and sticks below the header while scrolling. Mobile: single column
            (hero, share row, badges, title, body), same order as before. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_140px] lg:gap-x-8">
          <div className="relative w-full lg:col-start-1 lg:row-start-1 h-[280px] sm:h-[400px] lg:h-[480px] overflow-hidden">
            <Image quality={95} src={post.image ?? "/images/blog1.png"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E368F]/50 via-transparent to-transparent" />
          </div>

          <div className="mt-6 lg:mt-0 flex items-center gap-3 lg:flex-col lg:items-end lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:self-start lg:sticky lg:top-32">
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

          {/* Badges */}
          <div dir={isAr ? "rtl" : "ltr"} className="mt-6 lg:col-start-1 lg:row-start-2 flex flex-wrap items-center gap-2">
            <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
              {post.formatted_date}
            </span>
            <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
              {post.category.name}
            </span>
            <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
              {post.location}
            </span>
          </div>

          {/* Title + body */}
          <h1 dir={isAr ? "rtl" : "ltr"} className="mt-8 lg:col-start-1 lg:row-start-3 text-gray-900 text-[28px] sm:text-[36px] lg:text-[42px] font-extralight tracking-tight max-w-4xl">
            {title}
          </h1>

          {/* Body HTML is authored by NIT admins in the admin panel's rich-text editor */}
          <div
            dir={isAr ? "rtl" : "ltr"}
            className="mt-6 lg:col-start-1 lg:row-start-4 max-w-4xl space-y-5 text-gray-500 text-[17px] sm:text-[18px] leading-relaxed font-light [&_strong]:font-light [&_strong]:text-gray-700 [&_strong]:underline [&_strong]:underline-offset-2 [&_a]:text-[#2E368F] [&_a]:underline [&_h2]:text-gray-900 [&_h2]:text-[26px] [&_h2]:font-extralight [&_h3]:text-gray-900 [&_h3]:text-[22px] [&_h3]:font-light [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ps-6 [&_ol]:ps-6 [&_li]:mt-2 [&_img]:max-w-full [&_img]:h-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Similar news & announcements */}
        {similar.length > 0 && (
          <div className="mt-16 lg:mt-24 pt-10 lg:pt-14 border-t border-gray-200 pb-16 lg:pb-24">
            <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
              {isAr ? "أخبار وإعلانات مشابهة" : "Similar news & announcements"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {similar.map((item) => {
                const itemTitle = item.title;
                return (
                  <article key={item.slug} className="group flex flex-col">
                    <Link href={`/media/${item.slug}`} className="relative block w-full h-[220px] sm:h-[260px] overflow-hidden">
                      <Image quality={95}
                        src={item.image ?? "/images/blog1.png"}
                        alt={itemTitle}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </Link>

                    <div dir={isAr ? "rtl" : "ltr"} className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {item.formatted_date}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {item.category.name}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {item.location}
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
