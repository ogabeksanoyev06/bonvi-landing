<template>
	<div></div>
</template>

<script setup>
const partners = ref([])
const loading = ref(false)
const error = ref(false)

const fetchPartners = async () => {
	try {
		loading.value = true
		error.value = false
	} catch (err) {
		console.error('Failed to fetch partners:', err)
		error.value = true
	} finally {
		loading.value = false
	}
}

onMounted(() => {
	fetchPartners()
})
</script>

<style scoped>
.carousel-track {
	display: flex;
	width: max-content;
	animation: scroll 30s linear infinite;
}

.carousel-track:hover {
	animation-play-state: paused;
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-100%);
	}
}
</style>
