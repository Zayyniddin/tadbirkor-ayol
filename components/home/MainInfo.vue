<template>
  <section class="w-full flex justify-center py-8 px-3 bg-white">
    <div class="f-container">
      <h1 class="text-4xl font-bold text-left mb-4">
        {{ $t("about.we_offer") }}
      </h1>
      <div
        class="w-full grid grid-cols-3 gap-3 pt-8 max-md:grid-cols-1 max-md:gap-16">
        <div class="py-3 px-3 bg-gray-50 rounded-xl relative flex flex-col gap-10">
          <div class="w-full flex justify-start">
            <div
              class="text-xl rounded-xl text-white p-1 flex justify-center items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.06 21.0003C36.61 21.0003 38.5 19.2503 36.82 13.5103C35.6825 9.64281 32.3575 6.31781 28.49 5.18031C22.75 3.50031 21 5.39031 21 9.94031V14.9803C21 19.2503 22.75 21.0003 26.25 21.0003H32.06Z"
                  stroke="#02C6B8"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M35 25.7246C33.3725 33.8271 25.6025 39.7071 16.765 38.2721C10.1325 37.2046 4.79498 31.8671 3.70998 25.2346C2.29248 16.4321 8.13749 8.66209 16.205 7.01709"
                  stroke="#02C6B8"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-base font-bold text-start">
              {{ $t("about.busness_plan") }}
            </p>
            <p class="text-sm text-gray-600 text-start">
              Tadbirkorlik faoliyatining bosqichlari, uning rentabelligi,
              yaqinlashib kelayotgan moliyaviy natijalarni maqsadga muvofiqligi
              to'g'risidagi ma'lumotlarni o'z ichiga olgan biznesni
              rivojlantirish dasturi.
            </p>
          </div>
        </div>
        <div class="py-3 px-3 bg-gray-50 rounded-xl relative flex flex-col gap-10">
          <div class="w-full flex justify-start">
            <div
              class="text-xl rounded-xl text-white p-1 flex justify-center items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.67 3.5H15.33C8.75001 3.5 8.24251 9.415 11.795 12.635L30.205 29.365C33.7575 32.585 33.25 38.5 26.67 38.5H15.33C8.75001 38.5 8.24251 32.585 11.795 29.365L30.205 12.635C33.7575 9.415 33.25 3.5 26.67 3.5Z"
                  stroke="#02C6B8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-base font-bold text-start">
              {{ $t("about.fast_servise") }}
            </p>
            <p class="text-sm text-gray-600 text-start">
              Tadbirkorlik faoliyatni amalga oshirish uchun jalb qilinayotgan
              resurs mablag‘larining optimal miqdorini aniqlash demakdir. Zeroki
              bank va moliya tashkilotlaridan keragidan ortiqcha jalb qilingan
              mablag‘lar ortiqcha harajatlarni keltirib chiqaradi.
            </p>
          </div>
        </div>
        <div class="py-3 px-3 bg-gray-50 rounded-xl relative flex flex-col gap-10">
          <div class="w-full flex justify-start">
            <div
              class="text-xl rounded-xl text-white p-1 flex justify-center items-center">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.1758 25.0772C15.1758 27.3347 16.9083 29.1547 19.0608 29.1547H23.4533C25.3258 29.1547 26.8483 27.5622 26.8483 25.6022C26.8483 23.4672 25.9208 22.7147 24.5383 22.2247L17.4858 19.7747C16.1033 19.2847 15.1758 18.5322 15.1758 16.3972C15.1758 14.4372 16.6983 12.8447 18.5708 12.8447H22.9633C25.1158 12.8447 26.8483 14.6647 26.8483 16.9222"
                  stroke="#02C6B8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M21 10.5V31.5"
                  stroke="#02C6B8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z"
                  stroke="#02C6B8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-base font-bold text-start">
              {{ $t("about.choose_amount") }}
            </p>
            <p class="text-sm text-gray-600 text-start">
              Tadbirkorlik faoliyatni amalga oshirish uchun jalb qilinayotgan
              resurs mablag‘larining optimal miqdorini aniqlash demakdir. Zeroki
              bank va moliya tashkilotlaridan keragidan ortiqcha jalb qilingan
              mablag‘lar ortiqcha harajatlarni keltirib chiqaradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Collection, Flag, Cellphone } from "@element-plus/icons-vue";
</script>
