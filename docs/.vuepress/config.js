const { path } = require('@vuepress/utils')

module.exports = {
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
				children: [
					'/components/button.md',
					'/components/checkbox.md',
					'/components/icon.md',
					'/components/pagination.md',
					'/components/table.md',
					'/components/select.md',
					'/components/spinner.md',
				],
			},
		],
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components'),
				components: {
					Button: path.resolve(__dirname, '../../src/components/Button/index.vue'),
					Table: path.resolve(__dirname, '../../src/components/Table/index.vue'),
					Pagination: path.resolve(
						__dirname,
						'../../src/components/Pagination/index.vue'
					),
					Icon: path.resolve(__dirname, '../../src/components/Icon/index.vue'),
					Checkbox: path.resolve(__dirname, '../../src/components/Checkbox/index.vue'),
					Select: path.resolve(__dirname, '../../src/components/Select/index.vue'),
					Spinner: path.resolve(__dirname, '../../src/components/Spinner/index.vue'),
				},
			},
		],
	],
}
