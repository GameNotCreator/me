import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Life from "@/components/sections/Life";
import path from "path";
import fs from "fs";

export default function Home() {
    // Chemin absolu vers le dossier public/images
    const imagesDir = path.join(process.cwd(), "public", "images");
  
    // Récupérer les catégories (sous-dossiers)
    const categories = fs.readdirSync(imagesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  
    // Pour chaque catégorie, lister les fichiers .jpg et construire les URL publiques
    const galleries = {};
    categories.forEach((category) => {
      const categoryDir = path.join(imagesDir, category);
      const files = fs.readdirSync(categoryDir);
      const imageFiles = files.filter((file) =>
        file.toLowerCase().endsWith(".jpg")
      );
      // Trier numériquement (si les fichiers sont nommés "1.jpg", "2.jpg", etc.)
      imageFiles.sort((a, b) => {
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        return numA - numB;
      });
      galleries[category] = imageFiles.map(
        (file) => `/images/${category}/${file}`
      );
    });

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Life galleries={galleries} />
      <Contact />
    </main>
  );
}
