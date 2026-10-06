"use client";
import { projectsData } from "@/libs/data";
import ProjectCard from "@/components/elements/ProjectCard";
import { useSectionInView } from "@/libs/hooks";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import { workPhotos } from "@/libs/work-photos";

const groups = [
  { title: "Products & my first venture", categories: ["venture", "product"], description: "Ideas I have turned into businesses, student tools, and everyday apps." },
  { title: "Client work", categories: ["client"], description: "Websites built and sold to the companies that use them." },
  { title: "Currently building", categories: ["in-progress"], description: "The projects I am developing next." },
];
export default function Projects() {
  const { ref } = useSectionInView("projects", 0.01);
  const earlierProjects = projectsData.filter((project) => project.category === "early");
  return (
    <section id="projects" ref={ref} className="work-section section-space page-width">
      <div className="section-intro">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">An idea becomes<br /><em>a real project.</em></h2>
        <p className="section-description">A closer look at what I built, who it is for, and where each project stands.</p>
      </div>
      {groups.map((group) => <div className="project-group" key={group.title}>
        <div className="group-heading"><h3>{group.title}</h3><p>{group.description}</p></div>
        <div className="project-grid">{projectsData.filter((project) => group.categories.includes(project.category)).map((project) => <ProjectCard key={project.id} {...project} />)}</div>
      </div>)}
      {earlierProjects.length > 0 && <details className="earlier-projects">
        <summary>Earlier chapters <span>{earlierProjects.length} projects</span></summary>
        <p className="section-description">School projects, community work, and my first websites.</p>
        <div className="project-grid">{earlierProjects.map((project) => <ProjectCard key={project.id} {...project} />)}</div>
      </details>}
      <div className="work-photos" id="work-photos">
        <div className="group-heading"><h3>Work, in pictures</h3><p>Shirts, app screens, hackathons, and the desks where I build. Open a photo for a closer look.</p></div>
        <ImageGallery galleries={{ Work: workPhotos }} className="work-gallery" showCategoryTitles={false} />
      </div>
    </section>
  );
}
