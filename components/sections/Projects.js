"use client";
import { useState } from "react";
import { hackathonsData, projectsData } from "@/libs/data";
import ProjectCard from "@/components/elements/ProjectCard";
import { useSectionInView } from "@/libs/hooks";
import Hackathons from "@/components/sections/Hackathons";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";

const categories = [
  { id: "all", label: "All projects" },
  { id: "website", label: "Websites" },
  { id: "mobile", label: "Mobile apps" },
  { id: "desktop", label: "Desktop apps" },
  { id: "hackathon", label: "Hackathons" },
];

const categoryCount = (id) => id === "all"
  ? projectsData.length + hackathonsData.length
  : id === "hackathon" ? hackathonsData.length : projectsData.filter((project) => project.category === id).length;

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.01);
  const [activeCategory, setActiveCategory] = useState("all");
  const reduceMotion = useReducedMotion();
  const visibleProjects = projectsData.filter((project) => activeCategory === "all" || project.category === activeCategory);
  const showHackathons = activeCategory === "all" || activeCategory === "hackathon";
  const resultCount = visibleProjects.length + (showHackathons ? hackathonsData.length : 0);
  const activeLabel = categories.find((category) => category.id === activeCategory).label;
  return (
    <section id="projects" ref={ref} className="projects-section portfolio-section text-center">
      <h2 className="section-title">Projects</h2>
      <p className="section-copy">The websites, businesses, and apps I have built, alongside the projects I am developing next.</p>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map(({ id, label }) => <button
          key={id}
          type="button"
          className="project-filter"
          aria-pressed={activeCategory === id}
          aria-controls="project-results"
          aria-label={`${label}, ${categoryCount(id)} ${categoryCount(id) === 1 ? "project" : "projects"}`}
          onClick={() => setActiveCategory(id)}
        >{label}<span className="project-filter-count" aria-hidden="true">{categoryCount(id)}</span></button>)}
      </div>
      <p className="project-filter-summary" role="status" aria-live="polite" aria-atomic="true">{resultCount} {resultCount === 1 ? "project" : "projects"} · {activeLabel}</p>
      <m.div id="project-results" className="project-results" key={activeCategory}
        initial={reduceMotion ? false : { opacity: 0.8, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.24 }}>
        {visibleProjects.length > 0 && <div className="project-list">
          {visibleProjects.map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>}
        {showHackathons && <Hackathons />}
      </m.div>
    </section>
  );
}
