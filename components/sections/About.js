"use client";
import { useLocale } from "@/libs/LocaleProvider";

import { useSectionInView } from "@/libs/hooks";

export default function About() {
  const { locale, t } = useLocale();
  const { ref } = useSectionInView("about", 0.2);
  return (
    <section id="about" ref={ref} className="about-section portfolio-section">
      <h2 className="section-title">{t("About me")}</h2>
      <div className="about-copy">
        <p>{t("I’m a Tunisian, second-year Computer Science student at EPFL. I started coding at eight, teaching myself as I went. Building things became my way of learning, whether that meant a website for a local business or a product of my own.")}</p>
        <p>{t("I co-founded and led my school’s engineering club from 2022 to the end of 2025. Building a solar-electric car with friends taught me to coordinate people, budgets and difficult decisions, with patient support from a mechatronics engineer and our technology teacher. It remains the project I’m most attached to.")}</p>
        <p>{t("My first company, TunisianPass, taught me to work with restaurants and shops and turn an idea into a service people actually used. Since then, I have sold websites to companies and built apps around studying, fitness, and daily life.")}</p>
        <p>{t("Hackathons give me another way to explore. At EPFL and START HACK, I worked on ideas as different as dating through Telegram and protecting customers from the wrong AI purchases.")}</p>
        <div className="about-document-links">
          <a href="#certificates" className="text-link">{t("View my certificates & awards")}</a>
          <a href="#references" className="text-link">{t("Recommendations & experience")}</a>
        </div>
      </div>
    </section>
  );
}
