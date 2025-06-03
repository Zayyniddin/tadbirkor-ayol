<template>
	<p class="text-3xl">Ishga joylashish bo'yicha ma'lumot qoldirish</p>
	<el-form
		ref="ruleFormRef"
		:model="ruleForm"
		:rules="rules"
		label-position="top"
		label-width="auto"
		size="large"
    class='mt-4'
	>
		<div class="flex flex-col gap-4">
			<el-form-item label="F.I.Sh" prop="fullName">
				<el-input v-model="ruleForm.fullName" />
			</el-form-item>

			<el-form-item label="Telefon raqam" prop="phone">
				<el-input v-model="ruleForm.phone" />
			</el-form-item>

			<el-form-item label="Resumeni yuklash" prop="resume">
				<div class="flex items-center gap-4 w-full">
					<label
						for="file"
						class="cursor-pointer border border-[#e9e9e9] max-w-[200px] w-full relative px-4 py-2 h-[42px] flex items-center gap-2 justify-center rounded-lg"
					>
						<CustomIcon name="icon-upload" class="!w-5 !h-5" /> Yuklash
						<input
							id="file"
							type="file"
							@change="UploadFile"
							class="absolute inset-0 opacity-0 w-full h-full"
						/>
					</label>
					<p class="text-[#667085] text-base">1 mb dan 10 mb gacha</p>
				</div>
				<p v-if="resumeName" class="text-sm font-semibold mt-2 text-green-600">{{ resumeName }}</p>
			</el-form-item>
		</div>

		<el-form-item class="mt-8">
			<button
				type="submit"
				@click="submitForm($event)"
				class="bg-[#02c6b8] flex w-full justify-center text-sm items-center gap-1 px-3 py-2 text-white rounded-xl"
			>
				Yuborish
				<svg
					width="7"
					height="14"
					viewBox="0 0 7 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.682617 12.9401L5.57262 8.05006C6.15012 7.47256 6.15012 6.52756 5.57262 5.95006L0.682617 1.06006"
						stroke="white"
						stroke-width="1.125"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</el-form-item>
	</el-form>
</template>


<script setup>
const ruleFormRef = ref()
const resumeName = ref('')
const ruleForm = reactive({
  type: 'resume',
	fullName: '',
	phone_number: '',
	resume: null,
})




const rules = reactive({
	fullName: [
		{ required: true, message: 'Iltimos, F.I.Sh kiriting', trigger: 'blur' },
		{ min: 3, max: 50, message: 'Uzoqlik 3 dan 50 gacha bo’lishi kerak', trigger: 'blur' },
	],
	phone_number: [ 
		{ required: true, message: 'Iltimos, telefon raqam kiriting', trigger: 'blur' },
		{
			message: 'Format: +998(XX)XXX-XX-XX',
			trigger: 'blur',
		},
	],
	resume: [
		{ required: true, message: 'Iltimos, fayl yuklang', trigger: 'change' },
	],
})

const submitForm = async evt => {
	evt.preventDefault()
	if (!ruleFormRef.value) return

	await ruleFormRef.value.validate((valid, fields) => {
		if (valid) {
			useApi('/api/v1/question', {
				method: 'POST',
				body: ruleForm,
			}).then(() => {
				ElNotification({
					title: 'Yuborildi!',
					message: 'Ma’lumotlaringiz muvaffaqiyatli yuborildi.',
					type: 'success',
					duration: 3000,
				})
				resetForm()
			})
		} else {
			console.log('error submit!', fields)
		}
	})
}

function UploadFile(e) {
	const file = e.target.files[0]
	let data = new FormData()
	data.append('file', file)

	$fetch(`https://tadbirkor-ayol.uz/files/upload/category/resume`, {
		method: 'POST',
		body: data,
	})
		.then(res => {
			ruleForm.resume = res.id
			resumeName.value = file.name 
		})
		.catch(() => {
			ElNotification({
				title: 'Xatolik',
				message: "Ma'lumot yuklashda xatolik yuzberdi.",
				type: 'error',
			})
		})
}

const resetForm = () => {
	if (!ruleFormRef.value) return
	ruleFormRef.value.resetFields()
  resumeName.value = ''
}
</script>
