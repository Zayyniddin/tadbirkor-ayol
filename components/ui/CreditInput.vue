<template>
    <div class="w-full flex items-center">
        <input type="text" class="outline-none text-base font-bold flex-1 text-right bg-gray-50 text-gray-600"
            v-model="value" @keypress="keyupNumber" @input="inputValue()" @change="changeValue()">
        <p class="font-bold text-base ml-1 text-gray-600">{{ label }}</p>
    </div>
</template>
<script setup>
// EMIT
const emit = defineEmits(['update:modelValue'])
// PROPS
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: false
    },
    max: {
        type: Number,
        default: 0
    },
    min: {
        type: Number,
        default: 0
    }
})

// DATA
const value = ref(props.modelValue != undefined ? priceFilter(props.modelValue) : '')

// WATCH
watch(() => props.modelValue, () => {
    value.value = priceFilter(props.modelValue)
})
watch(() => props.min, () => { 
   if(value.value){
        let amount = value.value.replace(/ /g, "");
        amount = parseInt(amount)
        if(amount<props.min){
            value.value=props.min+1
            emit('update:modelValue', props.min+1)
        }
   }
   else{
    value.value=props.min
   }
    
})


// METHODS
function keyupNumber(e) {
    if (!(/^[0-9\s]+/.test(e.key))) {
        e.preventDefault()
    }  
}
function inputValue() {
    if (value.value) {
        let amount = value.value.replace(/ /g, "");
        amount = parseInt(amount)
        value.value=priceFilter(amount)
        if (props.max && amount > props.max) { 
            value.value=priceFilter(props.max)
            emit('update:modelValue', props.max) 
        }
        else if (props.min && amount < props.min) { 
            emit('update:modelValue', props.min)
        } 
        else{ 
            emit('update:modelValue', amount)
        }
        
    }
}
function changeValue() {
    let amount = value.value.replace(/ /g, "");
    amount = parseInt(amount)
    if (props.max && amount > props.max) {
        value.value = priceFilter(props.max)
        emit('update:modelValue', props.max)
    }
    else if (props.min && amount < props.min) {
        value.value = priceFilter(props.min)
        emit('update:modelValue', props.min)
    }
    else {
        emit('update:modelValue', amount)
    }
}


</script>