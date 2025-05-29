<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-10">
                    <h1 class="text-xl font-bold text-center text-white max-md:text-sm">{{ $t('nav.sector_of_credit') }}</h1>
                </div>
                <div v-if="conditionInfo" class="w-full grid grid-cols-1 gap-4">
                    <div  class="bg-gray-50  group rounded-xl">
                        <div class="w-full flex items-start pl-4 gap-4">
                            <div class="w-[220px] h-[180px] rounded-xl overflow-hidden -translate-y-4 max-md:w-[160px] max-md:h-[120px]">
                                <Photo v-if="conditionInfo.image" class="w-full h-full object-cover" :uid="conditionInfo.image" />
                            </div>
                            <div class="flex-1 pt-3 pr-3">
                                <h1 class="text-xl font-bold text-gray-700 mb-2">{{ conditionInfo.name }}</h1>
                                <ul>
                                    <li class="text-xs text-gary-700 mb-0.5">{{ $t('credit.credit_prediod') }}: <span class="font-bold">{{
                                            conditionInfo.credit_month }} {{ $t('main.month') }}</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.privilege_month') }}: <span class="font-bold">{{
                                            conditionInfo.grace_period }} {{ $t('main.month') }}</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.credit_amount') }}: <span class="font-bold">
                                            {{ priceFilter(conditionInfo.credit_sum) }} {{ $t('main.mln') }} {{ $t('main.sum') }}</span> </li>
                                    <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.interest_rate') }}: <span class="font-bold">18%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full pb-4 px-4">
                            <p class="text-sm font-bold mb-2">{{ $t('credit.directions') }}</p>
                            <div class="w-full grid grid-cols-2 gap-2">
                                <div v-for="(purpose, j) in conditionInfo.purposes" :key="j"
                                    class="px-2 py-1 bg-gray-200 rounded-xl text-sm">
                                    <p class="line-clamp-1">{{ j+1 }}. {{ purpose.name }}</p> 
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
const route = useRoute()
const { data: conditionInfo, pending, error, refresh } = useApiFetch(`/api/frontend/v1/credit/purpose/details?id=${route.params.id}&lang=${locale.value}`,
    {
        baseURL: useBaseUrl(),
        lazy: true,
        transform: (List) => { return List.data }
    })

</script>