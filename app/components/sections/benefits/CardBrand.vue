<template>
	<div ref="cardRef" class="flex items-center justify-center bg-dark relative overflow-hidden w-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
		<div class="flex items-center justify-center">
			<NuxtImg src="/images/logo-card-brand.webp" alt="logo" style="height: 295px; aspect-ratio: 111/59" />
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
