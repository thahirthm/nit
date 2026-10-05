"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { newsPosts } from "@/data/newsPosts";

const categories = ["NEWS", "ARTICLE", "ANNOUNCEMENT"] as const;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function MediaNews() {
  // The category tabs act as a visual filter toggle; all posts stay visible
  // together, matching the design (every tab shows the same mixed set of cards).
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("NEWS");

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        {/* Heading + Nav */}
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            News &amp; announcements
          </h2>

          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            <button aria-label="Previous" disabled className="text-gray-300 cursor-not-allowed">
              <ArrowIcon className="rotate-180" />
            </button>
            <button aria-label="Next" disabled className="text-gray-300 cursor-not-allowed">
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Post grid */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {newsPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              <Link href={`/media/${post.slug}`} className="relative block w-full h-[280px] lg:h-[330px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                  {post.date}
                </span>
                <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                  {post.badge}
                </span>
                <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                  {post.location}
                </span>
              </div>

              <Link href={`/media/${post.slug}`}>
                <h3 className="mt-4 text-[26px] lg:text-[28px] font-light text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2E368F] transition-colors duration-300">
                  {post.title}
                </h3>
              </Link>

              <div className="mt-6">
                <Button href={`/media/${post.slug}`} variant="secondary">
                  READ MORE
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
