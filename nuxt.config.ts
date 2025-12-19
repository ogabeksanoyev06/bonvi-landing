// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-07-15', // Fixed: Changed from future date 2025 to 2024
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css', '~/assets/css/main.css'], // Fixed: Added ~/ prefix
	modules: [
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
			{ code: 'uz', iso: 'uz-UZ', file: 'uz.json' }, // Fixed: Added proper ISO code
			{ code: 'en', iso: 'en-US', file: 'en.json' } // Fixed: Added proper ISO code
		],
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'locale',
			redirectOn: 'root' // Added: Recommended setting
		},
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
	},
	vite: {
		server: {
			hmr: {
				overlay: false
			}
		}
	},
	postcss: {
		plugins: {
			'@tailwindcss/postcss': {}
		}
	}
})
