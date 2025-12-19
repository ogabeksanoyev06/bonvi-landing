<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-md' }">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <div class="relative flex flex-col items-center gap-4 py-4">
        <UButton
          icon="i-heroicons-x-mark-20-solid"
          variant="ghost"
          color="neutral"
          class="absolute -top-2 -right-2"
          @click="isOpen = false"
        />

        <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center p-2">
          <img src="/images/logo.svg" alt="Logo" class="w-full h-full" />
        </div>

        <h3 class="text-base font-semibold text-center text-gray-900 dark:text-white">
          {{ t('modal_title') }}
        </h3>
      </div>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 pt-4"
        @submit="onSubmit"
      >
        <UFormField :label="t('input_name')" name="name">
          <UInput 
            v-model="state.name" 
            :placeholder="t('input_name_placeholder')" 
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('input_phone')" name="phone">
          <UInput 
            v-model="state.phone" 
            placeholder="+998" 
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('input_email')" name="email">
          <UInput 
            v-model="state.email" 
            :placeholder="t('input_email_placeholder')" 
            class="w-full"
          />
        </UFormField>

        <UButton 
          type="submit" 
          block 
          color="neutral" 
          variant="solid"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          class="mt-4"
        >
          {{ t('submit_btn') }}
        </UButton>
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

const isOpen = defineModel<boolean>({ default: false })

const schema = z.object({
  name: z.string().min(1, t('validation_name')),
  phone: z.string().min(1, t('validation_phone')),
  email: z.string().email(t('validation_email')),
})

type Schema = z.output<typeof schema>

const state = reactive({
  name: '',
  phone: '',
  email: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Form submitted:', event.data)
  
  isOpen.value = false
}
</script>