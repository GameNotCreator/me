"use client";
import { links } from "@/libs/data";
import { useActiveSectionContext } from "@/libs/SectionProvider";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Main navigation">
        <a href="#home" className="wordmark" aria-label="Hedi Fourati, home" onClick={() => { setActiveSection("home"); setTimeOfLastClick(Date.now()); }}>hedi<span>.</span></a>
        <div className="nav-links">
          {links.filter((link) => link.id !== "home").map((link) => (
            <a key={link.id} href={`#${link.id}`} className={activeSection === link.id ? "is-active" : ""} aria-current={activeSection === link.id ? "location" : undefined}
              onClick={() => { setActiveSection(link.id); setTimeOfLastClick(Date.now()); }}>{link.name}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
