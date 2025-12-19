<template>
	<div ref="cardRef" class="flex flex-col gap-4 lg:gap-0 md:flex-row max-w-[1184px] w-full mx-auto mt-10 lg:mt-[110px]">
		<div
			class="card-1 flex flex-col gap-6 md:flex-1 md:basis-0 bg-black rounded-[32px] lg:rounded-l-[48px] lg:rounded-r-none h-auto lg:h-[330px] px-7 py-8 lg:px-10 lg:py-11 relative z-10 overflow-hidden"
		>
			<h1 class="text-[#178EFF] text-[80px] !leading-[56px] font-bold">{{ productTypesCounter.formattedCount }}+</h1>
			<p class="text-xl lg:text-[32px] !leading-120 font-semibold lg:font-bold text-white">{{ $t('about_card_product_types') }}</p>
			<NuxtImg src="/images/bg-card-about.webp" alt="decor" class="md:block hidden absolute inset-0 h-full bottom-0 left-0 w-full z-[-1]" />
			<NuxtImg src="/images/bg-card-about2.svg" alt="decor" class="absolute block md:hidden inset-0 h-full bottom-0 left-0 w-full z-[-1]" />
		</div>
		<div class="card-2 flex flex-col gap-5 md:flex-1 md:basis-0 bg-[#178EFF] rounded-[32px] lg:rounded-t-[48px] lg:rounded-b-none h-auto lg:h-[400px] lg:mt-[-70px] py-12 px-8">
			<h1 class="text-white text-6xl lg:text-[84px] !leading-130 font-bold">{{ totalProducedProductsCounter.formattedCount }}+</h1>
			<p class="text-xl lg:text-[32px] !leading-120 font-bold text-white">{{ $t('about_card_total_produced') }}</p>
		</div>
		<div
			class="card-3 flex flex-col gap-6 md:flex-1 md:basis-0 bg-black rounded-[32px] lg:rounded-r-[48px] lg:rounded-l-none h-auto lg:h-[330px] px-7 py-8 lg:px-10 lg:py-11 relative z-10 overflow-hidden"
		>
			<h1 class="text-[#178EFF] text-[80px] !leading-[56px] font-bold">{{ branchesCountCounter.formattedCount }}+</h1>
			<p class="text-xl lg:text-[32px] !leading-120 font-semibold lg:font-bold text-white">{{ $t('about_card_branches_count') }}</p>
			<NuxtImg src="/images/bg-card-about.webp" alt="decor" class="md:block hidden absolute inset-0 h-full bottom-0 left-0 w-full z-[-1]" />
			<NuxtImg src="/images/bg-card-about2.svg" alt="decor" class="absolute block md:hidden inset-0 h-full bottom-0 left-0 w-full z-[-1]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCounter } from '~/composables/useCounter'

/* Section ref (observer uchun) */
const cardRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

/* Counters */
const productTypesCounter = useCounter(15, 1500)
const totalProducedProductsCounter = useCounter(3000, 2000)
const branchesCountCounter = useCounter(10, 1500)

onMounted(() => {
	if (!cardRef.value) return

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated.value) {
					hasAnimated.value = true

					productTypesCounter.animate()
					totalProducedProductsCounter.animate()
					branchesCountCounter.animate()
				}
			})
		},
		{ threshold: 0.3 }
	)

	observer.observe(cardRef.value)

	onUnmounted(() => {
		observer.disconnect()
	})
})
</script>
