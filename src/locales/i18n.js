import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

//import axios from 'axios'

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ko",
  fallbackLocale: "ko",
  messages: { en, ko },
});

const loadedLanguages = ["ko"];

export function loadLanaguageAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(lang);
  }

  if (loadedLanguages.includes(lang)) {
    return Promise.resolve();
  }
}
