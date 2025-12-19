<template>
	<section id="about" class="container pt-16 sm:pt-24">
		<div class="flex flex-col items-center gap-6 text-center">
			<NuxtImg src="/images/logo-bonvi-about.webp" alt="about image"
				class="w-full max-w-[343px] aspect-[343/100] object-contain object-left" />
			<div class="flex flex-col gap-4">
				<h3 class="text-xl md:text-2xl lg:text-[28px] font-bold !leading-130">{{ $t('about_title') }}</h3>
				<p class="text-base md:text-lg lg:text-xl font-medium !leading-130">
					{{ $t('about_desc') }}
				</p>
			</div>
			<div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
				<button
					class="flex items-center justify-center gap-2 bg-dark border-2 border-dark rounded-full px-4 py-3 transition-300 active:scale-95">
					<span class="text-white text-sm font-semibold leading-140 font-adero-trial">{{ $t('about_partner') }}</span>
					<NuxtImg src="/images/about-partner-icon.svg" alt="about partner" class="size-6 aspect-square" />
				</button>
 
				<BaseMainButton :text="$t('about_contact')" icon="/images/call.svg" />
			</div>
		</div>
		<AboutCard />
	</section>
</template>
<script setup>
import AboutCard from '~/components/sections/about/AboutCard.vue'
</script>
