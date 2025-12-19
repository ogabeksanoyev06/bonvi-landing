<template>
  <BaseModal v-model="isOpen" maxWidth="md">
    <div class="p-6">
      <div class="relative flex flex-col items-center gap-4 pb-4">
        <button
          class="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          @click="isOpen = false"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center p-2">
          <img src="/images/logo.svg" alt="Logo" class="w-full h-full" />
        </div>

        <h3 class="text-xl font-bold text-center text-gray-900 dark:text-white">
          {{ t('modal_title') }}
        </h3>
      </div>

      <form class="space-y-4 pt-4" @submit.prevent="handleSubmit">
        <div class="space-y-1">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('input_name') }}
          </label>
          <input 
            id="name"
            v-model="state.name" 
            type="text"
            :placeholder="t('input_name_placeholder')" 
            class="w-full px-4 py-2 bg-gray-50 dark:bg-dark-light border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
        </div>

        <div class="space-y-1">
          <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('input_phone') }}
          </label>
          <input 
            id="phone"
            v-model="state.phone" 
            type="tel"
            placeholder="+998" 
            class="w-full px-4 py-2 bg-gray-50 dark:bg-dark-light border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            :class="{ 'border-red-500': errors.phone }"
          />
          <p v-if="errors.phone" class="text-xs text-red-500 mt-1">{{ errors.phone }}</p>
        </div>

        <div class="space-y-1">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ t('input_email') }}
          </label>
          <input 
            id="email"
            v-model="state.email" 
            type="email"
            :placeholder="t('input_email_placeholder')" 
            class="w-full px-4 py-2 bg-gray-50 dark:bg-dark-light border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
        </div>

        <button 
          type="submit" 
          class="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-button"
          :disabled="isSubmitting"
        >
          <span>{{ t('submit_btn') }}</span>
          <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          <div v-else class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </button>
      </form>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { z } from 'zod'

const { t } = useI18n()

const isOpen = defineModel<boolean>({ default: false })

const schema = z.object({
  name: z.string().min(1, t('validation_name')),
  phone: z.string().min(1, t('validation_phone')),
  email: z.string().email(t('validation_email')),
})

const state = reactive({
  name: '',
  phone: '',
  email: '',
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
})

const isSubmitting = ref(false)

function validate() {
  errors.name = ''
  errors.phone = ''
  errors.email = ''
  
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
    console.log('Form submitted:', state)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    isOpen.value = false
    
    // Reset form
    state.name = ''
    state.phone = ''
    state.email = ''
  } catch (error) {
    console.error('Submission failed:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>