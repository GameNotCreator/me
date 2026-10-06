"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({ title, description, role, outcome, tags, imageUrl, imageAlt, imageFit, imagePosition, link, status, appStoreLink }) {
  const reduceMotion = useReducedMotion();
  const linkFeedback = reduceMotion ? {} : { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } };
  return (
    <motion.article className="project-card"
      initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}>
      <div className={`project-visual ${imageUrl ? "has-image" : ""}`}>
        {imageUrl ? <Image src={imageUrl} alt={imageAlt || `${title} project preview`} fill sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 900px) 50vw, 26rem" className="project-image" style={{ objectFit: imageFit || "cover", objectPosition: imagePosition || "top" }} /> : <div className="project-wordmark" aria-hidden="true">{title}</div>}
        {status && <span className="project-status">{status}</span>}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        {role && <p className="project-role"><span>My role</span>{role}</p>}
        {outcome && <p className="project-outcome">{outcome}</p>}
        <ul className="project-tags" aria-label={`${title} details`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {(link || appStoreLink) && <div className="project-links">
          {link && <motion.a href={link} target="_blank" rel="noopener noreferrer" className="button button-primary" aria-label={`Visit ${title} (opens in a new tab)`} {...linkFeedback} transition={{ duration: 0.15 }}>View Project <ArrowUpRight size={16} aria-hidden="true" /></motion.a>}
          {appStoreLink && <motion.a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="button button-secondary" aria-label={`View ${title} on the App Store (opens in a new tab)`} {...linkFeedback} transition={{ duration: 0.15 }}>App Store <ArrowUpRight size={16} aria-hidden="true" /></motion.a>}
        </div>}
      </div>
    </motion.article>
  );
}
