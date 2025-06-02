<template>
	<div class="w-full">
		<div class="f-container mx-auto py-20">
			<div class="flex gap-10">
				<div class="flex-1 space-y-12">
					<img
						class="rounded-xl"
						src="@/assets/images/onlinemarket1.jpg"
						alt=""
					/>
					<div class="flex items-start gap-10">
						<p class="text-base whitespace-nowrap font-bold">Vazifa tavsifi</p>
						<p class="text-sm text-black leading-[140%]">
							Salonimizga mijozlarni iliq kutib oladigan, xizmatlarni tartibga
							soluvchi va jamoa ishini samarali boshqarishda yordam beradigan
							administrator izlayapmiz. Siz mijozlar bilan bevosita muloqotda
							bo‘lasiz, yozilishlarni boshqarasiz va umumiy ish jarayonining
							muammosiz kechishini ta’minlaysiz.
						</p>
					</div>
					<div class="flex items-start gap-10">
						<p class="text-base whitespace-nowrap font-bold">Vazifalar</p>
						<ul class="list-disc list-inside space-y-4">
							<li class="text-sm text-black leading-[140%]">
								Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish
							</li>
							<li class="text-sm text-black leading-[140%]">
								Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish
							</li>
							<li class="text-sm text-black leading-[140%]">
								Mijozlarni samimiy kutib olish va yo‘l-yo‘riq ko‘rsatish
							</li>
						</ul>
					</div>
					<JobsSendjob />
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
				<div class='flex flex-col gap-4'>
          <p class='text-lg font-bold'>O'xshash ish o'rinlari</p>
					<div class="max-w-[200px] w-full rounded-xl flex flex-col gap-2">
						<img
							class="rounded-xl"
							src="@/assets/images/onlinemarket1.jpg"
							alt=""
						/>
						<div class='flex flex-col gap-2'>
							<div>
								<p class='text-xs text-gray-400'>Ish beruvchi nomi</p>
								<p class='text-sm text-gray-800 font-semibold'>Teshaboeva Nigora</p>
							</div>
							<div class='flex items-center justify-between'>
								<div>
									<p class='text-xs text-gray-400'>Tajriba</p>
									<p class='text-sm text-gray-800 font-semibold'>4-6 yil</p>
								</div>
								<div>
									<p class='text-xs text-gray-400'>Ish haqqi</p>
									<p class='text-sm text-gray-800 font-semibold'>2 700 000 so'm</p>
								</div>
							</div>
              <div>
                <p class='text-xs text-gray-400'>Manzil</p>
                <p class='text-sm text-gray-800 font-semibold'>Andijon test</p>
              </div>
						</div>
					</div>

          <div class="max-w-[200px] w-full rounded-xl flex flex-col gap-2">
						<img
							class="rounded-xl"
							src="@/assets/images/onlinemarket1.jpg"
							alt=""
						/>
						<div class='flex flex-col gap-2'>
							<div>
								<p class='text-xs text-gray-400'>Ish beruvchi nomi</p>
								<p class='text-sm text-gray-800 font-semibold'>Teshaboeva Nigora</p>
							</div>
							<div class='flex items-center justify-between'>
								<div>
									<p class='text-xs text-gray-400'>Tajriba</p>
									<p class='text-sm text-gray-800 font-semibold'>4-6 yil</p>
								</div>
								<div>
									<p class='text-xs text-gray-400'>Ish haqqi</p>
									<p class='text-sm text-gray-800 font-semibold'>2 700 000 so'm</p>
								</div>
							</div>
              <div>
                <p class='text-xs text-gray-400'>Manzil</p>
                <p class='text-sm text-gray-800 font-semibold'>Andijon test</p>
              </div>
						</div>
					</div>


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
</script>

<style lang="scss" scoped></style>
