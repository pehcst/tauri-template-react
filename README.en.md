# Tauri React Template

[Português](README.md) · **English**

A lean desktop app template using Tauri 2, React, TypeScript, Vite, and TanStack Router. It includes reusable components, CSS Modules, light and dark themes, localization, ESLint, Prettier, Rust checks, and CI.

## Get started

On GitHub, click **Use this template** to create a repository. Then run:

```bash
npm ci
npm run tauri dev
```

You need Node.js 20.19+ or 22.12+, npm, Rust, and the [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for your system. `npm run dev` starts only the frontend in a browser.

## Customize

1. Change the name in `package.json`, `src-tauri/Cargo.toml`, `src-tauri/src/main.rs`, `src-tauri/tauri.conf.json`, `index.html`, and the interface.
2. Set a unique identifier in `src-tauri/tauri.conf.json`.
3. Replace `public/app-icon.svg` and `src/components/ui/AppIcon.tsx`, then generate native icons with `npm run tauri -- icon public/app-icon.svg`.
4. Run `npm install` and `cargo check --manifest-path src-tauri/Cargo.toml` to update the lockfiles.

## Languages

The interface includes Brazilian Portuguese (`pt-BR`) and US English (`en-US`). On first launch, it uses the first supported language in the system preference list; if none matches, it uses `pt-BR`. The header selector saves the choice in `localStorage` (`tauri-react-template.locale`) and updates the document's `lang` attribute. If storage is unavailable, switching still works for the current session.

Messages live in `src/i18n/messages/`. To add a language:

1. Create a message file with every key from `pt-BR.ts`; use `satisfies Record<keyof typeof ptBR, string>` to check coverage during type checking.
2. Register the language in `src/i18n/locales.ts`, including its display name in `localeNames`.
3. Use `const { t } = useLocale()` in components and `t("home.title")` to read a message. Add new keys to every message file.

Language codes use the `language-REGION` form. Detection accepts variants of the same language (for example, `en-GB` uses `en-US`). Interface copy belongs in message files; brand names can stay fixed.

## Check and build the app

```bash
npm run check
npm run tauri build
```

`npm run check` runs lint, formatting, a build with type checking, `cargo fmt`, and `cargo check`. GitHub Actions runs the same command.

## Project layout

```text
src/
  app/              app composition and router
  components/
    layout/          shared layout
    ui/              reusable components
  features/          feature screens and logic
  i18n/              locale selection and message catalogs
  routes/            TanStack Router route entries
  styles/            global styles and variables
src-tauri/           native Rust code and configuration
```

Add features in `src/features/<name>` and their routes in `src/routes`. The router uses hash history to work with Tauri's local protocol. Commit `src/routeTree.gen.ts`, which the Router plugin generates.

Native commands live in `src-tauri/src`. Grant only the permissions needed in `src-tauri/capabilities` when the frontend needs to call them. Add TanStack Query when you need to fetch, update, or cache asynchronous data.
