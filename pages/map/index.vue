<template>
  <div class="f-container flex justify-center items-center my-0 mx-auto px-3">
    <div class="py-4 w-full">
      <div class="w-full">
        <button v-if="activemap != 'rpb'"
          class="bg-green-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 px-3 py-2.5 hover:opacity-90 group transition-all"
          @click="clicked">
          <el-icon class="group-hover:rotate-45">
            <Back /> 
          </el-icon>
          {{ $t('main.back') }}
        </button>
      </div>
      <div class="flex justify-between items-stretch gap-8 my-5 max-md:flex-col">
        <div class="flex-1 min-h-[450px] max-md:p-3 max-md:min-h-[250px]">
          <h1 class="my-6 text-xl font-bold">{{ activeTitle }}</h1>
          <MapsRepablic @hoverMap="changeTitle" @clickMap="clickedMap" v-if="activemap == 'rpb'" />
          <mapsSamarqand @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 18" />
          <mapsNavoi @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 12" />
          <mapsAndijan @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 3" />
          <mapsFergana @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 30" />
          <mapsNamangan @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 14" />
          <mapsToshvil @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 27" />
          <mapsToshcity @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 26" />
          <mapsJizzakh @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 8" />
          <mapsSirdarya @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 24" />
          <mapsSurxondarya @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 22" />
          <mapsQashqadaryo @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 10" />
          <mapsBuxoro @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 6" />
          <mapsQqrepublic @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 35" />
          <mapsKhorezm @hoverMap="changeTitle" @clickMap="districtClick" v-if="activemap == 33" />
        </div>
        <div class="flex-1 my-6">
          <div class="w-full  h-full" v-if="!all_pending && !all_erros">
            <div class="px-3">
              <h1 class="text-lg font-bold text-start text-black mb-1">{{ all_datas.name }}</h1>
              <div class="flex justify-between gap-1 w-full items-center flex-wrap">
                <p class="font-medium text-sm min-w-[45%] flex-1">{{ $t('main.total') }}: <span class="text-gray-600">{{
                  all_datas.all_categories }}</span> </p>
                <p class="font-medium text-sm min-w-[45%] flex-1" v-if="step == 1">{{ $t('main.regions_count') }}: <span
                    class="text-gray-600">{{ all_datas.all_regions }}</span> </p>
                <p class="font-medium text-sm min-w-[45%] flex-1" v-if="step <= 2">{{ $t('main.districts_count') }}: <span
                    class="text-gray-600">{{ all_datas.all_districts }}</span></p>
                <p class="font-medium text-sm min-w-[45%] flex-1" v-if="step <= 3">{{ $t('main.neighborhoods_count') }}: <span
                    class="text-gray-600">{{ all_datas.all_mahallas }}</span> </p>
              </div>
            </div>
            <div class="flex flex-col justify-start gap-2 my-2 items-start max-h-[400px] overflow-y-auto scroll-hiddin p-3">
              <div v-for="(item, i) in all_datas.regions" :key="i" 
              class="w-full hover:scale-105 cursor-pointer hover:shadow-md transition duration-300 ease-in-out flex justify-between text-black bg-gray-100 py-2 px-4 rounded-lg"
              @click="SetMap(item)"
              v-show="item.count"
              >
                <span class="flex justify-center items-center gap-1"> 
                  <span class="h-3 w-3 p-1 inline-block rounded-full bg-green-600 mr-1"></span> {{ item.name }}
                </span>
                <span>{{ item.count }}</span>
              </div>
            </div>
          </div>
          <div v-if="all_erros" class="text-red-500 text-md h-full flex justify-center items-center">
            {{ $t('main.error_getting_info') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
import { Back } from '@element-plus/icons-vue';

// LANG
const {locale} =useI18n()
const {t} = useI18n()
//data
let filters = reactive({
  region_id: null,
  district_id: null,
});
const districtList = ref(null);
const RegionList = ref(null);
let activemap = ref('rpb');
let step = ref(1);
let title = reactive({
  name: t('regions.around_republic')
})

//computed
const activeTitle = computed(() => {
  return title.name;
})
const clearFilter = computed(() => {
  let obj = { ...filters }
  const finalObj = Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== null && value.toString().trim() !== '' && value !== undefined));
  return finalObj
}) 

/// fetch
const { data: all_datas, pending: all_pending, refresh: all_refresh, error: all_erros } = await useApiFetch('api/v1/region/specializations', {
  onRequest({ request, options }) {
    options.query ={
      id:route.query.id,
      lang:locale.value,
      ...clearFilter.value
    } 
  },
  lazy: true,
  baseURL: useBaseUrl(),
  transform: (all_datas) => { return all_datas.data }
})
const { data, pending, error, refresh } = await useApiFetch(`/api/v1/only/regions?lang=${locale.value}`,
  {
    lazy: true,
    baseURL: useBaseUrl(),
    transform: (data) => { RegionList.value = data.data }
  })




//methods
const changeTitle = (data) => {
  if (step.value == 1) {
    if (data.name) {
      title.name = data.name;
    }
    else {
      title.name = t('regions.around_republic');
    }
  } else {
    if (step.value == 2) {
      if (filters.region_id && districtList.value) {
        let obj = districtList.value.find((d) => d.id == data.region_id)
        if (obj && obj.name) {
          title.name = obj.name;
        } else {
          title.name = RegionList.value.find((d) => d.id == filters.region_id)['name'];
        }
      }
    }
  }
}
function clicked() {
  if (step.value == 3) {
    filters.district_id = null;
    step.value = 2;
    changeTitle(filters)
  } else if (step.value == 2) {
    filters.region_id = null;
    step.value = 1
    activemap.value = 'rpb';
    title.name = t('regions.around_republic');
    changeTitle(filters);
  }
  all_refresh();
}
function clickedMap(param) { 
  activemap.value = param.region_id;
  title.name = param.name;
  step.value = 2;
  filters.region_id = param.region_id;
}
function districtClick(param) { 
  filters.district_id = param.region_id;
  title.name = districtList.value.find((d) => d.id == param.region_id)['name'];
  step.value = 3;
  all_refresh()
}


function SetMap(item){
  if(step.value==1){
    activemap.value = item.id;
    title.name = item.name;
    step.value = 2;
    filters.region_id = item.id;
  }
  else if(step.value==2){
    filters.district_id = item.id;
    title.name = districtList.value.find((d) => d.id == item.id)['name'];
    step.value = 3;
    all_refresh()
  }
}

//watch

watch(() => filters.region_id, async (newVal) => {
  if (newVal) {
    // const { data, pending, error, refresh } = await useApiFetch(`/api/v1/districts?region_id=${newVal}`,
    //   {
    //     lazy: true,
    //     baseURL: useBaseUrl(),
    //     transform: (data) => { districtList.value = data.data }
    //   })
    await all_refresh()
    await useApi(`/api/v1/districts?region_id=${newVal}&lang=${locale.value}`).then((res) => {
      districtList.value = res.data;
      window.scrollTo(0, 0)
    })
  }
})
</script>

<style scoped>
.scroll-hiddin::-webkit-scrollbar {
  display: none
}
</style>