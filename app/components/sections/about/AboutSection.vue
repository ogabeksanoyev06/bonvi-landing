<template>
	<section id="about" class="container py-10">
		<div class="flex flex-col items-center gap-6 text-center">
			<NuxtImg src="/images/logo-bonvi-about.webp" alt="about image" class="w-full max-w-[343px] aspect-[343/100] object-contain object-left" />
			<div class="flex flex-col gap-4">
				<h3 class="text-xl md:text-2xl lg:text-[28px] font-bold !leading-130">Bonvi O’zbekistondagi birinchi raqamli brend</h3>
				<p class="text-base md:text-lg lg:text-xl font-medium !leading-130">
					2018-yildan beri o’z faoliyatimizni olib boramiz. 12ta viloyatda ofislarimiz mavjud bo’lib, Xitoy, Koreya va Germaniya yuqori tehnalogiyasi asosida mahsulot ishlab
					chiqaramiz. Bonvi bu shunchaki milliy brend.
				</p>
			</div>
			<div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
				<button class="flex items-center justify-center gap-2 bg-dark border-2 border-dark rounded-full px-4 py-3 transition-300 active:scale-95">
					<span class="text-white text-sm font-semibold leading-140 font-adero-trial">Hamkor bo’lish</span>
					<NuxtImg src="/images/about-partner-icon.svg" alt="about partner" class="size-6 aspect-square" />
				</button>
				<button
					class="flex items-center justify-center gap-2 bg-[linear-gradient(180deg,#0083FF_0%,#001D88_100%)] shadow-[0_284px_80px_rgba(1,113,234,0.01),0_182px_73px_rgba(1,113,234,0.06),0_102px_61px_rgba(1,113,234,0.10),0_45px_45px_rgba(1,113,234,0.28),0_11px_25px_rgba(1,113,234,0.10)] rounded-full px-4 py-3 transition-300 active:scale-95"
				>
					<span class="text-white text-sm font-semibold leading-140 font-adero-trial">Bog’lanish</span>
					<NuxtImg src="/images/about-phone-icon.svg" alt="about contact" class="size-6 aspect-square" />
				</button>
			</div>
		</div>
		<AboutCard />
	</section>
</template>
<script setup>
import AboutCard from '~/components/sections/about/AboutCard.vue'
</script>
