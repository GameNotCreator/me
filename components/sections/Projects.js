"use client";
import { useLocale } from "@/libs/LocaleProvider";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { hackathonsData, projectsData } from "@/libs/data";
import ProjectCard from "@/components/elements/ProjectCard";
import { useSectionInView } from "@/libs/hooks";
import Hackathons from "@/components/sections/Hackathons";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { localizeRecord } from "@/libs/i18n";

const categories = [
  { id: "highlights", label: "Highlights", description: "These are the projects I’ve learned the most from and put the most thought and energy into. They’re the ones I’m especially proud of." },
  { id: "all", label: "All projects" },
  { id: "engineering", label: "Engineering Projects", description: "Physical projects built with my engineering club. Explore the prototypes, the construction process, and the stories behind them." },
  { id: "opensource", label: "Open source", description: "Projects I’m building in the open. Explore the mobile app and its backend, read the code, or contribute on GitHub." },
  { id: "website", label: "Websites" },
  { id: "mobile", label: "Mobile apps" },
  { id: "desktop", label: "Desktop apps" },
  { id: "hackathon", label: "Hackathons" },
];

const isInCategory = (project, id) => id === "highlights"
  ? Boolean(project.highlight)
  : (project.categories ?? [project.category]).includes(id);

const categoryCount = (id) => id === "all"
  ? projectsData.length + hackathonsData.length
  : id === "hackathon" ? hackathonsData.length : projectsData.filter((project) => isInCategory(project, id)).length;

export default function Projects() {
  const { locale, t } = useLocale();
  const { ref } = useSectionInView("projects", 0.01);
  const [activeCategory, setActiveCategory] = useState("highlights");
  const reduceMotion = useReducedMotion();
  const visibleProjects = projectsData.filter((project) => activeCategory === "all" || isInCategory(project, activeCategory));
  const showHackathons = activeCategory === "all" || activeCategory === "hackathon";
  const resultCount = visibleProjects.length + (showHackathons ? hackathonsData.length : 0);
  const active = categories.find((category) => category.id === activeCategory);
  const visibleIndexes = new Map(visibleProjects.map((project, index) => [project.id, index]));
  return (
    <section id="projects" ref={ref} className="projects-section portfolio-section text-center">
      <h2 className="section-title">{t("Projects")}</h2>
      <p className="section-copy">{t("From websites and apps to physical builds, these are the projects I’ve created, delivered, and explored.")}</p>
      <div className="project-filters" role="group" aria-label={t("Filter projects by category")}>
        {categories.map(({ id, label }) => <button
          key={id}
          type="button"
          className={`project-filter${id === "highlights" ? " project-filter-highlight" : ""}`}
          aria-pressed={activeCategory === id}
          aria-controls="project-results"
          aria-label={`${t(label)}, ${categoryCount(id)} ${t(categoryCount(id) === 1 ? "project" : "projects")}`}
          onClick={() => setActiveCategory(id)}
        >{id === "highlights" && <Sparkles size={14} aria-hidden="true" />}{t(label)}<span className="project-filter-count" aria-hidden="true">{categoryCount(id)}</span></button>)}
      </div>
      {active.description && <p className="project-category-copy">{t(active.description)}</p>}
      <p className="project-filter-summary" role="status" aria-live="polite" aria-atomic="true">{resultCount} {t(resultCount === 1 ? "project" : "projects")} · {t(active.label)}</p>
      <m.div id="project-results" className="project-results" key={activeCategory}
        initial={reduceMotion ? false : { opacity: 0.8, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.24 }}>
        <div className="project-list" hidden={visibleProjects.length === 0}>
          {projectsData.map((project) => <ProjectCard key={project.id} {...localizeRecord(project, locale)}
            hidden={!visibleIndexes.has(project.id)}
            alternate={visibleIndexes.get(project.id) % 2 === 1}
            expandedStory={activeCategory === "engineering"}
            highlighted={activeCategory === "highlights" && Boolean(project.highlight)} />)}
        </div>
        <Hackathons hidden={!showHackathons} />
      </m.div>
    </section>
  );
}
