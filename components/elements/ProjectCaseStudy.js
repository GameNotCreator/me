"use client";

import { ArrowUpRight, FileText, Quote } from "lucide-react";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import styles from "./ProjectCaseStudy.module.css";

export default function ProjectCaseStudy({ id, title, story, gallery, caseStudy, articleLink }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.caseStudy} aria-labelledby={`${id}-story-title`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>A closer look</p>
        <h4 id={`${id}-story-title`}>{caseStudy.title}</h4>
      </header>
      <dl className={styles.facts}>
        {caseStudy.facts.map(({ value, label }) => <div key={label}>
          <dt>{label}</dt><dd>{value}</dd>
        </div>)}
      </dl>
      <div className={styles.chapters}>
        {caseStudy.chapters.map((chapter, index) => <m.div
          key={chapter.title}
          className={styles.chapter}
          initial={reduceMotion ? false : { opacity: 0.85, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <div className={styles.chapterCopy}>
            <span className={styles.chapterNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h5>{chapter.title}</h5>
            {chapter.storyIndexes.map((storyIndex) => <p key={story[storyIndex].label}>{story[storyIndex].description}</p>)}
          </div>
          <ImageGallery
            galleries={{ [title]: chapter.photoIndexes.map((photoIndex) => gallery[photoIndex]) }}
            showCategoryTitles={false}
            showCaptions
            imageSizes="(min-width: 1168px) 484px, (min-width: 900px) 42vw, (min-width: 480px) 44vw, calc(100vw - 82px)"
            className={styles.chapterGallery}
          />
        </m.div>)}
      </div>
      <div className={styles.evidence}>
        <div className={styles.evidenceHeading}>
          <p className={styles.eyebrow}>Documents & recognition</p>
          <h5>The story, backed up.</h5>
        </div>
        <div className={styles.evidenceGrid}>
          <div className={styles.document}>
            <ImageGallery galleries={{ Documents: [caseStudy.document.preview] }}
              showCategoryTitles={false} className={styles.documentPreview} />
            <div className={styles.documentCopy}>
              <p className={styles.sourceLabel}><FileText size={14} aria-hidden="true" />Winner · High-school prize</p>
              <h6>Projet X 2023</h6>
              <p>We won the high-school prize at Projet X 2023 with Gustave Motors.<br />25 May 2023 · Tunis</p>
              <a className={styles.sourceLink} href={caseStudy.document.href} target="_blank" rel="noopener noreferrer"
                aria-label="Open Projet X 2023 participation certificate PDF (opens in a new tab)">
                Open certificate <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles.articleSource}>
            <p className={styles.sourceLabel}>The club’s perspective</p>
            <h6>From the workshop to Projet X</h6>
            <p>Our club’s account of Gustave Motors and the Projet X 2023 high-school prize.</p>
            <a className={styles.sourceLink} href={articleLink} target="_blank" rel="noopener noreferrer"
              aria-label="Read the engineering club’s Gustave Motors article (opens in a new tab)">
              Read the article <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className={styles.recommendation}>
          <Quote size={23} aria-hidden="true" />
          <blockquote><p>“Hedi demonstrates true leadership qualities, planning, mobilizing, and motivating his peers.”</p></blockquote>
          <figcaption><strong>Alexandre Picaud</strong><span>Assistant Principal, Lycée Gustave Flaubert</span><span>From his recommendation letter</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
