// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['/assets/css/tailwind.css', '/assets/css/fonts.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
			}
		],
		'@nuxt/eslint'
	],
	i18n: {
		locales: [
			{ code: 'ru', iso: 'ru-RU', file: 'ru.json' },
			{ code: 'uz', iso: 'uz', file: 'uz.json' },
			{ code: 'en', iso: 'en', file: 'en.json' }
		],
		defaultLocale: 'uz',
		strategy: 'prefix_and_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'locale'
		},
		langDir: 'locales',
		compilation: {
			strictMessage: false
		}
	}
})
