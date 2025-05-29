<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-10">
                    <h1 class="text-xl font-bold text-center text-white">{{ $t('nav.sector_of_credit') }}</h1>
                </div>
                <div v-if="List" class="w-full grid grid-cols-3 gap-4 py-8">
                    <div v-for="(item, i) in List" :key="i" class="bg-gray-50  group rounded-xl">
                        <div class="w-full flex items-start pl-4 gap-4">
                            <div class="w-36 h-32 rounded-xl overflow-hidden -translate-y-4 bg-red-400">
                                <Photo v-if="item.image" class="w-full h-full object-cover" :uid="item.image" />
                            </div>
                            <div class="flex-1 pt-3 pr-3">
                                <h1 class="text-xl font-bold text-gray-700 mb-2">{{ item.name }}</h1>
                                <ul>
                                    <li class="text-xs text-gary-700 mb-0.5">Kredit muddati: <span class="font-bold">{{
                                            item.credit_month }} oy</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">Imtiyoz davri: <span class="font-bold">{{
                                            item.grace_period }} oy</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">Kredit miqdori: <span class="font-bold">
                                            {{ priceFilter(item.credit_sum) }} mln so'm</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">Foizi: <span class="font-bold">18%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full pb-4 px-4">
                            <p class="text-sm font-bold mb-2">Yo'nalishlar</p>
                            <div class="w-full grid grid-cols-2 gap-2">
                                <div v-for="(purpose, j) in item.purpose" :key="j"
                                    class="px-2 py-1 bg-gray-200 rounded-xl text-sm">
                                    <p class="text-center line-clamp-1"> {{ purpose.name }}</p>

                                </div>
                                <div class="px-2 py-1 bg-gray-200 rounded-xl text-sm text-green-600 text-center">+10
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script setup>
// LANG
const {locale} =useI18n()
// DATA
const { data: List, pending, error, refresh } = useApiFetch(`/api/frontend/v1/credit/purpose?lang=${locale.value}`,
    {
        baseURL: useBaseUrl(),
        lazy: true,
        transform: (List) => { return List.data }
    })

</script>