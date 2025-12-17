<template>
	<section id="products" class="container py-10">
		<!-- HEADER -->
		<div class="flex items-center justify-between gap-5">
			<div class="flex items-center gap-2">
				<NuxtImg src="/images/scooter.svg" alt="icon" class="size-8 shrink-0" />
				<h2 class="text-lg md:text-xl lg:text-[28px] font-bold leading-[1.3] font-adero-trial">Mahsulotlar</h2>
			</div>

			<button class="flex items-center gap-2 bg-blue/[0.08] px-3 py-2 rounded-xl sm:rounded-full transition active:scale-95 group">
				<span class="hidden sm:block text-xl font-bold text-blue"> Barchasini ko‘rish </span>
				<NuxtImg src="/images/arrow-up-right.svg" class="size-6 shrink-0" />
			</button>
		</div>

		<!-- CATEGORIES -->
		<div class="mt-4 -mx-4 px-4 flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
			<button
				v-for="cat in categories"
				:key="cat.value"
				:class="[
					'shrink-0 px-3 py-2 rounded-xl text-base font-bold leading-130 transition-300 active:scale-95',
					activeCategory === cat.value ? 'bg-gradient-to-b from-[#0083FF] to-[#001D88] text-white' : 'bg-gray text-gray-800 hover:bg-gray/80'
				]"
				@click="activeCategory = cat.value"
			>
				{{ cat.label }}
			</button>
		</div>

		<!-- PRODUCTS -->
		<transition name="fade" mode="out-in">
			<div :key="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
				<!-- SKELETON -->
				<template v-if="loading">
					<ProductLoading v-for="n in 3" :key="n" />
				</template>

				<!-- PRODUCTS -->
				<template v-else>
					<ProductCard v-for="item in filteredProducts" :key="item.id" :product="item" />
				</template>
			</div>
		</transition>
	</section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import ProductLoading from './ProductLoading.vue'

const loading = ref(true)
const activeCategory = ref('electric')

const categories = [
	{ label: 'Elektroskuter', value: 'electric' },
	{ label: 'Gibrid', value: 'hybrid' },
	{ label: 'Benzin', value: 'gas' },
	{ label: 'EV Samokat', value: 'ev' }
]

const products = ref([
	{ id: 1, category: 'electric' },
	{ id: 2, category: 'electric' },
	{ id: 3, category: 'hybrid' },
	{ id: 4, category: 'ev' }
])

const filteredProducts = computed(() => products.value.filter((p) => p.category === activeCategory.value))

onMounted(() => {
	setTimeout(() => {
		loading.value = false
	}, 1200)
})
</script>

<style scoped></style>
