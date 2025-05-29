<template>
	<div class="w-full">
		<div class="f-container mx-auto pt-20 pb-8">
			<div class="flex items-center gap-5">
				<img
					:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${data.image}`"
					class="w-[450px] h-[300px] rounded-xl"
					alt="pomegranate"
				/>
				<div class="max-w-[500px] w-full">
					<p class="text-xl font-semibold">
						{{ data.name }}
					</p>
					<p>
						Kredit miqdori:
						<span class="text-green-500"
							>{{ priceFilter(data.credit_price) }} so'm</span
						>
					</p>
					<div class="bg-gray-50 p-2 rounded-xl mt-4">
						<p class="mb-4">Kredit mablag'larini ishlarilishi</p>
						<div class="flex flex-col gap-2">
							<div
								v-for="item in data.plans"
								:key="item.id"
								class="flex items-center justify-between"
							>
								<p>{{ item.name }}:</p>
								<p>{{ priceFilter(item.price) }} so'm</p>
							</div>
							<div class="flex items-center justify-between">
								<p class="text-green-500">Jami:</p>
								<p class="text-green-500">
									{{ priceFilter(data.credit_price) }} so'm
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex w-full items-center gap-4 mt-20 justify-between">
				<div class="max-w-[400px] w-full overflow-hidden rounded-lg">
					<p class="bg-green-500 text-white text-center p-2">Daromad</p>
					<div class="bg-gray-50 p-4">
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
							<p>{{ priceFilter(data.annual_income) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
							<p>{{ priceFilter(data.monthly_income) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
							<p>{{ priceFilter(data.daily_income) }} so'm</p>
						</div>
					</div>
				</div>

				<div class="max-w-[400px] w-full overflow-hidden rounded-xl">
					<p class="bg-green-500 text-white text-center p-2">Kredit to'lovi</p>
					<div class="bg-gray-50 p-4">
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
							<p>{{ priceFilter(data.annual_credit) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
							<p>{{ priceFilter(data.monthly_credit) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
							<p>{{ priceFilter(data.daily_credit) }} so'm</p>
						</div>
					</div>
				</div>

				<div class="max-w-[400px] w-full overflow-hidden rounded-xl">
					<p class="bg-green-500 text-white text-center p-2">Sof foyda</p>
					<div class="bg-gray-50 p-4">
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
							<p>{{ priceFilter(data.annual_profit) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
							<p>{{ priceFilter(data.monthly_profit) }} so'm</p>
						</div>
						<div>
							<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
							<p>{{ priceFilter(data.daily_profit) }} so'm</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full f-container mx-auto flex justify-end">
			<button
				class="rounded-xl text-sm bg-green-500 p-2 text-white"
				@click="DownloadPdf"
			>
				Yuklab olish
			</button>
		</div>

		<HomeCreaditCalculator id="creditcalculator" :showtitle="false" />

		<div class="hidden">
			<v-pdf ref="pdfFilePlan" :options="pdfOptions" :filename="exportFilename">
				<div
					class="w-full flex justify-between items-end gap-4 mb-4 border-b pb-3"
				>
					<img class="h-8" :src="ShortLogo" />
					<h1 class="font-bold text-sm mb-4 text-center uppercase">
						Biznes reja
					</h1>
					<QRCodeVue3
						:width="70"
						:height="70"
						value="https://test.worknet.uz/#creditcalculator"
						:image="ShortLogo"
						:dotsOptions="{ type: 'dots', color: '#000' }"
					/>
				</div>
				<div class="f-container mx-auto py-4">
					<div class="flex items-start gap-5">
						<img
							:src="PlanImage"
							class="w-[350px] h-[250px] rounded-xl"
							alt="pomegranate"
						/>
						<div class="max-w-[500px] w-full">
							<p class="text-xl font-semibold">
								{{ data.name }}
							</p>
							<p>
								Kredit miqdori:
								<span class="text-green-500"
									>{{ priceFilter(data.credit_price) }} so'm</span
								>
							</p>
							<div class="bg-gray-50 p-2 rounded-xl mt-4">
								<p class="mb-4">Kredit mablag'larini ishlarilishi</p>
								<div class="flex flex-col gap-2">
									<div
										v-for="item in data.plans"
										:key="item.id"
										class="flex items-center justify-between"
									>
										<p class="text-xs">{{ item.name }}:</p>
										<p class="text-sm">{{ priceFilter(item.price) }} so'm</p>
									</div>
									<div class="flex items-center justify-between">
										<p class="text-green-500 text-sm">Jami:</p>
										<p class="text-green-500 text-sm">
											{{ priceFilter(data.credit_price) }} so'm
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex w-full items-center gap-4 mt-20 justify-between">
						<div class="max-w-[400px] w-full overflow-hidden rounded-lg">
							<p class="bg-green-500 text-white text-center p-2">Daromad</p>
							<div class="bg-gray-50 p-4">
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
									<p>{{ priceFilter(data.annual_income) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
									<p>{{ priceFilter(data.monthly_income) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
									<p>{{ priceFilter(data.daily_income) }} so'm</p>
								</div>
							</div>
						</div>

						<div class="max-w-[400px] w-full overflow-hidden rounded-xl">
							<p class="bg-green-500 text-white text-center p-2">
								Kredit to'lovi
							</p>
							<div class="bg-gray-50 p-4">
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
									<p>{{ priceFilter(data.annual_credit) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
									<p>{{ priceFilter(data.monthly_credit) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
									<p>{{ priceFilter(data.daily_credit) }} so'm</p>
								</div>
							</div>
						</div>

						<div class="max-w-[400px] w-full overflow-hidden rounded-xl">
							<p class="bg-green-500 text-white text-center p-2">Sof foyda</p>
							<div class="bg-gray-50 p-4">
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Yilik</p>
									<p>{{ priceFilter(data.annual_profit) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Oylik</p>
									<p>{{ priceFilter(data.monthly_profit) }} so'm</p>
								</div>
								<div>
									<p class="text-xs text-gray-400 mb-1">1 Kunlik</p>
									<p>{{ priceFilter(data.daily_profit) }} so'm</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="f-full flex justify-between gap-4 mt-64">
					<div class="w-[50%]">
						<img class="h-8 mb-2" :src="ShortLogo" />
						<p class="text-xs mb-2">{{ $t('about_system') }}</p>
					</div>
					<QRCodeVue3
						:width="70"
						:height="70"
						value="https://test.worknet.uz/#creditcalculator"
						:image="ShortLogo"
						:dotsOptions="{ type: 'dots', color: '#000' }"
					/>
				</div>
			</v-pdf>
		</div>
	</div>
</template>

<script setup>
import ShortLogo from '@/assets/images/logo-bw.png'
import QRCodeVue3 from 'qrcode-vue3'
definePageMeta({
	layout: 'main-layout',
})

const route = useRoute()
const PlanImage = ref(null)
const data = ref([])
const pdfFilePlan = ref(null)
const pdfOptions = {
	margin: 10,
	image: {
		type: 'jpeg',
		quality: 1,
	},
	html2canvas: { scale: 3 },
	jsPDF: {
		unit: 'mm',
		format: 'a4',
		orientation: 'p',
	},
}
const exportFilename = 'TadbirkorAyolPlan.pdf'

onMounted(() => {
	getDetails()
})

function blobToBase64(blob) {
	return new Promise((resolve, _) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.readAsDataURL(blob)
	})
}

function getDetails() {
	useApi(`/api/v1/bussness/plan/detail?plan_id=${route.params.id}`).then(
		res => {
			data.value = res.data
			GetPlanImg(res.data.image)
		}
	)
}
function GetPlanImg(id) {
	if (id && id != undefined) {
		$fetch(`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${id}`)
			.then(async res => {
				console.log(res)
				let base64Image = await blobToBase64(res)
				PlanImage.value = base64Image
			})
			.catch(e => {
				console.log(e)
			})
	}
}

function DownloadPdf() {
	pdfFilePlan.value.download()
}
</script>
