import i18n from 'i18next';
import f from './en/front.json';
import b from './en/back.json';
import { initReactI18next } from 'react-i18next';
//todo once we have multiple languages move this logic into language service and resolve changing of languages and storage in local storage

export const resources = {
  en: {
    f,
    b,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['f', 'b'],
  resources,
});