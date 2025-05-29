<template>
    <div class="scroll default fixed top-0  left-0 z-[1000]   w-[100vw] h-[100vh] p-3"  :class="active ? 'flex' : 'hidden'">
        <div class="w-full min-h-fit ui-modal ">
            <div class="w-full flex items-center min-h-full justify-center pb-[100px]">
                <div class="relative bg-white  z-10 rounded-xl w-full min-h-fit" :style="{ 'max-width': maxWidth }">
                    <div class="w-full p-5 pb-0 flex justify-between items-start gap-2">
                        <h1 class="font-bold text-xl text-gray-700" v-if="title">{{ title }}</h1>
                        <button @click="active = false; $emit('close')" type="button"
                            class="end-2.5 text-gray-400 bg-gray-100 hover:bg-green-200 hover:text-green-800 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div class="w-full">
                        <slot></slot>
                    </div>
                </div>
                <div @click="active = false; $emit('close')"
                    class="fixed w-full h-full bg-black opacity-[0.5] left-0 top-0 z-0"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    maxWidth: {
        type: String,
        default: '400px'
    }
})

const active = ref(props.modelValue != undefined ? props.modelValue : 0)
watch(() => active.value, () => {
    emit('update:modelValue', active.value)
    if (active.value) {
        document.body.style.overflowY = 'hidden';
    }
    else {
        document.body.style.overflowY = 'auto';
    }
})
watch(() => props.modelValue, () => {
    active.value = props.modelValue
})

</script>