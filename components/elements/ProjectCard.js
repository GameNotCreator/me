"use client";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({ title, description, role, outcome, tags, imageUrl, imageAlt, imageFit, imagePosition, previewType, previewDomain, link, status, appStoreLink }) {
  const reduceMotion = useReducedMotion();
  const isWebsite = previewType === "website" && Boolean(imageUrl);
  const linkFeedback = reduceMotion ? {} : { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } };
  return (
    <motion.article className="project-card"
      initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}>
      <div className={`project-visual ${imageUrl ? "has-image" : ""} ${isWebsite ? "is-website" : ""}`}>
        {isWebsite ? <a href={link} target="_blank" rel="noopener noreferrer" className="project-browser" aria-label={`Open ${title} website (opens in a new tab)`}>
          <div className="project-browser-bar">
            <span className="project-browser-controls" aria-hidden="true"><span /><span /><span /></span>
            <span className="project-browser-address"><Globe size={12} aria-hidden="true" /><span>{previewDomain}</span></span>
          </div>
          <Image src={imageUrl} alt={imageAlt || `${title} website screenshot`} width={1440} height={1000} sizes="(max-width: 959px) calc(100vw - 5rem), (max-width: 1167px) calc(52vw - 5rem), 33rem" className="project-website-image" style={{ objectFit: "contain" }} />
        </a> : imageUrl ? <Image src={imageUrl} alt={imageAlt || `${title} project preview`} fill sizes="(max-width: 959px) calc(100vw - 2rem), (max-width: 1167px) 52vw, 37rem" className="project-image" style={{ objectFit: imageFit || "cover", objectPosition: imagePosition || "top" }} /> : <div className="project-wordmark" aria-hidden="true">{title}</div>}
        {!isWebsite && status && <span className="project-status">{status}</span>}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        {isWebsite && status && <p className="project-preview-status">{status}</p>}
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
