<template>
    <div class="w-full relative">
        <el-input v-model="name" placeholder="Rezume (.pdf)" size="large" :readonly="true" :disabled="loading">
            <template #suffix>
                <div class="relative h-full flex items-center">
                    <button type="button"
                        class="h-8 w-8 bg-green-600 rounded-xl text-base p-1 flex items-center justify-center text-white font-bold">
                        <el-icon v-show="loading" class="animate-spin"><Loading /></el-icon>
                        <el-icon v-show="!loading"  ><Upload  /></el-icon>
                    </button>
                </div>
            </template>
        </el-input>
        <input type="file" class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" @change="UploadFile" accept=".pdf" :disabled="loading" />
    </div>
</template>
<script setup>
import { Loading, Upload } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
const name = ref('')
const loading=ref(false)

const emit = defineEmits(['update:modelValue'])

// PROPS
const props = defineProps({ 
    modelValue: {
        type: String,
        default: ''
    }
})





// METHODS

function UploadFile(e){
    const file =e.target.files[0]
    let data=new FormData()
    data.append('file', file)
    loading.value=true
    $fetch(`https://cabinet.loyihalar-fabrikasi.uz/files/upload/category/vacancy_resume`, {method:'POST', body:data})
    .then((res)=>{ 
        emit('update:modelValue', res.id)
        name.value=file.name    
        loading.value=false
    })
    .catch((e)=>{
        loading.value=false
        ElNotification({
            title: 'Xatolik',
            message: "Ma'lumot yuklashda xatolik yuzberdi.",
            type: 'error',
        })
    })
}

</script>