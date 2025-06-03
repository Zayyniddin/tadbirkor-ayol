<template>
	<div class="bg-white rounded-lg shadow p-4 sm:p-5 w-full">
		<div class="flex items-center gap-3 mb-4">
			<img
				:src="`https://cabinet.loyihalar-fabrikasi.uz/uploads/images/${job.photo}`"
				alt="avatar"
				class="w-14 h-14 rounded-full object-cover"
			/>
			<div>
				<p class="text-xs text-gray-400">Ish turi</p>
				<p
					class="text-[12px] font-bold text-gray-600"
				>
					{{ job.liabilities }}
				</p>
			</div>
			
		</div>

		<div class="text-xs text-gray-600 space-y-1">
      <div>
				<span class="text-[11px] text-gray-400">Ish beruvchi:</span>
				<p class="text-[12px] font-bold text-gray-600">{{ job.name }}</p>
			</div>
			<div
				class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4"
			>
				<div>
					<span class="text-[11px] text-gray-400">Ish haqi:</span>
					<p class="text-[12px] font-bold">
						{{ priceFilter(job.salary) }} so‘m
					</p>
				</div>
			</div>

			<div>
				<span class="text-[11px] text-gray-400">Tajriba:</span>
				<p class="text-[12px] font-bold">{{ job.experience?.name }}</p>
			</div>

			<div>
				<span class="text-[11px] text-gray-400">Manzil:</span>
				<p class="text-[12px] font-bold">
					{{ job.region?.name }}, {{ job.district?.name }}
					{{ job.mahalla?.name }}
				</p>
			</div>
		</div>

		<nuxt-link
			:to="`freejobs/${job.id}`"
			class="mt-4 bg-[#02c6b8] hover:bg-teal-600 gap-1 flex items-center w-fit text-white py-2 px-4 rounded-lg text-[11px] transition"
		>
			<span>Batafsil ma’lumot</span>
			<IconArrow class="text-black" />
		</nuxt-link>
	</div>
</template>

<script setup>
defineProps({
	job: Object,
})
</script>
