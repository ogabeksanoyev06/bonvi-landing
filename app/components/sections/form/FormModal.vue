<template>
	<BaseModal v-model="isOpen" maxWidth="md">
		<NuxtImg src="/images/form-modal-bg.svg" alt="" class="absolute inset-0 w-full h-full z-0 object-cover rounded-[inherit]" />

		<div class="relative z-10 p-6">
			<div class="relative flex flex-col items-center gap-4 text-center pb-2">
				<button type="button" class="absolute -top-2 -right-2 p-2 rounded-full bg-gray/70 hover:bg-gray/90 transition-all" @click="isOpen = false" aria-label="Close modal">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#011118"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				<NuxtImg src="/images/form-modal-bonvi-logo.svg" alt="Bonvi Logo" class="size-20 mx-auto object-contain" />

				<h3 class="text-xl font-bold text-dark">
					{{ t('modal_title') }}
				</h3>
			</div>

			<form class="space-y-5 pt-4" @submit.prevent="handleSubmit">
				<div class="space-y-1.5">
					<label for="name" class="block text-base leading-130 text-dark">
						{{ t('input_name') }}
					</label>
					<input
						id="name"
						v-model="state.name"
						type="text"
						:placeholder="t('input_name_placeholder')"
						class="w-full h-11 px-3 bg-gray border border-transparent rounded-2xl focus:border-dark focus:bg-white outline-none transition-300"
						:class="{ '!border-red-500': errors.name }"
					/>
					<p v-if="errors.name" class="text-xs text-red-500 px-1">
						{{ errors.name }}
					</p>
				</div>

				<div class="space-y-1.5">
					<label for="phone" class="block text-base leading-130 text-dark">
						{{ t('input_phone') }}
					</label>
					<div class="relative">
						<div class="flex items-center gap-2 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
								<path
									d="M3 12H21M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M12 21C4.75561 13.08 8.98151 5.7 12 3M12 21C19.2444 13.08 15.0185 5.7 12 3"
									stroke="#676767"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span class="text-base leading-130 text-dark mr-2">+998</span>
						</div>
						<input
							id="phone"
							v-model="state.phone"
							type="tel"
							class="w-full h-11 pl-[84px] px-3 bg-gray border border-transparent rounded-2xl focus:border-dark focus:bg-white outline-none transition-300"
							:class="{ '!border-red-500': errors.phone }"
							@input="handlePhoneInput"
						/>
					</div>
					<p v-if="errors.phone" class="text-xs text-red-500 px-1">
						{{ errors.phone }}
					</p>
				</div>

				<div class="space-y-1.5">
					<label for="email" class="block text-base leading-130 text-dark">
						{{ t('input_email') }}
					</label>
					<input
						id="email"
						v-model="state.email"
						type="email"
						:placeholder="t('input_email_placeholder')"
						class="w-full h-11 px-3 bg-gray border border-transparent rounded-2xl focus:border-dark focus:bg-white outline-none transition-300"
						:class="{ '!border-red-500': errors.email }"
					/>
					<p v-if="errors.email" class="text-xs text-red-500 px-1">
						{{ errors.email }}
					</p>
				</div>

				<button
					type="submit"
					class="w-full mt-2 bg-dark hover:opacity-90 text-white font-semibold h-12 rounded-full flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
					:disabled="isSubmitting"
				>
					<span class="text-sm font-adero-trial uppercase tracking-wide">{{ t('submit_btn') }}</span>
					<NuxtImg v-if="!isSubmitting" src="/images/arrow-right-icon.svg" class="size-6" />
					<div v-else class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
				</button>
			</form>
		</div>
	</BaseModal>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { useApi } from '~/composables/useApi'

const { t } = useI18n()
const toast = useCustomToast()

const isOpen = defineModel<boolean>({ default: false })
const isSubmitting = ref(false)

const schema = z.object({
	name: z.string().min(2, t('validation_name')),
	phone: z.string().length(9, t('validation_phone')),
	email: z.email(t('validation_email'))
})

// 2. State
const state = reactive({
	name: '',
	phone: '',
	email: ''
})

const errors = reactive({
	name: '',
	phone: '',
	email: ''
})

// 3. Phone Masking Logic from V1
const handlePhoneInput = (e: Event) => {
	const target = e.target as HTMLInputElement
	let value = target.value.replace(/\D/g, '')
	if (value.length > 9) {
		value = value.slice(0, 9)
	}
	state.phone = value
}

// 4. Validation & Submission
function validate() {
	// Reset errors
	Object.keys(errors).forEach((key) => (errors[key as keyof typeof errors] = ''))

	const result = schema.safeParse(state)
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			const path = issue.path[0] as keyof typeof errors
			errors[path] = issue.message
		})
		return false
	}
	return true
}

async function handleSubmit() {
	if (!validate()) return

	isSubmitting.value = true

	try {
		const payload = {
			full_name: state.name.trim(),
			email: state.email.trim(),
			phone_number: `+998${state.phone}`
		}

		await useApi().$post('/vikor_uz/contacts', { body: payload })

		toast.showToast(t('success_message'), 'success')

		isOpen.value = false

		Object.assign(state, { name: '', phone: '', email: '' })
	} catch (error: any) {
		console.error('Submission failed:', error)
		toast.showToast(error?.data?.message || t('error_message'), 'error')
	} finally {
		isSubmitting.value = false
	}
}
</script>
