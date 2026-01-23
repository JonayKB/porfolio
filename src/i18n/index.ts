import es from "./es";
import en from "./en";
export const DEFAULT_LANG = "en";
export const SUPPORTED = ["es", "en"];
export const STORAGE_KEY = "lang";

export const languages = {
  es,
  en,
};

export type Lang = keyof typeof languages;

export function setLang(lang: string) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang; // Cambia el atributo lang del HTML

  // Emitimos un evento personalizado para que el script de Astro sepa que debe traducir
  const event = new CustomEvent('language-change', { detail: { lang } });
  window.dispatchEvent(event);
}

export function getBrowserLang() {
  const lang = navigator.language.slice(0, 2);
  console.log("Browser language:", lang);
  return SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
}

export function getLang(): Lang {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem(STORAGE_KEY) || getBrowserLang()) as Lang;
  }
  return DEFAULT_LANG;
}

export function translate(key: string) {
  const lang = getLang() as Lang;
  const langData = languages[lang];

  return (langData as any)[key] || key;
}