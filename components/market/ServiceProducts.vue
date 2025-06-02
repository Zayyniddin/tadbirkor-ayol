<template>
	<div class="w-full f-container mx-auto mt-20 mb-10">
		<div class="w-full flex items-center mb-8 justify-between">
			<h1 class="text-4xl flex items-center gap-6  font-bold max-w-lg flex-1 leading-[125%]">
				Xizmat ko’rsatish
				<CustomIcon name="icon-logo-bozor" style='height: 60px; width: 100px;' />
			</h1>

			<nuxt-link
				to="/service-products"
				class="flex items-center text-green-500 gap-1"
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
		<div class="flex items-center flex-wrap gap-4 gap-y-10">
			<a :href='`https://online-bozor.uz/ads/${item.id}`'
			target='_blank'
				v-for="item in data"
				:key="item.id"
				class="max-w-[285px] relative group cursor-pointer"
			>
				<img
					class="object-contain rounded-xl mb-4 bg-slate-50 h-[220px] w-[300px]"
					:src="`https://api.online-bozor.uz/uploads/images/${item.main_photo}`"
					alt=""
				/>
				<div class="flex flex-col gap-3">
					<p
						class="text-gray-800 text-sm font-semibold transition-all duration-300 group-hover:text-green-500"
					>
							{{item.name}}
					</p>
					<p class="text-gray-500 text-lg">
						{{ priceFilter(item.price) }} so'm
					</p>
					<p class="text-green-500 flex text-sm items-center gap-2">
						<CustomIcon name="icon-location" class="!w-5 !h-5 !text-gray-400" />
						{{ item.region }}, {{ item.district }}
					</p>
					<p class="text-gray-500 flex text-sm items-center gap-2">
						<Icon
							name="solar:calendar-outline"
							class="!w-5 !h-5 text-gray-400"
						/>
						{{ item.created_at }}
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'main-layout',
})
const { locale } = useI18n()
const data = ref([])

function getData() {
	useApi(
		`/api/v1/online-bozor/products?lang=${locale.value}&page=1&page_size=8`
	).then(res => {
		data.value = res.data
	})
}

onMounted(() => {
	getData()
})
</script>
