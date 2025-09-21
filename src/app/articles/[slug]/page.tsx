import { fetchArticleBySlug, fetchArticles } from "@/lib/strapi";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { StrapiArticle } from "@/types/index";
import ShareButtons from "@/components/ShareButtons";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Updated Props type to reflect that params is now a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const fetchedData = await fetchArticles();

  if (!fetchedData || !fetchedData.articles) {
    return [];
  }

  return fetchedData.articles
    .filter(
      (article) => typeof article.slug === "string" && article.slug.length > 0
    )
    .map((article) => ({
      slug: article.slug,
    }));
}

// FIXED: Await params before destructuring
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await params first
  const article: StrapiArticle | null = await fetchArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

// FIXED: Await params before destructuring
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; // Await params first
  const article: StrapiArticle | null = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { title, content, cover_image, publishedAt } = article;
  const imageUrl = cover_image?.url
    ? `${STRAPI_URL}${cover_image.url}`
    : "/images/placeholder.jpg";

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold font-heading mb-4 text-text-primary">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <p className="text-text-secondary">
            Published on{" "}
            {new Date(publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <ShareButtons title={title} />
        </div>

        <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden mb-8">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>

        <div className="text-text-primary prose dark:prose-invert prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
