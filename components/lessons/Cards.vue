<template>
	<section class="w-full flex justify-center bg-white py-6">
		<div class="f-container flex flex-col gap-16">
			<div class="w-full flex items-center justify-between">
				<h1 class="text-4xl font-bold max-w-lg flex-1 leading-[125%]">
					Darsliklar
				</h1>
				<div class="flex items-center gap-2">
					<a href='https://kasbiy-talim.uz/public/pages/students' target='_blank' class="text-[#02c6b8] text-sm">Barcha Kurslar</a>
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
				</div>
			</div>
			<div class="w-full grid grid-cols-3 gap-6 justify-between">
				<LessonsCard v-for="item in data.slice(0,6)" :key='item.id' :data='item' />
			</div>
		</div>
	</section>
</template>

<script setup>
const data = ref([])

onMounted(() => {
  getDetails()
})


function getDetails() {
	useApi(`/api/v1/kasbiy-talim/courses?page_size=6`).then(
		res => {
			data.value = res.data.courses
		}
	)
}
</script>

<style lang="scss" scoped></style>
