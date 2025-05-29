<template>
    <section class="w-full flex justify-center py-8 px-3 bg-white">
        <div class="f-container">
            <h1 class="text-xl font-bold text-left mb-10">{{ $t('nav.get_credit_stems') }}</h1>
            <div class="w-full grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <div class="bg-gray-50  group rounded-xl flex gap-4 p-4 items-center max-md:flex-col max-md:items-start">
                    <div class="w-[190px] h-[170px] rounded-xl overflow-hidden bg-white p-4 flex items-center justify-center max-md:w-full">
                        <img src="@/assets/images/oila-logo.svg" class="w-full max-w-[150px]" alt="">
                    </div>
                    <div class="flex-1 flex flex-col justify-between min-md:min-h-full max-md:w-full">
                        <div class="w-full mb-2">
                            <h1 class="text-base font-bold text-gray-700 mb-2 leading-6">{{ $t('about.send_request_app') }}</h1>
                            <ul>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.choose_plan_app') }} </li>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.send_request_mahalla') }}</li>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.offer_goverment') }}</li>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.give_credit_bank') }}</li>
                            </ul>
                        </div>
                        <div class="w-full flex justify-end">
                            <a href="https://cabinet.loyihalar-fabrikasi.uz/auth/login" target="_blank">
                                <button
                                class="text-sm font-bold text-white px-3 py-2 bg-green-600 rounded-xl">{{ $t('main.begin') }}</button>
                            </a>
                        
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50  group rounded-xl flex gap-4 p-4 items-center max-md:flex-col max-md:items-start">
                    <div class="w-[190px] h-[170px] rounded-xl overflow-hidden bg-white p-4 flex items-center justify-center max-md:w-full">
                        <img src="@/assets/images/biznes-portal.png" class="w-full max-w-[150px]" alt="">
                    </div>
                    <div class="flex-1 flex flex-col justify-between  min-md:min-h-full max-md:w-full">
                        <div class="w-full mb-2">
                            <h1 class="text-base font-bold text-gray-700 mb-2 leading-6">{{ $t('about.send_request_brb') }}</h1>
                            <ul>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.send_request_project_factory') }} </li>
                                <li class="text-xs text-gary-700 mb-0.5 flex items-center gap-1 font-medium"><el-icon>
                                        <CircleCheckFilled class="font-bold text-green-600" />
                                    </el-icon> {{ $t('about.give_credit_100') }} </li>
                            </ul>
                        </div>
                        <div class="w-full flex justify-end">
                            <a href="https://cabinet.loyihalar-fabrikasi.uz/auth/login" target="_blank">
                                <button
                                class="text-sm font-bold text-white px-3 py-2 bg-green-600 rounded-xl">{{ $t('main.begin') }}</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>
<script setup>
import { Right, CircleCheckFilled } from '@element-plus/icons-vue';

// LANG
const localePath = useLocalePath() 
</script>