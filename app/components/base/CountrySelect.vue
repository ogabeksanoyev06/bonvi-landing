<template>
	<div class="relative w-max font-sans country-select-root">
		<button
			@click="isOpen = !isOpen"
			class="w-full flex items-center justify-between p-3 rounded-full glass-border text-white shadow-lg transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			<div class="flex items-center space-x-3">
				<div class="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
					<img v-if="selectedCountry.flag" :src="selectedCountry.flag" :alt="selectedCountry.name" class="w-full h-full object-cover" />
					<span v-else class="text-xs">{{ selectedCountry.code }}</span>
				</div>

				<span class="text-sm font-adero-trial font-semibold tracking-wider">{{ selectedCountry.code }}</span>
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
			<ul v-if="isOpen" class="glass-border !absolute z-10 w-full mt-1.5 !bg-dark rounded-xl shadow-2xl max-h-60 overflow-auto focus:outline-none">
				<li
					v-for="country in countries"
					:key="country.code"
					@click="selectCountry(country)"
					class="flex items-center space-x-3 p-2.5 cursor-pointer text-white hover:!bg-gray/10 transition duration-150"
					:class="{ 'bg-gray-800 font-bold': country.code === selectedCountry.code }"
				>
					<div class="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
						<img v-if="country.flag" :src="country.flag" :alt="country.name" class="w-full h-full object-cover" />
						<span v-else class="text-xs">{{ country.code }}</span>
					</div>

					<span>{{ country.code }}</span>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
const countries = [
	{ code: 'UZB', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/64px-Flag_of_Uzbekistan.svg.png' },
	{ code: 'ENG', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/64px-Flag_of_the_United_States.svg.png' },
	{ code: 'CAN', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/64px-Flag_of_Canada_%28Pantone%29.svg.png' },
	{ code: 'GB', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/64px-Flag_of_the_United_Kingdom.svg.png' }
]

const isOpen = ref(false)
const selectedCountry = ref(countries.find((c) => c.code === 'UZ') || countries[0])

const selectCountry = (country) => {
	selectedCountry.value = country
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
