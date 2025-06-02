<template>
	<div class="w-full">
		<div class="flex flex-col f-container mx-auto gap-28 py-8">
			<JobsCardItems :data='item' />
			<JobsForm />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'main-layout',
})
</script>
