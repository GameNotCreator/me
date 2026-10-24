"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/libs/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);
  return <div className="language-switcher" role="group" aria-label={t("Language")}>
    <a href={`/${hash}`} lang="en" hrefLang="en" aria-label="English" aria-current={locale === "en" ? "page" : undefined}>EN</a>
    <a href={`/fr${hash}`} lang="fr" hrefLang="fr" aria-label="Français" aria-current={locale === "fr" ? "page" : undefined}>FR</a>
  </div>;
}
