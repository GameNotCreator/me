import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Life from "@/components/sections/Life";
import Certificates from "@/components/sections/Certificates";
import { galleryPhotos } from "@/libs/gallery-photos";
import { profileStructuredData } from "@/libs/seo";

export default function Home() {
  // Curate the personal albums explicitly; engineering photos belong to projects.
  const galleries = Object.fromEntries(["Charity", "Chess"].map((category) => [
    category,
    galleryPhotos.filter((photo) => photo.src.startsWith(`/images/${category}/`)),
  ]));

  return (
    <main id="main-content" className="flex min-h-screen w-full flex-col items-center p-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Life galleries={galleries} />
      <Contact />
    </main>
  );
}
