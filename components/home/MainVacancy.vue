<template>
    <section class="w-full flex justify-center py-8 px-3 bg-white">
        <div class="f-container" >
            <h1 class="text-xl font-bold text-left mb-4">{{ $t('nav.vacancies') }}</h1>
            <div v-if="List" class="w-full grid grid-cols-2 gap-3 max-md:grid-cols-1">
                <VacancyCard v-for="(item,i) in List.results" :key="i" :data="item" /> 
            </div> 
        </div>
    </section>
</template>
<script setup> 
const {locale} = useI18n()
const {data:List, pending, error, refresh} =useApiFetch(`/api/frontend/v1/women-vacancies?page=1&page_size=4&lang=${locale.value}`, 
    { 
        baseURL:useBaseUrl(), 
        lazy: true, 
        transform: (List) => { return List.data }
    })


</script>