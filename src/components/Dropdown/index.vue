<template>
	<div
		v-click-outside="close"
		class="mr-dropdown-container"
	>
		<Button
			v-bind="$attrs"
			@click="toggleDropdown"
		>
			<slot name="button"></slot>
		</Button>

		<transition
			name="pop-in-fade"
			appear
		>
			<div
				v-if="isOpen"
				class="mr-dropdown"
				:class="classes"
			>
				<slot />
			</div>
		</transition>
	</div>
</template>

<script>
import './index.scss'
import Button from '../Button/index.vue'
import { ClickOutside } from '../../directives/ClickOutside'

export default {
	components: {
		Button
	},

	directives: {
		'click-outside': ClickOutside
	},

	data() {
		return {
			isOpen: false,

			alignment: null
		}
	},

	computed: {
		classes() {
			let classes = ''
			if (this.alignment) classes = this.alignment + "-aligned "

			return classes
		}
	},

	methods: {
		toggleDropdown(event) {
			if (this.isOpen === false) this.open(event)
			else  this.close()
		},

		open(event) {
			let passesMiddleScreen = event.clientX > (window.innerWidth / 2)

			this.alignment =  passesMiddleScreen ? 'right' : 'left'
			this.isOpen = true
		},

		close() {
			this.isOpen = false
		}
	}
}
</script>
