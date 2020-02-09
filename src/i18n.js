import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const supportedLanguages = ["en", "ru"];


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: supportedLanguages,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    detection: {
      order: ["path", "navigator"]
    }
  });


export default i18n;