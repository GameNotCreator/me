"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Globe, Sparkles } from "lucide-react";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";

export default function ProjectCard({ id, title, description, role, outcome, tags, imageUrl, imageAlt, imageFit, imagePosition, previewType, previewDomain, previewStack, link, status, appStoreLink, appStoreLabel = "App Store (iOS)", linkLabel, demoCredentials, sourceLinks = [], availability, highlightDetails = [], highlighted = false, hidden = false, alternate = false }) {
  const reduceMotion = useReducedMotion();
  const isWebsite = previewType === "website" && Boolean(imageUrl);
  const previewWidth = imageUrl?.width || 1440;
  const previewHeight = imageUrl?.height || 1000;
  const websiteLabel = linkLabel || (appStoreLink ? "Website" : "View Project");
  const linkFeedback = reduceMotion ? {} : { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } };
  return (
    <m.article className={`project-card${alternate ? " is-alternate" : ""}${highlighted ? " project-card-highlight" : ""}`}
      hidden={hidden}
      data-project-id={id}
      initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={highlighted && !reduceMotion ? { y: -4 } : undefined}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}>
      <div className={`project-visual ${imageUrl ? "has-image" : ""} ${isWebsite ? "is-website" : ""}`}>
        {isWebsite ? <a href={link} target="_blank" rel="noopener noreferrer" className="project-browser" aria-label={`Open ${title} website (opens in a new tab)`}>
          <div className="project-browser-bar">
            <span className="project-browser-controls" aria-hidden="true"><span /><span /><span /></span>
            <span className="project-browser-address"><Globe size={12} aria-hidden="true" /><span>{previewDomain}</span></span>
          </div>
          <Image src={imageUrl} alt={imageAlt || `${title} website screenshot`} width={previewWidth} height={previewHeight} sizes="(max-width: 959px) calc(100vw - 5rem), (max-width: 1167px) 52vw, 37rem" className="project-website-image" style={{ objectFit: "contain", aspectRatio: `${previewWidth} / ${previewHeight}` }} />
        </a> : imageUrl ? <Image src={imageUrl} alt={imageAlt || `${title} project preview`} fill sizes="(max-width: 959px) calc(100vw - 2rem), (max-width: 1167px) 52vw, 37rem" className="project-image" style={{ objectFit: imageFit || "cover", objectPosition: imagePosition || "top" }} /> : previewStack ? <div className="project-source-preview" aria-label={`${title} architecture`}>
          <Code2 size={28} aria-hidden="true" />
          <p className="project-source-name">{title}</p>
          <p className="project-source-caption">Open-source mobile project</p>
          <div className="project-source-stack"><span>{previewStack[0]}</span><ArrowDown size={18} aria-hidden="true" /><span>{previewStack[1]}</span></div>
        </div> : <div className="project-wordmark" aria-hidden="true">{title}</div>}
        {!isWebsite && status && <span className="project-status">{status}</span>}
      </div>
      <div className="project-content">
        {highlighted && <p className="project-highlight-label"><Sparkles size={14} aria-hidden="true" />Selected project</p>}
        <h3>{title}</h3>
        {isWebsite && status && <p className="project-preview-status">{status}</p>}
        <p className="project-description">{description}</p>
        {role && <p className="project-role"><span>My role</span>{role}</p>}
        {outcome && <p className="project-outcome">{outcome}</p>}
        {highlighted && highlightDetails.length > 0 && <dl className="project-highlight-details">
          {highlightDetails.map(({ label, description: detail }) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}
        </dl>}
        <ul className="project-tags" aria-label={`${title} details`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {demoCredentials && <aside className="project-demo" aria-label={`${title} demo login`}>
          <p className="project-demo-title">Demo login</p>
          <dl>
            <dt>Email</dt><dd><code>{demoCredentials.email}</code></dd>
            <dt>Password</dt><dd><code>{demoCredentials.password}</code></dd>
          </dl>
          <p className="project-demo-note">Shared demo account. Use fictional data only.</p>
        </aside>}
        {(availability || appStoreLink) && <p className="project-availability">{availability || "Available on iOS. Android is not available yet."}</p>}
        {(link || appStoreLink || sourceLinks.length > 0) && <div className="project-links">
          {appStoreLink && <m.a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="button button-primary" aria-label={`${appStoreLabel}: ${title} (opens in a new tab)`} {...linkFeedback} transition={{ duration: 0.15 }}>{appStoreLabel} <ArrowUpRight size={16} aria-hidden="true" /></m.a>}
          {link && <m.a href={link} target="_blank" rel="noopener noreferrer" className={`button ${appStoreLink ? "button-secondary" : "button-primary"}`} aria-label={`${websiteLabel}: ${title} (opens in a new tab)`} {...linkFeedback} transition={{ duration: 0.15 }}>{websiteLabel} <ArrowUpRight size={16} aria-hidden="true" /></m.a>}
          {sourceLinks.map(({ label, href }) => <m.a key={href} href={href} target="_blank" rel="noopener noreferrer" className="button button-secondary" aria-label={`${label}: ${title} (opens in a new tab)`} {...linkFeedback} transition={{ duration: 0.15 }}>{label}<ArrowUpRight size={16} aria-hidden="true" /></m.a>)}
        </div>}
      </div>
    </m.article>
  );
}
