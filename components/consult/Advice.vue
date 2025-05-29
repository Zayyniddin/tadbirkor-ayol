<template>
  <section class="w-full flex justify-center bg-white py-6">
    <div class="f-container flex flex-col gap-16">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
          Biznes marketing va huquqiy maslahatlar
        </h1>
        <nuxt-link :to="localePath(`/videos`)" class="flex items-center gap-2">
          <p class="text-[#02c6b8] text-sm">Barchasini videolar</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
              stroke="#02C6B8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M2.625 9H15.2475"
              stroke="#02C6B8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </nuxt-link>
      </div>
      <div class="w-full grid grid-cols-3 gap-6 justify-between">
        <VideoCard v-for="(item,i) in news" :key="i" :data="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import VideoCard from "./VideoCard.vue";

const news = ref([]);
const localePath = useLocalePath();
async function getNews() {
  try {
    const res = await useApi(
      "https://tadbirkor-ayol.uz/services/platon-core/api/v1/video/instructions?lang=uz&page=1&page_size=3"
    );

    news.value = res.data.data;
  } catch (error) {}
}
onMounted(() => {
  getNews();
});
</script>

<style lang="scss" scoped></style>
