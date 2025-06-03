<template>
	<div class="w-full h-full bg-[#f7f8f9] rounded-xl border overflow-hidden">
		<div class="w-full h-[200px]">
			<img
				:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${data.photo}`"
				class="w-full h-full object-cover"
				alt="onlinemarket"
			/>
		</div>
		<div class="px-6 py-5 border-[#e9e9e9] bg-[#f7f8f9]">
			<div class="flex flex-col gap-6">
				<div>
					<p class="text-[#667085] text-sm">Ish turi</p>
					<p class="text-[#2b2f38] text-sm font-bold">
						{{ data.liabilities }}
					</p>
				</div>
				<div>
					<p class="text-[#667085] text-sm">Ish beruvchini nomi</p>
					<p class="text-[#2b2f38] text-sm font-bold">{{ data.name }}</p>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex flex-col">
						<p class="text-[#667085] text-sm">Tajriba</p>
						<p class="text-base text-[#2b2f38] font-bold">
							{{ data.experience.name }}
						</p>
					</div>
					<div class="flex flex-col">
						<p class="text-[#667085] text-sm">Ish haqqi</p>
						<p class="text-base text-[#2b2f38] font-bold">
							{{ priceFilter(data.salary) }} so’m
						</p>
					</div>
				</div>
				<div class="flex flex-col">
					<p class="text-[#667085] text-sm">Manzil</p>
					<p class="text-base text-[#2b2f38] font-bold">
						{{ data.region?.name }}, {{ data.district?.name }}
						{{ data.mahalla?.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
	},
})
</script>

<style lang="scss" scoped></style>
