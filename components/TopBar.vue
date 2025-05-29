<template>
    <div v-if="active" class="w-full flex justify-center bg-gray-800 py-3 px-12 relative  max-md:pl-4 max-md:pr-12 ">
        <div class="f-container ">
            <a href="https://online-bozor.uz/" class="flex justify-between  w-full" target="_blank">
                <div class="max-md:hidden">
                    <img src="@/assets/images/online-bozor-logo.svg" class="w-[140px]" alt="">
                </div>
                <div class="flex items-center gap-2">
                    <p class="text-base font-medium text-white text-center max-md:text-xs max-md:text-left" v-html="$t('adver.online_ads')">
                    </p>
                </div>
                <div class="flex items-center gap-2 max-md:hidden">
                    <button class="px-3 py-2 rounded-xl text-xs font-bold   border border-[#596ACA] bg-[#596ACA] text-white">{{ $t('adver.start_sell') }}</button>
                </div>
            </a>
        </div>
        <div class="w-12 h-full p-3 absolute right-0 top-0 text-white flex items-center justify-center">
            <button @click="active=false"> <el-icon><CloseBold /></el-icon></button>
        </div> 
    </div>
</template>
<script setup> 
import { CloseBold } from '@element-plus/icons-vue';

const active=ref(true)
</script>