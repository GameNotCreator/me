"use client";

import { ArrowUpRight, BriefcaseBusiness, ChevronDown, FileText, MessageSquareQuote } from "lucide-react";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import { useLocale } from "@/libs/LocaleProvider";
import { experienceRecords, recommendationLetters } from "@/libs/references";
import styles from "./References.module.css";

function ReferenceRecord({ record }) {
  const { t } = useLocale();
  return <details id={record.id} className={styles.record}>
    <summary>
      <span className={styles.recordTitle}>{t(record.title)}<span>{t(record.role)}</span></span>
      <span className={styles.period}>{t(record.period)}</span>
      <ChevronDown size={17} aria-hidden="true" />
    </summary>
    <div className={styles.recordBody}>
      <div className={styles.recordCopy}>
        <p className={styles.issuer}>{t(record.issuer)}</p>
        <p className={styles.description}>{t(record.description)}</p>
        {record.note && <p className={styles.note}>{t(record.note)}</p>}
        <div className={styles.links}>
          <a href={record.href} target="_blank" rel="noopener noreferrer" className={styles.documentLink}
            aria-label={`${t("Open document")}: ${t(record.title)} (${t("opens in a new tab")})`}>
            <FileText size={15} aria-hidden="true" />{t("View document")}<ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {record.englishHref && <a href={record.englishHref} target="_blank" rel="noopener noreferrer" className={styles.translationLink}
            aria-label={`${t(record.englishLabel)}: ${t(record.title)} (${t("opens in a new tab")})`}>
            {t(record.englishLabel)}<ArrowUpRight size={14} aria-hidden="true" />
          </a>}
        </div>
        <p className={styles.format}>{t(record.format)}</p>
      </div>
      <ImageGallery galleries={{ [record.title]: record.documents }} className={styles.gallery}
        showCategoryTitles={false} imageSizes="(min-width: 700px) 180px, 150px" />
    </div>
  </details>;
}

export default function References() {
  const { t } = useLocale();
  return <section id="references" aria-labelledby="references-title" className={`portfolio-section ${styles.section}`}>
    <p className={styles.eyebrow}>{t("People & experience")}</p>
    <h2 id="references-title" className={`section-title ${styles.title}`}>{t("Recommendations & Experience")}</h2>
    <p className="section-copy">{t("Letters from my teachers and school leadership, alongside records of my professional experience.")}</p>
    <div className={styles.groups}>
      <section aria-labelledby="recommendation-letters-title" className={styles.group}>
        <h3 id="recommendation-letters-title"><MessageSquareQuote size={18} aria-hidden="true" />{t("Recommendation letters")}</h3>
        <p className={styles.groupCopy}>{t("The people who saw me learn, build and take responsibility.")}</p>
        <div className={styles.records}>{recommendationLetters.map(record => <ReferenceRecord key={record.id} record={record} />)}</div>
      </section>
      <section aria-labelledby="experience-records-title" className={styles.group}>
        <h3 id="experience-records-title"><BriefcaseBusiness size={18} aria-hidden="true" />{t("Internships & employment")}</h3>
        <p className={styles.groupCopy}>{t("Company certificates and a school observation placement agreement.")}</p>
        <div className={styles.records}>{experienceRecords.map(record => <ReferenceRecord key={record.id} record={record} />)}</div>
      </section>
    </div>
  </section>;
}
