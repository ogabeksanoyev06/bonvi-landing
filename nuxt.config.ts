// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['/assets/css/tailwind.css', '/assets/css/fonts.css', '/assets/css/main.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
			}
		],
		'@nuxt/eslint',
		'@nuxt/image'
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
	},
	image: {
		quality: 80,
		format: ['webp', 'avif', 'png', 'jpg'],
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536
		},
		densities: [1, 2],
		presets: {
			avatar: {
				modifiers: {
					format: 'webp',
					width: 50,
					height: 50,
					quality: 80
				}
			},
			hero: {
				modifiers: {
					format: 'webp',
					width: 1200,
					height: 630,
					quality: 85
				}
			}
		}
	}
})
