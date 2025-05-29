<template>
    <div class="w-full">
        <h1 class="font-bold text-xl mb-4">Mahsulotlar</h1>
        <div class="w-full mb-8 grid grid-cols-4 gap-3">
            <ProductCard v-for="(item,i) in List.results" :key="i" :data="item" />
        </div> 
    </div>
</template>
<script setup>
// LANG
const { locale } = useI18n()
// PROPS
const props = defineProps({
    id: {
        type: [Number, String],
        default: 0,
        required: true,
    },
});

// DATA
const { data: List, pending, error, refresh } = await useApiFetch(`https://api.cabinet.smart-market.uz/api/frontend/v1/catalog/similar/products?product_id=${props.id}&page=1&page_size=8&lang=${locale.value}`,
    {
        lazy: true,
        baseURL: useBaseUrl(),
        transform: (List) => { return List.data }
    })



</script>