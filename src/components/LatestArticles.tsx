'use client';

import { Tooltip } from './Tooltip'; // 1. Impor komponen Tooltip
import { motion, Variants } from 'framer-motion';
import ArticleCard from './ArticleCard';

// Mock data untuk artikel, nanti ini bisa dari API
const articlesData = [
  {
    slug: 'understanding-bitcoin-halving',
    imageSrc: '/images/artikel1.jpg',
    category: 'Analysis',
    title: 'The 2024 Bitcoin Halving: What It Means for Investors',
    excerpt: (
      <>
        Explore the most promising{' '}
        <Tooltip content="Decentralized Finance: Financial services on the blockchain.">
          <span className="text-accent border-b border-accent border-dashed cursor-help">
            DeFi
          </span>
        </Tooltip>{' '}
        platforms offering innovative solutions.
      </>
    ),
    author: 'Jane Doe',
    date: 'Sep 15, 2025',
    readTime: 7,
  },
  {
    slug: 'top-5-defi-platforms',
    imageSrc: '/images/artikel2.jpg', // Ganti dengan path gambar Anda
    category: 'Guide',
    title: 'Top 5 DeFi Platforms to Watch in Late 2025',
    excerpt: (
      <>
        Explore the most promising{' '}
        <Tooltip content="Explore the most promising decentralized finance platforms offering innovative solutions.">
          <span className="text-accent border-b border-accent border-dashed cursor-help">
            DeFi
          </span>
        </Tooltip>{' '}
        platforms offering innovative solutions.
      </>
    ),
    author: 'John Smith',
    date: 'Sep 12, 2025',
    readTime: 9,
  },
  {
    slug: 'the-rise-of-nfts',
    imageSrc: '/images/artikel3.jpg', // Ganti dengan path gambar Anda
    category: 'Review',
    title: 'The Rise of NFTs: More Than Just Digital Art?',
    excerpt: (
      <>
        Explore the most promising{' '}
        <Tooltip content="Decentralized Finance: Financial services on the blockchain.">
          <span className="text-accent border-b border-accent border-dashed cursor-help">
            DeFi
          </span>
        </Tooltip>{' '}
        platforms offering innovative solutions.
      </>
    ),
    author: 'Alex Ray',
    date: 'Sep 10, 2025',
    readTime: 6,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const LatestArticles = () => {
  // Buat folder 'public/images' dan letakkan gambar Anda di sana
  return (
    <section className="py-20 sm:py-28 bg-background-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Latest Crypto Insights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Stay updated with our latest articles, guides, and market analysis from our experts.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articlesData.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-full transition-all text-lg"
          >
            View All Articles
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;