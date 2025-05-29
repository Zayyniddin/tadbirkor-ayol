<template>
  <div class="flex w-full flex-col gap-8">
    <div class="border border-[#e9e9e9] rounded-xl overflow-hidden">
      <div class="bg-[#f7f8f9] py-4 px-6 text-base">1 modul</div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-play" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 darslik: Tikivchilik sanoati bo’yicha darslik</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Video</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div class="flex-1 max-w-[100px]">
            <el-progress :percentage="50" />
        </div>
      </div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-text" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 darslik: Tikivchilik sanoati bo’yicha darslik</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Text ko’rinishida</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div>
            <CustomIcon name="icon-lock" class="!w-5 !h-5" />
        </div>
      </div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-play" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 - modul bo’yicha test</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Savol javob</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div>
            <CustomIcon name="icon-lock" class="!w-5 !h-5" />
        </div>
      </div>
    </div>
     <div class="border border-[#e9e9e9] rounded-xl overflow-hidden">
      <div class="bg-[#f7f8f9] py-4 px-6 text-base">2 modul</div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-play" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 darslik: Tikivchilik sanoati bo’yicha darslik</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Video</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div>
            <CustomIcon name="icon-lock" class="!w-5 !h-5" />
        </div>
      </div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-text" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 darslik: Tikivchilik sanoati bo’yicha darslik</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Text ko’rinishida</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div>
            <CustomIcon name="icon-lock" class="!w-5 !h-5" />
        </div>
      </div>
      <div class="border-b border-[#e9e9e9] py-4 px-6 text-base flex justify-between items-center">
        <div class="flex items-center gap-4">
          <div
            class="rounded-full p-2 h-8 w-8 bg-[#02c6b8] overflow-hidden flex items-center justify-center">
            <CustomIcon name="icon-play" class="!w-5 !h-5 text-[#02C6B8]" />
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2b2f38]">1 - modul bo’yicha test</p>
            <div class="flex items-center text-[#667085] text-xs">
                <p>Savol javob</p>
                <div>
                    <CustomIcon name="icon-dot" class="!w-6 !h-6" />
                </div>
                <p>
                    23 min
                </p>
            </div>
          </div>
        </div>
        <div>
            <CustomIcon name="icon-lock" class="!w-5 !h-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
