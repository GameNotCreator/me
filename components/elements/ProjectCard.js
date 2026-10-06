import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, role, outcome, tags, imageUrl, imageAlt, imageFit, imagePosition, link, status, accent, appStoreLink }) {
  return (
    <article className="project-card" style={{ "--project-accent": accent || "#6543cf" }}>
      <div className={`project-visual ${imageUrl ? "has-image" : ""}`}>
        {imageUrl ? <Image src={imageUrl} alt={imageAlt || `${title} website from my earlier portfolio`} sizes="(max-width: 700px) 100vw, 50vw" className="project-image" style={{ objectFit: imageFit || "cover", objectPosition: imagePosition || "top" }} /> : <div className="project-wordmark" aria-hidden="true">{title}<span>.</span></div>}
        <span className="project-status">{status}</span>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        {role && <p className="project-role"><span>My role</span>{role}</p>}
        {outcome && <p className="project-outcome">{outcome}</p>}
        <ul className="project-tags" aria-label={`${title} details`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {(link || appStoreLink) && <div className="project-links">
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">Visit the project <ArrowUpRight size={16} /></a>}
          {appStoreLink && <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="text-link">App Store <ArrowUpRight size={16} /></a>}
        </div>}
      </div>
    </article>
  );
}
