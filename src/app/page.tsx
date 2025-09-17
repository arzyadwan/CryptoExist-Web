import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import LatestArticles from '@/components/LatestArticles';

export const metadata: Metadata = {
  title: 'Home',
  description: 'The main page for Crypto Exist, your number one source for crypto news and analysis.',
};

export default async function Home() {
  const articlesSection = <LatestArticles />;

  return (
    <HomePageClient>
      {articlesSection}
    </HomePageClient>
  );
}