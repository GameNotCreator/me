# SEO configuration and verification

Status recorded on 6 October 2026. The production build passes locally. Deployment of this version to the public domain and Google indexing are **not yet confirmed** at the time of writing.

## Canonical URL and metadata

The preferred origin is `https://www.thehnh.tech`. `libs/seo.js` supplies the shared identity, title, description, GitHub profile and content update date. `app/layout.js` uses that origin for `metadataBase`, the self-referencing canonical `/`, Open Graph URL and author URL. The page is English and identifies Hedi Fourati as a web and app developer and EPFL Computer Science student.

Vercel project `landing-thehnh` is connected to `GameNotCreator/me`; its apex-domain redirect is configured as a permanent 308 to the www domain. Keep the canonical, redirects, social URLs and sitemap aligned if the preferred domain changes.

## Structured data and crawling

`libs/seo.js` defines a linked `WebSite`, `ProfilePage` and `Person` graph. The profile's `mainEntity` is Hedi, with his name, public portrait, description and verified GitHub profile. `app/page.js` renders the JSON-LD in the server output and escapes `<` during serialization. Keep these fields consistent with visible, confirmed information; do not add invented credentials, statistics or profile dates.

`app/robots.js` allows public crawling and advertises the sitemap. The metadata also permits indexing and following links. `app/sitemap.js` includes the single canonical page and the portrait image. Section anchors such as `#projects` are not separate pages. Update `site.updatedAt` only after a significant content change; it supplies the sitemap's `lastModified` and the profile's modification date.

These signals help discovery and interpretation. They do not establish that Google has crawled or indexed the site, and structured data does not guarantee a rich result or ranking.

## Images and client code

`app/opengraph-image.js` generates a 1200 × 630 PNG with Hedi's real portrait and profile text. `app/twitter-image.js` reuses that image, and Twitter metadata requests `summary_large_image`. Check the generated public image URLs after deployment.

Gallery photos use descriptive alt text and captions from `libs/gallery-photos.js` and `libs/work-photos.js`. The gallery preserves these descriptions in its preview dialog; its fallback is the album name and photo number. Project screenshots have project-specific alternatives. Responsive `next/image` sizes are defined, and the hero portrait is prioritized. Review new photos individually rather than inferring people, locations or events from filenames.

Rendered animations use the smaller `m` components under `LazyMotion` with `domAnimation`. `MotionConfig` respects the user's reduced-motion preference. This limits the animation feature set while retaining the existing interactions.

## Local evidence and next checks

- The production build completed successfully.
- Next.js build output for `/` reports First Load JS reduced from **156 kB to 129 kB**. This is a build metric, not a measured browser load time or Core Web Vitals result.
- Local browser checks passed: no horizontal overflow on mobile, six valid navigation anchors, a fully visible landscape photo dialog, button close and focus restoration, plus the desktop portrait dialog and Escape close. Independent review found no blocking issue.
- The public deployment, its final HTML and image responses, search snippets and Google-selected canonical have not yet been confirmed for this version.

After deployment, check all HTTP/HTTPS and apex/www variants, the canonical and JSON-LD in the rendered page, `/robots.txt`, `/sitemap.xml`, and both social images. Validate the profile with Google's Rich Results Test. An authorized Search Console owner can inspect the live URL, confirm Google's selected canonical, submit the sitemap and request a recrawl if useful. Monitor actual impressions and clicks; recrawling can take days or weeks and does not guarantee indexing.

Measure real mobile and desktop performance with PageSpeed Insights and, when sufficient traffic exists, field Core Web Vitals. Record LCP, INP and CLS separately from bundle size. Recheck photo loading, layout shifts and the contact/navigation interactions after publication.

## Official references

- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Google: sitemap best practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Next.js 15: metadata](https://nextjs.org/docs/15/app/api-reference/functions/generate-metadata)
- [Next.js 15: JSON-LD](https://nextjs.org/docs/15/app/guides/json-ld)
- [Next.js 15: robots.txt](https://nextjs.org/docs/15/app/api-reference/file-conventions/metadata/robots)
- [Next.js 15: sitemap.xml](https://nextjs.org/docs/15/app/api-reference/file-conventions/metadata/sitemap)
