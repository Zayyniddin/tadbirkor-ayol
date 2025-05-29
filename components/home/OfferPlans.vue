<template>
    <section class="w-full flex justify-center py-8 px-3 bg-white">
        <div v-if="List && List.length" class="f-container">
            <h1 class="text-xl font-bold text-left mb-8">{{ $t('nav.offer_plans') }}</h1>
            <div class="w-full grid grid-cols-3 gap-4 max-md:grid-cols-1">
                <div v-for="(item,i) in List" :key="i"  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <Photo v-if="item.icon" class="w-full rounded-xl h-full object-cover" :uid="item.icon" />
                        <img v-if="!item.icon" class="w-full rounded-xl h-full object-cover" src="@/assets/images/chorva.jpg" alt=""> 
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">{{ item.category_name }}</p>
                        <p class="text-2xl font-extrabold text-green-600">{{ item.plan_count }} {{ $t('main.ta') }}</p>
                    </div>
                </div>
                <!-- <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/xunarmand.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Xunarmandchilik</p>
                        <p class="text-2xl font-extrabold text-green-600">22 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/savdo.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Savdo</p>
                        <p class="text-2xl font-extrabold text-green-600">86 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/savdo.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Xizmat ko'rsatish</p>
                        <p class="text-2xl font-extrabold text-green-600">86 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/dexqon.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Dexqonchilik</p>
                        <p class="text-2xl font-extrabold text-green-600">6 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/garden.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Bog'dorchilik</p>
                        <p class="text-2xl font-extrabold text-green-600">2 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/isiqxona.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Issiqxona</p>
                        <p class="text-2xl font-extrabold text-green-600">10 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/kichikishlabchiqarish.jpeg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Kichik ishlab chiqarish</p>
                        <p class="text-2xl font-extrabold text-green-600">94 ta</p>
                    </div>
                </div>
                <div  class="bg-gray-50 flex items-center rounded-xl group">
                    <div class="w-28 h-24 rounded-xl overflow-hidden scale-100 group-hover:scale-110">
                        <img src="@/assets/images/ishlabchiqarish_turlari.png" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="flex-1 py-3 px-4">
                        <p class="font-medium text-sm text-gray-900 leading-4">Boshqalar</p>
                        <p class="text-2xl font-extrabold text-green-600">23 ta</p>
                    </div>
                </div> -->
            </div> 
        </div>
    </section>
</template> 
<script setup>
// LANG
const {locale} = useI18n()
// DATA
const {data:List, pending, error, refresh} =useApiFetch(`/api/frontend/v1/business-plan?lang=${locale.value}`, 
    { 
        baseURL:useBaseUrl(), 
        lazy: true, 
        transform: (List) => { return List.data }
    })

</script>