<template>
	<section class="w-full flex justify-center items-center pt-7">
		<div
			class="f-container flex flex-col items-strench gap-5 min-h-[350px] max-md:flex-col"
		>
			<div class="flex-1 w-full">
				<div class="carousel_page w-full min-h-[50dvh]">
					<swiper
						ref="swiperControls"
						:loop="true"
						:slides-per-view="1"
						:pagination="false"
						:draggable="true"
						@slideChange="onSlideChange"
						@swiper="onSwiper"
						class="h-full my-swiper"
						:autoplay="{
							delay: 10000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}"
						:navigation="{
							nextEl: '.button-next',
							prevEl: '.button-prev',
						}"
					>
						<swiper-slide
							class="slide_item"
							v-for="(slide, index) in data"
							:key="index"
						>
							<div class="flex flex-col gap-2 items-start">
								<div class="flex gap-14 items-stretch">
									<div class="flex-1 justify-between h-auto flex flex-col">
										<div class="flex flex-col gap-4">
											<p class="text-base text-[#2b2f38]">
												{{ slide.subtitle }}
											</p>
											<h1 class="text-4xl font-semibold leading-[130%]">
												{{ slide.title }}
											</h1>
										</div>
										<div class="flex flex-col gap-6 mt-8">
											<div class="w-full">
												<div class="bg-[#f7f8f9] w-fit rounded-xl p-3">
													<p
														class="text-base text-[#667085] leading-[150%] font-medium"
													>
														Summasi
													</p>
													<p
														class="text-2xl text-[#2b2f38] leading-[150%] font-medium"
													>
														{{ slide.credit_amount }}
													</p>
												</div>
												<div class="grid grid-cols-3 gap-3 mt-2">
													<div class="bg-[#f7f8f9] rounded-xl p-3">
														<p
															class="text-base text-[#667085] leading-[150%] font-medium"
														>
															Kredit muddati
														</p>
														<p
															class="text-2xl text-[#2b2f38] leading-[150%] font-medium"
														>
															{{ slide.credit_term }}
														</p>
													</div>
													<div class="bg-[#f7f8f9] rounded-xl p-3">
														<p
															class="text-base text-[#667085] leading-[150%] font-medium"
														>
															Imtiyozli davri
														</p>
														<p
															class="text-2xl text-[#2b2f38] leading-[150%] font-medium"
														>
															{{ slide.credit_period }}
														</p>
													</div>
													<div class="bg-[#f7f8f9] rounded-xl p-3">
														<p
															class="text-base text-[#667085] leading-[150%] font-medium"
														>
															Yillik kredit foizi
														</p>
														<p
															class="text-2xl text-[#2b2f38] leading-[150%] font-medium"
														>
															{{ slide.credit_percent }}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div v-if="slide.image">
										<img loading="lazy" :alt="slide.image" :src="slide.image" />
									</div>
								</div>
								<a :href='slide.link' target='_blank' v-if='slide.link' class="bg-green-500 text-sm rounded-xl p-2 text-white">
									Rasmiylashtirish
								</a>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<div
					class="bg-[#f7f8f9] rounded-xl button-prev cursor-pointer p-2 flex justify-center items-center"
				>
					<Icon name="material-symbols:arrow-left-alt" class="text-[#667085]" />
				</div>
				<div
					class="bg-[#f7f8f9] rounded-xl cursor-pointer p-2 flex justify-center items-center button-next"
				>
					<Icon
						name="material-symbols:arrow-right-alt"
						class="text-[#667085]"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import sliderOne from '@/assets/images/partners/slider-1.png'
import sliderTwo from '@/assets/images/partners/slider-2.png'
import sliderThree from '@/assets/images/partners/slider-3.png'
import 'swiper/element/bundle'

// LANG
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
const data = [
	{
		image: sliderOne,
		id: 1,
		title:
			'Ayollar ulushi 50% va undan yuqori bo‘lgan yoki ayollar rahbarligidagi kichik va o‘rta biznes subyektlari',
		credit_amount: "1.5 mlrd so'm",
		credit_term: '84 oy',
		credit_period: '36 oy',
		credit_percent: '21%',
		subtitle: 'Hamroh krediti (xotin-qizlar uchun)',
		link: 'https://hamroh.biznes-portal.uz/'
	},
	{
		image: sliderTwo,
		id: 2,
		title:
			'Oilaviy tadbirkorlik doirasida muvaffaqiyatga erishgan o‘zini o‘zi band qilganlar, jismoniy va yuridik shaxslar',
		credit_amount: "50 mln so'm",
		credit_term: '36 oy',
		credit_period: '6 oy',
		credit_percent: '24%',
		subtitle: '“Moliyaviy ommabop” Krediti',
	},
	{
		image: sliderThree,
		id: 3,
		title:
			'Oilakredit.uz orqali murojaat qilib, hokimyordamchidan tavsiyanoma oladi',
		credit_amount: "300 mln so'm",
		credit_term: '84 oy',
		credit_period: '36 oy',
		credit_percent: '17,5%',
		subtitle: 'Har bir oila-tadbirkor krediti',
		link: 'https://oilakredit.uz/'
	},
]
const swiperControls = ref(null)
const onSwiper = swiper => {
	//   swiperControls.value = swiper;
	//   console.log(swiperControls.value);
}
const onSlideChange = () => {}
</script>
<style>
.swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
}
</style>
