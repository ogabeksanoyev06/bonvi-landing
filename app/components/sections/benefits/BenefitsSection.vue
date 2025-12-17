<template>
	<section id="benefits" class="container py-10">
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-5">
				<CardBrand />
				<CardService />
			</div>
			<div class="col-span-7">
				<div>
					<div></div>
					<div></div>
				</div>
				<div></div>
			</div>
		</div>
	</section>
</template>

<script setup>
import CardBrand from '~/components/sections/benefits/CardBrand.vue'
import CardService from '~/components/sections/benefits/CardService.vue'
</script>
