import { default as i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { Locale } from './locale';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: Locale;
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en
  },
  lng: 'en',
  interpolation: { escapeValue: false }
});

export { i18n };
