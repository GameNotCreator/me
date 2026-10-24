import { site } from "@/libs/seo";

export default function sitemap() {
  return ["/", "/fr"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: site.updatedAt,
    images: [`${site.url}/photo.jpg`],
    alternates: { languages: { en: `${site.url}/`, fr: `${site.url}/fr` } },
  }));
}
