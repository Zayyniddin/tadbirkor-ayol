<template>
	<div class="w-full f-container mx-auto mt-20 mb-10">
		<div class="w-full flex items-center gap-2">
			<Icon
				@click="router.go(-1)"
				class="w-8 h-8 hover:text-green-500 transition cursor-pointer"
				name="material-symbols:arrow-back-ios-new-rounded"
			/>
			<h1
				class="text-4xl flex items-center gap-6 font-bold max-w-lg flex-1 leading-[125%]"
			>
				Xizmat ko’rsatish
				<CustomIcon name="icon-logo-bozor" style="height: 60px; width: 100px" />
			</h1>
		</div>
		<div class="w-full my-8 flex justify-between items-end gap-3">
			<div class="flex items-center gap-6">
				<!-- Region -->
				<div class="flex relative gap-2 flex-col items-start">
					<p class="text-base font-medium">Viloyat</p>
					<el-select
						v-model="region_id"
						placeholder="Viloyat"
						size="large"
						clearable
						style="width: 240px"
						@change="
							district_id = '';
							refreshData()
						"
					>
						<el-option
							v-for="item in regions"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</div>

				<!-- District -->
				<div class="flex relative gap-2 flex-col items-start">
					<p class="text-base font-medium">Tumani</p>
					<el-select
						v-model="district_id"
						placeholder="Tuman"
						clearable
						size="large"
						style="width: 240px"
						:disabled="!region_id"
						@change="refreshData"
					>
						<el-option
							v-for="item in districtList"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</div>
			</div>

			<!-- Search -->
			<div class="flex relative items-center">
				<icon-search class="absolute left-14 z-10" />
				<el-input
					v-model="name"
					class="custom-input pl-10"
					size="large"
					placeholder="Qidirish"
					@input="handleSearch"
				/>
			</div>
		</div>

		<div class="flex items-center flex-wrap gap-4 gap-y-10">
			<div
				v-if="!loading && data.length === 0"
				class="w-full text-center text-gray-500 text-xl my-10"
			>
				Mahsulot topilmadi
			</div>
			<a
				:href="`https://online-bozor.uz/ads/${item.id}`"
				target="_blank"
				v-for="item in data"
				:key="item.id"
				class="max-w-[285px] w-full rounded-xl relative group cursor-pointer"
			>
				<img
					class="object-contain mb-4 bg-slate-50 h-[200px] w-[280px]"
					:src="`https://api.online-bozor.uz/uploads/images/${item.main_photo}`"
					alt=""
				/>
				<img
					v-if="item.is_top"
					class="w-8 h-8 absolute top-0 left-3"
					src="@/assets/images/icon-top.png"
					alt=""
				/>
				<div class="flex flex-col gap-3">
					<p
						class="text-gray-800 text-sm font-semibold transition-all duration-300 group-hover:text-green-500"
					>
						{{ item.name }}
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

		<div class="w-full flex justify-center mt-10" v-if="data.length">
			<el-button
				class="!bg-green-500 !text-white !border-none"
				@click="loadMore"
				:loading="loading"
			>
				Yana yuklash
			</el-button>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'main-layout',
})

const router = useRouter()
const dictionaryStore = useDictionaryStore()
const { regions } = storeToRefs(dictionaryStore)

const region_id = ref('')
const district_id = ref('')
const name = ref('')
const data = ref([])
const page = ref(1)
const loading = ref(false)

const districtList = computed(() => {
	if (!region_id.value) return []
	const region = regions.value.find(r => r.id === region_id.value)
	return region ? region.districts : []
})

watch([region_id, district_id], () => {
	resetAndFetch()
})

function resetAndFetch() {
	page.value = 1
	data.value = []
	getData()
}
function refreshData() {
	page.value = 1
	getData()
}

async function getData() {
	if (loading.value) return
	loading.value = true
	try {
		const query = new URLSearchParams()
		query.append('page_size', 12)
		query.append('page', page.value)
		if (region_id.value) query.append('region_id', region_id.value)
		if (district_id.value) query.append('district_id', district_id.value)
		if (name.value.length >= 3) query.append('name', name.value)

		const res = await useApi(
			`/api/v1/online-bozor/products?${query.toString()}`
		)
		if (page.value === 1) {
			data.value = res.data
		} else {
			data.value.push(...res.data)
		}
	} finally {
		loading.value = false
	}
}

function loadMore() {
	page.value++
	getData()
}
function useDebounce(fn, delay = 300) {
	let timeout
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

const searchDebounce = useDebounce(() => {
	if (name.value.length >= 3 || name.value.length === 0) {
		resetAndFetch()
	}
}, 400)

watch(name, () => {
	searchDebounce()
})

onMounted(() => {
	getData()
})
</script>
