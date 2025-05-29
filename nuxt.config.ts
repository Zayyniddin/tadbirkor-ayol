// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  app:{
    head:{
      title:"Loyihalar Fabrikasi",
      viewport: 'width=device-width, initial-scale=1',
      link: [{rel: 'icon', type: 'image/x-icon', href: 'https://tadbirkor-ayol.uz/services/platon-core/web/v1/store/file/images/bwlogo.svg'}], 
      meta: [  
        {
          hid: 'description',
          name: 'description',
          content:
            "Loyihalar Fabrikasi - Xotin-qizlarning tadbirkorligini yo'lga qo'yish va rivojlantirishini qo'llab quvatlash elektron avxborot tizimi.",
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: '«SMART MARKETPLACE» MCHJ' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        {
          hid: 'og-site_name',
          property: 'og:site_name',
          content: 'Loyihalar-fabrikasi.uz',
        },
        {
            hid: 'og-title',
            property: 'og:title',
            content: "Loyihalar-fabrikasi.uz"
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: "https://loyihalar-fabrikasi.uz"
        },
        {
            hid: 'og-image',
            property: 'og:image',
            content: 'https://tadbirkor-ayol.uz/services/platon-core/web/v1/store/file/images/bwlogo.svg'
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: `Loyihalar-fabrikasi.uz - Xotin-qizlarning tadbirkorligini yo'lga qo'yish va rivojlantirishini qo'llab quvatlash elektron avxborot tizimi.`
        },
        {
          property: 'keywords',
          content:
            'Loyihalar, Fabrika, loyihalar fabrikasi, biznes rejalar',
        },
      ],
    }
  },
  runtimeConfig:{ 
    public:{  
      HOTJAR_ID:'5038591',
      gtagId:'G-TGQMJB4FXZ'
    }
  },
  css:[
    '@/assets/css/index.css',
    '@/assets/css/main.css',
    '@/assets/scss/global.scss',
    '@/assets/css/maps.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxt/image",
    '@sidebase/nuxt-pdf',
    'yandex-metrika-module-nuxt3',
    "@nuxt/icon",
    'nuxt-svgo',
    'nuxt-swiper',
  ],
  plugins:[ 
    '~/plugins/vue3pdf.js', 
    '~/plugins/mask.js',
    '~/plugins/gtag.client.js',
    '~/plugins/hotjar.client.js',
  ],
  svgo: { 
    svgo: false,
    autoImportPath: './assets/icons/', 
    componentPrefix: 'icon'
  },
  yandexMetrika:{
    id: 97680760, 
    webvisor: true,
    clickmap: true,
    consoleLog:false
  }, 
  i18n: {
    locales: [
      { code:'la', file:'la.json'}, 
      { code:'uz', file:'uz.json'}, 
      { code:'ru', file:'ru.json'}, 
    ],
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage:false, 
    lazy:true,
    langDir: 'locales',
    defaultLocale: 'la',
    
  }, 
})