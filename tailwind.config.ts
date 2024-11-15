/** @type {import('tailwindcss').Config} */

export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#465a95',
					50: '#f3f6fb',
					100: '#e4ebf5',
					200: '#cedeef',
					300: '#adc7e3',
					400: '#86aad4',
					500: '#698fc8',
					600: '#5677ba',
					700: '#4b66aa',
					800: '#465a95',
					900: '#384870',
					950: '#262e45'
				},
				black: {
					DEFAULT: '#222222',
					0: '#000000',
					1: '#4E4E4E',
					2: '#343434',
					3: '#686868'
				},
				grey: {
					border: '#EEEEEE',
					0: '#9295A1',
					1: '#979FB1',
					2: '#ABB0BC',
					3: '#9D9D9D',
					4: '#A6A7A7'
				},
				brown: {
					DEFAULT: '#6C584C',
					0: '#56463D',
          1: '#A99990'
				},
				red: {
					0: '#C75146',
					1: '#AD1F38'
				},
				yellow: {
					0: '#E3C012'
				},
				green: {
					0: '#578B02',
					1: '#38b000',
					2: '#4F7703'
				},
				blue: {
					0: '#2793FF'
				},
        background: {
          green: '#73AE71',
          yellow: '#C89D45',
					yellow_1: '#DAA73B',
          purple: '#5F75B4',
					purple_1: '#8C9DD0',
          brown: '#A99990',
					brown_2: '#362C26',
          grey_1: '#9295A1',
					grey_2: '#9E9D9C',
          grey_3: '#F5F5F5',
					grey_4: '#DADEEA',
					grey_5: '#ECEEF4',
					grey_6: '#F1F1F1',
					grey_7: '#F0F5FC',
					orange: '#B09152'
        }
			},
			fontFamily: {
				inherit: 'inherit',
				sf: ['SFPro-Text', 'sans-serif']
			}
		}
	},
	plugins: []
};
