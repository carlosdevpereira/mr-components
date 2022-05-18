import { defineConfig } from 'vite'
import PurgeIcons from 'vite-plugin-purge-icons'
import Vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
			reactivityTransform: true,
		}),

		PurgeIcons(),
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
