<template>
	<div ref="cardRef" class="flex flex-col items-start justify-between bg-dark relative overflow-hidden w-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] z-10">
		<div class="px-5 md:px-6 lg:px-9 lg:pt-9 md:pt-6 pt-5 flex flex-col gap-2">
			<h3 class="text-base md:text-2xl !leading-140 font-extrabold font-adero-trial text-white">Yuqori servise hizmatlarni faqat biz tavsiya qilamiz</h3>
			<p class="text-sm sm:text-base !leading-140 text-white">
				Biz sizga yuqori malakaga ega ustalarni tavsiya qilamiz. Xa noto’g’ri o’qimadingiz, biz sizga faqat qulaylikni tilaymiz.
			</p>
		</div>
		<NuxtImg src="/images/user-card-service.webp" alt="service card" class="mx-auto w-full max-w-[420px]" />
		<NuxtImg src="/images/bg-card-service.webp" alt="overlay" class="absolute w-full left-0 -bottom-4 z-[-1]" />
	</div>
</template>

<script setup></script>
