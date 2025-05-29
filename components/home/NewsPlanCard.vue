<template>
	<nuxt-link :to="`/business-plans/${data.id}`" class="w-full h-fit">
		<div class="w-full h-full max-h-[250px] rounded-xl overflow-hidden">
			<img
				:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${data.image}`"
				class="w-full h-full object-cover group"
				alt="pomegranate"
			/>
		</div>
		<div class="flex flex-col gap-7 mt-6">
			<div class="flex flex-col gap-4">
				<p class="text-xs text-gray-500 group">{{ data.category.name }}</p>
				<div class="flex flex-col gap-2">
					<p class="text-xl font-bold">{{ data.name }}</p>
					<p class="text-base font-medium">{{ data.credit_price }} so'm</p>
				</div>
			</div>
			<button class="flex items-center text-green-500 gap-1">
				Ko’rish
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
						stroke="#02C6B8"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.625 9H15.2475"
						stroke="#02C6B8"
						stroke-width="1.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</nuxt-link>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: {},
		required: true,
	},
})
</script>

<style lang="scss" scoped></style>
