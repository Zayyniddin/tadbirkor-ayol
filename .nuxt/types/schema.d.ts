import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     */
    ["elementPlus"]: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     */
    ["pdf"]: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `yandex-metrika-module-nuxt3`
     */
    ["yandexMetrika"]: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     */
    ["svgo"]: typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     */
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     */
    ["pdf"]?: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `yandex-metrika-module-nuxt3`
     */
    ["yandexMetrika"]?: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     */
    ["svgo"]?: typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@sidebase/nuxt-pdf", Exclude<NuxtConfig["pdf"], boolean>] | ["yandex-metrika-module-nuxt3", Exclude<NuxtConfig["yandexMetrika"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-svgo", Exclude<NuxtConfig["svgo"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     * @see https://www.npmjs.com/package/@element-plus/nuxt
     */
    ["elementPlus"]: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-pdf
     */
    ["pdf"]: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `yandex-metrika-module-nuxt3`
     * @see https://www.npmjs.com/package/yandex-metrika-module-nuxt3
     */
    ["yandexMetrika"]: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     * @see https://www.npmjs.com/package/nuxt-svgo
     */
    ["svgo"]: typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     * @see https://www.npmjs.com/package/@element-plus/nuxt
     */
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@sidebase/nuxt-pdf`
     * @see https://www.npmjs.com/package/@sidebase/nuxt-pdf
     */
    ["pdf"]?: typeof import("@sidebase/nuxt-pdf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `yandex-metrika-module-nuxt3`
     * @see https://www.npmjs.com/package/yandex-metrika-module-nuxt3
     */
    ["yandexMetrika"]?: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     * @see https://www.npmjs.com/package/nuxt-svgo
     */
    ["svgo"]?: typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@sidebase/nuxt-pdf", Exclude<NuxtConfig["pdf"], boolean>] | ["yandex-metrika-module-nuxt3", Exclude<NuxtConfig["yandexMetrika"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-svgo", Exclude<NuxtConfig["svgo"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
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

      multiDomainLocales: boolean,
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