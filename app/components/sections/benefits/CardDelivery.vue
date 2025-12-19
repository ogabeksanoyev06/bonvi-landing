<template>
	<div ref="cardRef" class="flex flex-col gap-4 bg-gray px-5 pb-7 relative overflow-hidden w-full min-h-[295px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
		<NuxtImg src="/images/card-delivery-icon.svg" alt="logo" class="mx-auto w-[184px] aspect-[184/185]" />

		<div class="grid">
			<h3 class="text-xl !leading-140 font-extrabold font-adero-trial">{{ $t('delivery_title') }}</h3>
			<p class="text-sm !leading-140">{{ $t('delivery_desc') }}</p>
		</div>
	</div>
</template>

<script setup></script>
