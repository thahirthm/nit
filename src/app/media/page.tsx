import type { Metadata } from "next";
import { MediaHero } from "@/components/media/MediaHero";
import { MediaNews } from "@/components/media/MediaNews";
import { MediaAwards } from "@/components/media/MediaAwards";
import { Reveal } from "@/components/ui/Reveal";
import { getNewsSectionData, NEWS_PAGE_SIZE } from "@/lib/api";

export const metadata: Metadata = {
  title: "Media Centre",
  description: "The latest news, announcements, achievements, awards and corporate updates from Nesma Infrastructure & Technology, in one place.",
};

export default async function MediaPage() {
  const news = await getNewsSectionData(NEWS_PAGE_SIZE.media);

  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <MediaHero />

      <Reveal>
        <MediaNews initialCategories={news.categories} initialPosts={news.posts} />
      </Reveal>

      <Reveal>
        <MediaAwards />
      </Reveal>
    </main>
  );
}
