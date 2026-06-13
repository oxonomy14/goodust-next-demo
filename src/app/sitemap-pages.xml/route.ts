// src/app/sitemap-pages.xml/route.ts

/* import {
  LOCALES,
  buildStaticPageUrl,
  getStaticPages,
  xmlResponse,
  escapeXml,
} from '@/lib/sitemap';

export const revalidate = 3600;

export async function GET() {
  try {
    const now = new Date().toISOString();

    const urls = getStaticPages().flatMap((page) => {
      return LOCALES.map((locale) => {
        const loc = buildStaticPageUrl(page, locale);

        const alternates = LOCALES.map((alt) => {
          return `<xhtml:link rel="alternate" hreflang="${alt}" href="${escapeXml(
            buildStaticPageUrl(page, alt),
          )}" />`;
        }).join('\n');

        const defaultUrl = buildStaticPageUrl(page, 'en');

        const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
          defaultUrl,
        )}" />`;

        const priority =
          page === 'home'
            ? '1.0'
            : page === 'about' || page === 'contacts'
              ? '0.6'
              : '0.5';

        const changefreq = page === 'home' ? 'daily' : 'monthly';

        return `<url>
  <loc>${escapeXml(loc)}</loc>
  ${alternates}
  ${xDefault}
  <lastmod>${now}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
      });
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join('\n')}
</urlset>`;

    return xmlResponse(xml);
  } catch {
    return xmlResponse(
      `<?xml version="1.0" encoding="UTF-8"?><urlset></urlset>`,
    );
  }
} */
