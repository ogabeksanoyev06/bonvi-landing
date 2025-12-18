<template>
    <button class="flex items-center justify-center gap-2
           bg-[linear-gradient(180deg,#0083FF_0%,#001D88_100%)]
           shadow-[0_284px_80px_rgba(1,113,234,0.01),0_182px_73px_rgba(1,113,234,0.06),0_102px_61px_rgba(1,113,234,0.10),0_45px_45px_rgba(1,113,234,0.28),0_11px_25px_rgba(1,113,234,0.10)]
           rounded-full px-4 py-3 transition-300 active:scale-95" @click="$emit('click')">
        <span v-if="text" class="text-white text-sm font-semibold leading-140 font-adero-trial">
            {{ text }}
        </span>

        <NuxtImg v-if="icon" :src="icon" :alt="iconAlt" class="size-6 aspect-square" />
    </button>
</template>

<script setup lang="ts">
interface Props {
    text?: string
    icon?: string
    iconAlt?: string
}

withDefaults(defineProps<Props>(), {
    iconAlt: 'button icon',
})
</script>
