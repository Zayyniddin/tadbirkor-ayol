<template>
    <div class="p-4 bg-gray-50 rounded-xl">
        <div class="relative rounded-xl mb-3 overflow-hidden bg-gray-100 h-[180px] max-[450px]:h-[150px] max-[300px]:h-[200px] bg-white flex justify-center"> 
            <ProductSmImage v-if="data.main_photo"  :uid="data.main_photo" class="w-full h-full object-contain"  />
        </div>
        <div class="w-full">
            <h1 class="text-gray-600 text-sm mb-3 overflow-hidden text-ellipsis line-clamp-2 capitalize font-bold">{{ data.name }}</h1>
            <h1 class="text-sm font-bold text-purple-600 mb-1.5">{{ priceFilter(data.price)}} {{ $t('main.sum') }}</h1>
        </div>
        <div class="flex justify-end gap-2 pt-2 items-center"> 
            <a  :href="`https://smart-market.uz/product/${data.id}`" target="_blank">
            <button
                class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90 group transition-all">
                {{ $t('main.show') }}<el-icon class="group-hover:-rotate-45">
                    <Right />
                </el-icon>
            </button>
        </a>
        </div> 
    </div>
</template>
<script setup>
import { Right } from '@element-plus/icons-vue';


// PROPS
const props = defineProps({
    data: {
        type: Object,
        default: {},
        required: true,
    },
});
</script>