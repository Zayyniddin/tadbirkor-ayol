<template>
	<div class="w-full f-container mx-auto">
		<div class="bg-[#B1EDE9] overflow-hidden relative p-16 rounded-xl">
			<div class="max-w-[496px] w-full">
				<div class="mb-[100px]">
					<img src="@/assets/images/kasbiy-talim.png" alt="">
					<h2 class="text-4xl mt-2">
						Kasbiy Ta’lim Platformasi kelajagingizga investitsiya qiling!
					</h2>
				</div>

				<div>
					<p class="text-gray-500 mb-6">
						Ta'lim markazlari uchun qulay CRM modulimiz bilan tanishing! Bu
						tizim uzluksiz boshqaruvni ta'minlaydi, o'qishni yaxshi ko'radi va
						biznesingizga tez yordam beradi.
					</p>
					<div class="flex items-center gap-4">
						<a
							href="https://tadbirkor-ayol.uz/auth/login"
							target="_blank"
							class="bg-green-500 rounded-xl p-2 text-white"
						>
							Foydalanish uchun
						</a>
						<a
							href="https://kasbiy-talim.uz/"
							target="_blank"
							class="bg-white rounded-xl p-2 text-black"
						>
							Batafsil ma’lumot
						</a>
					</div>
				</div>
			</div>
			<img
				class="absolute right-8 -bottom-2 w-[400px] h-[400px]"
				src="@/assets/images/lesson-banner.png"
				alt=""
			/>
		</div>

		<div class='flex items-center justify-between mt-20'>
			<div>
				<p class="font-semibold mb-3 text-2xl">+98 343</p>
				<p class="text-gray-400 text-sm">Jami ro’yxatdan o’tgan o’quvchilar</p>
			</div>

			<div>
				<p class="font-semibold mb-3 text-2xl">+98 343</p>
				<p class="text-gray-400 text-sm">Joriy yil ro’yxatdan o’tganlar</p>
			</div>

			<div>
				<p class="font-semibold mb-3 text-2xl">+820</p>
				<p class="text-gray-400 text-sm">Jami ro’yxatdan o’tgan o’quvchilar</p>
			</div>

			<div>
				<p class="font-semibold mb-3 text-2xl">+100</p>
				<p class="text-gray-400 text-sm">Yuqori malakali o'qituvchilar</p>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'main-layout',
})
</script>

<style lang="scss" scoped></style>
