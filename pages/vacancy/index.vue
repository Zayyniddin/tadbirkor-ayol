<template>
  <div class="w-full">
    <section class="w-full flex justify-center py-8 px-3 bg-white">
      <div class="f-container">
        <div class="w-full bg-green-600 p-4 rounded-xl mb-8">
          <h1 class="text-xl font-bold text-center text-white">
            {{ $t("nav.vacancies") }}
          </h1>
        </div>
        <div class="w-full bg-gray-50 p-3 rounded-xl mb-8">
          <p class="mb-4 font-bold">{{ $t("main.filter") }}</p>
          <div class="w-full grid grid-cols-4 gap-3 max-md:grid-cols-2">
            <div class="col-span-1">
              <p class="text-xs mb-1 font-medium">{{ $t("main.region") }}</p>
              <el-select
                v-model="filters.region_id"
                :placeholder="$t('main.region')"
                @change="
                  filters.district_id = '';
                  refresh();
                "
                size="large"
                clearable
              >
                <el-option
                  v-for="(item, i) in regionList"
                  :key="i"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
            <div class="col-span-1">
              <p class="text-xs mb-1 font-medium">{{ $t("main.district") }}</p>
              <el-select
                v-model="filters.district_id"
                :placeholder="$t('main.district')"
                @change="refresh()"
                size="large"
                :disabled="!filters.region_id"
                clearable
              >
                <el-option
                  v-for="(item, i) in districtList"
                  :key="i"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </div>
            <div class="col-span-1">
              <p class="text-xs mb-1 font-medium">{{ $t('adver.search_work') }}</p>
              <el-input
                v-model="filters.search"
                style="width: 240px"
                size="large"
                @input="refresh()"
                :placeholder="`${$t('main.search')}...`"
              >
                <template #prefix>
                  <el-icon class="el-input__icon"><search /></el-icon>
                </template>
              </el-input>
            </div>
          </div>
        </div>
        <div
          v-if="List && List.count"
          class="w-full grid grid-cols-2 gap-3 max-md:grid-cols-1"
        >
          <VacancyCard
            v-for="(item, i) in List.results"
            :key="i"
            :data="item"
          />
        </div>
        <div v-if="!pending && List && List.count==0">
          <Empty :title="`${ $t('main.empty_title') }`" />
        </div>
        <div
          v-if="List && List.count && List.count > 12"
          class="w-full mt-8 flex justify-center"
        >
          <el-pagination
            background
            layout="prev, pager, next"
            v-model:current-page="filters.page"
            :pager-count="5"
            :total="List.count"
            :page-size="filters.page_size"
            @current-change="GetData()"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
// LANG
const { locale } = useI18n();

// STORE
import { useDictionaryStore } from "@/stores/dictionary";
const dictionaryStore = useDictionaryStore();
const { categoryList, regionList } = storeToRefs(dictionaryStore);

// COMPUTED
const filter = computed(() => {
  let data = {};
  if (filters.value.page) {
    data.page = filters.value.page;
  }
  if (filters.value.page_size) {
    data.page_size = filters.value.page_size;
  }

  if (filters.value.region_id) {
    data.region_id = filters.value.region_id;
  }
  if (filters.value.district_id) {
    data.district_id = filters.value.district_id;
  }
  if (filters.value.search) {
    data.search = filters.value.search;
  }

  return data;
});

const districtList = computed(() => {
  let data = [];
  if (filters.value.region_id) {
    regionList.value.forEach((element) => {
      if (element.id == filters.value.region_id) {
        data = element.districts;
      }
    });
  }
  return data;
});

// DATA
const filters = ref({
  page: 1,
  page_size: 12,
  region_id: "",
  district_id: "",
  search:null,
});

const {
  data: List,
  pending,
  error,
  refresh,
} = await useApiFetch(`/api/frontend/v1/women-vacancies`, {
  onRequest({ request, options }) {
    options.query = { ...filter.value, lang: locale.value };
  },
  lazy: true,
  baseURL: useBaseUrl(),
  transform: (List) => {
    return List.data;
  },
});

// METHODS
function GetData() {
  window.scrollTo(0, 0);
  refresh();
}
</script>
