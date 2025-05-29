export default defineNuxtPlugin((nuxtApp) => {
    const { gtagId } = useRuntimeConfig().public;
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    window.dataLayer = window.dataLayer || [];
    
    gtag("js", new Date());
    gtag("config", gtagId);

    useHead({
        script: [
          {
            type:'text/javascript',
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
          },
        ],
      });
    
   
  });