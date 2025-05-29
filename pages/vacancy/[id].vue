<template>
    <div class="w-full">
        <section class="w-full flex justify-center py-8 px-3 bg-white">
            <div v-if="VacancyInfo && VacancyInfo.id" class="max-w-[900px] w-full">
                <div v-if="VacancyInfo.photo" class="w-full rounded-xl mb-8  relative h-[400px] overflow-hidden flex justify-center max-md:h-[250px]">
                    <Photo class="h-full  object-contain rounded-xl " :uid="VacancyInfo.photo" />
                </div>
                <div class="w-full mb-8">
                    <h1 class="text-xl font-bold text-green-600 mb-2">{{ VacancyInfo.name }} </h1>
                    <div class="text-sm mb-4">
                        <span v-if="VacancyInfo.region && VacancyInfo.region.name" class="mr-1">{{
                            VacancyInfo.region.name
                            }},</span>
                        <span v-if="VacancyInfo.district && VacancyInfo.district.name" class="mr-1">{{
                            VacancyInfo.district.name }},</span>
                        <span v-if="VacancyInfo.mahalla && VacancyInfo.mahalla.name" class="mr-1">{{
                            VacancyInfo.mahalla.name }},</span> 
                    </div>
                    <div class="w-full">
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">Majburiyati</p>
                            <p class="text-sm font-bold">{{ VacancyInfo.liabilities }}</p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">Ish haqi</p>
                            <p class="text-sm font-bold text-green-600">{{ priceFilter(VacancyInfo.salary) }} {{ $t('main.sum') }} </p>
                        </div>
                        <div v-if="VacancyInfo.phone_number" class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.phone_number') }}</p>
                            <p class="text-sm font-bold text-green-600"><a :href="`tel:+${VacancyInfo.phone_number}`">+{{VacancyInfo.phone_number }}</a></p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.experience') }}</p>
                            <p class="text-sm font-bold">{{ VacancyInfo.experience.name }}</p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.speciality') }}</p>
                            <p class="text-sm font-bold">{{ VacancyInfo.speciality.name }}</p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.age_limites') }}</p>
                            <p class="text-sm font-bold">{{ VacancyInfo.age.name }}</p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.foreign_languages') }} </p>
                            <div class="flex flex-wrap gap-2">
                                <p v-for="(item, i) in VacancyInfo.foreign_languages" :key="i"
                                    class="text-xs px-2 py-1 bg-gray-50 rounded-xl font-medium">{{ item.name }}</p>
                            </div>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.working_mode') }}</p>
                            <p class="text-sm font-bold">{{ VacancyInfo.working_mode.name }}</p>
                        </div>
                        <div class="py-2 border-b">
                            <p class="text-sm text-gray-600 mb-1">{{ $t('main.working_days') }}</p>
                            <div class="flex flex-wrap gap-2">
                                <p v-for="(item, i) in VacancyInfo.working_days" :key="i"
                                    class="text-xs px-2 py-1 bg-gray-50 rounded-xl font-medium">{{ item.name }}</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="w-full rounded-xl px-4 py-2 bg-gray-50 flex justify-between mb-6">
                    <div class="flex items-center gap-2">
                        <p class="text-sm font-bold">{{ $t('main.share') }}:</p>
                        <div class="flex items-center  gap-1 flex-wrap">
                            <a target="_blank" href="https://www.instagram.com/smartmarketofficial" class="h-6 w-6">
                                <img class="w-full" src="@/assets/images/instagram.png" alt="">
                            </a>
                            <a target="_blank" href="https://t.me/smartmarketofficial" class=" h-6 w-6">
                                <img class="w-full" src="@/assets/images/telegram.png" alt="">
                            </a>
                            <a target="_blank" href="#" class="h-6 w-6">
                                <img class="w-full" src="@/assets/images/facebook.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="">
                        <p v-if="IsRespond" class="text-xs px-3 py-2 rounded-xl text-white bg-purple-600 font-bold">{{ $t('main.has_interested') }}</p>
                        <button
                            v-else
                            class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90 group transition-all"
                            @click="respondModal = true">
                            {{ $t('main.give_interset') }}
                            <!-- <el-icon class="group-hover:-rotate-45">
                            <Right />
                        </el-icon> -->
                        </button>
                    </div>
                </div> 
                <UiModal v-model="respondModal" @close="respondStatus='input'">
                    <div class="px-4 pb-4">
                        <h1 class="mb-4 text-base font-bold">{{ $t('main.give_interset') }}</h1>
                        <div class="w-full" v-show="respondStatus=='input'">
                            <el-form ref="ruleFormRef" :model="form">
                                <el-form-item prop="full_name" :rules="[RuleRequired]">
                                    <p class="mb-1 text-sm font-medium pl-0.5">{{ $t('main.fio') }} <span class="text-red-500">*</span> </p>
                                    <el-input v-model="form.full_name" :placeholder="`${$t('main.fio')}*`" size="large" :disabled="respondLoading" />
                                </el-form-item>
                                <el-form-item prop="phone_number" :rules="[RuleRequired, RulePhone]">
                                    <p class="mb-1 text-sm font-medium pl-0.5"> {{ $t('main.phone_number') }} <span
                                            class="text-red-500">*</span> </p>
                                    <el-input v-model="form.phone_number" v-maska data-maska="+998 ## ### ## ##" placeholder="+998 -- --- -- --" size="large" :disabled="respondLoading" />
                                </el-form-item>
                                <el-form-item prop="email" :rules="[RuleEmail]">
                                    <p class="mb-1 text-sm font-medium pl-0.5">{{ $t('main.email') }}  </p>
                                    <el-input v-model="form.email" :placeholder="`${$t('main.email')}`" size="large" :disabled="respondLoading" />
                                </el-form-item>
                                <el-form-item prop="resume">
                                    <p class="mb-1 text-sm font-medium pl-0.5">{{ $t('main.resume') }} </p> 
                                    <UiUploadFile v-model="form.resume" />
                                </el-form-item>
                                <el-form-item prop="additional">
                                    <p class="mb-1 text-sm font-medium pl-0.5">{{ $t('main.additional_info') }} </p> 
                                    <el-input  v-model="form.additional" :rows="4" type="textarea" :placeholder="`${$t('main.additional_info')}...`" />
                                </el-form-item>
                                <button
                                    type="button"
                                    class="px-3 py-2.5 w-full bg-green-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 group transition-all"
                                    :disabled="respondLoading"
                                    @click="sendRespond()">
                                    {{ $t('main.send') }} 
                                </button>
                            </el-form>
                        </div>
                        <div class="w-full flex flex-col items-center justify-center" v-show="respondStatus=='send'">
                             <img src="@/assets/images/respond-sended.png" class="h-[150px] mb-4" />
                             <p class="text-sm font-bold text-center text-gray-700 mb-4">{{ $t('main.succes_interest') }}</p>
                             <button
                                    type="button"
                                    class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 group transition-all"
                                    @click="respondModal=false; respondStatus='input'">
                                    {{ $t('main.close') }}  
                                </button>
                        </div>
                        <div class="w-full flex flex-col items-center justify-center" v-show="respondStatus=='nosended'">
                             <img src="@/assets/images/respond-nosended.png" class="h-[150px] mb-4" />
                             <p class="text-sm font-bold text-center text-gray-700 mb-4">{{ $t('main.error_interest') }}</p>
                             <button
                                    type="button"
                                    class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 group transition-all"
                                    @click="respondStatus='input'">
                                    {{ $t('main.re_send') }}
                                </button>
                        </div>
                    </div>
                </UiModal> 
            </div>
        </section>
    </div>

