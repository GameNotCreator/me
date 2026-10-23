import { ArrowDownToLine, ArrowUpRight, Award, FileText } from "lucide-react";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import { academicResultsData, certificatesData } from "@/libs/certificates";
import styles from "./Certificates.module.css";

function DocumentLink({ certificate }) {
  return <a className={styles.documentLink} href={certificate.href} target="_blank" rel="noopener noreferrer" aria-label={`Open document: ${certificate.title} (${certificate.format}; opens in a new tab)`}>
    <ArrowDownToLine size={15} aria-hidden="true" />
    View document
    <span className={styles.format}>{certificate.format}</span>
    <ArrowUpRight size={14} aria-hidden="true" />
  </a>;
}

function CertificateCard({ certificate }) {
  return <article id={certificate.id} className={`${styles.certificate} ${certificate.featured ? styles.featured : ""}`} aria-labelledby={`${certificate.id}-title`}>
    <div className={styles.preview}>
      <ImageGallery galleries={{ [certificate.title]: [certificate.document] }} className={styles.gallery} showCategoryTitles={false} imageSizes="(min-width: 1120px) 490px, (min-width: 700px) 42vw, calc(100vw - 72px)" />
      <span className={styles.previewHint} aria-hidden="true">Open scan to enlarge <ArrowUpRight size={12} /></span>
    </div>
    <div className={styles.content}>
      <p className={styles.type}>
        {certificate.featured ? <Award size={15} aria-hidden="true" /> : <FileText size={14} aria-hidden="true" />}
        {certificate.type}
      </p>
      <h3 id={`${certificate.id}-title`}>{certificate.title}</h3>
      <p className={styles.meta}>
        {certificate.date && <time dateTime={certificate.date}>{certificate.dateLabel}</time>}
        <span>{certificate.location}</span>
      </p>
      <p className={styles.description}>{certificate.description}</p>
      <DocumentLink certificate={certificate} />
    </div>
  </article>;
}

export default function Certificates() {
  return <section id="certificates" aria-labelledby="certificates-title" className={`portfolio-section ${styles.section}`}>
    <p className={styles.eyebrow}>A few records from the journey</p>
    <h2 id="certificates-title" className={`section-title ${styles.title}`}>Certificates &amp; Awards</h2>
    <p className="section-copy">The documents behind some of my projects, community work and learning. Open a scan to look closer, or read the document in a separate tab.</p>
    <div className={styles.list}>
      {certificatesData.map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} />)}
    </div>
    <details className={styles.academic}>
      <summary>
        <span><span className={styles.academicTitle}>Academic results</span><span className={styles.academicSubtitle}>IELTS &amp; SAT · 2024 score reports</span></span>
        <span className={styles.expandIcon} aria-hidden="true">+</span>
      </summary>
      <div className={styles.results}>
        {academicResultsData.map((result) => <article key={result.id} className={styles.result} aria-labelledby={`${result.id}-title`}>
          <div className={styles.resultContent}>
            <p className={styles.type}>{result.type}</p>
            <h3 id={`${result.id}-title`}>{result.title}</h3>
            <p className={styles.score}>{result.score}</p>
            <p className={styles.scoreDetail}>{result.detail}</p>
            <p className={styles.description}>{result.description}</p>
            <DocumentLink certificate={result} />
          </div>
          <ImageGallery galleries={{ [result.title]: [result.document] }} className={styles.resultGallery} showCategoryTitles={false} imageSizes="(min-width: 480px) 110px, 180px" />
        </article>)}
      </div>
    </details>
  </section>;
}
