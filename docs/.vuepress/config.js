const { path } = require('@vuepress/utils')
const fs = require('fs')

/**
 * Retrieves the list of component markdown
 * documentation files to register in the
 * documentation router
 **/
const getComponentRoutes = () => {
	let components = []
	const componentsFound = fs.readdirSync(path.resolve(__dirname, '../components'))

	// for now the registration of the components documentation can
	// be like this, if/when the structure of the components
	// folder changes this can be adapted
	componentsFound.forEach(componentName => {
		if (componentName !== 'index.md') {
			components.push(`/components/${componentName}`)
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

// Documentation config
const config = {
	title: 'Mr. Components',
	description: 'A set of lightweight Vue components to power @carlosdevpereira projects',
	lang: 'en-US',
	theme: '@vuepress/theme-default',
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
	serviceWorker: false,
	themeConfig: {
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
		],
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components'),
				components: getSourceComponents(),
			},
		],
	],
}

module.exports = config
