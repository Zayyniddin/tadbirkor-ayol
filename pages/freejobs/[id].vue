<template>
	<div class="w-full">
		<div class="f-container mx-auto py-10">
			<div class="flex gap-10">
				<div class="flex-1 space-y-6">
					<p class='text-2xl font-semibold'>{{ data.liabilities }}</p>
					<img
						class="rounded-xl min-w-[480px] h-[330px]"
						:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${data.photo}`"
						alt=""
					/>
					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Ish Beruvchi:
						</p>
						<p class="text-base text-black">
							{{ data.name }}
						</p>
					</div>
					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Telefon raqam:
						</p>
						<p class="text-base text-black">
							+{{ usePhoneMask(data.phone_number) }}
						</p>
					</div>
					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold min-w-[130px]"
						>
							Ish kunlari:
						</p>
						<div class="flex gap-2 flex-wrap">
							<el-tag
								v-for="item in data.working_days"
								:key="item.id"
								type="primary"
								>{{ item.name }}</el-tag
							>
						</div>
					</div>
					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Yosh:
						</p>
						<p class="text-base text-black">
							{{ data.age?.name }}
						</p>
					</div>

					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Mutaxasislik:
						</p>
						<p class="text-base text-black">
							{{ data.speciality?.name }}
						</p>
					</div>

					<div class="flex items-start gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Kerakli tillar:
						</p>
						<div class="flex gap-2">
							<el-tag
								v-for="item in data.foreign_languages"
								:key="item.id"
								type="primary"
								>{{ item.name }}</el-tag
							>
						</div>
					</div>

					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Ish Vaqti:
						</p>
						<p class="text-base text-black">
							{{ data.working_mode?.name }}
						</p>
					</div>

					<div class="flex items-center gap-10">
						<p
							class="text-base whitespace-nowrap text-gray-700 font-bold w-[130px]"
						>
							Manzil:
						</p>
						<p class="text-base text-black">
							{{ data.region?.name }}, {{ data.district?.name }}
							{{ data.mahalla?.name }}
						</p>
					</div>

					<div class="!my-10">
						<JobsSendjob />
					</div>
				</div>
				<div class="flex-1 flex flex-col gap-4">
					<p class="text-lg whitespace-nowrap font-bold">Kalit so’zlar</p>
					<div class="flex flex-wrap gap-2">
						<div
							class="backdrop-blur-md text-sm w-fit bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#salonadministrator
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#gozalliksaloni
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#ishkerak
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#ayollaruchunish
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#receptionish
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#toshkentish
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#beautysalonuz
						</div>
						<div
							class="backdrop-blur-md w-fit text-sm bg-[#f7f8f9] cursor-pointer rounded-full py-2 px-4 border border-[#e9e9e9]"
						>
							#ishbor
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-lg font-bold">O'xshash ish o'rinlari</p>
					<nuxt-link
						:to="`/freejobs/${item.id}`"
						v-for="item in extra"
						:key="item.id"
						class="max-w-[250px] group w-full rounded-xl flex flex-col gap-2"
					>
						<img
							class="rounded-xl"
							:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${item.photo}`"
							alt="er"
						/>
						<div class="flex flex-col gap-2">
							<div>
								<p class="text-xs text-gray-400">Ish turi</p>
								<p
									class="text-sm group-hover:text-green-500 transition-all text-gray-800 font-semibold"
								>
									{{ item.liabilities }}
								</p>
							</div>
							<div>
								<p class="text-xs text-gray-400">Ish beruvchi nomi</p>
								<p class="text-sm text-gray-800 font-semibold">
									{{ item.name }}
								</p>
							</div>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-xs text-gray-400">Tajriba</p>
									<p class="text-sm text-gray-800 font-semibold">
										{{ item.experience.name }}
									</p>
								</div>
								<div>
									<p class="text-xs text-gray-400">Ish haqqi</p>
									<p class="text-sm text-gray-800 font-semibold">
										{{ priceFilter(item.salary) }} so'm
									</p>
								</div>
							</div>
							<div>
								<p class="text-xs text-gray-400">Manzil</p>
								<p class="text-sm text-gray-800 font-semibold">
									{{ item.region?.name }}, {{ item.district?.name }}
									{{ item.mahalla?.name }}
								</p>
							</div>
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'main-layout',
})
const route = useRoute()
const data = ref([])
const extra = ref([])

function getData() {
	useApi(`/api/v1/women/vacancy/detail?id=${route.params.id}`).then(res => {
		data.value = res.data.data
		extra.value = res.data.extra
	})
}

onMounted(() => getData())
</script>
