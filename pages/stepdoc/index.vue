<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container min-h-[50vh]">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-8">
                    <h1 class="text-xl font-bold text-center text-white">Kredit olish bosqichlari</h1>
                </div>  
                <div  class="w-full rounded-xl overflow-hidden"> 
                    <iframe :src="stepsDocLa" class="w-full h-[80vh]"></iframe>
                </div> 
            </div>
        </section>
    </div>

</template>
<script setup> 
import stepsDocLa from '@/assets/files/stepsDocLa.pdf'
</script>