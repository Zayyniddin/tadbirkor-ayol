<template>
	<div class="w-full">
		<nav
			class="w-full px-3 py-3 flex items-center justify-center bg-white top-0 left-0 z-[200] h-20"
			:class="scrollY > 120 ? 'fixed' : ''"
		>
			<div class="f-container w-full flex items-center justify-between gap-3">
				<div class="flex items-center gap-16">
					<div class="flex items-center gap-3">
						<button
							class="w-8 h-8 p-1 text-sm bg-gray-50 rounded-xl items-center justify-center hidden max-md:flex"
							@click="toggle = true"
						>
							<IconBurger class="w-3.5" />
						</button>
						<nuxt-link :to="localePath(`/`)">
							<CustomIcon name="icon-bwlogo" class="!w-12 !h-8 max-md:!h-6" />
						</nuxt-link>
					</div>
					<div
						class="left-0 z-10 top-0 items-center max-md:fixed max-md:p-4 max-md:flex-col max-md:w-full text-sm max-md:bg-white max-md:h-[100vh] max-md:text-xl"
						:class="toggle ? 'flex' : 'flex max-md:hidden'"
					>
						<div class="w-full mb-2 hidden max-md:block">
							<button
								class="w-10 h-10 rounded-full bg-gray-50 p-z flex items-center justify-center text-base"
								@click="toggle = false"
							>
								<el-icon>
									<CloseBold />
								</el-icon>
							</button>
						</div>
						<div class="flex items-center max-md:flex-col">
							<nuxt-link
								:to="localePath(`/lesson`)"
								class="text-gray-700 group"
							>
								<div class="p-2" @click="toggle = false">
									<span
										class="group-[.router-link-exact-active]:text-green-600"
									>
										Ta’lim
									</span>
								</div>
							</nuxt-link>

							<nuxt-link
								:to="localePath(`/freejobs`)"
								class="text-gray-700 group"
							>
								<div class="p-2" @click="toggle = false">
									<span
										class="group-[.router-link-exact-active]:text-green-600"
									>
										Ish o’rinlari
									</span>
								</div>
							</nuxt-link>
							<nuxt-link :to="localePath(`/news`)" class="text-gray-700 group">
								<div class="p-2" @click="toggle = false">
									<span
										class="group-[.router-link-exact-active]:text-green-600"
									>
										Yangiliklar
									</span>
								</div>
							</nuxt-link>
							<nuxt-link
								:to="localePath(`/questions`)"
								class="text-gray-700 group"
							>
								<div class="p-2" @click="toggle = false">
									<span class="group-[.router-link-exact-active]:text-green-600"
										>Savol va takliflar</span
									>
								</div>
							</nuxt-link>

							<nuxt-link
								:to="localePath(`/market`)"
								class="text-gray-700 group"
							>
								<div class="p-2" @click="toggle = false">
									<span class="group-[.router-link-exact-active]:text-green-600"> Mahsulot va xizmat sotish </span>
								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="flex items-stretch gap-2">
					<!-- <UiLangChanger /> -->

					<div class="flex flex-wrap items-center lang-switch">
						<el-dropdown @command="switchLang">
							<el-button type="primary" class="bg-slate-200">
								<div class="flex items-center gap-2 text-gray-700 text-sm">
									<IconRuFlag v-if="locale == 'ru'" />
									<IconUzFlag v-if="locale != 'ru'" />
									{{ languages.find(d => d.code == locale)['title'] }}
								</div>
							</el-button>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item
										v-for="item in languages"
										:command="item.code"
										:key="item.code"
									>
										<div class="flex items-center gap-2 text-gray-700">
											<IconRuFlag v-if="item.code == 'ru'" />
											<IconUzFlag v-if="item.code != 'ru'" /> {{ item.title }}
										</div>
									</el-dropdown-item>
									<!-- <el-dropdown-item command="uz">
                    <div class="flex items-center gap-2 text-gray-700">
                      <IconUzFlag /> Ўзбекча
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item command="la"
                    ><div class="flex items-center gap-2 text-gray-700">
                      <IconUzFlag /> O'zbekcha
                    </div>
                  </el-dropdown-item> -->
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
					<a href="https://cabinet.loyihalar-fabrikasi.uz/auth/login">
						<button
							class="px-3 py-2 bg-green-600 border text-white rounded-2xl text-sm"
						>
							<span class="max-md:hidden"> {{ $t('nav.login_system') }}</span>
							<IconLogin class="w-3.5 my-0.5 hidden max-md:block" />
						</button>
					</a>
				</div>
			</div>
		</nav>
		<div v-if="scrollY > 120" class="w-full h-[64px]"></div>
	</div>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
import { CloseBold } from '@element-plus/icons-vue'
// LANG
const route = useRoute()
const localePath = useLocalePath()
const { locale, setLocale } = useI18n()
const { setLang, lang } = useUserStore()
// STORE
import { useDictionaryStore } from '@/stores/dictionary'
const dictionaryStore = useDictionaryStore()
const { get_regions, get_categories } = dictionaryStore

// DATA
const toggle = ref(false)
const scrollY = ref(0)
const languages = reactive([
	{ code: 'ru', title: 'Рус' },
	{ code: 'uz', title: 'Ўзб' },
	{ code: 'la', title: "O'zb" },
])
//Mehods
function switchLang(lang) {
	setLang(lang)
	setLocale(lang)
}
// ACTION
onMounted(() => {
	get_regions(locale.value)
	get_categories(locale.value)
	if (process.client) {
		window.addEventListener('scroll', () => {
			scrollY.value = Math.round(window.scrollY)
		})
		if (!!lang && /ru|uz/.test(lang) && !/ru|uz/.test(route.fullPath))
			setLocale(lang)
	}
})
</script>
