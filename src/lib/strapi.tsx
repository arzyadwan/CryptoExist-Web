import { StrapiArticle } from "@/types";

// URL Strapi API Anda. Sebaiknya ini disimpan di file .env
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchArticles(): Promise<StrapiArticle[]> {
  try {
    // Kita tambahkan ?populate=* untuk menyertakan gambar sampul
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data as StrapiArticle[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
}