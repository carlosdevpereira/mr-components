import PurgeIcons from 'vite-plugin-purge-icons'
import Unocss from 'unocss/vite'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default [
	// PurgeIcons plugin will scan the code
	// for the icons needed and only auto-import
	// those specific icons, instead of a whole icon library
	PurgeIcons(),

	// Unocss is being used to make available
	// common css utility classes from tailwind
	// and the font used by the components (Lato)
	Unocss({
		presets: [
			presetUno(),
			presetWebFonts({
				provider: 'google', // default provider
				fonts: {
					lato: [
						{
							name: 'Lato',
							weights: ['100', '400', '700', '900'],
							italic: false,
						},
						{
							name: 'sans-serif',
							provider: 'none',
						},
					],
				},
			}),
		],
	}),
]
