import { AppIcon } from "../../components/ui/AppIcon";
import { EmptyState } from "../../components/ui/EmptyState";
import { useLocale } from "../../i18n/localeContext";

export function HomePage() {
  const { t } = useLocale();
  return (
    <EmptyState icon={<AppIcon />} title={t("home.title")} description={t("home.description")} />
  );
}
