<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CountrySelect from '~/components/base/CountrySelect.vue'

import FormModal from '~/components/sections/form/FormModal.vue'

const isOpen = ref(false)

const menuItems = [
	{ label: 'products', href: '#products' },
	{ label: 'advantages', href: '#about' },
	{ label: 'why_bonvi', href: '#why' },
	{ label: 'faq', href: '#faq' }
]

const isMenuOpen = ref(false)
const isSticky = ref(false)
const isContactModalOpen = ref(false)

const openContactModal = () => {
	isContactModalOpen.value = true
}

const handleScroll = () => {
	isSticky.value = window.scrollY > 50
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<template>
	<header
		:class="[
			'z-50',
			isSticky
				? '!fixed top-0 left-0 w-full rounded-none !bg-dark/95 backdrop-blur-lg py-3 px-6 shadow-2xl'
				: 'relative glass-border p-2 pr-6 lg:px-6 lg:py-4 rounded-full backdrop-blur-sm'
		]"
	>
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<nav 
			class="flex items-center w-max gap-10 rounded-full"
			:class="isSticky ? 'px-0 py-0' : 'glass-border px-2 py-2 lg:px-6 lg:py-4'"
		>
			<a href="#hero" class="z-50">
				<img
					:class="[isSticky ? 'w-16 lg:w-20 mx-2 my-1' : 'max-lg:w-20 max-lg:mx-4 max-lg:my-2', isSticky ? 'scale-95' : 'scale-100']"
					src="/images/logo.svg"
					width="95"
					height="28"
					alt="Logo"
				/>
			</a>

			<ul class="hidden lg:flex items-center gap-6">
				<li
					v-for="(item, index) in menuItems"
					:key="item.label"
					class="text-white relative group text-sm leading-140 font-semibold transition-all duration-300"
					:style="{ transitionDelay: `${index * 50}ms` }"
				>
					<a :href="item.href" class="font-adero-trial transition-colors duration-300 hover:text-blue">
						{{ $t(item.label) }}
						<span class="absolute left-0 -bottom-2 h-[3px] w-full origin-left scale-x-0 rounded-full bg-blue transition-transform duration-300 group-hover:scale-x-100"></span>
					</a>
				</li>
			</ul>
		</nav>

		<div class="flex items-center gap-4 transition-all duration-500 ease-in-out">
			<div class="hidden lg:flex gap-4 items-center">
				<div class="transition-all duration-300 hover:scale-105">
					<CountrySelect />
				</div>
				<div class="transition-all duration-300 hover:scale-105">
<<<<<<< HEAD
					<BaseMainButton :text="$t('contact')" icon="/images/call.svg" @click="openContactModal" />
=======
					<BaseMainButton :text="$t('contact')" icon="/images/call.svg" @click="isOpen = true" />
>>>>>>> 24bdf1230a13af07a1ebc7eeb9bd6fba30c42af6
				</div>
			</div>

			<button @click="toggleMenu" class="lg:hidden text-white z-50 focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95">
				<svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
				<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
<<<<<<< HEAD
		</div>
=======
		<FormModal v-model="isOpen" @close="show = false" />
>>>>>>> 24bdf1230a13af07a1ebc7eeb9bd6fba30c42af6
	</header>

	<BaseContactModal v-model="isContactModalOpen" />

	<!-- Mobile Menu -->
	<Transition
		enter-active-class="transition-all duration-500 ease-out"
		leave-active-class="transition-all duration-400 ease-in"
		enter-from-class="translate-x-full opacity-0"
		enter-to-class="translate-x-0 opacity-100"
		leave-from-class="translate-x-0 opacity-100"
		leave-to-class="translate-x-full opacity-0"
	>
		<div v-if="isMenuOpen" class="fixed inset-0 bg-dark/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center lg:hidden">
			<ul class="flex flex-col items-center gap-8 mb-10">
				<li
					v-for="(item, index) in menuItems"
					:key="item.label"
					class="text-white text-2xl font-semibold transition-all duration-300 hover:scale-110 hover:text-blue"
					:style="{
						animation: isMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
					}"
				>
					<a :href="item.href" @click="toggleMenu" class="font-adero-trial">{{ $t(item.label) }}</a>
				</li>
			</ul>

			<div
				class="flex flex-col items-center gap-6"
				:style="{
					animation: isMenuOpen ? 'slideIn 0.5s ease-out 0.4s both' : 'none'
				}"
			>
				<CountrySelect />
				<BaseMainButton :text="$t('contact')" icon="/images/call.svg" @click="openContactModal" />
			</div>
		</div>
	</Transition>
</template>

<style scoped>
@keyframes slideIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

header {
	will-change: transform, background-color, border-radius;
}

nav ul li a {
	position: relative;
	overflow: hidden;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.8;
	}
}
</style>
