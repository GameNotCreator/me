"use client";
import { useLocale } from "@/libs/LocaleProvider";

import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import { links } from "@/libs/data";
import { useActiveSectionContext } from "@/libs/SectionProvider";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  const { locale, t } = useLocale();
  const { activeSection } = useActiveSectionContext();
  const reduceMotion = useReducedMotion();
  return (
    <header className="site-header">
      <m.nav className="site-nav" aria-label={t("Main navigation")} initial={{ opacity: 0.85, y: reduceMotion ? 0 : -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <ul className="nav-links">
          {links.map((link) => <li key={link.id}>
            <a href={`#${link.id}`} className={activeSection === link.id ? "is-active" : undefined} aria-current={activeSection === link.id ? "location" : undefined}>
              {activeSection === link.id && <span className="active-nav-pill" aria-hidden="true" />}
              <span>{t(link.name)}</span>
            </a>
          </li>)}
        </ul>
      </m.nav>
      <LanguageSwitcher />
    </header>
  );
}
