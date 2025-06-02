<template>
	<el-form
		ref="ruleFormRef"
		:model="ruleForm"
		:rules="rules"
		label-position="top"
		label-width="auto"
		size="large"
	>
		<div class="flex flex-col gap-4">
			<el-form-item label="F.I.Sh" prop="full_name">
				<el-input v-model="ruleForm.full_name" />
			</el-form-item>

			<el-form-item label="Biznes nomi" prop="business_name">
				<el-input v-model="ruleForm.business_name" />
			</el-form-item>

			<el-form-item label="Telfon raqam" prop="mobile_phone">
				<el-input placeholder="+998 9" v-model="ruleForm.mobile_phone" />
			</el-form-item>

			<el-form-item label="Elektron pochta manzili" prop="email">
				<el-input placeholder="info@gmail.com" v-model="ruleForm.email" />
			</el-form-item>

			<el-form-item label="Faoliyat sohasi" prop="activity">
				<el-input placeholder="Tadbirkorlik" v-model="ruleForm.activity" />
			</el-form-item>

			<el-form-item label="Qaysi soha bo’yicha" prop="direction">
				<el-input placeholder="Dasturchi" v-model="ruleForm.direction" />
			</el-form-item>

			<el-form-item label="Muammoni batafsil tasnifi" prop="description">
				<el-input
					type="textarea"
					:rows="4"
					placeholder="Muammoni yozing"
					v-model="ruleForm.description"
				/>
			</el-form-item>
		</div>

		<el-form-item class="mt-8">
			<button
				type="submit"
				@click="submitForm($event)"
				class="bg-[#02c6b8] flex items-center gap-1 px-3 text-white rounded-xl"
			>
				Batafsil ma’lumot
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

const ruleForm = reactive({
	type: 'question',
	full_name: '',
	mobile_phone: '',
	business_name: '',
	email: '',
	direction: '',
	activity: '',
	resume: '',
	description: '',
})

const rules = reactive({
	full_name: [
		{ required: true, message: 'Iltimos, F.I.Sh kiriting', trigger: 'blur' },
		{ min: 3, message: "Kamida 3 ta belgi bo'lishi kerak", trigger: 'blur' },
	],
	mobile_phone: [
		{
			required: true,
			message: 'Iltimos, telefon raqamini kiriting',
			trigger: 'blur',
		},
],
	business_name: [
		{
			required: true,
			message: 'Iltimos, biznes nomini kiriting',
			trigger: 'blur',
		},
	],
	direction: [
		{
			required: true,
			message: 'Iltimos, yo‘nalishni kiriting',
			trigger: 'blur',
		},
	],
	activity: [
		{
			required: true,
			message: 'Iltimos, faoliyat turini kiriting',
			trigger: 'blur',
		},
	],
	description: [
		{ required: true, message: 'Iltimos, muammoni kiriting', trigger: 'blur' },
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
			console.log('Xatolik bor:', fields)
		}
	})
}

const resetForm = () => {
	if (!ruleFormRef.value) return
	ruleFormRef.value.resetFields()
}
</script>
