<template>
	<section class="w-full flex bg-white py-6">
		<div class="f-container mx-auto px-2 flex flex-col gap-16">
			<div class="w-full flex items-center justify-between">
				<h1 class="text-4xl font-bold max-w-[400px] leading-[125%]">
					Biznes marketing va huquqiy maslahatlar
				</h1>
				<button class="flex items-center text-green-500 gap-1">
					Barchasi
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
				</button>
			</div>
			<div class="w-full grid grid-cols-3 gap-6 justify-between">
				<ConsultVideoCard v-for="(item, i) in news" :key="i" :data="item" />
			</div>
			<div class="demo-collapse">
				<h2 class="text-4xl max-w-[400px] font-bold mb-4">
					Tez-tez beriladigan savollar
				</h2>
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item
						title="Imtiyozli kredit mablag‘I olish tartibi qanday?"
						name="1"
						:icon="CaretRight"
					>
						<div>
							Oilakredit.uz platformasi orqali ariza beriladi skoringdan
							taxlildan o‘tadi, hokimyordamchi faoliyat joyiga chiqqan holda
							o‘rganib tavasiyanoma beriladi, bank kredit shartnoma
							rasmiylashtiriladi kredit berishga, maxsulot sotib olish uchun
							taminotchi korxona bilan shartnoma tuziladi, maxsulot sotib
							olinganligi to‘ g‘risida hokimyordamchi tomonidan maxsadli
							dalolatnoma tuziladi va bank tomonidan kredit mablag‘I ajratiladi.
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Imtiyozli kredit mablag‘I qancha muddatga va yechi foizdan beriladi?"
						name="2"
					>
						<template #icon="{ isActive }">
							<span class="icon-ele">
								{{ isActive ? 'Expanded' : 'Collapsed' }}
							</span>
						</template>
						<div>
							Kredit muddati 84 oygach imtiyozli davri 36 oy kredit foiz 17.5%
							ajratiladi
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Kredit mablag’I nechi pulgacha  ajratiladi?"
						name="3"
					>
						<div>
							Jismoniy shaxslarga 33 mln so‘m yuridik shaxslarga hokimyordamchi
							orqali 300 mln so‘mgacha ajratiladi.
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Yuridik korxona ochish uchun ishni qayerdan boshlashim kerak?"
						name="4"
					>
						<div>
							Davlat xizmatlari markazi orqali faoliyat yuritish uchun guvohnoma
							olinadi.
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Xom-ashyo sotib olish uchun kreditlar necha oygacha ajratiladi?"
						name="5"
					>
						<div>18 oygacha ajratiladi</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hokim yordamchisi tomonidan qarz oluvchining arizasi nechi kun davomida ko‘rib chiqiladi?"
						name="6"
					>
						<div>5 ish kunida davomida ko‘ribchiqiladi</div>
					</el-collapse-item>

					<el-collapse-item
						title="Oilaviy tadbirkorlikni rivojlantirish dasturlari doirasida tadbirkorlik subyektlari (yuridik shaxslar) kredit olishda loyixada kamida qancha ulushi bilan qatnashadi?"
						name="7"
					>
						<div>Kredit oluvchi kamida 30% o ‘zini ulishi bo’ladi.</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hamroh krediti kimlarga kredit ajratiladi?"
						name="8"
					>
						<div>
							Ta’sischilar tarkibida ayollar ulushi 50 foiz va undan yuqori yoki
							ayollar rahbarligida bo‘lgan kichik va o‘rta tadbirkorlik
							subyektlari (Yuridik shaxs maqomiga ega va yuridik shaxs maqomiga
							ega bo‘lmagan tadbirkorlik subyektlari)
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hamroh krediti qanchagacha ajratiladi?"
						name="9"
					>
						<div>
							kamida 2 ta yangi ish o‘rni yaratiladigan bitta loyihaga bazaviy
							hisoblash miqdorining 1 000 barobarigacha (bunda, yangi tashkil
							etilgan tadbirkorlik subyektlari ham inobatga olinadi) va kamida 5
							ta yangi ish o‘rni yaratiladigan bitta loyihaga bazaviy hisoblash
							miqdorining 4 000 barobarigacha (bunda, kamida 6 oy mobaynida
							faoliyat yuritayotgan hamda oxirgi olti oyda hisobraqamida pul
							aylanmasi amalga oshirilgan bo‘lishi kerak)
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hamroh kredit muddati nechi oyga ajratiladi?"
						name="10"
					>
						<div>
							Loyiha o‘zini o‘zi qoplash davridan kelib chiqib - 84 oygacha
							(aylanma mablag‘larni to‘ldirish uchun - 24 oygacha) imtiyozli
							davri 24 oygacha (aylanma mablag‘larni to‘ldirish uchun 6 oygacha)
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hamroh krediti yillik nechi faoizdan ajratiladi?"
						name="11"
					>
						<div>
							Asosiy vosita sotib olish uchun: yillik 20% Aylanma mablag‘larni
							to‘ldirish uchun: yillik 21%
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="Hamroh krediti qasi shakilda ajratiladimi?"
						name="12"
					>
						<div>
							Pul o‘tkazish yoʻli bilan va qisman naqd pulda ajratiladi (Bunda,
							ajratilayotgan kredit summasining 15 foizgacha qismi naqd pul
							ko‘rinishida ajratilishi mumkin)
						</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<ConsultQuestionnaireForm />
		</div>
	</section>
</template>

<script setup>
const news = ref([])
const filter = reactive({
	page: 1,
	page_size: 9,
	total: 0,
})

// const activeNames = ref(['1'])

async function getNews() {
	try {
		const res = await useApi(
			`https://tadbirkor-ayol.uz/services/platon-core/api/v1/video/instructions?lang=uz&page=${filter.page}&page_size=6`
		)

		news.value = [...news.value, ...res.data.data]
		filter.total = res.data.total
	} catch (error) {}
}

onMounted(() => {
	getNews()
})
</script>

<style scoped>
.icon-ele {
	margin: 0 8px 0 auto;
	color: #409eff;
}
</style>
