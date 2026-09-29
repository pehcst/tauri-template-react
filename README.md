# Tauri React Template

**Português** · [English](README.en.md)

Template enxuto para aplicativos desktop com Tauri 2, React, TypeScript, Vite e TanStack Router. Inclui componentes reutilizáveis, CSS Modules, temas claro e escuro, suporte a idiomas, ESLint, Prettier, checagem Rust e CI.

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

## Idiomas

A interface vem traduzida para português do Brasil (`pt-BR`) e inglês dos Estados Unidos (`en-US`). Na primeira abertura, usa o primeiro idioma compatível da lista do sistema; se nenhum for compatível, usa `pt-BR`. O seletor no cabeçalho salva a escolha em `localStorage` (`tauri-react-template.locale`). A seleção também atualiza o atributo `lang` do documento. Se o armazenamento estiver indisponível, a troca ainda funciona durante a sessão.

As mensagens ficam em `src/i18n/messages/`. Para adicionar um idioma:

1. Crie um arquivo de mensagens com todas as chaves de `pt-BR.ts`; use `satisfies Record<keyof typeof ptBR, string>` para verificar a cobertura na checagem de tipos.
2. Registre o idioma em `src/i18n/locales.ts`, incluindo seu nome em `localeNames`.
3. Use `const { t } = useLocale()` em componentes e `t("home.title")` para obter uma mensagem. Novas chaves devem ser adicionadas a todos os arquivos de mensagens.

Os códigos de idioma seguem a forma `idioma-REGIÃO`. A detecção aceita variantes da mesma língua (por exemplo, `en-GB` usa `en-US`). Textos próprios da interface devem usar chaves de tradução; nomes da marca podem permanecer fixos.

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
  i18n/              seleção de idioma e catálogos de mensagens
  routes/            entradas do TanStack Router
  styles/            estilos e variáveis globais
src-tauri/           configuração e código nativo em Rust
```

Crie funcionalidades em `src/features/<nome>` e suas entradas em `src/routes`. O roteador usa histórico por hash para funcionar com o protocolo local do Tauri. Versione `src/routeTree.gen.ts`, gerado pelo plugin do Router.

Comandos nativos ficam em `src-tauri/src`. Conceda somente as permissões necessárias em `src-tauri/capabilities` quando o frontend precisar chamá-los. Adicione TanStack Query quando houver dados assíncronos para buscar, atualizar ou manter em cache.
