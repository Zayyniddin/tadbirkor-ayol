<template>
  <div class="bg-white rounded-lg shadow p-4 sm:p-5 w-full">
    <div class="flex items-center gap-3 mb-4">
      <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="avatar"
        class="w-10 h-10 rounded-full" />
      <h3 class="text-sm sm:text-xs font-semibold leading-tight">
        Go‘zallik salonida ayollarga xizmat qilish
      </h3>
    </div>

    <div class="text-xs text-gray-600 space-y-1">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div>
          <span class="text-[11px] text-gray-400">Ish beruvchi:</span>
          <p class="text-[12px] font-bold">TeshaBaeva Nigora</p>
        </div>
        <div>
          <span class="text-[11px] text-gray-400">Ish haqi:</span>
          <p class="text-[12px] font-bold">12 000 000 so‘m</p>
        </div>
      </div>
      <div>
        <span class="text-[11px] text-gray-400">Manzil:</span>
        <p class="text-[12px] font-bold">Andijon, Xonobod sh., Anhor</p>
      </div>
      <div>
        <span class="text-[11px] text-gray-400">Tajriba:</span>
        <p class="text-[12px] font-bold">4 yildan – 6 yilgacha</p>
      </div>
    </div>

    <button
      class="mt-4 bg-[#02c6b8] hover:bg-teal-600 gap-1 flex items-center text-white py-2 px-4 rounded-lg text-[11px] transition">
      <span>Batafsil ma’lumot</span>
      <IconArrow class="text-black" />
    </button>
  </div>
</template>
