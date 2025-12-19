<template>
	<section id="faq" ref="sectionRef" class="container pt-16 sm:pt-24">
		<div class="space-y-6">
			<div class="flex items-center gap-2">
				<NuxtImg src="/images/faq-icon.svg" alt="faq icon" class="size-10 shrink-0" />
				<h2 class="text-lg md:text-xl lg:text-[28px] font-bold !leading-130 font-adero-trial">{{ $t('faq_title') }}</h2>
			</div>
			<Accordion />
		</div>
	</section>
</template>

<script setup lang="ts">
import Accordion from '~/components/sections/faq/Accordion.vue'
</script>

<style scoped></style>
