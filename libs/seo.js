export const site = {
  name: "Hedi Fourati",
  url: "https://www.thehnh.tech",
  title: "Hedi Fourati | Web & App Developer, EPFL Student",
  description:
    "Tunisian web and app developer, founder, and EPFL Computer Science student. Explore Hedi Fourati's client websites, desktop and iOS apps, and projects.",
  // Change this only when the public profile or project content is updated.
  updatedAt: "2026-10-06",
  github: "https://github.com/GameNotCreator",
};

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: "Hedi Fourati's Portfolio",
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#hedi-fourati` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      dateModified: site.updatedAt,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: {
        "@type": "Person",
        "@id": `${site.url}/#hedi-fourati`,
        name: site.name,
        url: `${site.url}/`,
        image: `${site.url}/photo.jpg`,
        description:
          "Tunisian self-taught developer and founder, studying Computer Science in his second year at EPFL. He builds websites, desktop apps, and iOS apps.",
        nationality: { "@type": "Country", name: "Tunisia" },
        sameAs: [site.github],
      },
    },
  ],
};
