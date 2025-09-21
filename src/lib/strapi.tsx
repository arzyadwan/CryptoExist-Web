import { StrapiArticle, PaginationMeta } from "@/types"; // Impor PaginationMeta

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const PAGE_SIZE = 6;

export async function fetchArticles(
  page: number = 1
): Promise<{ articles: StrapiArticle[]; meta: PaginationMeta } | null> {
  try {
    // UBAH BARIS DI BAWAH INI: kembalikan populate ke '*'
    const response = await fetch(
      `${STRAPI_URL}/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}&sort=publishedAt:desc`
    );
    
    if (!response.ok) {
      console.error("STRAPI FETCH FAILED:", response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    return {
      articles: data.data as StrapiArticle[],
      meta: data.meta as PaginationMeta,
    };
  } catch (error) {
    console.error("ERROR IN fetchArticles:", error);
    return null;
  }
}

export async function fetchArticleBySlug(slug: string): Promise<StrapiArticle | null> {
  try {
    // KEMBALIKAN KE POPULATE = *
    const response = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.data && data.data.length > 0) {
      return data.data[0] as StrapiArticle;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}":`, error);
    return null;
  }
}


export async function fetchArticlesByCategory(categorySlug: string): Promise<StrapiArticle[] | null> {
  try {
    // KEMBALIKAN KE POPULATE = *
    const response = await fetch(
      `${STRAPI_URL}/api/articles?filters[categories][slug][$eq]=${categorySlug}&populate=*`
    );
    if (!response.ok) throw new Error("Failed to fetch articles by category");
    const data = await response.json();
    return data.data as StrapiArticle[];
  } catch (error) {
    console.error(`Error fetching articles for category "${categorySlug}":`, error);
    return null;
  }
}

export async function searchArticles(query: string): Promise<StrapiArticle[] | null> {
  if (!query) return null;

  try {
    // KEMBALIKAN KE POPULATE = *
    const response = await fetch(
      `${STRAPI_URL}/api/articles?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=*`
    );

    if (!response.ok) {
      throw new Error(`Failed to search articles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data as StrapiArticle[];
  } catch (error) {
    console.error(`Error searching articles with query "${query}":`, error);
    return null;
  }
}

export async function fetchLatestArticles(): Promise<StrapiArticle[] | null> {
  try {
    // Mengambil 3 artikel terbaru berdasarkan tanggal publikasi
    const response = await fetch(
      `${STRAPI_URL}/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=3`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch latest articles: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data as StrapiArticle[];
  } catch (error) {
    console.error("Error fetching latest articles:", error);
    return null;
  }
}