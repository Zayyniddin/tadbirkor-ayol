<template>
	<div class="w-full mt-12">
		<div class="f-container mx-auto flex flex-col gap-8">
			<div class='flex items-center justify-between'>
				<p class="text-4xl font-semibold">Ish o'rinlari</p>
				<div class="flex relative gap-2 items-start">
					<icon-search class="absolute left-4 top-2 z-10" />
					<el-input
						v-model="name"
						class="custom-input"
						size="large"
						placeholder="Qidirish"
						@input="handleSearch"
					/>
				</div>
			</div>
			<div class="w-full flex justify-between items-center gap-3">
				<div class="flex items-center gap-6">
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
				<div class="flex relative gap-2 flex-col items-start w-[280px]">
					<p class="text-base font-medium">Maosh (so'm)</p>
					<el-slider
						v-model="salaryRange"
						range
						:min="0"
						:max="10000000"
						:step="50000"
						@change="refreshData"
					/>
					<div class="flex justify-between w-full text-sm text-gray-700">
						<span>{{ salaryRange[0].toLocaleString() }} so'm</span>
						<span>{{ salaryRange[1].toLocaleString() }} so'm</span>
					</div>
				</div>
			</div>
			<div
				v-if="!loading && data.length === 0"
				class="w-full text-center text-gray-500 text-xl mt-10"
			>
				Ma'lumot topilmadi
			</div>
			<div class="w-full grid grid-cols-3 gap-5">
				<nuxt-link
					v-for="item in data"
					:key="item.id"
					:to="`/freejobs/${item.id}`"
				>
					<JobsCard :data="item" />
				</nuxt-link>
			</div>
			<div v-if="data.length > 0" class="flex justify-center items-center">
				<el-button
					class="!bg-green-500 !text-white !border-none"
					@click="loadMore"
					:loading="loading"
				>
					Yana yuklash
				</el-button>
			</div>
		</div>
	</div>
</template>

<script setup>
const dictionaryStore = useDictionaryStore()
const { regions } = storeToRefs(dictionaryStore)
const region_id = ref('')
const district_id = ref('')
const name = ref('')
const page = ref(1)
const loading = ref(false)
const salaryRange = ref([0, 10000000]) // по умолчанию весь диапазон
const { locale } = useI18n()
const filter = reactive({
	page: 1,
	page_size: 6,
	total: 0,
})
const data = ref([])

const districtList = computed(() => {
	if (!region_id.value) return []
	const region = regions.value.find(r => r.id === region_id.value)
	return region ? region.districts : []
})

watch([region_id, district_id], () => {
	resetAndFetch()
})

onMounted(() => {
	getData()
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
		query.append('page_size', 6)
		query.append('page', page.value)
		if (region_id.value) query.append('region_id', region_id.value)
		if (district_id.value) query.append('district_id', district_id.value)
		if (name.value.length >= 3) query.append('name', name.value)
		if (salaryRange.value[0]) query.append('from_price', salaryRange.value[0])
		if (salaryRange.value[1]) query.append('to_price', salaryRange.value[1])

		const res = await useApi(`/api/v1/women/vacancies?${query.toString()}`)
		if (page.value === 1) {
			data.value = res.data.data
		} else {
			data.value.push(...res.data.data)
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
