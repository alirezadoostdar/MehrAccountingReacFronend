import { createContext, useContext, useEffect, useState } from 'react'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_COOKIE_NAME,
  type LanguageCode,
} from '@/config/languages'
import { getCookie, removeCookie, setCookie } from '@/lib/cookies'
import i18n from '@/lib/i18n'

const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

type LanguageContextType = {
  defaultLanguage: LanguageCode
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  resetLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, _setLanguage] = useState<LanguageCode>(
    () => (getCookie(LANGUAGE_COOKIE_NAME) as LanguageCode) || DEFAULT_LANGUAGE
  )

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    if (i18n.language !== language) {
      void i18n.changeLanguage(language)
    }
  }, [language])

  const setLanguage = (language: LanguageCode) => {
    _setLanguage(language)
    setCookie(LANGUAGE_COOKIE_NAME, language, LANGUAGE_COOKIE_MAX_AGE)
  }

  const resetLanguage = () => {
    _setLanguage(DEFAULT_LANGUAGE)
    removeCookie(LANGUAGE_COOKIE_NAME)
  }

  return (
    <LanguageContext
      value={{
        defaultLanguage: DEFAULT_LANGUAGE,
        language,
        setLanguage,
        resetLanguage,
      }}
    >
      {children}
    </LanguageContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
