import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Life from "@/components/sections/Life";
import { workPhotos } from "@/libs/work-photos";
import path from "path";
import fs from "fs";

export default function Home() {
    // Keep the existing personal photo collections available in the Life section.
    const imagesDir = path.join(process.cwd(), "public", "images");
    const photoDetails = new Map(workPhotos.map((photo) => [photo.src, photo]));
  
    const categories = fs.readdirSync(imagesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  
    const galleries = {};
    categories.forEach((category) => {
      const categoryDir = path.join(imagesDir, category);
      const files = fs.readdirSync(categoryDir);
      const imageFiles = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file));
      imageFiles.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
      galleries[category] = imageFiles.map((file) => {
        const src = `/images/${category}/${file}`;
        return photoDetails.get(src) || src;
      });
    });

  return (
    <main id="main-content" className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Life galleries={galleries} />
      <Contact />
    </main>
  );
}
