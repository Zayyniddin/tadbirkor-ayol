<template>
    <section  class="w-full flex justify-center py-8 px-3 bg-white" >
        <div  class="f-container">
            <h1 class="text-xl font-bold text-left mb-10">{{ $t('nav.sector_of_credit') }}</h1>
            <div class="w-full grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-8">
                <div v-for="(item, i) in List" :key="i" class="bg-gray-50  group rounded-xl"> 
                    <div class="w-full flex items-start pl-4 gap-4">
                        <div class="w-36 h-32 rounded-xl overflow-hidden -translate-y-4 bg-red-400"> 
                            <Photo v-if="item.image" class="w-full h-full object-cover" :uid="item.image" />
                        </div>
                        <div class="flex-1 pt-3 pr-3">
                            <h1 class="text-xl font-bold text-gray-700 mb-2">{{ item.name }}</h1>
                            <ul>
                                <li class="text-xs text-gary-700 mb-0.5">{{ $t('credit.credit_prediod') }}: <span class="font-bold">{{ item.credit_month }} {{ $t('main.month') }}</span> </li>
                                <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.privilege_month') }}: <span class="font-bold">{{ item.grace_period }} {{ $t('main.month') }}</span> </li>
                                <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.credit_amount') }}: <span class="font-bold">  {{priceFilter(item.credit_sum) }} {{ $t('main.mln') }} {{ $t('main.sum') }}</span> </li>
                                <li class="text-xs text-gray-700 mb-0.5">{{ $t('credit.credit_procent') }}: <span class="font-bold">18%</span> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full pb-4 px-4">
                        <p class="text-sm font-bold mb-2">{{ $t('credit.directions') }}</p>
                       <div class="w-full grid grid-cols-2 gap-2">
                            <div v-for="(purpose, j) in item.purposes" :key="j"  class="px-2 py-1 bg-gray-200 rounded-xl text-sm">
                                <p class="text-center line-clamp-1"> {{ purpose.name }}</p>
                               
                            </div> 
                            <nuxt-link :to="localePath(`/condition/${item.id}`)">
                            <div  class="px-2 py-1 bg-gray-200 rounded-xl text-sm text-green-600 text-center underline">
                                +{{ item.purpose_count }}
                            </div>
                        </nuxt-link>
                       </div>
                    </div>
                </div>   
            </div> 
        </div>
    </section>
</template>
<script setup>  
// LANG
const localePath = useLocalePath()
const {locale} = useI18n()

// DATA
const {data:List, pending, error, refresh} =useApiFetch(`/api/frontend/v1/credit/purpose?lang=${locale.value}`, 
    { 
        baseURL:useBaseUrl(), 
        lazy: true, 
        transform: (List) => { return List.data }
    })


</script>