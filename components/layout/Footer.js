"use client";
import { useLocale } from "@/libs/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="site-footer">
      <small>© {new Date().getFullYear()} Hedi Fourati. {t("All rights reserved.")}</small>
      <p>{t("Have an idea in mind? Let’s start a conversation.")}</p>
    </footer>
  );
}
