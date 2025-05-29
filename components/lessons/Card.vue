<template>
	<a href='https://kasbiy-talim.uz/public/pages/students' target='_blank' class="w-full rounded-xl overflow-hidden border border-[#e9e9e9]">
		<div class="w-full relative flex justify-center items-center">
			<img
				:src="`https://kasbiy-talim.uz/services/platon-core/uploads/files/${data.course_photo}`"
				alt="mockImage"
			/>
		</div>
		<div class="flex flex-col gap-2 mt-3 p-4">
			<!-- <p class="text-sm text-[#667085]">14.04.2024</p> -->
			<p class="text-[#2b2f38] text-sm font-extrabold">
				{{ data.course_name }}
			</p>
			<p class="text-sm text-gray-800">{{ data.center_name }}</p>
			<p class="text-sm text-gray-800 mt-2">
				Hududi: <span class="font-semibold">{{ data.region }}</span>
			</p>
			<p class="text-sm flex items-center gap-1">
				Kurs soati:
				<span class="font-semibold text-yellow-500"
					>{{ data.duration }} soat</span
				>
				<Icon name="material-symbols:alarm" class="text-yellow-500" />
			</p>
			<p v-if="data.course_price <= 0" class="text-sm flex items-center gap-1">
				Kurs narxi: <span class='text-green-500 font-semibold'>Tekin</span> <Icon  class='text-green-500' name="hugeicons:checkmark-circle-02" />
			</p>
			<p v-if="data.course_price > 0" class="text-sm">
				Kurs narxi:  <span class='text-green-500'>{{ priceFilter(data.course_price) }} so'm</span>
			</p>
		</div>
	</a>
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

<style lang="scss" scoped>
.card-time-bg {
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(4px);
	border-radius: 40px;
	padding: 8px 16px;
}
</style>
