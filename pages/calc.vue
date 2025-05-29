<template>
  <div class="w-full">
    <div class="flex flex-col gap-8  py-8">
      <HomeCalcMainComponent />
      <HomeCreaditCalculator id="creditcalculator" :showtitle="false" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom-layout",
});
</script>

<style lang="scss" scoped></style>
