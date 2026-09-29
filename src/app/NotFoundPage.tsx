import { AppIcon } from "../components/ui/AppIcon";
import { EmptyState } from "../components/ui/EmptyState";

export function NotFoundPage() {
  return (
    <EmptyState
      icon={<AppIcon />}
      title="Tela não encontrada"
      description="O endereço solicitado não existe."
    />
  );
}
