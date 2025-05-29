<template>
    <div class="w-full p-4 bg-gray-50 rounded-xl flex items-center gap-4 max-sm:flex-col max-sm:items-start">
        <div v-if="data.photo" class="w-[180px] h-[150px]">
            <Photo  class="w-full rounded-xl h-full object-cover" :uid="data.photo" /> 
        </div>
        <div class="flex-1 max-sm:w-full">
            <h1 class="text-lg font-bold text-gray-700 mb-2">{{ data.name }}</h1>
            <h5 class="text-sm font-bold text-gray-700 mb-2 mt-0">{{ data.liabilities }}</h5>
            <div v-if="data.salary" class=" text-sm font-medium mb-1">Ish haqqi: <span class="font-bold text-green-600"> {{ priceFilter(data.salary) }} {{ $t('main.sum') }}</span> </div>
     
            <div class="text-sm mb-1"> 
                Manzil:
                <span v-if="data.region&&data.region.name" class="mr-1">{{ data.region.name  }},</span>
                <span v-if="data.district&&data.district.name" class="mr-1">{{ data.district.name  }},</span>
                <span v-if="data.mahalla&&data.mahalla.name" class="mr-1">{{ data.mahalla.name  }},</span>
            </div>
            <div v-if="data.experience&&data.experience.name" class="bg-gray-200 w-fit px-2 py-1 rounded-xl text-sm font-medium">{{ $t('main.experience') }}: <span class="font-bold">{{ data.experience.name }}</span> </div>
            <div class="flex justify-end mt-2">
                <nuxt-link :to="localePath(`/vacancy/${data.id}`)">
                    <button
                        class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90 group transition-all">
                        {{ $t('main.more') }}<el-icon class="group-hover:-rotate-45">
                            <Right />
                        </el-icon>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Right } from '@element-plus/icons-vue';


// LANG
const localePath = useLocalePath()

const props = defineProps({
    data: {
        type: Object,
        default: {},
        required: true,
    },
});
</script>