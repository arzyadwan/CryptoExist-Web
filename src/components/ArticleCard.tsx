"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Clock } from "lucide-react";
import { StrapiArticle } from "@/types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function ArticleCard({ article }: { article: StrapiArticle }) {
  const { title, slug, excerpt, cover_image } = article;

  const imageUrl = cover_image?.formats?.small?.url
    ? `${STRAPI_URL}${cover_image.formats.small.url}`
    : cover_image?.url
    ? `${STRAPI_URL}${cover_image.url}`
    : "/images/placeholder.jpg";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-neutral-dark rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-white/10"
    >
      <Link href={`/articles/${slug}`} className="block">
        <div className="relative w-full h-52">
          <Image
            src={imageUrl}
            alt={title || "Article Image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-3 hover:text-accent transition-colors">
          <Link href={`/articles/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{excerpt}</p>
        <div className="border-t border-white/10 pt-4 mt-auto text-xs text-gray-500 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>Crypto Exist Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>5 min read</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
