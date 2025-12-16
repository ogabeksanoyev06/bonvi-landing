import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	darkMode: 'class',
	content: [
		'./app.vue',
		'./error.vue',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./composables/**/*.{js,ts}',
		'./plugins/**/*.{js,ts}',
		'./utils/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			colors: {
				dark: '#020D17',
				gray: '#EDF2F7',
				blue: '#0082FF'
			},
			lineHeight: {
				120: '120%',
				130: '130%',
				140: '140%'
			},
			boxShadow: {
				button: '0 30px 50px 5px rgba(39, 48, 56, 0.06)'
			},
			borderColor: {
				DEFAULT: '#EDF2F7'
			}
		}
	},
	plugins: []
}
