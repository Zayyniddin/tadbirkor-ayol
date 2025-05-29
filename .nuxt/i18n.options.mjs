
// @ts-nocheck


export const localeCodes =  [
  "la",
  "uz",
  "ru"
]

export const localeLoaders = {
  "la": [{ key: "../locales/la.json", load: () => import("../locales/la.json" /* webpackChunkName: "locale__Users_zayn_Desktop_projects_arcihve_locales_la_json" */), cache: true }],
  "uz": [{ key: "../locales/uz.json", load: () => import("../locales/uz.json" /* webpackChunkName: "locale__Users_zayn_Desktop_projects_arcihve_locales_uz_json" */), cache: true }],
  "ru": [{ key: "../locales/ru.json", load: () => import("../locales/ru.json" /* webpackChunkName: "locale__Users_zayn_Desktop_projects_arcihve_locales_ru_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": false,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "la",
      "files": [
        "locales/la.json"
      ]
    },
    {
      "code": "uz",
      "files": [
        "locales/uz.json"
      ]
    },
    {
      "code": "ru",
      "files": [
        "locales/ru.json"
      ]
    }
  ],
  "defaultLocale": "la",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales",
  "detectBrowserLanguage": false,
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "la",
    "files": [
      {
        "path": "locales/la.json"
      }
    ]
  },
  {
    "code": "uz",
    "files": [
      {
        "path": "locales/uz.json"
      }
    ]
  },
  {
    "code": "ru",
    "files": [
      {
        "path": "locales/ru.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
