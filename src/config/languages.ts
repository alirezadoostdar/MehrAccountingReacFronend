import type { Direction } from '@/context/direction-provider'

/**
 * List of available language codes.
 *
 * 📝 How to Add a New Language:
 * 1. Add the code here and describe it in `languages` below.
 * 2. Create `src/lib/i18n/locales/<code>/*.json` for every namespace
 *    (copy an existing language's files as a starting point).
 * 3. Register the new namespaces in `src/lib/i18n/index.ts`.
 */
export const languageCodes = ['en', 'fa', 'de'] as const

export type LanguageCode = (typeof languageCodes)[number]

export type LanguageMeta = {
  code: LanguageCode
  /** Name shown in the language's own script — always left untranslated. */
  nativeName: string
  /** Default text direction for this language. */
  dir: Direction
}

export const DEFAULT_LANGUAGE: LanguageCode = 'en'

export const LANGUAGE_COOKIE_NAME = 'lang'

export const languages: LanguageMeta[] = [
  { code: 'en', nativeName: 'English', dir: 'ltr' },
  { code: 'fa', nativeName: 'فارسی', dir: 'rtl' },
  { code: 'de', nativeName: 'Deutsch', dir: 'ltr' },
]

export const languageMap: Record<LanguageCode, LanguageMeta> = languages.reduce(
  (acc, lang) => {
    acc[lang.code] = lang
    return acc
  },
  {} as Record<LanguageCode, LanguageMeta>
)
