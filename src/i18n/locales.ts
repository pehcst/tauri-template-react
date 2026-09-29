import { enUS } from "./messages/en-US";
import { ptBR } from "./messages/pt-BR";

const messages = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

export type Locale = keyof typeof messages;
export type MessageKey = keyof typeof ptBR;

export const defaultLocale: Locale = "pt-BR";

export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português (Brasil)",
  "en-US": "English (US)",
};

export const supportedLocales = Object.keys(messages) as Locale[];

export function matchLocale(value: string | null | undefined): Locale | undefined {
  if (!value) return undefined;

  const normalized = value.toLowerCase();
  const exactMatch = supportedLocales.find((locale) => locale.toLowerCase() === normalized);
  if (exactMatch) return exactMatch;

  const language = normalized.split("-")[0];
  return supportedLocales.find((locale) => locale.toLowerCase().startsWith(`${language}-`));
}

export function translate(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
