import { MediaHero } from "@/components/media/MediaHero";
import { MediaNews } from "@/components/media/MediaNews";
import { MediaAwards } from "@/components/media/MediaAwards";
import { Reveal } from "@/components/ui/Reveal";
import { getNewsSectionData, NEWS_PAGE_SIZE } from "@/lib/api";

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
