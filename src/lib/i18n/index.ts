import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE_NAME } from '@/config/languages'
import { getCookie } from '@/lib/cookies'
import commonDe from './locales/de/common.json'
import contactsDe from './locales/de/contacts.json'
import commonEn from './locales/en/common.json'
import contactsEn from './locales/en/contacts.json'
import commonFa from './locales/fa/common.json'
import contactsFa from './locales/fa/contacts.json'

/**
 * Namespaces are grouped by feature so each page only ships the strings it
 * needs. `common` holds strings shared across features (shared components,
 * the settings drawer, etc.).
 *
 * 📝 How to add a new namespace: create `<lang>/<namespace>.json` for every
 * language, import it below, and add it to `resources` + `ns`.
 */
export const defaultNS = 'common'

export const resources = {
  en: { common: commonEn, contacts: contactsEn },
  fa: { common: commonFa, contacts: contactsFa },
  de: { common: commonDe, contacts: contactsDe },
} as const

const initialLanguage = getCookie(LANGUAGE_COOKIE_NAME) || DEFAULT_LANGUAGE

void i18next.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  defaultNS,
  ns: ['common', 'contacts'],
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  returnNull: false,
})

export default i18next
