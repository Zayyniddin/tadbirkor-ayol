<template>
  <div class="w-full">
    <div class="f-container mx-auto py-20">
      <div class="flex gap-28">
        <div class="flex-1 space-y-12">
          <div class="flex items-start gap-10">
            <p class="text-base whitespace-nowrap font-bold">Vazifa tavsifi</p>
            <p class="text-sm text-black leading-[140%]">
              Salonimizga mijozlarni iliq kutib oladigan, xizmatlarni tartibga
              soluvchi va jamoa ishini samarali boshqarishda yordam beradigan
              administrator izlayapmiz. Siz mijozlar bilan bevosita muloqotda
              bo‘lasiz, yozilishlarni boshqarasiz va umumiy ish jarayonining
              muammosiz kechishini ta’minlaysiz.
            </p>
          </div>
          <div class="flex items-start gap-10">
            <p class="text-base whitespace-nowrap font-bold">Vazifalar</p>
            <ul class="list-disc list-inside space-y-4">
                <li class="text-sm text-black leading-[140%]">Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish</li>
                <li class="text-sm text-black leading-[140%]">Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish</li>
                <li class="text-sm text-black leading-[140%]">Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish</li>
            </ul>
          </div>
          <JobsSendjob />
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <p class="text-base whitespace-nowrap font-bold">Kalit so’zlar</p>
          <div>
            <div class="backdrop-blur-md w-fit bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]">#salonadministrator</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "main-layout",
});
const route = useRoute();
</script>

<style lang="scss" scoped></style>
