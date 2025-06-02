<template>
  <div class="w-full">
    <div class="flex flex-col py-8">
      <MarketBanner />
			<MarketCatagories />
			<MarketPopularProducts />
			<MarketServiceProducts />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
});
</script>

<style lang="scss" scoped></style>
