"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ActiveSectionContext = createContext(null);
const sectionIds = ["home", "about", "projects", "skills", "life", "contact"];

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = null;
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const navigation = document.querySelector(".site-nav");

    const updateActiveSection = () => {
      frame = null;
      if (!sections.length) return;

      const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const navigationBottom = navigation?.getBoundingClientRect().bottom || 0;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const scrollMargin = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
        const activationLine = Math.max(navigationBottom + 16, scrollPadding + scrollMargin + 16);
        if (section.getBoundingClientRect().top <= activationLine) currentSection = section.id;
      }

      // The final section may be too short to reach the navigation offset.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentSection = sections[sections.length - 1].id;
      }
      setActiveSection((previous) => previous === currentSection ? previous : currentSection);
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("popstate", scheduleUpdate);
    window.addEventListener("scrollend", scheduleUpdate);
    document.addEventListener("load", scheduleUpdate, true);

    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleUpdate);
    for (const element of [...sections, navigation, document.documentElement].filter(Boolean)) {
      resizeObserver?.observe(element);
    }
    scheduleUpdate();

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.removeEventListener("popstate", scheduleUpdate);
      window.removeEventListener("scrollend", scheduleUpdate);
      document.removeEventListener("load", scheduleUpdate, true);
      resizeObserver?.disconnect();
    };
  }, []);

  const value = useMemo(() => ({ activeSection }), [activeSection]);
  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}
