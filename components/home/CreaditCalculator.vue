<template>
	<section class="w-full flex justify-center py-8 px-3 bg-white">
		<div class="f-container rounded-xl w-full">
			<h1 class="text-4xl font-bold text-left mb-4" v-if="props.showtitle">
				{{ $t('credit.calculator') }}
			</h1>
			<div class="bg-gray-50 p-4">
				<div class="flex items-center gap-4 mb-8">
					<div class="flex items-center gap-2">
						<button
							class="px-3 py-2 text-xs font-bold whitespace-nowrap rounded-xl"
							:class="
								CreditDetails.type == 'ANNUITET'
									? 'bg-purple-600 text-white'
									: 'bg-gray-200  text-gray-700'
							"
							@click="CreditDetails.type = 'ANNUITET'"
						>
							{{ $t('credit.annuitet') }}
						</button>
						<button
							class="px-3 py-2 text-xs font-bold whitespace-nowrap rounded-xl"
							:class="
								CreditDetails.type == 'DIFFERENSIAL'
									? 'bg-purple-600 text-white'
									: 'bg-gray-200  text-gray-700'
							"
							@click="CreditDetails.type = 'DIFFERENSIAL'"
						>
							{{ $t('credit.differensial') }}
						</button>
					</div>
					<div class="flex-1 border-b"></div>
				</div>
				<div class="flex items-stretch gap-16 max-md:flex-col">
					<div class="flex-1">
						<div class="w-full mb-6">
							<div class="flex mb-1 gap-2">
								<p class="text-sm">{{ $t('credit.credit_amount') }}</p>
								<div class="flex-1">
									<UiCreditInput
										v-model="cal.amount"
										:label="$t('main.sum')"
										:min="CreditDetails.min_amount"
										:max="CreditDetails.max_amount"
									/>
								</div>
							</div>
							<el-slider
								v-model="cal.amount"
								:min="CreditDetails.min_amount"
								:max="CreditDetails.max_amount"
							/>
							<div class="w-full flex justify-between">
								<p class="text-xs text-gray-400">
									{{
										$t('main.from_sum', {
											amount: priceFilter(CreditDetails.min_amount),
										})
									}}
								</p>
								<p class="text-xs text-gray-400">
									{{
										$t('main.to_sum', {
											amount: priceFilter(CreditDetails.max_amount),
										})
									}}
								</p>
							</div>
						</div>
						<div class="w-full mb-6">
							<div class="flex mb-1 gap-2">
								<p class="text-sm">{{ $t('credit.credit_prediod') }}</p>
								<div class="flex-1">
									<UiCreditInput
										v-model="cal.month"
										:label="$t('main.month')"
										:min="cal.privilege_month ? cal.privilege_month : 1"
										:max="CreditDetails.max_month"
									/>
								</div>
							</div>
							<el-slider
								v-model="cal.month"
								:min="cal.privilege_month ? cal.privilege_month : 1"
								:max="CreditDetails.max_month"
							/>
							<div class="w-full flex justify-between">
								<p class="text-xs text-gray-400">
									{{
										$t('main.from_month', { amount: CreditDetails.min_month })
									}}
								</p>
								<p class="text-xs text-gray-400">
									{{ $t('main.to_month', { amount: CreditDetails.max_month }) }}
								</p>
							</div>
						</div>
						<div class="w-full mb-6">
							<div class="flex mb-1 gap-2">
								<p class="text-sm">{{ $t('credit.privilege_month') }}</p>
								<div class="flex-1 flex items-center">
									<UiCreditInput
										v-model="cal.privilege_month"
										:label="$t('main.month')"
										:min="CreditDetails.min_privilege_month"
										:max="CreditDetails.max_privilege_month"
									/>
								</div>
							</div>
							<el-slider
								v-model="cal.privilege_month"
								:min="CreditDetails.min_privilege_month"
								:max="CreditDetails.max_privilege_month"
							/>
							<div class="w-full flex justify-between">
								<p class="text-xs text-gray-400">
									{{
										$t('main.from_month', {
											amount: CreditDetails.min_privilege_month,
										})
									}}
								</p>
								<p class="text-xs text-gray-400">
									{{
										$t('main.to_month', {
											amount: CreditDetails.max_privilege_month,
										})
									}}
								</p>
							</div>
						</div>
						<div class="w-full">
							<div class="flex mb-1 gap-2">
								<p class="text-sm">{{ $t('credit.interest_rate') }}</p>
								<div class="flex-1">
									<UiCreditInput
										v-model="cal.procent"
										label="%"
										:min="CreditDetails.min_procent"
										:max="CreditDetails.max_procent"
									/>
								</div>
							</div>
							<el-slider
								v-model="cal.procent"
								:step="0.5"
								:min="CreditDetails.min_procent"
								:max="CreditDetails.max_procent"
							/>
							<div class="w-full flex justify-between">
								<p class="text-xs text-gray-400">
									{{
										$t('main.from_procent', {
											amount: CreditDetails.min_procent,
										})
									}}
								</p>
								<p class="text-xs text-gray-400">
									{{
										$t('main.to_procent', {
											amount: CreditDetails.max_procent,
										})
									}}
								</p>
							</div>
						</div>
					</div>
					<div class="flex-1 flex flex-col justify-between">
						<div>
							<div class="w-full">
								<p class="text-sm mb-1 text-gray-500">
									{{ $t('credit.year_interest_rate') }}
								</p>
								<p class="text-4xl font-extrabold text-gray-700">
									{{ cal.procent }}%
								</p>
							</div>
							<div class="w-full my-8">
								<p class="text-sm mb-1 text-gray-500">
									{{ $t('credit.mid_monthly_price') }}
								</p>
								<p class="text-4xl font-extrabold text-gray-700">
									{{
										CreditDetails.type == 'ANNUITET'
											? priceFilter(PaymentInfo.annuity_price)
											: priceFilter(PaymentInfo.differensial_price)
									}}
									{{ $t('main.sum') }}
								</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div class="flex items-center gap-2">
								<nuxt-link :to="localePath(`/plans`)">
									<button
										class="px-3 py-2.5 bg-[#02C6B8] text-white text-sm whitespace-nowrap rounded-xl flex items-center gap-2"
									>
										{{ $t('credit.submit_request') }}
										<Icon
											name="material-symbols:arrow-forward-ios-rounded"
											class="w-4 h-4 text-white"
										/>
									</button>
								</nuxt-link>

								<button
									class="px-3 py-2.5 bg-black text-white text-sm whitespace-nowrap rounded-xl flex items-center gap-2"
									@click="PaymentInfoModal = true"
								>
									<CustomIcon name="icon-folder" class="w-5 h-5" />{{
										$t('credit.payment_list')
									}}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<UiModal v-model="PaymentInfoModal" class="z-50" max-width="800px">
			<div class="w-full px-4 pb-4 pt-4">
				<div class="flex items-center justify-between gap-4 mb-4">
					<h1 class="font-bold text-sm">{{ $t('credit.payment_list') }}</h1>
					<button
						class="px-2.5 py-2 bg-black text-white text-xs font-bold whitespace-nowrap rounded-xl flex items-center gap-2"
						@click="DownloadPdf()"
					>
						<el-icon> <Calendar /> </el-icon>{{ $t('main.download') }}
					</button>
				</div>
				<div class="w-full scroll default">
					<table class="w-full min-w-[700px]">
						<tr class="border-b">
							<th class="text-xs font-bold whitespace-nowrap p-3">
								{{ $t('credit.num') }}
							</th>
							<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
								{{ $t('main.date') }}
							</th>
							<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
								{{ $t('credit.credit_balance') }}
							</th>
							<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
								{{ $t('credit.loan_repayment_amount') }}
							</th>
							<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
								{{ $t('credit.procent_amount') }}
							</th>
							<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
								{{ $t('credit.total_pay_amount') }}
							</th>
						</tr>
						<tr
							v-for="(item, i) in PaymentInfo.priceList"
							:key="i"
							class="border-b"
						>
							<td class="text-xs p-3">{{ i + 1 }}</td>
							<td class="text-xs p-3">{{ item.pay_date }}</td>
							<td class="text-xs p-3">
								{{ priceFilter(item.credit_balance) }}
							</td>
							<td class="text-xs p-3">{{ priceFilter(item.main_debt) }}</td>
							<td class="text-xs p-3">{{ priceFilter(item.procent_sum) }}</td>
							<td class="text-xs p-3">
								{{
									CreditDetails.type == 'ANNUITET'
										? priceFilter(item.annuity_price)
										: priceFilter(item.differencial_price)
								}}
							</td>
						</tr>
						<tr class="border-b">
							<td class="text-xs p-3 font-bold" colspan="3">
								{{ $t('main.total') }}
							</td>
							<td class="text-xs p-3">
								{{ priceFilter(PaymentInfo.total_main_debt) }}
							</td>
							<td class="text-xs p-3">
								{{ priceFilter(PaymentInfo.total_procent_sum) }}
							</td>
							<td class="text-xs p-3">
								{{ priceFilter(PaymentInfo.total_paymet_sum) }}
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="hidden">
				<v-pdf
					ref="pdfFile"
					v-if="enablePdf"
					:options="pdfOptions"
					:filename="exportFilename"
				>
					<div
						class="f-full flex justify-between items-end gap-4 mb-4 border-b pb-3"
					>
						<img class="h-8" :src="ShortLogo" />
						<h1 class="font-bold text-sm mb-4 text-center uppercase">
							{{ $t('credit.payment_list') }}
						</h1>
						<QRCodeVue3
							:width="70"
							:height="70"
							value="https://test.worknet.uz/#creditcalculator"
							:image="ShortLogo"
							:dotsOptions="{ type: 'dots', color: '#000' }"
						/>
					</div>

					<div class="w-full">
						<table class="w-full">
							<tr class="border-b">
								<th class="text-xs font-bold whitespace-nowrap p-3">
									{{ $t('credit.num') }}
								</th>
								<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
									{{ $t('main.date') }}
								</th>
								<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
									{{ $t('credit.credit_balance') }}
								</th>
								<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
									{{ $t('credit.loan_repayment_amount') }}
								</th>
								<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
									{{ $t('credit.procent_amount') }}
								</th>
								<th class="text-xs font-bold whitespace-nowrap p-3 text-left">
									{{ $t('credit.total_pay_amount') }}
								</th>
							</tr>
							<tr
								v-for="(item, i) in PaymentInfo.priceList"
								:key="i"
								class="border-b"
							>
								<td class="text-xs p-3">{{ i + 1 }}</td>
								<td class="text-xs p-3">{{ item.pay_date }}</td>
								<td class="text-xs p-3">
									{{ priceFilter(item.credit_balance) }}
								</td>
								<td class="text-xs p-3">{{ priceFilter(item.main_debt) }}</td>
								<td class="text-xs p-3">{{ priceFilter(item.procent_sum) }}</td>
								<td class="text-xs p-3">
									{{
										CreditDetails.type == 'ANNUITET'
											? priceFilter(item.annuity_price)
											: priceFilter(item.differencial_price)
									}}
								</td>
							</tr>
							<tr class="border-b">
								<td class="text-xs p-3 font-bold" colspan="3">
									{{ $t('main.total') }}
								</td>
								<td class="text-xs p-3">
									{{ priceFilter(PaymentInfo.total_main_debt) }}
								</td>
								<td class="text-xs p-3">
									{{ priceFilter(PaymentInfo.total_procent_sum) }}
								</td>
								<td class="text-xs p-3">
									{{ priceFilter(PaymentInfo.total_paymet_sum) }}
								</td>
							</tr>
						</table>
					</div>
					<div class="f-full flex justify-between gap-4 mb-4 py-3 mt-8">
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
		</UiModal>
	</section>
