<template>
    <div class="p-4 bg-gray-50 rounded-xl flex flex-col justify-between">
        <div class="w-full">
            <div class="w-full mb-3">
                <Photo v-if="plan.image" class="w-full rounded-xl" :uid="plan.image" />
                <img v-if="!plan.image" class="w-full rounded-xl" src="@/assets/images/onlinemarket1.jpg" alt="">
            </div>
            <p class="text-base font-bold text-gray-700 leading-5 mb-1 max-md:text-sm">{{ plan.name }}</p>
            <p class="text-sm text-purple-600 mb-1 font-bold max-md:text-xs">{{ priceFilter(plan.credit_price) }} {{ $t('main.sum') }}</p>
            <p class="text-sm text-gray-600 max-md:text-xs">{{
                plan.category && plan.category.name ? plan.category.name : '' }}</p>
        </div>
        <div class="flex justify-end pt-4">
            <nuxt-link :to="localePath(`/plans/${plan.id}`)">
                <button
                    class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90 group transition-all">
                    {{ $t('main.show') }}<el-icon class="group-hover:-rotate-45">
                        <Right />
                    </el-icon>
                </button>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
// ICON
import { Right } from '@element-plus/icons-vue';

// LANG
const localePath = useLocalePath()

// PROPS
const props = defineProps({
    plan: {
        type: Object,
        default: {},
        required: true,
    },
});

</script>