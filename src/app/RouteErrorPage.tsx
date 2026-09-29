import { AppIcon } from "../components/ui/AppIcon";
import { EmptyState } from "../components/ui/EmptyState";
import { useLocale } from "../i18n/localeContext";

export function RouteErrorPage() {
  const { t } = useLocale();
  return (
    <EmptyState
      icon={<AppIcon />}
      title={t("routeError.title")}
      description={t("routeError.description")}
    />
  );
}
