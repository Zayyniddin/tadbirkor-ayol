<template>
    <section class="w-full flex justify-center py-8 px-3 bg-white">
        <div class="f-container" >
            <h1 class="text-xl font-bold text-left mb-4">{{ $t('nav.news') }}</h1>
            <div v-if="data" class="w-full grid grid-cols-4 gap-3 max-md:grid-cols-2 max-[400px]:grid-cols-1">
                <NewsCard v-for="(item,i) in data" :key="i" :data="item" /> 
            </div> 
        </div>
    </section>
</template>
<script setup> 
const {locale} = useI18n();
const data = ref([])

onMounted(() => {
    getCards()
})

function getCards() {
    useApi(`/api/v1/news?lang=uz&page=1&page_size=4`).then((res) => {
        data.value = res.data.data
    })
}
 


</script>