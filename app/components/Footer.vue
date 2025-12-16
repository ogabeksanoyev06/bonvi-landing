<template>
	<footer class="md:container pt-12 md:pb-12">
		<div class="bg-[#E2EEF9] md:rounded-[48px] overflow-hidden relative z-10">
			<NuxtImg src="/images/footer-bg.webp" alt="checkflower icon" class="absolute left-0 bottom-[-67px] h-[350px] min-w-[1360px] z-[-1]" />
			<div class="flex justify-between py-8 px-12">
				<div class="flex flex-col space-y-10 pt-6">
					<div class="flex-shrink-0">
						<NuxtLinkLocale to="/" class="flex items-center">
							<NuxtImg class="h-10 lg:h-16" src="/images/footer-bonvi-logo.svg" alt="bonvi logo" />
						</NuxtLinkLocale>
					</div>
					<div class="flex space-x-2.5">
						<a
							href="https://instagram.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#0083FF] to-[#001D88] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/instagram-icon.svg" alt="Instagram" class="size-5 aspect-square" />
						</a>

						<a
							href="https://t.me/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#0083FF] to-[#001D88] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/telegram-icon.svg" alt="Telegram" class="size-5 aspect-square" />
						</a>

						<a
							href="https://facebook.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#0083FF] to-[#001D88] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/facebook-icon.svg" alt="Facebook" class="size-5 aspect-square" />
						</a>

						<a
							href="https://x.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#0083FF] to-[#001D88] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/x-icon.svg" alt="X (Twitter)" class="size-5 aspect-square" />
						</a>
					</div>
				</div>
				<div class="flex flex-col gap-16 pt-6">
					<ul class="flex gap-6 lg:gap-10 font-medium text-base lg:text-lg leading-130">
						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('products')">
								{{ $t('products') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('advantages')">
								{{ $t('advantages') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('why_bonvi')">
								{{ $t('why_bonvi') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('faq')">
								{{ $t('faq') }}
							</button>
						</li>
					</ul>
					<ul class="flex items-center justify-between">
						<li class="flex items-center gap-x-2">
							<NuxtImg class="size-6" src="images/mail-icon.svg" alt="mail icon" />
							<a :href="`mailto:${'bunvi@gmail.com'}`" class="hover:text-blue transition-300 text-lg font-medium"> bunvi@gmail.com </a>
						</li>
						<li class="flex items-center gap-x-2">
							<NuxtImg class="size-6" src="images/phone-icon.svg" alt="mail icon" />
							<a :href="`tel:${'+998 97 991-62-20'}`" class="hover:text-blue transition-300 text-lg font-medium"> +998 97 991-62-20 </a>
						</li>
					</ul>
				</div>
				<div class="flex items-start gap-6">
					<div class="flex flex-col gap-2.5">
						<div class="bg-white border-2 p-3 size-[160px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" alt="App Store" />
						</div>
						<div class="bg-white border-2 py-4 px-5 w-[160px] rounded-xl">
							<NuxtImg src="/images/app-store.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="bg-white border-2 p-3 size-[160px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" />
						</div>
						<div class="bg-white border-2 py-4 px-5 w-[160px] rounded-xl">
							<NuxtImg src="/images/google-play.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
				</div>
			</div>
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

<script setup>
const { scrollToSection } = useNavigation()

const handleNavigation = (sectionId) => {
	scrollToSection(sectionId)
}
</script>
