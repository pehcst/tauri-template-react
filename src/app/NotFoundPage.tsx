import { AppIcon } from "../components/ui/AppIcon";
import { EmptyState } from "../components/ui/EmptyState";
import { useLocale } from "../i18n/localeContext";

export function NotFoundPage() {
  const { t } = useLocale();
  return (
    <EmptyState
      icon={<AppIcon />}
      title={t("notFound.title")}
      description={t("notFound.description")}
    />
  );
}
