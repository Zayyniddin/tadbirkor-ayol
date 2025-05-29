<template>
    <div class="scroll default fixed top-0  left-0 z-[4000]   w-[100vw] h-[100vh] p-3"  :class="obAdver ? 'flex' : 'hidden'">
        <div class="w-full min-h-fit ui-modal ">
            <div class="w-full flex items-center min-h-full justify-center pb-[100px]">
                <div class="relative   z-10 rounded-xl w-full min-h-fit overflow-hidden" :style="{ 'max-width': maxWidth }">
                    <button @click="setObAdver(false)" type="button"
                            class="absolute right-3 top-3 text-white bg-green-600 rounded-full text-sm w-8 h-8 ms-auto flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                    </button>
                    <div class="absolute right-0 bottom-5 px-4 py-2 bg-green-600 text-white rounded-l-xl text-center text-sm w-10">{{ timer }}</div>
                    <a href="https://online-bozor.uz/" target="_blank">
                        <img class="w-full" src="@/assets/images/ob-adver.jpg" alt="">
                    </a>
                </div>
                <div class="fixed w-full h-full bg-black opacity-[0.5] left-0 top-0 z-0"></div>
            </div>
        </div>
    </div>
</template>
<script setup>  
const maxWidth=ref('800px') 

// STORE
import { useAdverStore } from '@/stores/adver';
const adverStore = useAdverStore()
const { setObAdver } = adverStore
const {obAdver} = storeToRefs(adverStore)

watch(() => obAdver.value, () => { 
    if (obAdver.value) {
        document.body.style.overflowY = 'hidden';
    }
    else {
        document.body.style.overflowY = 'auto';
    }
});


const timer=ref(5)
onMounted(()=>{
    if(obAdver.value){
        timer.value=5
        const interval=setInterval(()=>{
        if(timer.value==0){
            setObAdver(false)
            clearInterval(interval)
        }
        else{
            timer.value=timer.value-1
        }
    }, 1000)
    }
  
})


</script>