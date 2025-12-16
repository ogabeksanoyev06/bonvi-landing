<template>
	<div>
		<WhySection />
		<FaqSection />
	</div>
</template>

<script setup>
import WhySection from '~/components/sections/why/WhySection.vue'
import FaqSection from '~/components/sections/faq/FaqSection.vue'

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
