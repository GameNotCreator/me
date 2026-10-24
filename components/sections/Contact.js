"use client";
import { useLocale } from "@/libs/LocaleProvider";

import { Mail } from "lucide-react";
import { useSectionInView } from "@/libs/hooks";

export default function Contact() {
  const { locale, t } = useLocale();
  const { ref } = useSectionInView("contact");
  return (
    <section id="contact" ref={ref} className="contact-section portfolio-section">
      <h2 className="section-title">{t("Hit me up!")}</h2>
      <p className="section-copy">{t("Please contact me directly by email for a project, a collaboration, or a question about my work.")}</p>
      <div className="contact-actions">
        <a className="contact-email text-link" href="mailto:hedi.fourati@epfl.ch">{t("hedi.fourati@epfl.ch")}</a>
        <a className="text-link" href="tel:+41765488144">+41 76 548 81 44</a>
        <a className="button button-primary" href="mailto:hedi.fourati@epfl.ch"><Mail size={18} aria-hidden="true" />{t("Email me")}</a>
      </div>
    </section>
  );
}
