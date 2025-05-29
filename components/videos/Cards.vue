<template>
  <section class="w-full flex justify-center bg-white py-6">
    <div class="f-container flex flex-col gap-16">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-4xl font-bold flex-1 leading-[125%]">
          Biznes marketing va huquqiy maslahatlar
        </h1>
      </div>
      <div class="w-full grid grid-cols-3 gap-6 justify-between">
        <ConsultVideoCard v-for="(item, i) in news" :key="i" :data="item" />
      </div>
      <div class="flex justify-center items-center" v-if="filter.total>filter.page_size"> 
        <div
          @click="getNewsPage"
          class="px-4 py-3 rounded-xl cursor-pointer bg-[#F7F8F9] text-[#2B2F38] text-sm"
          :class="{ 'cursor-not-allowed': filter.page * filter.page_size >= filter.total }"
          >
          Yana yuklash
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const news = ref([]);
const filter = reactive({
  page: 1,
  page_size: 9,
  total: 0,
});

async function getNews() {
  try {
    const res = await useApi(
      `https://tadbirkor-ayol.uz/services/platon-core/api/v1/video/instructions?lang=uz&page=${filter.page}&page_size=${filter.page_size}`
    );

    news.value =[...news.value, ...res.data.data];
    filter.total = res.data.total;
  } catch (error) {}
}
async function getNewsPage() {
  if (filter.page * filter.page_size <= filter.total) {
    filter.page++;
    await getNews();
  }
}
onMounted(() => {
  getNews();
});
</script>

<style lang="scss" scoped></style>
