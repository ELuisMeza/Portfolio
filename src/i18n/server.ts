import i18next from "i18next";
import type { Locale } from "./types";
import en from "./locales/en.json";
import es from "./locales/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

export function getT(locale: Locale) {
  const instance = i18next.createInstance();
  instance.init({
    lng: locale,
    fallbackLng: "es",
    resources,
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
  return instance.getFixedT(locale);
}
