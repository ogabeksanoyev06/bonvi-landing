<script setup>
import CountrySelect from '~/components/base/CountrySelect.vue'

const menuItems = [
	{ label: 'Mahsulotlar', href: '#' },
	{ label: 'Afzalliklar', href: '#' },
	{ label: 'Nega BONVI?', href: '#' },
	{ label: 'FAQ', href: '#' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
	document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<template>
	<section class="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
		<div
			class="relative bg-dark w-full h-full min-h-[calc(100vh-32px)] sm:min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] p-3 md:p-6 overflow-hidden rounded-[50px] flex flex-col">

			<header class="relative z-50 w-full crazy-border flex justify-between">

				<nav class="flex items-center w-max gap-10 crazy-border px-2 py-2 lg:px-6 lg:py-4">
					<div class="z-50">
						<img src="/images/logo.svg" width="95" height="28" alt="Logo">
					</div>

					<ul class="hidden lg:flex items-center gap-6">
						<li v-for="item in menuItems" :key="item.label"
							class="text-white relative group text-sm leading-140 font-semibold">
							<a :href="item.href" class="font-adero-trial">
								{{ item.label }}
								<span
									class="absolute left-0 -bottom-2 h-[3px] w-full origin-left scale-x-0 rounded-full bg-blue transition-transform duration-300 group-hover:scale-x-100"></span>
							</a>
						</li>
					</ul>
				</nav>

				<div class="flex items-center gap-4">

					<div class="hidden lg:block">
						<CountrySelect />
					</div>

					<button
						class="px-4 py-2 text-sm font-semibold text-white bg-blue rounded-full transition duration-200 hover:bg-blue-600 focus:outline-none hidden lg:block">
						Bog'lanish
					</button>

					<button @click="toggleMenu" class="lg:hidden text-white z-50 focus:outline-none">
						<svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="fixed inset-0 bg-dark/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden"
					:class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">

					<ul class="flex flex-col items-center gap-8 mb-10">
						<li v-for="item in menuItems" :key="item.label" class="text-white text-2xl font-semibold">
							<a :href="item.href" @click="toggleMenu">{{ item.label }}</a>
						</li>
					</ul>

					<div class="flex flex-col items-center gap-6">
						<CountrySelect />

						<button
							class="mt-4 px-6 py-3 text-lg font-bold text-white bg-blue rounded-full transition duration-200 hover:bg-blue-600 focus:outline-none w-max">
							Bog'lanish
						</button>
					</div>

				</div>
			</header>
			<main class="relative z-10 flex-grow flex items-center justify-center w-full">
				<div
					class="flex flex-col lg:flex-row gap-8 px-6 lg:gap-16 items-center justify-center w-full mx-auto mt-10 lg:mt-0">

					<div
						class="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6 text-center lg:text-left order-2 lg:order-1">
						<h1 class="text-white font-adero-trial text-3xl sm:text-4xl lg:text-5xl leading-tight">
							Bonvi - qulay, sifatli va hamyonbop!
						</h1>
						<p class="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
							Eng sifatli va xilma-xil mahsulotlar faqat bizda. Biz bilan
							bog’lanib orzuyingizdagi skuterga ega bo’ling.
						</p>


						<div class="mt-4 flex justify-center lg:justify-start">
							<button
								class="px-8 py-3 bg-blue text-white font-bold rounded-full hover:bg-blue-600 transition duration-300">
								Hozir Buyurtma Beting
							</button>
						</div>
					</div>

					<div class="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
						<img src="/images/bonvi-logo@2x.png" width="576" height="576" alt="Bonvi Product"
							class="lg:w-full h-auto object-contain">
					</div>
				</div>
			</main>

			<img class="absolute left-0 top-0 w-full h-full object-cover pointer-events-none z-0 opacity-50 lg:opacity-100"
				src="/images/hero-gradient-bg.png" alt="">
		</div>
	</section>
</template>