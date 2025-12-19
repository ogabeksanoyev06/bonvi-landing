<template>
	<div class="relative w-max font-sans country-select-root">
		<button
			@click="isOpen = !isOpen"
			class="w-full flex items-center justify-between p-3 rounded-full glass-border text-white shadow-lg transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
			:class="{'!bg-white !text-blue' : isOpen}"
		>
			<div class="flex items-center space-x-3">
				<div class="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
					<img v-if="currentLang.flag" :src="currentLang.flag" :alt="currentLang.name" class="w-full h-full object-cover" />
					<span v-else class="text-xs">{{ currentLang.code }}</span>
				</div>

				<span class="text-sm font-adero-trial font-semibold tracking-wider uppercase">{{ currentLang.code }}</span>
			</div>

			<svg
				:class="{ 'rotate-180': isOpen }"
				class="w-5 h-5 transition-transform duration-300 ml-2"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		</button>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<ul v-if="isOpen" class="glass-border !absolute -left-8 z-10 w-40 mt-1.5 !bg-dark rounded-4xl shadow-2xl max-h-60 overflow-auto focus:outline-none">
				<li
					v-for="lang in availableLanguages"
					:key="lang.code"
					@click="setLanguage(lang.code)"
					class="flex items-center justify-between space-x-3 p-2.5 cursor-pointer text-white hover:!bg-gray/10 transition duration-150"
					:class="{ 'bg-white !text-dark font-bold': lang.code === locale }"
				>
					<div class="flex items-center space-x-2">
						<div class="w-7 h-7 rounded-full overflow-hidden flex items-center">
							<img v-if="lang.flag" :src="lang.flag" :alt="lang.name" class="w-full h-full object-cover" />
							<span v-else class="text-xs">{{ lang.code }}</span>
						</div>

						<span class="uppercase">{{ lang.code }}</span>
					</div>

					<img v-if="lang.code === locale" width="20" height="20" src="/images/langs/tick.svg" class="shrink-0" alt="">
				</li>
			</ul>
		</transition>
	</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
const { locale, setLocale } = useI18n()

const languages = [
	{ code: 'uz', name: 'Uzbek', flag: '/images/langs/uz.svg' },
	{ code: 'en', name: 'English', flag: '/images/langs/en.svg' },
	{ code: 'ru', name: 'Russian', flag: '/images/langs/ru.svg' },
	{ code: 'cn', name: 'Chinese', flag: '/images/langs/china.svg' }
]

const isOpen = ref(false)

const currentLang = computed(() => languages.find(l => l.code === locale.value) || languages[0])
const availableLanguages = computed(() => languages)

const setLanguage = (code) => {
	setLocale(code)
	isOpen.value = false
}

const closeOnOutsideClick = (event) => {
	if (!event.target.closest('.country-select-root')) {
		isOpen.value = false
	}
}

watch(isOpen, (newVal) => {
	if (newVal) {
		document.addEventListener('click', closeOnOutsideClick)
	} else {
		document.removeEventListener('click', closeOnOutsideClick)
	}
})
</script>
