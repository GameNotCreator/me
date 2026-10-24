import { site } from "@/libs/seo";
import { profileStructuredData } from "@/libs/seo";

export function metadataForLocale(locale = "en") {
  const fr = locale === "fr";
  const title = fr ? "Hedi Fourati | Développeur web et applications, étudiant à l’EPFL" : site.title;
  const description = fr ? "Développeur tunisien, créateur de produits et étudiant en informatique à l’EPFL. Découvrez les sites clients, applications iOS et desktop et projets d’ingénierie d’Hedi Fourati." : site.description;
  const path = fr ? "/fr" : "/";
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: "%s | Hedi Fourati" },
    description,
    authors: [{ name: site.name, url: `${site.url}/` }],
    creator: site.name,
    alternates: { canonical: path, languages: { en: "/", fr: "/fr", "x-default": "/" } },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: "website", url: `${site.url}${path}`, siteName: site.name, title, description, locale: fr ? "fr_FR" : "en_US", alternateLocale: fr ? ["en_US"] : ["fr_FR"], images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
  };
}

export function structuredDataForLocale(locale = "en") {
  const fr = locale === "fr";
  const pageUrl = `${site.url}${fr ? "/fr" : "/"}`;
  return {
    ...profileStructuredData,
    "@graph": profileStructuredData["@graph"].map((entry) => entry["@type"] === "WebSite" ? {
      ...entry,
      inLanguage: ["en", "fr"],
    } : {
      ...entry,
      "@id": `${pageUrl}#profile`,
      url: pageUrl,
      name: fr ? "Hedi Fourati | Développeur web et applications, étudiant à l’EPFL" : entry.name,
      description: fr ? "Développeur tunisien et étudiant en informatique à l’EPFL, créateur de sites web, d’applications et de projets d’ingénierie." : entry.description,
      inLanguage: locale,
      mainEntity: {
        ...entry.mainEntity,
        description: fr ? "Développeur autodidacte tunisien et créateur de projets, étudiant en deuxième année d’informatique à l’EPFL. Il développe des sites web et des applications desktop et iOS." : entry.mainEntity.description,
      },
    }),
  };
}
