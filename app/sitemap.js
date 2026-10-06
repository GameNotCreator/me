import { site } from "@/libs/seo";

export default function sitemap() {
  // This is a single-page portfolio. Section anchors are not separate pages.
  return [{
    url: `${site.url}/`,
    lastModified: site.updatedAt,
    images: [`${site.url}/photo.jpg`],
  }];
}
