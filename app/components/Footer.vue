<template>
	<footer class="md:container">
		<div class="bg-[#E2EEF9] md:rounded-[48px] overflow-hidden">
			<div class="">ds</div>
			<div class="bg-[#E3F1FF14] backdrop-blur-[10px] py-4 md:py-6 lg:py-7 px-4 md:px-6 lg:px-8 border-t border-white">
				<div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
					<div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center md:text-left">
						<NuxtLinkLocale to="/static/privacy-policy" class="text-sm md:text-base !leading-140 transition-300 hover:text-blue"> Privacy Policy </NuxtLinkLocale>
						<NuxtLinkLocale to="/static/cookie-policy" class="text-sm md:text-base !leading-140 transition-300 hover:text-blue"> Terms & Conditions </NuxtLinkLocale>
					</div>
					<p class="text-sm !leading-140 font-medium">Kompaniya tomonidan ishlab chiqilgan</p>
					<p class="text-sm md:text-base !leading-140">{{ $t('copyright', { year: new Date().getFullYear() }) }}</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup></script>
