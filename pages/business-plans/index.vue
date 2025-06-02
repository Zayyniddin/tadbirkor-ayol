<template>
	<section class="w-full flex justify-center bg-white">
		<div class="f-container mx-auto flex flex-col gap-16">
			<div class="w-full flex items-center justify-between">
				<h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
					Yangi boshlovchilar uchun biznes rejalar
				</h1>
				<p class="text-base font-medium max-w-md leading-[125%]">
					Har bir reja real misollar va foydali strategiyalar bilan boyitilgan.
					G‘oyangizni ishonch bilan boshlash uchun kerakli barcha ma’lumotlar
					bir joyda
				</p>
			</div>
			<div class="w-full grid grid-cols-4 gap-6 justify-between mb-10">
				<HomeNewsPlanCard v-for="item in data" :key="item.id" :data="item" />
			</div>

			<div
				class="flex justify-center items-center"
				v-if="filter.page * filter.page_size < filter.total"
			>
				<div
					@click="getPlansPage"
					class="px-4 py-3 rounded-xl mb-10 cursor-pointer bg-green-500 text-white text-sm"
				>
					Yana yuklash
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const data = ref([])
const filter = reactive({
	page: 1,
	page_size: 12,
	total: 0,
})

const { locale } = useI18n()

async function getPlans() {
	try {
		const res = await useApi(
			`/api/v1/business/plans?lang=${locale.value}&page=${filter.page}&page_size=${filter.page_size}`
		)
		data.value = [...data.value, ...res.data.data]
		filter.total = res.data.total
	} catch (err) {
		console.error(err)
	}
}

async function getPlansPage() {
	if (filter.page * filter.page_size < filter.total) {
		filter.page++
		await getPlans()
	}
}

onMounted(() => {
	getPlans()
})
</script>
