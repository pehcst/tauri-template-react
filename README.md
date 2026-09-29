# Tauri React Template

Template enxuto para aplicativos desktop com Tauri 2, React, TypeScript, Vite e TanStack Router. Inclui componentes reutilizáveis, CSS Modules, temas claro e escuro, ESLint, Prettier, checagem Rust e CI.

## Começar

No GitHub, clique em **Use this template** para criar um repositório novo. Depois:

```bash
npm ci
npm run tauri dev
```

Requer Node.js 20.19+ ou 22.12+, npm, Rust e as [dependências do Tauri](https://v2.tauri.app/start/prerequisites/) para o seu sistema. `npm run dev` abre somente o frontend no navegador.

## Personalizar

1. Troque o nome em `package.json`, `src-tauri/Cargo.toml`, `src-tauri/src/main.rs`, `src-tauri/tauri.conf.json`, `index.html` e na interface.
2. Defina um identificador único em `src-tauri/tauri.conf.json`.
3. Substitua `public/app-icon.svg` e `src/components/ui/AppIcon.tsx`, depois gere os ícones nativos com `npm run tauri -- icon public/app-icon.svg`.
4. Rode `npm install` e `cargo check --manifest-path src-tauri/Cargo.toml` para atualizar os lockfiles.

## Verificar e gerar o aplicativo

```bash
npm run check
npm run tauri build
```

`npm run check` executa lint, formatação, build com checagem de tipos, `cargo fmt` e `cargo check`. O mesmo comando roda no GitHub Actions.

## Organização

```text
src/
  app/              composição e roteador
  components/
    layout/          estrutura visual compartilhada
    ui/              componentes reutilizáveis
  features/          telas e lógica por funcionalidade
  routes/            entradas do TanStack Router
  styles/            estilos e variáveis globais
src-tauri/           configuração e código nativo em Rust
```

Crie funcionalidades em `src/features/<nome>` e suas entradas em `src/routes`. O roteador usa histórico por hash para funcionar com o protocolo local do Tauri. Versione `src/routeTree.gen.ts`, gerado pelo plugin do Router.

Comandos nativos ficam em `src-tauri/src`. Conceda somente as permissões necessárias em `src-tauri/capabilities` quando o frontend precisar chamá-los. Adicione TanStack Query quando houver dados assíncronos para buscar, atualizar ou manter em cache.
