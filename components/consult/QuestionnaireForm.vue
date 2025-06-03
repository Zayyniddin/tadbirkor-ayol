<template>
  <div class="w-full">
    <div class="f-container mx-auto flex items-start gap-[10rem]">
      <div class="flex-1">
        <h1 class="text-4xl font-semibold text-[#2B2F38] leading-[120%]">
          Foydalanuvchi muammolarini aniqlash bo‘yicha so‘rovnoma
        </h1>
        <div class="mt-10 flex flex-col gap-4">
          <p class="text-[#667085] text-base leading-[150%]">
            So‘rovnoma foydalanuvchilarning ehtiyojlari va duch kelayotgan
            muammolarini aniqlash maqsadida tuzilgan.
          </p>
          <p class="text-[#667085] text-base leading-[150%]">
            Natijalar asosida xizmatni yaxshilash va muammolarga samarali
            yechimlar ishlab chiqish ko‘zda tutilgan.
          </p>
        </div>
        <div class="flex flex-col gap-5 mt-24">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-[#E6F9F8] flex items-center justify-center">
              <CustomIcon name="icon-phone" class="text-white !w-5 !h-5" />
            </div>
            <a href='tel:998712102002' class="text-[#2B2F38] text-base font-semibold">+998 (71) 210-20-02</a>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-[#E6F9F8] flex items-center justify-center">
              <CustomIcon name="icon-email" class="text-white !w-5 !h-5" />
            </div>
            <p class="text-[#2B2F38] text-base font-semibold">info@tba.support</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-[#E6F9F8] flex items-center justify-center">
              <CustomIcon name="icon-location" class="!w-5 !h-5 text-white stroke-[#02C6B8]" />
            </div>
            <p class="text-[#2B2F38] text-base font-semibold">Toshkent sh., Chilonzor tumani Qatortol ko’chasi, 46 uy</p>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <ConsultUiForm />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
