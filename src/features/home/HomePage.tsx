import { AppIcon } from "../../components/ui/AppIcon";
import { EmptyState } from "../../components/ui/EmptyState";

export function HomePage() {
  return (
    <EmptyState
      icon={<AppIcon />}
      title="Aplicativo pronto"
      description="Comece criando a primeira funcionalidade do seu aplicativo."
    />
  );
}
