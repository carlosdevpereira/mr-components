const fs = require('fs')
const { path } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { defaultTheme, viteBundler } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

/**
 * Retrieves the list of component markdown
 * documentation files to register in the
 * documentation router
 **/
const getComponentRoutes = (folderName = 'components') => {
	let components = []
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

		components[layoutName] = path.resolve(
			__dirname,
			`../../src/layouts/${layoutName}.vue`
		)
	})

	return components
}

module.exports = {
	title: 'Mr. Components',
	description: 'A set of lightweight Vue components to power @carlosdevpereira projects',
	lang: 'en-US',
	serviceWorker: false,
	bundler: viteBundler(),
	alias: {
		'@': path.resolve(__dirname, '../../src'),
		'@tests': path.resolve(__dirname, '../../tests'),
	},
	theme: defaultTheme({
		logo: '/images/logo@1x.png',
		darkMode: false,
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
			searchPlugin({}),
			registerComponentsPlugin({
				componentsDir: path.resolve(__dirname, './components'),
				components: {
					...getSourceComponents(),
					...getLayoutSourceComponents()
				},
			}),
		],
	],
	head: [
		['link', { rel: 'icon', href: '/images/logo@1x.png' }],
		['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap',
			},
		],
	],
}
