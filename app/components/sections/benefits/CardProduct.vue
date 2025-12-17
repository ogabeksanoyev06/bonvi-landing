<template>
	<div ref="cardRef" class="bg-gray p-4 sm:p-6 lg:p-8 relative z-10 overflow-hidden w-full h-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
		<div class="flex flex-col items-start gap-2 max-w-[358px] w-full">
			<h3 class="text-lg md:text-2xl lg:text-3xl !leading-140 font-extrabold font-adero-trial">Sifatli quvvatlagich</h3>
			<p class="text-sm md:text-base lg:text-xl !leading-140">
				Mahsulotimiz sizga davomli xizmat qiladi. Bizning quvvatlagich sizga 5 yil beminnat hizmat qiladi. Quvvatlagich eng so’ngi tehnologiya bo’yicha ishlab chiqarilgan.
			</p>
		</div>
		<NuxtImg src="/images/bg-card-product.svg" alt="service card" class="absolute top-0 right-0" />
		<NuxtImg src="/images/product.webp" alt="overlay" class="lg:block hidden absolute max-w-[390px] w-full right-0 -bottom-0 z-[-1]" />
	</div>
</template>

<script setup></script>
