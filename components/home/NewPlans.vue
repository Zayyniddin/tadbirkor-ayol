<template>
  <section class="w-full flex justify-center bg-white">
    <div class="f-container mx-auto flex flex-col gap-16">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
          Yangi boshlovchilar uchun biznes rejalar
        </h1>
        <p class="text-base font-medium max-w-md leading-[125%]">
          Har bir reja real misollar va foydali strategiyalar bilan boyitilgan. G‘oyangizni ishonch bilan boshlash uchun kerakli barcha ma’lumotlar bir joyda
        </p>
      </div>
      <div class="w-full grid grid-cols-4 gap-6 justify-between">
        <HomeNewsPlanCard v-for="item in data" :key="item.id" :data="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()

const data = ref([])

onMounted(() => {
  getPlans()
})

function getPlans() {
  useApi(`/api/v1/business/plans?lang=${locale.value}&page=1&page_size=8`)
    .then(res => {
      data.value = res.data.data
    })
}
</script>
