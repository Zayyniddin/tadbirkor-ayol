<template>
  <section class="w-full flex justify-center bg-white py-6">
    <div class="f-container flex flex-col gap-16">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
          Ekspertlar
        </h1>
        <div class="flex items-center gap-2">
           <div class="flex items-center gap-2 justify-center w-11 h-11 border border-[#f7f8f9] rounded-xl">
            <CustomIcon name="icon-left" class="!w-8 h-6 text-slate-400 transform rotate-180" />
           </div>
           <div class="flex items-center bg-[#f7f8f9] gap-2 justify-center w-11 h-11 border border-[#f7f8f9] rounded-xl">
            <CustomIcon name="icon-left" class="!w-8 h-6 text-[#292d32]" />
           </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-4 gap-6 justify-between">
        <LessonsExpertCard v-for="item in 4" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
