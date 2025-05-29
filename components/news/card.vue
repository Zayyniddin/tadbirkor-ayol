<template>
	<nuxt-link :to="localePath(`/news/${data.id}`)" class="p-4 bg-gray-50 rounded-xl flex flex-col justify-between">
		<div class="w-full">
			<div class="w-full mb-3 h-[150px] max-md:h-[130px]">
				<Photo
					v-if="data.icon"
					class="w-full rounded-xl h-full"
					:uid="data.icon"
				/>
				<img
					v-if="!data.icon"
					class="w-full rounded-xl h-full"
					:src="`https://tadbirkor-ayol.uz/uploads/images/${data.image}`"
					alt=""
				/>
			</div>
			<p class="text-sm font-bold text-gray-700 mb-1 max-md:text-xs">
				{{ data.title }}
			</p>
			<p class="text-xs text-gray-600 line-clamp-2">
				{{ data.short_description }}
			</p>
		</div>
		<div class="flex justify-between gap-2 pt-4 items-center">
			<p class="text-xs font-medium">{{ data.date }}</p>
			<nuxt-link :to="localePath(`/news/${data.id}`)">
				<button
					class="px-3 py-2.5 bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90 group transition-all max-md:px-2 max-md:py-2"
				>
					{{ $t('main.show')
					}}<el-icon class="group-hover:-rotate-45">
						<Right />
					</el-icon>
				</button>
			</nuxt-link>
		</div>
	</nuxt-link>
</template>
<script setup>
import { Right } from '@element-plus/icons-vue'

// LANG
const localePath = useLocalePath()

// PROPS
const props = defineProps({
	data: {
		type: Object,
		default: {},
		required: true,
	},
})
</script>
