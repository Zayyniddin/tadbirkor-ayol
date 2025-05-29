<template>
  <div class="w-full mt-12">
    <div class="f-container mx-auto flex flex-col gap-8">
      <div class="w-full flex justify-between items-end gap-3">
        <div class="flex items-center gap-6">
          <div class="flex relative gap-2 flex-col items-start">
            <p class="text-base font-medium">Viloyat</p>
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 240px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
            </el-select>
          </div>
          <div class="flex relative gap-2 flex-col items-start">
            <p class="text-base font-medium">Tumani</p>
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 240px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
            </el-select>
          </div>
        </div>
        <div class="flex relative items-center">
          <icon-search class="absolute left-3 z-10" />
          <el-input
            class="custom-input"
            size="large"
            placeholder="Type something" />
        </div>
      </div>
      <div class="w-full grid grid-cols-3 gap-5">
        <nuxt-link v-for="item in 6" :key="item" :to="`/freejobs/${item}`">
          <JobsCard  />
        </nuxt-link>
      </div>
      <div class="flex justify-center items-center">
          <button class="px-4 py-3 bg-[#f7f8f9] text-[#2b2f38] text-sm rounded-xl">
            Yana yuklash
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style lang="scss" scoped></style>
