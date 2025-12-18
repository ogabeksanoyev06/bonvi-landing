<script setup>
</script>

<template>
	<section id="hero" class="container min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
		<div
			class="relative bg-dark w-full h-full min-h-[calc(100vh-32px)] sm:min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] p-3 md:p-6 overflow-hidden rounded-[50px] flex flex-col">

			<BaseHeader />

			<main class="relative z-10 flex-grow flex items-center justify-center w-full">
				<div
					class="flex flex-col lg:flex-row gap-8 px-2 md:px-6 lg:gap-16 items-center justify-center w-full mx-auto mt-10 lg:mt-0">

					<div
						class="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6 text-center lg:text-left order-2 lg:order-1">
						<h1 class="text-white font-adero-trial text-2xl sm:text-4xl lg:text-5xl leading-tight">
							{{ $t('hero_title') }}
						</h1>
						<p class="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
							{{ $t('hero_description') }}
						</p>


						<div class="mt-4 flex justify-center flex-col sm:flex-row gap-2 md:gap-4 lg:justify-start">
							<BaseMainButton :text="$t('products')" icon="/images/products-icon.svg" />

							<button class="glass-border px-4 py-3 justify-center rounded-full flex items-center gap-3">
								<span class="text-white text-sm font-semibold leading-140 font-adero-trial">
									{{ $t('why_us') }}
								</span>
								<NuxtImg src="/images/arrow-right-icon.svg" class="size-6 aspect-square" />
							</button>
						</div>
					</div>

					<div class="w-1/2 lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
						<img src="/images/bonvi-logo@2x.png" width="576" height="576" alt="Bonvi Product"
							class="lg:w-full h-auto object-contain">
					</div>
				</div>
			</main>

			<img class="absolute left-0 top-0 w-full h-full object-cover pointer-events-none z-0 opacity-50 lg:opacity-100"
				src="/images/hero-gradient-bg.png" alt="">
		</div>
	</section>
</template>