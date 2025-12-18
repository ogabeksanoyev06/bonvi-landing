<template>
	<div class="flex flex-col items-start gap-4">
		<div class="flex items-center bg-gray rounded-[32px] px-2 pt-4 lg:p-[6px_57px_0_47px] w-full h-[240px] md:h-[300px] lg:h-[340px]">
			<NuxtImg src="/images/product-image.webp" alt="product image" class="w-full h-full object-contain" />
		</div>
		<div class="flex flex-col gap-2">
			<h3 class="text-lg sm:text-xl font-extrabold leading-130 font-adero-trial">Qariyalar uchun mapet</h3>
			<div class="flex items-center flex-wrap gap-2">
				<div class="flex items-center gap-1 px-2 py-1 border rounded-lg">
					<NuxtImg src="/images/icon-power.svg" alt="Motor power" class="size-5" />
					<span class="text-sm !leading-[10px]">1000W</span>
				</div>

				<div class="flex items-center gap-1 px-2 py-1 border rounded-lg">
					<NuxtImg src="/images/icon-battery.svg" alt="Battery voltage" class="size-5" />
					<span class="text-sm !leading-[10px]">60V</span>
				</div>

				<div class="flex items-center gap-1 px-2 py-1 border rounded-lg">
					<NuxtImg src="/images/icon-speed.svg" alt="Maximum speed" class="size-5" />
					<span class="text-sm !leading-[10px]">60 km/h</span>
				</div>

				<div class="flex items-center gap-1 px-2 py-1 border rounded-lg">
					<NuxtImg src="/images/icon-range.svg" alt="Range per charge" class="size-5" />
					<span class="text-sm !leading-[10px]">300 km</span>
				</div>
			</div>
		</div>
		<button class="flex items-center justify-center text-center gap-2 bg-blue/[0.08] px-3 py-2 rounded-xl sm:rounded-full transition active:scale-95 group w-full">
			<span class="text-lg sm:text-xl font-bold text-blue"> 2 200 000 UZS </span>
			<NuxtImg src="/images/arrow-up-right.svg" class="size-5 sm:size-6" />
		</button>
	</div>
</template>

<script setup></script>

<style scoped></style>
