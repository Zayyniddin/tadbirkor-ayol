<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-8">
                    <h1 class="text-xl font-bold text-center text-white">{{ $t('nav.business_plans') }}</h1>
                </div>
                <div class="w-full bg-gray-50 p-3 rounded-xl mb-8">
                    <p class="mb-4 font-bold">{{ $t('main.filter') }}</p>
                    <div class="w-full grid grid-cols-4 gap-3 max-md:grid-cols-2">
                        <div class="col-span-1">
                            <p class="text-xs mb-1 font-medium">{{ $t('main.category') }}</p>
                            <el-select v-model="filters.category_id" :placeholder="$t('main.category') " @change="refresh()"
                                size="large" clearable>
                                <el-option v-for="(item, i) in categoryList" :key="i" :label="item.name"
                                    :value="item.id" />
                            </el-select>
                        </div>
                        <div class="col-span-1">
                            <p class="text-xs mb-1 font-medium">{{ $t('main.search') }}</p>
                            <el-input v-model="filters.name" @input="refresh()" :placeholder="`${$t('main.search')}...`" :suffix-icon="Search"
                                size="large" clearable />
                        </div>

                    </div>
                </div>
                <div v-if="List && List.results && List.count" class="w-full">
                    <div class="w-full grid grid-cols-4 gap-3 max-md:grid-cols-2">
                        <PlanCard v-for="(item, i) in List.results" :key="i" :plan="item" />
                    </div>
                    <div class="w-full mt-8 flex justify-center">
                        <el-pagination background layout="prev, pager, next" v-model:current-page="filters.page" :total="List.count" :page-size="filters.page_size" :pager-count="5"  @current-change="GetData()" />
                    </div>
                </div> 
            </div>
        </section>
    </div>

</template>
<script setup>
import { ref } from 'vue'
import {  Search } from '@element-plus/icons-vue';
// LANG
const {locale} =useI18n()

// STORE
import { useDictionaryStore } from '@/stores/dictionary';
const dictionaryStore = useDictionaryStore()
const { categoryList } = storeToRefs(dictionaryStore)

// COMPUTED
const filter = computed(() => {
    let data = {}
    if (filters.value.category_id) { data.category_id = filters.value.category_id }
    if (filters.value.page) { data.page = filters.value.page }
    if (filters.value.page_size) { data.page_size = filters.value.page_size }
    if (filters.value.name) { data.name = filters.value.name }
    return data
})


// DATA
const route = useRoute()

const filters = ref({
    category_id: '',
    name: '',
    page: 1,
    page_size: 12
})

const { data: List, pending, error, refresh } = await useApiFetch(`/api/v1/business/plans`,
    {
        onRequest({ request, options }) {
            options.query = {...filter.value, lang:locale.value}
        },
        lazy: true,
        baseURL: useBaseUrl(),
        transform: (List) => { return List.data }
    })


// METHOSD
function GetData(){
    window.scrollTo(0, 0)
    refresh()
}







</script>