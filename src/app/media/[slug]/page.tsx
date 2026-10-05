import { notFound } from "next/navigation";
import { getNewsPost, newsPosts } from "@/data/newsPosts";
import { NewsArticle } from "@/components/media/NewsArticle";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <NewsArticle post={post} />
    </main>
  );
}
