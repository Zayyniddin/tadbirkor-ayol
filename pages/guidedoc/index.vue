<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container min-h-[50vh]">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-8">
                    <h1 class="text-xl font-bold text-center text-white">Foydalanish qo'llanmasi</h1>
                </div>  
                <div  class="w-full rounded-xl overflow-hidden"> 
                    <iframe :src="guideDocLa" class="w-full h-[80vh]"></iframe>
                </div> 
            </div>
        </section>
    </div>

</template>
<script setup> 
import guideDocLa from '@/assets/files/guideDocLa.pdf'
</script>