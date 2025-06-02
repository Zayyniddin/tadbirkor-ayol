<template>
  <div>
    <NuxtLayout />
  </div>
</template>
<script setup>
const dictionaryStore = useDictionaryStore()
const { get_regions } = dictionaryStore
const {locale}=useI18n()
onBeforeMount(() => {
  get_regions(locale.value) 
})
</script>