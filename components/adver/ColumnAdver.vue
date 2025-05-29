<template>
    <div class="w-full relative group border rounded-xl overflow-hidden bg-white  group flex flex-col">
        <div class="flex justify-between p-3 z-[1] bg-white w-full" :class="adData.has_extra?'relative':'absolute left-0 top-0 hidden group-hover:flex'">
            <div class="flex items-center gap-1.5">
                <AdverImage v-if="props.adData.logo" :uid="props.adData.logo" class="h-4" />
                <span v-if="props.adData.name" class="text-[10px] font-bold text-gray-700">{{
                    props.adData.name }}</span>
            </div>
            <button class="text-gray-700" @click="toggle = true">
                <el-icon><More /></el-icon>
            </button>
        </div> 
        <div class="w-full z-0 flex justify-center" :class="adData.has_extra ? 'relative rounded-lg overflow-hidden bg-gray-100 h-[220px] max-[450px]:h-[150px] max-[300px]:h-[200px]' : 'w-full h-full'">
            <AdverImage v-if="adData.media_type == 'photo'" :uid="adData.file" class="h-full" />
            <iframe v-if="adData.media_type == 'youtube' && GetYoutubeLink(adData.file)" class="h-full w-full"
                :src="GetYoutubeLink(adData.file)" frameborder="0" allow="autoplay; fullscreen;"></iframe>
            <a :href="adData.url" target="_blank">
                <div class="absolute w-full h-full z-[4] top-0 left-0"></div>
            </a>
        </div>
        
        <div v-if="adData.has_extra" class="flex-1 p-3 flex flex-col justify-between z-0">
            <div class="w-full">
                <h1 class="text-sm font-bold text-gray-700 mb-1 overflow-hidden text-ellipsis line-clamp-2">{{
                    props.adData.title ? props.adData.title : '-' }}</h1>
                <p class="text-sm text-gray-600 overflow-hidden text-ellipsis line-clamp-2">{{
                    props.adData.description ? props.adData.description : '-' }}</p>
            </div>

            <div v-if="props.adData && props.adData.url" class="flex justify-end mt-3">
                <a :href="props.adData.url" target="_blank">
                    <button class="px-3 py-1.5 bg-primary text-white text-xs rounded-xl">{{props.adData.url.includes('/advertising') ? $t('adver.add_adver') : $t('adver.go_link') }}</button>
                </a>
            </div>
        </div> 
        <div v-show="toggle"
            class="w-full h-full absolute top-0 left-0 bg-white flex items-center justify-center p-3 pt-6 z-[2]">
            <button class="text-gray-700 absolute top-3 right-3 " @click="toggle = false">
                <el-icon><Close /></el-icon>
            </button>
            <div class="max-w-[700px]">
                <div class="flex justify-center mb-4">
                    <img src="@/assets/images/smad.png" class="h-5" alt="">
                </div>
                <p class="text-center text-sm mb-2">{{ $t('adver.suggess_adver') }}</p>
                <div class="flex justify-center">
                    <a href="https://smart-market.uz/advertising/" target="_blank">
                        <button class="text-xs px-3 py-2 bg-primary text-white rounded-xl">{{ $t('adver.add_adver') }}</button>
                    </a>

                </div>
            </div>

        </div>  
       
    </div>
</template>
<script setup>
import AdverImage from './AdverImage.vue';
import { More, Close } from '@element-plus/icons-vue';
// PROPS 
const props = defineProps(
    {
        adData: {
            type: Object,
            default: {}
        }
    }
)
// DATA
const toggle = ref(false)
// METHODS
function GetYoutubeLink(val) {
    let data = ""
    if (val && val.includes('youtube')) {
        let v = (new URL(val)).searchParams.get('v')
        if (v) {
            data = `https://www.youtube.com/embed/${v}?mute=1&autoplay=1&loop=1&showinfo=0&controls=0&playlist=${v}`
        } else {
            data = video
        }
    }

    return data
}

</script>