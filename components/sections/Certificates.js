import ImageGallery from "@/components/elements/Images/ImageGallery";
import { certificatesData } from "@/libs/certificates";
import styles from "./Certificates.module.css";

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className={`portfolio-section ${styles.section}`}
    >
      <h2 id="certificates-title" className="section-title">
        Certificates &amp; Awards
      </h2>
      <p className="section-copy">
        Documents from the projects and activities I took part in. Open a scan to
        take a closer look.
      </p>
      <div className={styles.list}>
        {certificatesData.map((certificate) => (
          <article
            key={certificate.id}
            className={styles.certificate}
            aria-labelledby={`${certificate.id}-title`}
          >
            <div className={styles.preview}>
              <ImageGallery
                galleries={{ [certificate.title]: [certificate.document] }}
                className={styles.gallery}
                showCategoryTitles={false}
              />
              <span className={styles.previewHint} aria-hidden="true">
                Click to enlarge
              </span>
            </div>
            <div className={styles.content}>
              <p className={styles.type}>{certificate.type}</p>
              <h3 id={`${certificate.id}-title`}>{certificate.title}</h3>
              <p className={styles.meta}>
                <time dateTime={certificate.date}>{certificate.dateLabel}</time>
                <span>{certificate.location}</span>
              </p>
              <p className={styles.description}>{certificate.description}</p>
              <a
                className="button button-secondary"
                href={certificate.document.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open original document: ${certificate.title} ${certificate.type.toLowerCase()} (opens in a new tab)`}
              >
                Open original document
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
