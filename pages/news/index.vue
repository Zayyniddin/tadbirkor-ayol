<template>
	<div class="w-full">
		<div class="f-container mx-auto flex mb-10 items-stretch gap-14 max-lg:flex-col">
			<div class="flex flex-1 flex-col gap-2">
				<img
					class="max-w-[750px] w-full rounded-xl mb-8 relative h-[398px] overflow-hidden max-md:h-[280px]"
					:src="`https://tadbirkor-ayol.uz/uploads/images/${data.image}`"
					alt=""
				/>

				<div class="w-full mb-8">
					<p class="text-xs text-gray-400 mb-2">12.05.2024</p>
					<h1 class="text-xl font-bold text-green-600 mb-3 max-md:text-sm">
						{{ data?.title }}
					</h1>
					<div class="w-full max-md:text-xs" v-html="data?.description"></div>
				</div>

				<!-- Остальные карточки ниже описания -->
				<div v-if="bottomNews.length" class="mt-6">
					<p class="font-semibold mb-3 text-lg">Boshqa yangiliklar</p>
					<div class="grid grid-cols-2 gap-6 max-md:grid-cols-1">
						<nuxt-link
							:to="`/news/${news.id}`"
							v-for="news in bottomNews"
							:key="news.id"
							class="group block"
						>
							<img
								class="w-full rounded-xl mb-3 h-[200px] object-cover"
								:src="`https://tadbirkor-ayol.uz/uploads/images/${news.image}`"
								alt=""
							/>
							<p class="text-xs mb-2 text-gray-400">{{ news.created_at }}</p>
							<p class="text-sm mb-1 transition-all group-hover:text-green-600">
								{{ news.title }}
							</p>
							<p class="text-xs text-gray-400">
								{{ news.short_description }}
							</p>
						</nuxt-link>
					</div>
				</div>
			</div>

			<!-- Только 4 карточки справа -->
			<div>
				<p class="font-semibold mb-3 text-lg">Eng ko'p koringanlar</p>
				<nuxt-link
					:to="`/news/${news.id}`"
					v-for="news in topNews"
					:key="news.id"
					class="group block mb-6"
				>
					<img
						class="max-w-[330px] w-full rounded-xl mb-3 h-[200px] overflow-hidden"
						:src="`https://tadbirkor-ayol.uz/uploads/images/${news.image}`"
						alt=""
					/>
					<div class="max-w-[330px]">
						<p class="text-xs mb-2 text-gray-400">{{ news.created_at }}</p>
						<p class="text-sm mb-1 transition-all group-hover:text-green-600">
							{{ news.title }}
						</p>
						<p class="text-xs text-gray-400">
							{{ news.short_description }}
						</p>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()

const data = ref([])
const newsData = ref([])

const topNews = computed(() => newsData.value.slice(0, 4))
const bottomNews = computed(() => newsData.value.slice(4))

onMounted(() => {
	getDetails()
})

function getDetails() {
	useApi(
		`/api/v1/news/detail?lang=uz&page=1&page_size=8`
	).then(res => {
		data.value = res.data.data
		newsData.value = res.data.extra
	})
}
</script>