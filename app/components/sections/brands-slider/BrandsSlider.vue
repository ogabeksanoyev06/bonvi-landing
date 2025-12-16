<template>
    <section id="brands" class="container">
        <div class="py-8 my-8 bg-gray rounded-full overflow-hidden">
            <div class="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                <div class="flex items-center flex-shrink-0 pl-12">
                    <img v-for="(logo, index) in logos" :key="'A-' + index" :src="logo.src" :alt="logo.alt"
                        class="h-10 mr-12 object-contain opacity-70 transition-all duration-300 hover:opacity-100" />
                </div>

                <div class="flex items-center flex-shrink-0 pl-12">
                    <img v-for="(logo, index) in logos" :key="'B-' + index" :src="logo.src" :alt="logo.alt"
                        class="h-10 mr-12 object-contain opacity-70 transition-all duration-300 hover:opacity-100" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const logos = [
    { src: '/images/brands/1.png', alt: 'Xtum', width: '120px' },
    { src: '/images/brands/2.png', alt: 'Yamaha', width: '180px' },
    { src: '/images/brands/3.png', alt: 'SYM', width: '160px' },
    { src: '/images/brands/4.png', alt: 'Hiper', width: '180px' },
    { src: '/images/brands/5.png', alt: 'Kugoo', width: '180px' },
]
</script>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-marquee {
    animation: marquee 40s linear infinite;
}
</style>
