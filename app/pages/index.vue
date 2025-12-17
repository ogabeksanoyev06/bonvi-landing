<template>
	<div>
		<HeroSection />
		<ProductSection />
		<BenefitsSection />
		<WhySection />
		<SectionsBrandsSlider />
		<FaqSection />
	</div>
</template>

<script setup>
import ProductSection from '~/components/sections/products/ProductSection.vue'
import BenefitsSection from '~/components/sections/benefits/BenefitsSection.vue'
import WhySection from '~/components/sections/why/WhySection.vue'
import FaqSection from '~/components/sections/faq/FaqSection.vue'
import HeroSection from '~/components/sections/hero/HeroSection.vue'

const { scrollToSection } = useNavigation()

onMounted(() => {
	const hash = window.location.hash
	if (hash) {
		const sectionId = hash.substring(1)
		setTimeout(() => {
			scrollToSection(sectionId)
		}, 300)
	}
})
</script>
