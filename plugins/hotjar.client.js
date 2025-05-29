import VueHotjar from "vue-hotjar-next"; 
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig() 
    nuxtApp.vueApp.use(VueHotjar, {
        id: Number(config.public.HOTJAR_ID)
    })
})