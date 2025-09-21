import { searchArticles } from "@/lib/strapi";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results',
  // Halaman ini tidak perlu diindeks oleh Google
  robots: {
    index: false,
  }
};

type SearchPageProps = {
  searchParams: {
    q: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || "";
  const articles = await searchArticles(query);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <header className="mb-12">
        <h1 className="text-4xl font-bold font-heading">
          Search Results
        </h1>
        <p className="mt-2 text-text-secondary">
          Showing results for: <span className="text-accent font-semibold">&quot;{query}&quot;</span>
        </p>
      </header>

      <main>
        {!articles || articles.length === 0 ? (
          <p className="text-center text-lg text-text-secondary">No articles found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}