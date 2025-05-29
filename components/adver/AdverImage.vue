<template>
    <NuxtImg v-if="url" :src="url" />
</template>
   
<script setup>
    const props = defineProps({
        uid: {
            type: String, 
            required: true,
        },
        source:{
            type:String,
            default:'default'
        }
    });
    const url=computed(()=>{ 
        if(props.uid&&props.uid.includes('http')){
            return props.uid
        }
        else if(props.uid && props.uid!=undefined){
                return `https://api.cabinet.smart-market.uz/uploads/images/${props.uid}`
            }
        else{
            return ''
        }
            
         
        
    }) 
</script>