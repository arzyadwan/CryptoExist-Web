import { fetchArticles } from "@/lib/strapi";
import ClientArticlesPage from "@/components/ClientArticlesPage";
import type { Metadata } from 'next';
import { StrapiArticle, PaginationMeta } from "@/types/index";

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all articles, guides, and analysis from Crypto Exist.',
};

type ArticlesData = {
  articles: StrapiArticle[];
  meta: PaginationMeta;
};

export default async function ArticlesPage() {
  // Fetch all articles at build time for static export
  const fetchedData: ArticlesData | null = await fetchArticles(1); // Start with page 1

  // If fetch fails or no data
  if (!fetchedData || !fetchedData.articles) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">All Articles</h1>
        <p className="text-gray-400">Could not load articles.</p>
      </div>
    );
  }

  // Pass initial data to client component
  return <ClientArticlesPage initialData={fetchedData} />;
}