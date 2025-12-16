<template>
	<div class="relative md:rounded-[48px] overflow-hidden p-4 md:p-8 lg:p-16 z-10">
		<h3 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-black text-white font-adero-trial">Nega Bonvi</h3>
		<!-- Benefits Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 relative z-20 mt-2 sm:mt-8">
			<div
				v-for="(benefit, index) in benefits"
				:key="index"
				class="glass-card rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] p-4 sm:p-5 w-full flex flex-col gap-6 items-center text-center relative overflow-hidden"
			>
				<NuxtImg :src="benefit.img" alt="why icon" class="size-12 transition-transform duration-300 ease-in-out" />

				<div class="flex flex-col gap-5 items-center justify-end">
					<h4 class="text-white text-base sm:text-lg lg:text-xl font-bold !leading-130 text-nowrap">
						{{ $t(benefit.title) }}
					</h4>
					<p class="text-white text-xs sm:text-sm leading-130 font-medium">
						{{ $t(benefit.description) }}
					</p>
				</div>
			</div>
		</div>
		<NuxtImg src="/images/why_bonvi_bg.webp" alt="Green bg" class="absolute w-full h-full object-cover left-0 bottom-0 z-[-1]" />
		<NuxtImg src="/images/why_bonvi_logo.webp" alt="Green bg" class="absolute -top-14 -right-16 size-[200px] sm:size-[300px] lg:size-[480px]" />
	</div>
</template>

<script setup>
const benefits = [
	{
		img: '/images/why-assortment.svg',
		title: 'why_text_1',
		description: 'why_description_1'
	},
	{
		img: '/images/why-product.svg',
		title: 'why_text_2',
		description: 'why_description_2'
	},
	{
		img: '/images/why-wallet.svg',
		title: 'why_text_3',
		description: 'why_description_3'
	},
	{
		img: '/images/why-service.svg',
		title: 'why_text_4',
		description: 'why_description_4'
	}
]
</script>

<style scoped>
/* Glass card styles */
.glass-card {
	background: rgba(255, 255, 255, 0.02);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	box-shadow:
		0 28px 40px 0 rgba(0, 0, 0, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.5),
		inset 0 -1px 0 rgba(255, 255, 255, 0.1),
		inset 0 0 0px 0px rgba(255, 255, 255, 0);
	position: relative;
	overflow: hidden;
	transition: transform 0.3s ease-in-out;
	cursor: pointer;
}

.glass-card:hover {
	transform: scale(1.05);
}

.glass-card:hover img {
	transform: scale(1.1);
}

.glass-card::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 1px;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.glass-card::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3));
}
</style>
