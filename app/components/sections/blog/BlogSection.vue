<template>
	<section ref="blog" class="pt-16 sm:pt-24 overflow-hidden">
		<div class="container">
			<div class="flex items-center gap-2 mb-6">
				<NuxtImg src="/images/lightbulb-icon.svg" alt="icon" class="size-8 h-10 shrink-0" />
				<h2 class="text-lg md:text-xl pt-1 lg:text-[28px] font-bold !leading-130 font-adero-trial">Qaynoq yangiliklar</h2>
			</div>
			<div class="w-full sm:max-w-[800px]">
				<Swiper v-bind="settings" class="!overflow-visible !w-full">
					<SwiperSlide v-for="key in 5" :key="key">
						<BlogCard title="Qaynoq&#10;chegirma" description="Qariyalar uchun mapet" :price="1222000" :old-price="2000000" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import BlogCard from './BlogCard.vue'

const settings = {
	modules: [Autoplay],
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	breakpoints: {
		300: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
		768: { slidesPerView: 1.05 }
	}
}
</script>

<style scoped></style>
