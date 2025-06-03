<template>
	<div class="w-full f-container mx-auto">
		<div class="bg-[#B1EDE9] overflow-hidden relative p-16 rounded-xl">
			<div class="max-w-[420px] w-full">
				<div class="mb-[100px]">
					<img class="h-8" src="@/assets/images/partners/smart.png" alt="" />
					<h2 class="text-4xl mt-2">
						Biznesingizni biz bilan yanada rivojlantiring
					</h2>
				</div>

				<div>
					<p class="text-gray-500 mb-6">
						O'z mahsulorlaringizni biz bilan tez va qulay tarzda soting
					</p>
					<div class="flex items-center gap-4">
						<a
							href="https://cabinet.smart-market.uz/login?next=%2F"
							target="_blank"
							class="bg-green-500 rounded-xl p-2 text-white"
						>
							Foydalanish uchun
						</a>
						<a
							href="https://smart-market.uz/"
							target="_blank"
							class="bg-white rounded-xl p-2 text-black"
						>
							Batafsil ma’lumot
						</a>
					</div>
				</div>
			</div>
			<img
				class="absolute right-8 -bottom-2 w-[350px] h-[400px]"
				src="@/assets/images/smart-banner.png"
				alt=""
			/>
		</div>

		<div class="flex items-center justify-between mt-20">
			<div class="bg-gray-50 p-4 rounded-xl w-[230px]">
				<p class="font-semibold mb-3 text-2xl">+13 354</p>
				<p class="text-gray-400 text-sm">Sotuvchi</p>
			</div>

			<div class="bg-gray-50 p-4 rounded-xl w-[230px]">
				<p class="font-semibold mb-3 text-2xl">+88 156</p>
				<p class="text-gray-400 text-sm">Haridor</p>
			</div>

			<div class="bg-gray-50 p-4 rounded-xl w-[230px]">
				<p class="font-semibold mb-3 text-2xl">+77 851</p>
				<p class="text-gray-400 text-sm">Mahsulotlar</p>
			</div>
			<div class="bg-gray-50 p-4 rounded-xl w-[230px]">
				<p class="font-semibold mb-3 text-2xl">+200</p>
				<p class="text-gray-400 text-sm">Eng ko'p sotilgan mahsulot turi</p>
			</div>
			<div class="bg-gray-50 p-4 rounded-xl w-[230px]">
				<p class="font-semibold mb-3 text-2xl">+272 mln</p>
				<p class="text-gray-400 text-sm">
					Savdo aylanmasi
				</p>
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
