import { fetchArticles } from '@/lib/strapi';
import { StrapiArticle } from '@/types';
import ArticleCard from './ArticleCard';
import Link from 'next/link';

export default async function LatestArticles() {
  const articles: StrapiArticle[] = await fetchArticles();

  // Console log untuk debugging di terminal Next.js
  console.log("ARTICLES RECEIVED IN COMPONENT:", JSON.stringify(articles, null, 2));

  if (!articles || articles.length === 0) {
    return (
      <section className="py-20 sm:py-28">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Latest Crypto Insights</h2>
          <p className="mt-4 text-gray-400">No articles found at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-background-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Latest Crypto Insights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Stay updated with our latest articles, guides, and market analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/articles">
            <button className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-full transition-all text-lg hover:bg-accent/10">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}