</template>
<script setup>
import moment from 'moment'

// LANG
const localePath = useLocalePath()

// ICONS
import ShortLogo from '@/assets/images/logo-bw.png'
import { Calendar } from '@element-plus/icons-vue'
import QRCodeVue3 from 'qrcode-vue3'
// DATA
const cal = ref({
	amount: 100000000,
	month: 36,
	privilege_month: 6,
	procent: 17.5,
})
const enablePdf = ref(false)

const CreditPrice = ref('')
const CreditDetails = reactive({
	max_amount: 5000000000,
	min_amount: 1000000,
	max_month: 240,
	min_month: 1,
	max_privilege_month: 36,
	min_privilege_month: 0,
	max_procent: 30,
	min_procent: 10,
	type: 'ANNUITET',
	user_type: 'PHYSICAL',
})
const PaymentInfoModal = ref(false)
const props = defineProps({
	showtitle: {
		type: Boolean,
		default: true,
	},
})
// PDF DATA
const pdfFile = ref(null)
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
const exportFilename = 'JadvalTadbirkorAyol.pdf'

// COMPUTED
const PaymentInfo = computed(() => {
	let data = {
		annuity_price: 0,
		differensial_price: 0,
		priceList: [],
		total_procent_sum: 0,
		total_paymet_sum: 0,
		total_main_debt: 0,
	}
	let TotalAmount = cal.value.amount
	let YearProcent = cal.value.procent / 100 / 12
	let TotalMonth = cal.value.month
	let PrivilegeMonth = cal.value.privilege_month
	let CreditMonths = TotalMonth - PrivilegeMonth
	let MonthlyPrice = TotalAmount / CreditMonths

	let next_date = new Date()
	next_date = new Date(next_date.setMonth(next_date.getMonth() + 1))
	next_date = new Date(next_date.setHours(0, 0, 0, 0))
	next_date = new Date(next_date.setDate(5))

	if (TotalAmount && YearProcent && TotalMonth) {
		const Annuity =
			(YearProcent / (1 - Math.pow(YearProcent + 1, -CreditMonths))) *
			TotalAmount
		const PrivilegePrice = Math.round(TotalAmount * YearProcent * 100) / 100
		data.annuity_price = Math.round(Annuity * 100) / 100
		if (PrivilegeMonth) {
			for (let i = 1; i <= PrivilegeMonth; i++) {
				data.priceList.push({
					annuity_price: PrivilegePrice,
					differencial_price: PrivilegePrice,
					main_debt: 0,
					procent_sum: PrivilegePrice,
					credit_balance: TotalAmount,
					pay_date: moment(next_date).format('DD.MM.YYYY'),
				})
				data.differensial_price = data.differensial_price + PrivilegePrice
				data.total_procent_sum = data.total_procent_sum + PrivilegePrice
				next_date = new Date(next_date.setMonth(next_date.getMonth() + 1))
			}
		}
		for (let i = 1; i <= CreditMonths; i++) {
			let main_debt = 0
			if (CreditDetails.type == 'ANNUITET') {
				main_debt =
					data.annuity_price - Math.round(TotalAmount * YearProcent * 100) / 100
				data.total_procent_sum =
					data.total_procent_sum +
					Math.round(TotalAmount * YearProcent * 100) / 100
				data.total_main_debt = data.total_main_debt + main_debt
				data.total_paymet_sum = data.total_paymet_sum + data.annuity_price
			} else {
				main_debt =
					Math.round((MonthlyPrice + TotalAmount * YearProcent) * 100) / 100
				data.total_procent_sum =
					data.total_procent_sum +
					Math.round((MonthlyPrice + TotalAmount * YearProcent) * 100) / 100
				data.total_main_debt = data.total_main_debt + main_debt
				data.total_paymet_sum =
					data.total_paymet_sum +
					Math.round((MonthlyPrice + TotalAmount * YearProcent) * 100) / 100
			}
			data.priceList.push({
				annuity_price: data.annuity_price,
				differencial_price:
					Math.round((MonthlyPrice + TotalAmount * YearProcent) * 100) / 100,
				main_debt: Math.round(main_debt * 100) / 100,
				procent_sum: Math.round(TotalAmount * YearProcent * 100) / 100,
				credit_balance: Math.round(TotalAmount * 100) / 100,
				pay_date: moment(next_date).format('DD.MM.YYYY'),
			})
			data.differensial_price =
				data.differensial_price +
				Math.round((MonthlyPrice + TotalAmount * YearProcent) * 100) / 100

			TotalAmount = TotalAmount - MonthlyPrice
			next_date = new Date(next_date.setMonth(next_date.getMonth() + 1))
		}
		data.differensial_price =
			Math.round((data.differensial_price * 100) / TotalMonth) / 100
		data.total_paymet_sum = Math.round(data.total_paymet_sum * 100) / 100
		data.total_main_debt = Math.round(data.total_main_debt * 100) / 100
		data.total_procent_sum = Math.round(data.total_procent_sum * 100) / 100
	}
	return data
})

// WATCH
watch(
	() => cal.value.amount,
	() => {
		CreditPrice.value = priceFilter(cal.value.amount)
	}
)

// METHODS
async function DownloadPdf() {
	enablePdf.value = true
	await nextTick()
	await pdfFile.value.download()
	enablePdf.value = false
}

// ACTION
onMounted(() => {
	CreditPrice.value = priceFilter(cal.value.amount)
})
</script>
