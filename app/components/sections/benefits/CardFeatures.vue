<template>
	<div
		ref="cardRef"
		class="flex flex-col items-center justify-between text-center gap-5 bg-dark pt-6 sm:pt-8 lg:pt-16 pb-6 md:pb-8 lg:pb-12 relative z-10 overflow-hidden w-full h-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
	>
		<div class="flex flex-col items-center text-center px-[14px]">
			<div class="relative glass-card card-1 py-2 sm:py-3 px-6 sm:px-8 lg:px-9 flex items-center gap-4 sm:gap-6 lg:gap-[30px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
				<div class="bg-blue rounded-full p-3 sm:p-4 lg:p-[18px]">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-6 sm:size-7 lg:size-9" />
				</div>
				<p class="text-base sm:text-lg lg:text-2xl font-bold leading-130 text-white">Ekologiyaga zararsiz</p>
			</div>
			<div
				class="absolute -top-1 sm:-top-2 glass-card card-2 py-1.5 sm:py-2 px-4 sm:px-5 lg:px-6 flex items-center gap-3 sm:gap-4 lg:gap-5 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]"
			>
				<div class="bg-blue rounded-full p-2 sm:p-2.5 lg:p-3">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-4 sm:size-5 lg:size-6" />
				</div>
				<div class="text-sm sm:text-base font-bold leading-130 text-white">Oldindan ogohlantirilgan narx</div>
			</div>
			<div
				class="absolute -top-3 sm:-top-4 lg:-top-2 glass-card card-3 py-1.5 sm:py-1.5 px-3 sm:px-4 lg:px-[18px] flex items-center gap-2 sm:gap-3 lg:gap-[15px] rounded-2xl sm:rounded-3xl"
			>
				<div class="bg-blue rounded-full p-1.5 sm:p-2 lg:p-[9px]">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-3 sm:size-4 lg:size-[18px]" />
				</div>
				<div class="text-[10px] sm:text-xs font-bold leading-130 text-white">Past tovushda sayohat qilish</div>
			</div>
		</div>
		<div class="grid gap-2 px-4 sm:px-5 lg:px-7">
			<h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl !leading-140 font-bold text-white">3 muhim afzallik</h3>
			<p class="text-sm sm:text-base !leading-140 text-white">
				Mahsulotimizni asosiy afzalliklaridan xabardormisiz? Biz nafaqat sizga qulay mahsulotni taklif qilamiz, balkim oltin 3 tamoyilni ham saqlab qolamiz.
			</p>
		</div>
		<NuxtImg src="/images/bg-card-features.webp" alt="overlay" class="absolute w-full left-0 -bottom-0 z-[-1]" />
	</div>
</template>

<script setup></script>

<style scoped>
.glass-card {
	position: relative;
	overflow: hidden;
	cursor: pointer;

	/* Glass */
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);

	border: 1px solid rgba(255, 255, 255, 0.25);

	box-shadow:
		0 10px 36px rgba(0, 0, 0, 0.18),
		inset 0 1px 0 rgba(255, 255, 255, 0.6),
		inset 0 -1px 0 rgba(255, 255, 255, 0.2);

	will-change: transform;
	transition:
		transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
		background 0.4s ease,
		border-color 0.4s ease,
		box-shadow 0.4s ease;
}

.glass-card:hover {
	box-shadow:
		0 20px 60px rgba(0, 0, 0, 0.25),
		inset 0 1px 0 rgba(255, 255, 255, 0.95),
		inset 0 -1px 0 rgba(255, 255, 255, 0.35);

	transform: translateY(-2px) scale(1.04);
}

/* Light edges */
.glass-card::before,
.glass-card::after {
	content: '';
	position: absolute;
	pointer-events: none;
}

.glass-card::before {
	top: 0;
	left: 0;
	right: 0;
	height: 1px;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
}

.glass-card::after {
	top: 0;
	left: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.7), transparent, rgba(255, 255, 255, 0.25));
}

@keyframes float-soft {
	0% {
		transform: translateY(0) translateZ(0);
	}
	50% {
		transform: translateY(-6px) translateZ(0);
	}
	100% {
		transform: translateY(0) translateZ(0);
	}
}

.card-1 {
	animation: float-soft 3.6s ease-in-out infinite;
	animation-delay: 0s;
}

.card-2 {
	animation: float-soft 4.2s ease-in-out infinite;
	animation-delay: 0.4s;
}

.card-3 {
	animation: float-soft 4.8s ease-in-out infinite;
	animation-delay: 0.8s;
}

/* Hover paytida float to‘xtasin — jitter bo‘lmasin */
.glass-card:hover {
	animation-play-state: paused;
}
</style>
