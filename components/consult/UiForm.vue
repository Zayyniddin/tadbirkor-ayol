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
			<el-form-item label="F.I.Sh" prop="name">
				<el-input v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="F.I.Sh" prop="name">
				<el-input v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Biznes nomi" prop="name">
				<el-input v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Telefon raqam" prop="name">
				<el-input placeholder="+998 9" v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Elektron pochta manzili" prop="name">
				<el-input placeholder="info@gmail.com" v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Faoliyat sohasi" prop="name">
				<el-input placeholder="Tadbirkorlik" v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Qaysi soha bo’yicha" prop="name">
				<el-input placeholder="Dasturchi" v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item label="Muammoni batafsil tasnifi" prop="name">
				<el-input
					type="textarea"
					:rows="4"
					placeholder="Muammoni yozing"
					v-model="ruleForm.name"
				/>
			</el-form-item>
		</div>
		<el-form-item class="mt-8">
			<!-- -->
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
	name: '',
	region: '',
	count: '',
	date1: '',
	date2: '',
	delivery: false,
	location: '',
	type: [],
	resource: '',
	desc: '',
})

const rules = reactive({
	name: [
		{ required: true, message: 'Please input Activity name', trigger: 'blur' },
		{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
	],
	region: [
		{
			required: true,
			message: 'Please select Activity zone',
			trigger: 'change',
		},
	],
	count: [
		{
			required: true,
			message: 'Please select Activity count',
			trigger: 'change',
		},
	],
	date1: [
		{
			type: 'date',
			required: true,
			message: 'Please pick a date',
			trigger: 'change',
		},
	],
	date2: [
		{
			type: 'date',
			required: true,
			message: 'Please pick a time',
			trigger: 'change',
		},
	],
	location: [
		{
			required: true,
			message: 'Please select a location',
			trigger: 'change',
		},
	],
	type: [
		{
			type: 'array',
			required: true,
			message: 'Please select at least one activity type',
			trigger: 'change',
		},
	],
	resource: [
		{
			required: true,
			message: 'Please select activity resource',
			trigger: 'change',
		},
	],
	desc: [
		{ required: true, message: 'Please input activity form', trigger: 'blur' },
	],
})

const submitForm = async evt => {
	evt.preventDefault()
	if (!ruleFormRef.value) return
	await ruleFormRef.value.validate((valid, fields) => {
		if (valid) {
			console.log('submit!')
		} else {
			console.log('error submit!', fields)
		}
	})
}

const resetForm = formEl => {
	if (!formEl) return
	ruleFormRef.value.resetFields()
}
</script>
