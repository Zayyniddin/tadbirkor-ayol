<template>
    <div class="relative">

        <button ref="usermbutton"  @click="toggle=!toggle" @focusout="!mousein?toggle=false:''" class="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-xl" type="button">
            <div class="h-[18px] w-[18px] rounded-xl overflow-hidden max-md:hidden">
                <img v-if="locale=='la'"  class="w-full h-full object-cover "  src="@/assets/images/uz.png" alt=""> 
                <img v-if="locale=='uz'"  class="w-full h-full object-cover "  src="@/assets/images/uz.png" alt=""> 
                <img v-if="locale=='ru'" class="w-full h-full object-cover " src="@/assets/images/ru.png" alt=""> 
            </div>
            <div class="font-bold h-4 flex items-center  text-xs mt-[2px] max-md:mt-0">
                {{ $t('code') }}
            </div>
        </button>

        <!-- Dropdown menu -->
        <div @mouseenter="mousein=true" @mouseleave="MouseLeave()" :class="toggle?'visible':'hidden'"  class="z-10 py-1  w-16 absolute left-0 top-8 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
            <ul class="text-sm text-gray-700 dark:text-gray-200 ">
                <li>
                    <button @click="setLocaleCode('la')" class="px-2 py-1  flex items-center gap-2 text-xs font-bold text-gray-500 cursor-pointer hover:bg-blue-50">
                        <img class="w-4 h-4 roundex-xl" src="@/assets/images/uz.png" alt=""> Uz
                    </button>
                </li> 
                <li>
                    <button @click="setLocaleCode('uz')" class="px-2 py-1  flex items-center gap-2 text-xs font-bold text-gray-500 cursor-pointer hover:bg-blue-50">
                        <img class="w-4 h-4 roundex-xl" src="@/assets/images/uz.png" alt=""> Ўз
                    </button>
                </li> 
                <li>
                    <button @click="setLocaleCode('ru')" class="px-2 py-1  flex items-center gap-2 text-xs font-bold text-gray-500 cursor-pointer hover:bg-blue-50">
                        <img class="w-4 h-4 roundex-xl" src="@/assets/images/ru.png" alt=""> Ru
                    </button>
                </li> 
            </ul> 
        </div>

    </div>
</template>
<script setup>    
const switchLocalePath = useSwitchLocalePath()
const {locale} = useI18n()
const router=useRouter()

// // STORE
import { useDictionaryStore } from '@/stores/dictionary';
const dictionaryStore=useDictionaryStore()
const {get_regions, get_categories} =dictionaryStore 


// DATA
const toggle=ref(false)
const mousein=ref(false)
const usermbutton=ref(null)

// METHODS
function MouseLeave(){
    mousein.value=false
    usermbutton.value.focus()
}
function setLocaleCode(code){
    router.push(switchLocalePath(code))
    .then(()=>{
       toggle.value=false 
       get_regions(code)
       get_categories(code)
    })
    .catch(e=>{
        console.log(e)
    }) 
}

</script>