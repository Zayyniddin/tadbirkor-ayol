<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div class="f-container">
                <div class="w-full bg-green-600 p-4 rounded-xl mb-10">
                    <h1 class="text-xl font-bold text-center text-white uppercase">{{ $t('about.busness_plan') }}</h1>
                </div>
                <div v-if="PlanInfo && PlanInfo.id" class="w-full">
                    <div class="w-full flex items-center gap-8 mb-10 max-md:flex-col">
                        <div v-if="PlanInfo.image" class="w-[500px] max-md:w-full">
                            <Photo class=" h-full rounded-xl " :uid="PlanInfo.image" />
                        </div>
                        <div class="flex-1">
                            <h1 class="text-2xl font-extrabold text-gray-700 mb-4">{{ PlanInfo.name }}</h1>
                            <p class=" text-gray-500 text-base mb-4">{{ $t('credit.credit_amount') }}: <span
                                    class="text-purple-500  font-extrabold text-xl ">{{
                                        priceFilter(PlanInfo.credit_price) }} {{ $t('main.sum') }}</span></p>

                            <div class="w-full p-3  bg-gray-50 rounded-xl">
                                <p class="text-base font-bold mb-2">{{ $t('credit.credit_spending') }}</p>
                                <table class="w-full font-normal text-base mb-3 max-md:text-sm">
                                    <tr v-for="(item, i) in PlanInfo.plans" :key="i">
                                        <td class="py-0.5 text-gray-500">{{ item.name }}:</td>
                                        <td class="pl-2 py-1 text-gray-700 font-bold">{{ priceFilter(item.price) }} {{ $t('main.sum') }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-0.5 text-purple-500 font-bold">{{ $t('main.total') }}:</td>
                                        <td class="pl-2 py-0.5 text-purple-500 font-bold">{{
                                            priceFilter(PlanInfo.credit_price) }} {{ $t('main.sum') }}</td>
                                    </tr>
                                </table>
                                <p class="text-sm font-medium text-gray-600 max-md:text-xs max-md:text-center" v-html="$t('credit.get_credit_linkes')"></p>

                            </div>

                        </div>
                    </div>
                    <div class="grid grid-cols-11 gap-4 mb-10 max-md:grid-cols-3">
                        <div class="col-span-3 bg-gray-50 rounded-xl">
                            <div
                                class="w-full px-4 py-3 bg-green-600 rounded-xl text-sm font-bold text-white text-center">
                                {{ $t('main.income') }}
                            </div>
                            <div class="w-full p-4">
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.annual_income) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.monthly_income) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.daily_income) }} {{ $t('main.sum') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 flex items-center justify-center max-md:hidden ">
                            <div
                                class="w-16 h-16 flex items-center justify-center p-1 bg-gray-50 rounded-full text-xl font-bold text-green-600">
                                <el-icon>
                                    <Right />
                                </el-icon>
                            </div>
                        </div>
                        <div class="col-span-3 bg-gray-50 rounded-xl">
                            <div
                                class="w-full px-4 py-3 bg-green-600 rounded-xl text-sm font-bold text-white text-center">
                                {{ $t('credit.credit_payment') }}
                            </div>
                            <div class="w-full p-4">
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.annual_credit) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.monthly_credit) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.daily_credit) }} {{ $t('main.sum') }}</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-span-1 flex items-center justify-center max-md:hidden ">
                            <div
                                class="w-16 h-16 flex items-center justify-center p-1 bg-gray-50 rounded-full text-xl font-bold text-green-600">
                                <el-icon>
                                    <Right />
                                </el-icon>
                            </div>
                        </div>
                        <div class="col-span-3 bg-gray-50 rounded-xl">
                            <div
                                class="w-full px-4 py-3 bg-green-600 rounded-xl text-sm font-bold text-white text-center">
                                {{ $t('credit.annual_profit') }}
                            </div>
                            <div class="w-full p-4">
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.annual_profit) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.monthly_profit) }} {{ $t('main.sum') }}</p>
                                </div>
                                <div class="mb-2">
                                    <p class="text-sm mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                    <p class="font-bold text-gray-700 text-xl">{{ priceFilter(PlanInfo.daily_profit) }} {{ $t('main.sum') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="w-full flex justify-end gap-2 bg-gray-50 p-3 rounded-xl mb-10 max-md:justify-center">
                        <button
                            class="px-3 py-2.5 bg-black text-white text-xs font-bold rounded-xl flex items-center gap-2"
                            @click="DownloadPlan()"><el-icon>
                                <Download />
                            </el-icon>{{ $t('main.download') }}</button>
                        <a href="https://cabinet.loyihalar-fabrikasi.uz/auth/login" target="_blank">
                            <button
                                class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2"><el-icon>
                                    <Pointer />
                                </el-icon>{{ $t('credit.submit_request') }}</button>
                        </a>
                    </div>
                    <UiCreaditCalculator :amount="PlanInfo.credit_price" class="mb-8" />
                    <!-- <ProductSmProducts :id="504785" /> -->
                    <!-- <AdverList amount="2" type="SECONDBANNER" /> -->
                </div>
                <div v-if="PlanInfo && PlanInfo.id" class="w-full hidden min-w-[1000px]">
                    <v-pdf ref="planPdf" index="2" :options="pdfOptions" :filename="exportFilename"> 
                        <div class="w-full flex flex-col justify-between min-h-[1040px]">
                            <div class="w-full">
                                <div class="f-full flex justify-between items-end gap-4 mb-6 border-b pb-3">
                                    <!-- <img class="h-8" src="@/assets/images/logo.png" /> -->
                                    <QRCodeVue3 :width="70" :height="70"
                                    :value="`https://test.worknet.uz/plans/${PlanInfo.id}`" :image="ShortLogo"
                                        :dotsOptions="{ type: 'dots', color: '#000' }" />
                                </div>
                                <h1 class="text-xl font-extrabold text-gray-700  mb-10 text-center">{{ PlanInfo.name }}
                                </h1>
                                <div class="w-full flex items-center gap-6 mb-10">
                                    <div v-if="PlanImage" class="w-[320px] h-[220px]">
                                        <img :src="PlanImage" class="w-full h-full object-cover rounded-xl" alt="AAA" />
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-gray-500 text-base mb-8">{{ $t('credit.credit_amount') }}: <span
                                                class="text-purple-500  font-extrabold text-xl ">{{
                                                    priceFilter(PlanInfo.credit_price) }} {{ $t('main.sum') }}</span></p>

                                        <div class="w-full p-3  bg-gray-50 rounded-xl">
                                            <p class="text-sm font-bold mb-2">{{ $t('credit.credit_spending') }}</p>
                                            <table class="w-full font-normal text-xs mt-2">
                                                <tr v-for="(item, i) in PlanInfo.plans" :key="i">
                                                    <td class="py-0.5 text-gray-500">{{ item.name }}:</td>
                                                    <td class="pl-2 py-1 text-gray-700 font-bold">{{
                                                        priceFilter(item.price) }}
                                                        {{ $t('main.sum') }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-0.5 text-purple-500 font-bold">{{ $t('main.total') }}:</td>
                                                    <td class="pl-2 py-0.5 text-purple-500 font-bold">{{
                                                        priceFilter(PlanInfo.credit_price) }} {{ $t('main.sum') }}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-4 mb-8">
                                    <div class="col-span-1 bg-gray-50 rounded-xl">
                                        <div class="bg-green-600 rounded-xl h-10 flex justify-center p-1  ">
                                            <span class="text-xs font-bold text-white">{{ $t('main.income') }}</span>
                                        </div>
                                        <div class="w-full p-4">
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{
                                                    priceFilter(PlanInfo.annual_income) }} {{ $t('main.sum') }}
                                                    </p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.monthly_income) }} {{ $t('main.sum') }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.daily_income) }} {{ $t('main.sum') }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-1 bg-gray-50 rounded-xl">
                                        <div class="bg-green-600 rounded-xl h-10 flex justify-center p-1  ">
                                            <span class="text-xs font-bold text-white">{{ $t('credit.credit_payment') }}</span>
                                        </div>
                                        <div class="w-full p-4">
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.annual_credit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.monthly_credit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.daily_credit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-span-1 bg-gray-50 rounded-xl">
                                        <div class="bg-green-600 rounded-xl h-10 flex justify-center p-1  ">
                                            <span class="text-xs font-bold text-white">{{ $t('credit.annual_profit') }}</span>
                                        </div>
                                        <div class="w-full p-4">
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.yearly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.annual_profit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.monthly') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.monthly_profit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                            <div class="mb-2">
                                                <p class="text-xs mb-1 font-medium text-gray-500">1 {{ $t('main.daily') }}</p>
                                                <p class="font-bold text-gray-700 text-sm">{{ priceFilter(PlanInfo.daily_profit) }} {{ $t('main.sum') }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm font-medium text-gray-600 mb-8 text-center" v-html="$t('credit.get_credit_linkes')"></p>
                            </div>

                            <div class="f-full flex justify-between gap-4 mb-4 py-3 border-t">
                                <div class="w-[50%]">
                                    <!-- <img class="h-8 mb-2" src="@/assets/images/logo.png" /> -->
                                    <p class="text-xs mb-2">{{ $t('about_system') }}</p>
                                </div>
                                <QRCodeVue3 :width="70" :height="70" :value="`https://test.worknet.uz/plans/${PlanInfo.id}`"
                                    :image="ShortLogo" :dotsOptions="{ type: 'dots', color: '#000' }" />
                            </div>
                        </div>
                    </v-pdf>
                </div>
            </div>
        </section>
    </div>

</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()

// LANG
const {locale} =useI18n()

// ICONS
import { Right, Pointer, Download } from '@element-plus/icons-vue';
import QRCodeVue3 from "qrcode-vue3";
import ShortLogo from '@/assets/images/short_logo.png'


// DATA
const { data: PlanInfo, pending, error, refresh } = await useApiFetch(`/api/v1/business/plan/details?plan_id=${route.params.id}&lang=${locale.value}`,
    {
        lazy: true,
        baseURL: useBaseUrl(),
        transform: (PlanInfo) => { return PlanInfo.data },
        onResponse({ request, response, options }) {
            if (response._data.data && response._data.data.image) {
                GetPlanImg(response._data.data.image)
            }

        },
    })

// PDF DATA
const planPdf = ref(null)
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
const exportFilename = 'LoyihalarFabrikasiPlan.pdf'
const PlanImage = ref(null)


// METHODS
function DownloadPlan() {
    console.log(planPdf.value)
    planPdf.value.download()
}

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

function GetPlanImg(id) {
    if (id && id != undefined) {
        $fetch(`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${id}`)
            .then(async (res) => {
                let base64Image = await blobToBase64(res)
                PlanImage.value = base64Image
            })
            .catch(e => {
                console.log(e)
            })
    }

}

// ACTION
onMounted(() => {
    GetPlanImg()
})

</script>