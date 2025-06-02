<template>
	<section class="w-full flex justify-center mt-20">
		<div class="f-container">
			<Swiper
				class="relative"
				:modules="[SwiperAutoplay]"
				slides-per-view="auto"
				space-between="8"
				:loop="true"
				:autoplay="{ delay: 2000, disableOnInteraction: true }"
			>
				<SwiperSlide v-for="(item, i) in categories" :key="i" class="max-w-fit">
					<a :href="`https://smart-market.uz/product?category_id=${item.id}&all_regions=1&page=1&page_size=16&sorting=popular&order=asc`" target='_blank'
					>
						<div
							class="w-[160px] h-[160px] rounded-xl p-4 relative max-md:w-[120px] max-md:h-[120px]"
						>
							<p
								class="text-xs font-bold text-black relative z-[1] max-md:text-[10px]"
							>
								{{ item.name }}
							</p>
							<div
								v-if="item.image"
								class="w-full h-full absolute top-0 left-0 flex justify-end items-end z-0"
							>
								<Photo
									:uid="
										'https://api.cabinet.smart-market.uz/uploads/images/' +
										item.image
									"
									class="w-full h-full"
								/>
							</div>
						</div>
					</a>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup>
const localePath = useLocalePath()
const categories = ref([])
const { locale } = useI18n()

function getCateries() {
	useApi(`/api/v1/smart-market/categories?lang=${locale.value}`).then(res => {
		categories.value = res.data
	})
}

onMounted(() => {
	getCateries()
})
</script>
