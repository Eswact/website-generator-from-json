import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import tr from '../locales/tr.json';

export const i18n = createI18n({
  locale: 'en',
  // locale: localStorage.getItem('selectedLanguage') || 'en',
  fallbackLocale: 'en',
  messages: { en, tr }
});

export default i18n;