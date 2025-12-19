<template>
  <section id="brands" class="container">
    <div class="py-7 my-8 bg-gray-100 rounded-full overflow-hidden">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="48"
        :loop="true"
        :speed="5000"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :allowTouchMove="true"
        :freeMode="{
          enabled: true,
          momentum: false
        }"
        class="brand-swiper"
      >
        <SwiperSlide
          v-for="(logo, index) in [...logos, ...logos, ...logos]"
          :key="index"
          class="!w-auto"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 object-contain opacity-70 transition-all duration-300 hover:opacity-100"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const modules = [Autoplay, FreeMode];

const logos = [
  { src: '/images/brands/1.png', alt: 'Xtum', width: '120px' },
  { src: '/images/brands/2.png', alt: 'Yamaha', width: '180px' },
  { src: '/images/brands/3.png', alt: 'SYM', width: '160px' },
  { src: '/images/brands/4.png', alt: 'Hiper', width: '180px' },
  { src: '/images/brands/5.png', alt: 'Kugoo', width: '180px' },
];
</script>

<style scoped>
.brand-swiper {
  padding: 0 48px;
}

.brand-swiper :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
</style>