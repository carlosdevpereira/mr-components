import VitePlugins from '../../vite.plugins.config'

const fs = require('fs')
const { path } = require('@vuepress/utils')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { defaultTheme, viteBundler } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

/**
 * Retrieves the list of component markdown
 * documentation files to register in the
 * documentation router
 **/
const getComponentRoutes = (folderName = 'components') => {
	let components: Array<string> = []
	const componentsFound = fs.readdirSync(path.resolve(__dirname, '../' + folderName))

	// for now the registration of the components documentation can
	// be like this, if/when the structure of the components
	// folder changes this can be adapted
	componentsFound.forEach(componentName => {
		if (componentName !== 'index.md') {
			components.push(`/${folderName}/${componentName}`)
		}
	})

	return components
}

/**
 * Retrieves an object containing all
 * the available components to register
 * globally in the documentation pages
 **/
const getSourceComponents = () => {
	let components = {}
	const componentsFound = fs.readdirSync(path.resolve(__dirname, '../../src/components'))

	// for now the registration of the components can
	// be like this, if/when the structure of the components
	// folder changes this can be adapted
	componentsFound.forEach(componentName => {
		components[componentName] = path.resolve(
			__dirname,
			`../../src/components/${componentName}/index.vue`
		)
	})

	return components
}

const getLayoutSourceComponents = () => {
	let components = {}
	const componentsFound = fs.readdirSync(path.resolve(__dirname, '../../src/layouts'))

	// for now the registration of the components can
	// be like this, if/when the structure of the components
	// folder changes this can be adapted
	componentsFound.forEach(componentName => {
		let layoutName = componentName.split('.')
		layoutName.splice(-1)
		layoutName = layoutName.join('.')

		components[layoutName] = path.resolve(__dirname, `../../src/layouts/${layoutName}.vue`)
	})

	return components
}

module.exports = {
	title: 'Mr. Components',
	description: 'A set of lightweight Vue components to power @carlosdevpereira projects',
	lang: 'en-US',
	serviceWorker: false,
	bundler: viteBundler({
		viteOptions: {
			plugins: [...VitePlugins],
		},
	}),
	alias: {
		'@': path.resolve(__dirname, '../../src'),
		'@tests': path.resolve(__dirname, '../../tests'),
	},
	theme: defaultTheme({
		logo: '/images/logo@1x.png',
		colorMode: 'light',
		colorModeSwitch: false,
		repo: 'carlosdevpereira/mr-components',
		editLink: false,
		search: true,
		searchMaxSuggestions: 10,
		searchPlaceholder: 'Search...',
		sidebar: [
			'/getting-started',
			{
				text: 'Components',
				link: '/components/',
				children: getComponentRoutes(),
			},
			{
				text: 'Plugins',
				link: '/plugins/',
				children: getComponentRoutes('plugins'),
			},
			{
				text: 'Layouts',
				link: '/layouts/',
				children: getComponentRoutes('layouts'),
			},
		],
	}),
	plugins: [
		[
			nprogressPlugin(),
			docsearchPlugin({
				indexName: 'mr-components',
				appId: '9L6TKQY68C',
				apiKey: '66bf47d2f78f7142bd11cf04d9ab9733',
				locales: {
					'/': {
						placeholder: 'Search',
						translations: {
							button: {
								buttonText: 'Search',
							},
						},
					},
				},
			}),
			registerComponentsPlugin({
				componentsDir: path.resolve(__dirname, './components'),
				components: {
					...getSourceComponents(),
					...getLayoutSourceComponents(),
				},
			}),
		],
	],
	head: [['link', { rel: 'icon', href: '/images/logo@1x.png' }]],
}
