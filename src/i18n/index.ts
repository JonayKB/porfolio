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
  location.reload();
}

export function getBrowserLang() {
  const lang = navigator.language.slice(0, 2);
  console.log("Browser language:", lang);
  return SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
}

export function getLang() {
  return localStorage.getItem(STORAGE_KEY) || getBrowserLang();
}

export function translate(key: string) {
  const lang = getLang();
  console.log(key)
  return languages[lang][key] || key;
}