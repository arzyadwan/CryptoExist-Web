import { fetchArticlesByCategory } from "@/lib/strapi";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

type CategoryPageParams = {
  params: {
    slug: string;
  };
};

// SEO dinamis
export async function generateMetadata({ params }: CategoryPageParams): Promise<Metadata> {
  const categoryName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Articles in: ${categoryName}`,
    description: `Browse all articles filed under the category ${categoryName} on Crypto Exist.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  const articles = await fetchArticlesByCategory(params.slug);
  const categoryName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (!articles) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <p className="text-accent font-semibold mb-2">Category</p>
        <h1 className="text-4xl font-bold font-heading">
          {categoryName}
        </h1>
      </header>

      <main>
        {articles.length === 0 ? (
          <p>No articles found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}