<template>
	<div
		ref="cardRef"
		class="flex flex-col items-center text-center gap-5 bg-dark p-4 relative overflow-hidden w-full h-[175px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
	>
		<div class="size-14 flex items-center justify-center p-3 glass-card rounded-full">
			<NuxtImg src="/images/card-support-icon.svg" alt="logo" class="size-8 aspect-square" />
		</div>
		<div class="grid gap-1">
			<h3 class="text-xl font-extrabold leading-140 font-adero-trial bg-gradient-to-r from-[#9AD7FF] to-[#E6F4FF] bg-clip-text text-transparent">{{ $t('support_title') }}</h3>
			<p class="text-xs leading-140 text-white">{{ $t('support_desc') }}</p>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.glass-card {
	background: rgba(0, 0, 0, 0);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 2px solid rgba(255, 255, 255, 0.2);
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.1),
		inset 0 1px 0 rgba(255, 255, 255, 0.5),
		inset 0 -1px 0 rgba(255, 255, 255, 0.1),
		inset 0 0 0px 0px rgba(255, 255, 255, 0);
	position: relative;
	overflow: hidden;
	transition: 300ms ease-in-out;
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
