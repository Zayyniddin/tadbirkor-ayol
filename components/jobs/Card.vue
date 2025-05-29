<template>
  <div class="w-full rounded-xl border overflow-hidden h-auto">
    <div class="w-full h-[200px]">
      <img :src="onlinemarket" class="w-full h-full object-cover" alt="onlinemarket" />
    </div>
    <div class="px-6 py-5 border-[#e9e9e9] bg-[#f7f8f9]">
      <div class="flex flex-col gap-6">
        <div>
          <p class="flex items-center gap-1 text-sm text-[#667085]">YATT Teshabaeva Nigora Farruxovna <span><CustomIcon name="icon-verify" class="!w-5 !h-5" /></span></p>
          <p class="text-base text-[#2b2f38] font-bold">Go'zallik salonida ayollarga xizmat qilish</p>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <p class="text-[#667085] text-sm">Tajriba</p>
            <p class="text-base text-[#2b2f38] font-bold">Teshabaeva Nigora</p>
          </div>
          <div class="flex flex-col">
            <p class="text-[#667085] text-sm">Ish haqqi</p>
            <p class="text-base text-[#2b2f38] font-bold">12 000 000 so’m</p>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-[#667085] text-sm">Manzil</p>
          <p class="text-base text-[#2b2f38] font-bold">
            Manzil: Andijon ,Xonobod sh.,Anhor,
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import onlinemarket from "~/assets/images/garden.jpg";
</script>

<style lang="scss" scoped></style>
