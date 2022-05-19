import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import VitePlugins from './vite.plugins.config'

export default defineConfig({
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
			reactivityTransform: true,
		}),

		...VitePlugins,
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		target: 'esnext',
		lib: {
			entry: path.resolve(__dirname, 'index.js'),
			name: 'Mr-Components',
			fileName: format => `mr-components.${format}.js`,
			formats: ['es', 'cjs', 'umd'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
