<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container min-h-[50vh]">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-8">
                    <h1 class="text-xl font-bold text-center text-white">{{ $t("nav.decision") }}</h1>
                </div>  
                <div  class="w-full grid grid-cols-2 gap-3 max-md:grid-cols-1"> 
                    <a v-for="(item,i) in DescisonList" :key="i" :href="item.link" target="_blank">
                        <div  class="cols-pan-1 bg-gray-50 rounded-xl p-3 flex gap-4 group items-center">
                        <div class="p-3 bg-white flex items-center justify-center rounded-xl w-[120px] h-[100px] max-md:w-[100px] max-md:h-[80px] ">
                            <img class="w-[100px]" src="@/assets/images/lex_uz.png" />
                        </div>
                        <div class="flex-1">
                            <h1 class="text-sm max-md:text-xs font-bold mb-1 underline group-hover:text-green-600">{{ item.title }}</h1>
                            <p class="text-xs mb-2">Kuchga kirish sanasi <span class="font-bold">{{ item.date }}</span></p> 
                        </div>
                    </div>
                    </a>
                   
                </div> 
            </div>
        </section>
    </div>

</template>
<script setup> 
 const {locale} = useI18n();
 
 const DescisonList=[
    {
        title:'O‘zbekiston Respublikasi Prezidentining qarori, 07.03.2024 yildagi PQ-122-son',
        date:'09.03.2024',
        link:"https://lex.uz/uz/docs/-6831827"
    },
    {
        title:'O‘zbekiston Respublikasi Prezidentining Farmoni, 31.05.2022 yildagi PF-145-son',
        date:'01.06.2022',
        link:"https://lex.uz/docs/-6041630"
    },
    {
        title:'O‘zbekiston Respublikasi Prezidentining qarori, 05.03.2021 yildagi PQ-5020-son',
        date:'06.03.2021',
        link:"https://lex.uz/docs/-5320582"
    },
    {
        title:'O‘zbekiston Respublikasi Prezidentining Farmoni, 07.03.2022 yildagi PF-87-son',
        date:'07.03.2022',
        link:"https://lex.uz/docs/-5899498"
    },

 ] 
 
</script>