import type { ReactNode } from "react";
import { AppIcon } from "../ui/AppIcon";
import styles from "./AppShell.module.css";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <AppIcon className={styles.brandIcon} />
          <span>Tauri React</span>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
