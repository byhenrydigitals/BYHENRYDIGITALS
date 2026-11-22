import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { PageRoute, ROUTES } from '../src/config/siteConfig';
import {
  buildStructuredDataGraph,
  getCanonicalUrl,
  normalizeSiteUrl,
  ROUTE_SEO,
  SEO_IMAGE_ALT,
  SEO_IMAGE_PATH,
} from '../src/config/seoConfig';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildRouteHeadHtml(route: PageRoute, baseUrl: string): string {
  const seo = ROUTE_SEO[route];
  const canonicalUrl = getCanonicalUrl(route, baseUrl);
  const ogImageUrl = `${baseUrl}${SEO_IMAGE_PATH}`;
  const jsonLd = JSON.stringify(buildStructuredDataGraph(route, baseUrl, 'en')).replace(
    /</g,
    '\\u003c'
  );

  return [
    `<title>${escapeHtmlText(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta name="theme-color" content="#0b0b0b" />`,
    `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="BYHENRYDIGITALS" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(ogImageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeHtmlAttr(SEO_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(ogImageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtmlAttr(SEO_IMAGE_ALT)}" />`,
    `<script id="bhd-structured-data" type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}

function buildSitemapXml(baseUrl: string): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(({ route }) => {
    const seo = ROUTE_SEO[route];
    const loc = escapeHtmlText(getCanonicalUrl(route, baseUrl));
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${seo.changefreq}</changefreq>
    <priority>${seo.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt(baseUrl: string): string {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;
}

function run() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run vite build before prerender.');
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const baseUrl = normalizeSiteUrl(process.env.VITE_SITE_URL);

  for (const { route } of ROUTES) {
    const appHtml = renderToString(
      React.createElement(
        App as React.ComponentType<{ initialRoute?: PageRoute }>,
        { initialRoute: route }
      )
    );

    const routeHeadBlock = buildRouteHeadHtml(route, baseUrl);
    let pageHtml = templateHtml;

    // Strip existing static SEO tags replaced per route while preserving fonts/styles/scripts
    pageHtml = pageHtml
      .replace(/<title>[\s\S]*?<\/title>/i, '')
      .replace(/<meta[^>]+name="description"[^>]*>/gi, '')
      .replace(/<meta[^>]+name="robots"[^>]*>/gi, '')
      .replace(/<meta[^>]+name="theme-color"[^>]*>/gi, '')
      .replace(/<link[^>]+rel="icon"[^>]*>/gi, '')
      .replace(/<link[^>]+rel="canonical"[^>]*>/gi, '')
      .replace(/<meta[^>]+property="og:[^"]+"[^>]*>/gi, '')
      .replace(/<meta[^>]+name="twitter:[^"]+"[^>]*>/gi, '')
      .replace(/<script[^>]+id="bhd-structured-data"[^>]*>[\s\S]*?<\/script>/gi, '');

    pageHtml = pageHtml.replace(
      /(<meta\s+name="viewport"[^>]*>)/i,
      `$1\n    ${routeHeadBlock}`
    );

    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const outFilename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    fs.writeFileSync(path.join(distDir, outFilename), pageHtml, 'utf-8');
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemapXml(baseUrl), 'utf-8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), buildRobotsTxt(baseUrl), 'utf-8');

  console.log(
    `Prerendered ${ROUTES.length} routes + sitemap.xml + robots.txt for ${baseUrl}`
  );
}

run();
