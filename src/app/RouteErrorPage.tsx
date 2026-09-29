import { AppIcon } from "../components/ui/AppIcon";
import { EmptyState } from "../components/ui/EmptyState";

export function RouteErrorPage() {
  return (
    <EmptyState
      icon={<AppIcon />}
      title="Não foi possível abrir esta tela"
      description="Tente reiniciar o aplicativo."
    />
  );
}
