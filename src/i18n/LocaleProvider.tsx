import { useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";
import { defaultLocale, matchLocale, translate } from "./locales";
import type { Locale } from "./locales";
import { LocaleContext } from "./localeContext";

const storageKey = "tauri-react-template.locale";

function getInitialLocale(): Locale {
  try {
    const savedLocale = matchLocale(localStorage.getItem(storageKey));
    if (savedLocale) return savedLocale;
  } catch {
    // Storage may be unavailable in a restricted WebView.
  }

  const preferredLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const language of preferredLanguages) {
    const locale = matchLocale(language);
    if (locale) return locale;
  }

  return defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState(getInitialLocale);

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    updateLocale(nextLocale);
    try {
      localStorage.setItem(storageKey, nextLocale);
    } catch {
      // The selected language still works for the current session.
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: (key) => translate(locale, key) }}>
      {children}
    </LocaleContext.Provider>
  );
}
