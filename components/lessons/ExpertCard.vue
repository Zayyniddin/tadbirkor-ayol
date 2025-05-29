<template>
  <div class="w-full">
    <div class="w-full relative flex rounded-xl overflow-hidden justify-center group items-center opacity-75 hover:opacity-100 transition-all duration-300 ease-out">
      <img :src="lesson" alt="mockImage" class="w-full min-h-[250px] h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out" />
    </div>
    <div class="flex flex-col gap-2 mt-6">
      <p class="text-[#2b2f38] text-sm font-extrabold">
        Biznes marketing va huquqiy maslahatlar
      </p>
      <p class="text-sm text-[#667085]">Mentor: Madina Tursunboevna</p>
    </div>
  </div>
</template>

<script setup>
import lesson from "~/assets/images/teacher.png";
</script>

<style lang="scss" scoped>
.card-time-bg {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 40px;
  padding: 8px 16px;
}
</style>
