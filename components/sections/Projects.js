"use client";
import { projectsData } from "@/libs/data";
import ProjectCard from "@/components/elements/ProjectCard";
import { useSectionInView } from "@/libs/hooks";
import Hackathons from "@/components/sections/Hackathons";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.01);
  return (
    <section id="projects" ref={ref} className="projects-section portfolio-section text-center">
      <h2 className="section-title">Projects</h2>
      <p className="section-copy">The websites, businesses, and apps I have built, alongside the projects I am developing next.</p>
      <div className="project-list">
        {projectsData.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
      <Hackathons />
    </section>
  );
}
