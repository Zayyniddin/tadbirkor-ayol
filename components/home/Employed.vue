<template>
	<section class="w-full flex justify-center bg-white">
		<div
			class="f-container bg-[#b1ede9] rounded-xl flex flex-col lg:flex-row justify-between w-full px-4 sm:px-6 lg:px-3"
		>
			<!-- Left side (text) -->
			<div
				class="flex-1 max-w-full lg:max-w-[550px] px-0 sm:px-6 lg:px-14 py-6 flex flex-col justify-between"
			>
				<h1 class="text-3xl sm:text-4xl font-bold mb-6">
					Bo’sh ish o’rinlarni bu joydan topasiz
				</h1>
				<div class="flex flex-col gap-6">
					<p class="text-base leading-[150%] font-medium">
						Biz bilan birgalikda orzuingizdagi biznesni boshlang, uni
						rivojlantiring va muvaffaqiyat sari yo‘l oling. Har bir bosqichda
						sizga yo‘l-yo‘riq ko‘rsatamiz
					</p>
					<a
						href="https://mehnat.uz/"
						target="_blank"
						class="px-4 py-3 cursor-pointer bg-white border text-black flex w-fit gap-2 items-center rounded-xl text-sm"
					>
						<span class="hidden sm:inline">Hoziroq boshlang</span>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.68253 14.9401L11.5725 10.0501C12.15 9.47256 12.15 8.52756 11.5725 7.95006L6.68253 3.06006"
								stroke="black"
								stroke-width="1.125"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Right side (scroll cards) -->
			<div class="flex-1 mt-10 lg:mt-0 min-h-[500px] overflow-hidden relative">
				<div
					class="group grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden h-[500px] px-2"
				>
					<!-- Column 1 -->
					<div class="flex marquee flex-col animate-marquee-slow gap-4">
						<div class="flex flex-col gap-4">
							<HomeJobCard />
							<HomeJobCard />
							<HomeJobCard />
						</div>
						<div class="flex flex-col gap-4">
							<HomeJobCard />
							<HomeJobCard />
							<HomeJobCard />
						</div>
					</div>

					<!-- Column 2 -->
					<div class="flex marquee flex-col animate-marquee-medium gap-4">
						<div class="flex flex-col gap-4">
							<HomeJobCard />
							<HomeJobCard />
							<HomeJobCard />
						</div>
						<div class="flex flex-col gap-4">
							<HomeJobCard />
							<HomeJobCard />
							<HomeJobCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
