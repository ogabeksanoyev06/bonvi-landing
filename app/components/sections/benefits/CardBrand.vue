<template>
	<div ref="cardRef" class="flex items-center justify-center bg-dark relative overflow-hidden w-full md:min-h-[295px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
		<div class="flex items-center justify-center">
			<NuxtImg src="/images/logo-card-brand.webp" alt="logo" class="w-full h-full float-on-hover" />
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
@keyframes scale-up {
	0%,
	100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
}
.float-on-hover {
	animation: scale-up 3s ease-in-out infinite;
}
</style>
