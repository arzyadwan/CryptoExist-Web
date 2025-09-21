'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from "@/components/ArticleCard";
import PaginationControls from "@/components/PaginationControls";
import { fetchArticles } from "@/lib/strapi";
import { StrapiArticle, PaginationMeta } from "@/types/index";

type ArticlesData = {
  articles: StrapiArticle[];
  meta: PaginationMeta;
};

type ClientArticlesPageProps = {
  initialData: ArticlesData;
};

export default function ClientArticlesPage({ initialData }: ClientArticlesPageProps) {
  const [articlesData, setArticlesData] = useState<ArticlesData>(initialData);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1;

  // Load articles when page changes
  useEffect(() => {
    const loadPage = async () => {
      if (currentPage === 1) {
        // Use initial data for page 1
        setArticlesData(initialData);
        return;
      }

      setLoading(true);
      try {
        const fetchedData = await fetchArticles(currentPage);
        if (fetchedData && fetchedData.articles) {
          setArticlesData(fetchedData);
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, [currentPage, initialData]);

  const { articles, meta } = articlesData;
  const pageCount = meta.pagination.pageCount;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading">
          All Articles
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-text-secondary">
          Browse our full archive of crypto insights, guides, and market analysis.
        </p>
      </header>

      <main>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p className="mt-4 text-text-secondary">Loading articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center">No articles have been published yet.</p>
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

      <PaginationControls 
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </div>
  );
}