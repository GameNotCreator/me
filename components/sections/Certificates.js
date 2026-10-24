"use client";

import { ArrowDownToLine, ArrowUpRight, Award, FileText } from "lucide-react";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import { academicResultsData, certificatesData } from "@/libs/certificates";
import { useLocale } from "@/libs/LocaleProvider";
import styles from "./Certificates.module.css";

function DocumentLink({ certificate }) {
  const { t } = useLocale();
  return <div className={styles.documentLinks}><a className={styles.documentLink} href={certificate.href} target="_blank" rel="noopener noreferrer" aria-label={`${t("Open document")}: ${t(certificate.title)} (${t(certificate.format)}; ${t("opens in a new tab")})`}>
    <ArrowDownToLine size={15} aria-hidden="true" />
    {t("View document")}
    <span className={styles.format}>{t(certificate.format)}</span>
    <ArrowUpRight size={14} aria-hidden="true" />
  </a>
  {certificate.translationHref && <a className={styles.translationLink} href={certificate.translationHref} target="_blank" rel="noopener noreferrer"
    aria-label={`${t("Sworn English translation")}: ${t(certificate.title)} (${t("opens in a new tab")})`}>
    {t("Sworn English translation")}<ArrowUpRight size={14} aria-hidden="true" />
  </a>}</div>;
}

function CertificateCard({ certificate }) {
  const { t } = useLocale();
  return <article id={certificate.id} className={`${styles.certificate} ${certificate.featured ? styles.featured : ""}`} aria-labelledby={`${certificate.id}-title`}>
    <div className={styles.preview}>
      <ImageGallery galleries={{ [certificate.title]: [certificate.document] }} className={styles.gallery} showCategoryTitles={false} imageSizes="(min-width: 1120px) 490px, (min-width: 700px) 42vw, calc(100vw - 72px)" />
      <span className={styles.previewHint} aria-hidden="true">{t("Open scan to enlarge")} <ArrowUpRight size={12} /></span>
    </div>
    <div className={styles.content}>
      <p className={styles.type}>
        {certificate.featured ? <Award size={15} aria-hidden="true" /> : <FileText size={14} aria-hidden="true" />}
        {t(certificate.type)}
      </p>
      <h3 id={`${certificate.id}-title`}>{t(certificate.title)}</h3>
      <p className={styles.meta}>
        {certificate.date ? <time dateTime={certificate.date}>{t(certificate.dateLabel)}</time> : certificate.dateLabel && <span>{t(certificate.dateLabel)}</span>}
        <span>{t(certificate.location)}</span>
      </p>
      <p className={styles.description}>{t(certificate.description)}</p>
      <DocumentLink certificate={certificate} />
    </div>
  </article>;
}

export default function Certificates() {
  const { t } = useLocale();
  return <section id="certificates" aria-labelledby="certificates-title" className={`portfolio-section ${styles.section}`}>
    <p className={styles.eyebrow}>{t("A few records from the journey")}</p>
    <h2 id="certificates-title" className={`section-title ${styles.title}`}>{t("Certificates & Awards")}</h2>
    <p className="section-copy">{t("The documents behind some of my projects, community work and learning. Open a scan to look closer, or read the document in a separate tab.")}</p>
    <div className={styles.list}>
      {certificatesData.map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} />)}
    </div>
    <details className={styles.academic}>
      <summary>
        <span><span className={styles.academicTitle}>{t("Academic results")}</span><span className={styles.academicSubtitle}>{t("IELTS & SAT · 2024 score reports")}</span></span>
        <span className={styles.expandIcon} aria-hidden="true">+</span>
      </summary>
      <div className={styles.results}>
        {academicResultsData.map((result) => <article key={result.id} className={styles.result} aria-labelledby={`${result.id}-title`}>
          <div className={styles.resultContent}>
            <p className={styles.type}>{t(result.type)}</p>
            <h3 id={`${result.id}-title`}>{t(result.title)}</h3>
            <p className={styles.score}>{result.score}</p>
            <p className={styles.scoreDetail}>{t(result.detail)}</p>
            <p className={styles.description}>{t(result.description)}</p>
            <DocumentLink certificate={result} />
          </div>
          <ImageGallery galleries={{ [result.title]: [result.document] }} className={styles.resultGallery} showCategoryTitles={false} imageSizes="(min-width: 480px) 110px, 180px" />
        </article>)}
      </div>
    </details>
  </section>;
}
