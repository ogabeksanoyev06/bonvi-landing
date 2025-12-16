<template>
	<div>
		<FaqSection />
	</div>
</template>

<script setup>
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
