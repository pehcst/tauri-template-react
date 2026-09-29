import type { ReactNode } from "react";
import { AppIcon } from "../ui/AppIcon";
import { useLocale } from "../../i18n/localeContext";
import { localeNames, supportedLocales } from "../../i18n/locales";
import type { Locale } from "../../i18n/locales";
import styles from "./AppShell.module.css";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { locale, setLocale, t } = useLocale();
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <AppIcon className={styles.brandIcon} />
          <span>Tauri React</span>
        </div>
        <div className={styles.localeControl}>
          <label htmlFor="app-locale">{t("language.label")}</label>
          <select
            id="app-locale"
            className={styles.localeSelect}
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
          >
            {supportedLocales.map((supportedLocale) => (
              <option key={supportedLocale} value={supportedLocale}>
                {localeNames[supportedLocale]}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
