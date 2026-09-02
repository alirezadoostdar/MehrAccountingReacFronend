import 'i18next'
import type { defaultNS, resources } from './index'

// Gives `t()` autocomplete + compile-time checking of keys/namespaces,
// using the English resources as the source of truth.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}
