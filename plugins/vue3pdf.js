import vue3ToPdf from 'vue3-to-pdf' 

export default defineNuxtPlugin((nuxtApp) => { 
    nuxtApp.vueApp.use(vue3ToPdf) 
})