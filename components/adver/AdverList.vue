<template>
    <div class="w-full">
    <div v-if="['INPRODUCTBANNER', 'SECONDBANNER'].includes(props.type)" class="w-full flex gap-3">
        <RowAdver v-for="(item, i) in adsList" :key="i" :adData="item" @click="SetClick(item)"  /> 
    </div>
    <div v-if="['INLIST'].includes(props.type)" class="w-full flex gap-3 min-h-full bg-red-300">
        <ColumnAdver v-for="(item, i) in adsList" :key="i" :adData="item" @click="SetClick(item)"  /> 
    </div>
    <div v-if="['INCAROUSEL'].includes(props.type)" class="w-full flex gap-3 min-h-full bg-red-300">
        <ColumnAdver v-for="(item, i) in adsList" :key="i" :adData="item" @click="SetClick(item)"  /> 
    </div>
</div>
</template>
<script setup>
import RowAdver from './RowAdver.vue'
import ColumnAdver from './ColumnAdver.vue'; 
// PROPS
const props = defineProps(
    {
        type: {
            type: String,
            default: "SECONDBANNER"
        },  
        amount:{
            type: String,
            default: "1"
        }
    }
)

// DATA
const adsList=ref([])

// COMPUTED
const filter = computed(()=>{
    let data={}
    if(props.type){
        data.type=props.type
    }
    if(props.amount){
       if( window.innerWidth > 768){
            data.num=props.amount
       }
       else{
        data.num=1
       }
    }
    return data
})


// METHODS
function GetAds(){
    $fetch(`https://api.cabinet.smart-market.uz/api/v1/advertising/show`, {query:filter.value})
    .then((res)=>{adsList.value=res.data.results})
    .catch((e)=>{
        console.log(e)
    })
} 

function SetClick(item){
    $fetch(`https://api.cabinet.smart-market.uz/api/v1/advertising/show`, {method:'POST', body:{ad_id:item.id}}) 
}



// ACTION
onMounted(()=>{
    GetAds()
})



</script>