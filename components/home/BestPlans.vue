<template>
    <section v-if="List" class="w-full flex justify-center py-8 px-3 bg-white">
        <div class="f-container">
            <h1 class="text-xl font-bold text-left mb-4">{{ $t('main.baset_plans') }}</h1>
            <div  class="w-full grid grid-cols-4 gap-3 max-md:grid-cols-2">
                <PlanCard v-for="(item, i) in List" :key="i" :plan="item" />
            </div>  
        </div>
    </section>
</template>
<script setup>  
// DATA
const { locale } = useI18n();
const { data: List, pending, error, refresh } = await useApiFetch(`/api/v1/top/business/plans?page=1&page_size=8&lang=${locale.value}`,
    {
        lazy: true,
        baseURL: useBaseUrl(),
        transform: (List) => { return List.data }
    })


</script>