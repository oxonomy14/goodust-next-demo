// src/app/sitemap.xml/route.ts

/* import { xmlResponse, getPosts } from '@/lib/sitemap';

export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://travioxa.com';

  // 👉 реальний lastmod тільки для постів
  const posts = await getPosts();

  const lastPostUpdate = posts.reduce((latest, post) => {
    const date = new Date(post.updatedAt || post.publishedAt || 0).getTime();
    return date > latest ? date : latest;
  }, 0);

  const postsLastmod = lastPostUpdate
    ? new Date(lastPostUpdate).toISOString()
    : new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-posts.xml</loc>
    <lastmod>${postsLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-categories.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-authors.xml</loc>
  </sitemap>
</sitemapindex>`;

  return xmlResponse(xml);
} */
