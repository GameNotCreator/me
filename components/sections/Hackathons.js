"use client";
import { useLocale } from "@/libs/LocaleProvider";
import { hackathonsData } from "@/libs/data";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { localizeRecord } from "@/libs/i18n";

export default function Hackathons({ hidden = false }) {
  const { locale, t } = useLocale();
  const reduceMotion = useReducedMotion();
  const linkFeedback = reduceMotion ? {} : { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } };
  return (
    <div className="hackathons-block" hidden={hidden} aria-labelledby="hackathons-heading">
      <h3 id="hackathons-heading" className="section-title">{t("Hackathons")}</h3>
      <p className="section-copy">{t("Two challenges I explored with a team, in Lausanne and St. Gallen.")}</p>
      <div className="hackathon-list">
        {hackathonsData.map((record) => { const hackathon = localizeRecord(record, locale); return <m.article className="hackathon-card" key={hackathon.id}
          initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <h4>{hackathon.title}</h4>
          <p>{hackathon.event} · {hackathon.location}</p>
          <p className="project-description">{hackathon.description}</p>
          <p className="project-role"><span>{t("My contribution")}</span>{hackathon.role}</p>
          {hackathon.outcome && <p className="project-outcome">{hackathon.outcome}</p>}
          <ul className="project-tags" aria-label={`${hackathon.event} · ${t("details")}`}>{hackathon.tags.map((tag) => <li key={tag}>{t(tag)}</li>)}</ul>
          {(hackathon.projectLink || hackathon.previewLink) && <div className="project-links">
            {hackathon.projectLink && <m.a href={hackathon.projectLink} target="_blank" rel="noopener noreferrer" className="button button-primary" aria-label={`${t("View project")}: ${hackathon.title} (${t("opens in a new tab")})`} {...linkFeedback} transition={{ duration: 0.15 }}>{t("View project")}<ArrowUpRight size={16} aria-hidden="true" /></m.a>}
            {hackathon.previewLink && <m.a href={hackathon.previewLink} target="_blank" rel="noopener noreferrer" className="button button-secondary" aria-label={`${t("Preview")}: ${hackathon.title} (${t("opens in a new tab")})`} {...linkFeedback} transition={{ duration: 0.15 }}>{t("Preview")}<ArrowUpRight size={16} aria-hidden="true" /></m.a>}
          </div>}
        </m.article>; })}
      </div>
    </div>
  );
}
