<template>
	<div class="w-full">
		<div
			class="w-full rounded-xl overflow-hidden relative flex justify-center items-center"
		>
			<iframe
				width="387"
				height="258"
				:src="`https://www.youtube.com/embed/${props.data.video_url}`"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>

		<div class="flex flex-col gap-2 mt-6">
			<p class="text-sm text-[#a3a3a3]">{{ props.data.created_at }}</p>
			<p class="text-[#2b2f38] text-lg">{{ props.data.title }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: {},
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
