"use client";
import { useLocale } from "@/libs/LocaleProvider";

import Image from "next/image";
import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { skillsData } from "@/libs/data";
import { useSectionInView } from "@/libs/hooks";

export default function Skills() {
  const { locale, t } = useLocale();
  const { ref } = useSectionInView("skills", 0.2);
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" ref={ref} className="skills-section portfolio-section">
      <h2 className="section-title">{t("My skills")}</h2>
      <ul className="skills-list">
        {skillsData.filter(([name]) => name).map(([name, src]) => <m.li key={name} whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: 0.18 }}>
          <Image src={src} alt="" width={24} height={24} />{t(name)}
        </m.li>)}
      </ul>
    </section>
  );
}
