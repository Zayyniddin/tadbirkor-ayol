<template>
	<section class="w-full flex justify-center bg-white">
		<div class="f-container mx-auto flex flex-col gap-16">
			<div class="w-full flex items-center justify-between">
				<h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
					Yangi boshlovchilar uchun biznes rejalar
				</h1>
				<div class="flex flex-col justify-end items-end gap-2">
					<p class="text-base font-medium max-w-md leading-[125%]">
						Har bir reja real misollar va foydali strategiyalar bilan
						boyitilgan. G‘oyangizni ishonch bilan boshlash uchun kerakli barcha
						ma’lumotlar bir joyda
					</p>
					<nuxt-link
          to='/business-plans'
          class='flex items-center text-green-500 gap-1'
						>Barchasi
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
								stroke="#02C6B8"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.625 9H15.2475"
								stroke="#02C6B8"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</nuxt-link>
				</div>
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
	useApi(`/api/v1/business/plans?lang=${locale.value}&page=1&page_size=8`).then(
		res => {
			data.value = res.data.data
		}
	)
}
</script>