</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()

// LANG
const {locale} =useI18n()

// RULES
const RuleRequired={ required: true, message: '', trigger: 'change' }
const RuleEmail={ type: 'email', message: '', trigger: 'change' }
const RulePhone={ max: 17, min:17, message: '', trigger: 'change' }

// STORE
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const { setRespondVacancy } = userStore
const { respondVacancy } = storeToRefs(userStore)


// COMUTED

const IsRespond=computed(()=>{
    let data=false
    if(respondVacancy && respondVacancy.value && respondVacancy.value[route.params.id] && respondVacancy.value[route.params.id].date){
        let cur_date=new Date()
        let res_date=new Date(respondVacancy.value[route.params.id].date)
        let cur_time=cur_date.getTime()
        let res_time=res_date.getTime()
        if(cur_time <= res_time){
            data=true
        }

    }
    return data
})


// DATA
const { data: VacancyInfo, pending, error, refresh } = await useApiFetch(`/api/frontend/v1/women-vacancy/details?id=${route.params.id}&lang=${locale.value}`,
    {
        lazy: true,
        baseURL: useBaseUrl(),
        transform: (List) => { return List.data }
    })

const ruleFormRef=ref(null)
const respondModal = ref(false)
const respondLoading=ref(false)
const respondStatus=ref('input')
const form = ref({
    full_name: '',
    phone_number: '',
    email: '',
    resume: '',
    additional: ''
})

const formFormater = (val) => {
    if (val) {
        return val.substring(1).replaceAll(" ", "")
    }
}
// METHODS
function sendRespond(){
    if (!ruleFormRef) return
    ruleFormRef.value.validate((valid) => {
    if (valid) {
      respondLoading.value=true
      useApi('/api/frontend/v1/vacancy-respond', {method:'POST', body:{...form.value, phone_number:formFormater(form.value.phone_number), vacancy_id:route.params.id }})
      .then(()=>{
        respondLoading.value=false
        respondStatus.value='send'
        let date=new Date()
        date = new Date(date.setDate(date.getDate() + 1))
        setRespondVacancy(route.params.id, {id:route.params.id, date:date})
        setTimeout(() => {
            respondModal.value=false
        }, 3000);
      })
      .catch((e)=>{
        console.log(e)
        respondLoading.value=false
        respondStatus.value='nosended'
      })
    } else {
      console.log('error submit!')
    }
  })

}

</script>