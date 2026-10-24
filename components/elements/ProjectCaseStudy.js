"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, Pause, Play, Quote } from "lucide-react";
import * as m from "framer-motion/m";
import { useInView } from "framer-motion";
import { useLocale } from "@/libs/LocaleProvider";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import styles from "./ProjectCaseStudy.module.css";

const SLIDE_INTERVAL = 14000;

export default function ProjectCaseStudy({ id, title, story, gallery, caseStudy, articleLink }) {
  const { locale, t } = useLocale();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const sliderRef = useRef(null);
  const touchStart = useRef(null);
  const inView = useInView(sliderRef, { amount: 0.25 });
  const chapters = caseStudy.chapters;
  const rotating = playing && !reduceMotion && !hovered && pageVisible && inView;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);
  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);
  useEffect(() => { if (reduceMotion) setPlaying(false); }, [reduceMotion]);
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % chapters.length), SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [rotating, activeIndex, chapters.length]);

  const selectSlide = (index) => {
    setPlaying(false);
    setActiveIndex((index + chapters.length) % chapters.length);
  };
  const localPhoto = (photo) => ({
    ...photo,
    alt: locale === "fr" && photo.altFr ? photo.altFr : t(photo.alt),
    caption: locale === "fr" && photo.captionFr ? photo.captionFr : t(photo.caption),
  });

  return (
    <section className={styles.caseStudy} aria-labelledby={`${id}-story-title`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t("A closer look")}</p>
        <h4 id={`${id}-story-title`}>{t(caseStudy.title)}</h4>
      </header>
      <dl className={styles.facts}>
        {caseStudy.facts.map(({ value, label, href }) => <div key={label}>
          <dt>{t(label)}</dt><dd>{href ? <a href={href}>{t(value)}<ArrowUpRight size={16} aria-hidden="true" /></a> : t(value)}</dd>
        </div>)}
      </dl>
      <div ref={sliderRef} className={styles.slider} role="region" aria-roledescription={t("carousel")}
        aria-label={`${title} · ${t("Build journey")}`}
        onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}
        onFocusCapture={(event) => { if (!event.target.closest("[data-autoplay-toggle]")) setPlaying(false); }}
        onPointerDown={(event) => { if (event.pointerType === "touch" && !event.target.closest("[data-autoplay-toggle]")) setPlaying(false); }}
        onKeyDown={(event) => {
          if (sliderRef.current?.querySelector("dialog[open]")) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            selectSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
            if (event.target.closest("[data-active]")) sliderRef.current?.querySelector(event.key === "ArrowRight" ? "[data-journey-next]" : "[data-journey-previous]")?.focus({ preventScroll: true });
          }
        }}
        onTouchStart={(event) => {
          if (sliderRef.current?.querySelector("dialog[open]")) { touchStart.current = null; return; }
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current || sliderRef.current?.querySelector("dialog[open]")) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
            if (event.cancelable) event.preventDefault();
            selectSlide(activeIndex + (dx < 0 ? 1 : -1));
          }
          touchStart.current = null;
        }}>
        <div className={styles.sliderToolbar}>
          <div><p className={styles.eyebrow}>{t("Our journey")}</p><p className={styles.sliderHint}>{t("Explore the build, one chapter at a time.")}</p></div>
          <div className={styles.controls}>
            <button type="button" className={styles.iconButton} data-journey-previous onClick={() => selectSlide(activeIndex - 1)} aria-label={t("Previous chapter")} aria-controls={`${id}-slides`}><ArrowLeft size={18} aria-hidden="true" /></button>
            <button type="button" className={styles.playButton} data-autoplay-toggle disabled={Boolean(reduceMotion)}
              onClick={() => setPlaying((value) => !value)} aria-label={t(playing && !reduceMotion ? "Pause automatic slideshow" : "Start automatic slideshow")} aria-pressed={playing && !reduceMotion}>
              {playing && !reduceMotion ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}<span>{t(playing && !reduceMotion ? "Pause" : "Play")}</span>
            </button>
            <button type="button" className={styles.iconButton} data-journey-next onClick={() => selectSlide(activeIndex + 1)} aria-label={t("Next chapter")} aria-controls={`${id}-slides`}><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
        <div className={styles.slides} id={`${id}-slides`}>
          {chapters.map((chapter, index) => {
            const active = index === activeIndex;
            const collection = chapter.photoCollection === "event" ? caseStudy.eventGallery : gallery;
            return <m.div key={chapter.title} id={`${id}-chapter-${index + 1}`} className={styles.chapter} data-active={active}
              aria-hidden={!active} inert={!active} role="group" aria-roledescription={t("slide")}
              aria-label={`${index + 1} / ${chapters.length} · ${t(chapter.title)}`}
              initial={false} animate={{ opacity: active ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>
              <div className={styles.chapterCopy}>
                <span className={styles.chapterNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span>
                <h5>{t(chapter.title)}</h5>
                {chapter.storyIndexes.map((storyIndex) => <p key={story[storyIndex].label}>{t(story[storyIndex].description)}</p>)}
              </div>
              <ImageGallery galleries={{ [title]: chapter.photoIndexes.map((photoIndex) => localPhoto(collection[photoIndex])) }}
                showCategoryTitles={false} showCaptions imageSizes="(min-width: 1168px) 480px, (min-width: 900px) 42vw, calc(100vw - 82px)" className={styles.chapterGallery} />
            </m.div>;
          })}
        </div>
        <div className={styles.pagination} aria-label={t("Journey chapters")}>
          {chapters.map((chapter, index) => <button key={chapter.title} type="button" className={styles.pageButton} onClick={() => selectSlide(index)}
            aria-label={`${t("Go to chapter")} ${index + 1}: ${t(chapter.title)}`} aria-current={index === activeIndex ? "step" : undefined} aria-controls={`${id}-chapter-${index + 1}`}>
            <span className={styles.pageNumber}>{String(index + 1).padStart(2, "0")}</span><span>{t(chapter.label || chapter.title)}</span>
          </button>)}
        </div>
        <p className={styles.playbackStatus} role="status" aria-live={rotating ? "off" : "polite"}>
          {t("Chapter")} {activeIndex + 1} / {chapters.length} · {t(chapters[activeIndex].label || chapters[activeIndex].title)}
          <span>{t(reduceMotion ? "Reduced motion: use the arrows to explore." : rotating ? "Changes every 14 seconds. Hover or focus to pause." : "Take your time. Use the arrows to continue.")}</span>
        </p>
      </div>
      <div className={styles.evidence}>
        <div className={styles.evidenceHeading}><p className={styles.eyebrow}>{t("Documents & recognition")}</p><h5>{t("The story, backed up.")}</h5></div>
        <div className={styles.evidenceGrid}>
          <div className={styles.document}>
            <ImageGallery galleries={{ Documents: [localPhoto(caseStudy.document.preview)] }} showCategoryTitles={false} className={styles.documentPreview} />
            <div className={styles.documentCopy}>
              <p className={styles.sourceLabel}><FileText size={14} aria-hidden="true" />{t("Winner · High-school prize")}</p><h6>Projet X 2023</h6>
              <p>{t("We won the high-school prize at Projet X 2023 with Gustave Motors.")}<br />{t("25 May 2023 · Tunis")}</p>
              <a className={styles.sourceLink} href={caseStudy.document.href} target="_blank" rel="noopener noreferrer" aria-label={t("Open Projet X 2023 participation certificate PDF (opens in a new tab)")}>
                {t("Open certificate")} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              {caseStudy.document.translationHref && <a className={styles.sourceLink} href={caseStudy.document.translationHref} target="_blank" rel="noopener noreferrer">
                {t("Sworn English translation")} <ArrowUpRight size={16} aria-hidden="true" />
              </a>}
            </div>
          </div>
          <div className={styles.articleSource}>
            <p className={styles.sourceLabel}>{t("The club’s perspective")}</p><h6>{t("From the workshop to Projet X")}</h6>
            <p>{t("Our club’s account of Gustave Motors and the Projet X 2023 high-school prize.")}</p>
            <a className={styles.sourceLink} href={articleLink} target="_blank" rel="noopener noreferrer" aria-label={t("Read the engineering club’s Gustave Motors article (opens in a new tab)")}>
              {t("Read the article")} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className={styles.recommendation}>
          <Quote size={23} aria-hidden="true" /><blockquote><p>{t("“Hedi demonstrates true leadership qualities, planning, mobilizing, and motivating his peers.”")}</p></blockquote>
          <figcaption><strong>Alexandre Picaud</strong><span>{t("Assistant Principal, Lycée Gustave Flaubert")}</span><a href="#references">{t("Read the recommendation")}</a></figcaption>
        </figure>
      </div>
    </section>
  );
}
