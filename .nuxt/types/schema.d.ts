import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pdf"]?: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["yandexMetrika"]?: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["svgo"]?: typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@sidebase/nuxt-pdf", Exclude<NuxtConfig["pdf"], boolean>] | ["yandex-metrika-module-nuxt3", Exclude<NuxtConfig["yandexMetrika"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-svgo", Exclude<NuxtConfig["svgo"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   HOTJAR_ID: string,

   gtagId: string,

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         la: {
            domain: any,
         },

         uz: {
            domain: any,
         },

         ru: {
            domain: any,
         },
      },

      detectBrowserLanguage: boolean,

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },
   },

   pdf: {
      defaultDocOptions: {
         size: string,

         bufferPages: boolean,

         margins: {
            top: number,

            left: number,

            right: number,

            bottom: number,
         },
      },
   },

   yandexMetrika: {
      id: number,

      metrikaUrl: string,

      accurateTrackBounce: boolean,

      childIframe: boolean,

      clickmap: boolean,

      defer: boolean,

      useRuntimeConfig: boolean,

      trackHash: boolean,

      trackLinks: boolean,

      type: number,

      webvisor: boolean,

      triggerEvent: boolean,

      consoleLog: boolean,

      partytown: boolean,

      isDev: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }