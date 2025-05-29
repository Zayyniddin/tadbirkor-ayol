<template>
    <section v-if="!error" class="w-full flex justify-center py-8 px-3 bg-white">
        <div class="f-container">
            <h1 class="text-xl font-bold text-left mb-4">{{ $t('nav.neighborhood_specialization') }}</h1>
            <div class="flex justify-between items-center gap-7 max-md:flex-col">
                <div class="flex-1 grid grid-cols-3 gap-3 max-md:grid-cols-2">
                    <nuxt-link v-for="(item,i) in List" :key="i"  :to="localePath(`/map?id=${item.id}`)">
                    <div class="p-4 bg-gray-50 rounded-xl cursor-pointer">
                        <p class="text-sm font-medium text-gray-700 mb-1">{{ item.category_name }}</p>
                        <p class="font-bold text-xl mb-1">{{ priceFilter(item.amount) }} {{ $t('main.ta') }}</p>
                        <p class="text-green-600">{{item.percent}}%</p>
                    </div>
                </nuxt-link>
                </div> 
                <div class="maps-card flex-1 max-md:w-full">
                    <h1 class="w-full my-3 text-xl font-bold text-start text-black">{{ title.name }}</h1>
                    <maps-repablic @hoverMap="changeTitle" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
// LANG
const localePath = useLocalePath()
const {t, locale} = useI18n()
// DATA
const {data:List, pending, error, refresh} =useApiFetch(`/api/frontend/v1/area/space?lang=${locale.value}`, 
    { 
        baseURL:useBaseUrl(), 
        lazy: true, 
        transform: (List) => { return List.data }
    })
let title = ref({
    name:t('regions.around_republic')
})
 //methods
 function changeTitle(params){
    title.value.name = params.name|| t('regions.around_republic');
 }    

</script>