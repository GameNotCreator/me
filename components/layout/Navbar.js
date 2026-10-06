"use client";

import { motion, useReducedMotion } from "framer-motion";
import { links } from "@/libs/data";
import { useActiveSectionContext } from "@/libs/SectionProvider";

export default function Navbar() {
  const { activeSection } = useActiveSectionContext();
  const reduceMotion = useReducedMotion();
  return (
    <header className="site-header">
      <motion.nav className="site-nav" aria-label="Main navigation" initial={{ opacity: 0.85, y: reduceMotion ? 0 : -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <ul className="nav-links">
          {links.map((link) => <li key={link.id}>
            <a href={`#${link.id}`} className={activeSection === link.id ? "is-active" : undefined} aria-current={activeSection === link.id ? "location" : undefined}>
              {activeSection === link.id && <span className="active-nav-pill" aria-hidden="true" />}
              <span>{link.name}</span>
            </a>
          </li>)}
        </ul>
      </motion.nav>
    </header>
  );
}
