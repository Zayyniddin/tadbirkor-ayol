<template>
    <div class="flex justify-center items-center flex-col gap-5 p-16">
     <IconVacancy />
     <p class="text-center  text-base text-black">{{ title }}</p>
    </div>
</template>

<script setup>
 const props = defineProps({
    title:{
        type: String,
        required: true
    }
 })
</script>

<style lang="scss" scoped>

</style>