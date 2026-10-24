"use client";

import { createContext, useContext, useMemo } from "react";
import { translate } from "@/libs/i18n";

const LocaleContext = createContext({ locale: "en", t: (text) => text });

export default function LocaleProvider({ locale = "en", children }) {
  const value = useMemo(() => ({ locale, t: (text) => translate(text, locale) }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
