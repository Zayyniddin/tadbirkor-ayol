<template>
  <section class="w-full flex justify-center bg-white">
    <div class="f-container bg-[#b1ede9] rounded-xl flex">
      <div
        class="flex-1 max-w-[550px] px-14 py-16 flex flex-col justify-between">
        <h1 class="text-4xl font-bold">
          Moliyaviy hisobatlarni avtamatik tarzda shakillantiring
        </h1>
        <div class="flex flex-col gap-6">
          <p class="text-base leading-[150%] font-medium">
            Hisob-kitob yuritish endi oson! Xarajatlar va daromadlaringiz asosida avtomatik hisobotlar yarating, vaqt va kuchingizni tejang, moliyaviy holatingizni real vaqt rejimida kuzatib boring.
          </p>
          <button
            class="px-3 py-2 bg-white border text-black flex w-fit gap-2 items-center rounded-xl text-sm">
            <a href='https://keeping.uz/' target='_blank' class="max-md:hidden">Batafsil ma’lumot</a>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.68253 14.9401L11.5725 10.0501C12.15 9.47256 12.15 8.52756 11.5725 7.95006L6.68253 3.06006"
                stroke="black"
                stroke-width="1.125"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-1 min-h-[500px] overflow-hidden relative">
        <div
          class="absolute group top-20 -right-5 min-w-[500px] overflow-hidden h-[500px]">
           <img src="@/assets/images/dashboard.png" class="w-full h-full object-contain" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
