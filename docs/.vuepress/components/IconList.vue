<template>
	<Toast />

	<Input
		v-model="iconName"
		class="mb-4"
		placeholder="Find icon by name or style"
	/>

	<div class="icons-list">
		<Button
			v-for="icon in filteredIcons"
			:key="icon"
			theme="outlined"
			variant="secondary"
			class="list-ri-icon"
			:class="`icon-${icon}`"
			@click="copyIconToClipboard(icon)"
		>
			<svg v-html="icons[icon].body" />

			<small>{{ icon }}</small>
		</Button>
	</div>
</template>

<script>
import { Toast } from '@/plugins/Toast'
import RemixIcons from '@iconify/json/json/ri.json'

export default {
	data() {
		return {
			iconName: '',
		}
	},

	computed: {
		icons() {
			return RemixIcons.icons
		},

		filteredIcons() {
			return Object.keys(this.icons).filter((iconName) => {
				if (!this.iconName) return true

				return iconName.includes(this.iconName)
			})
		}
	},

	methods: {
		copyIconToClipboard(icon) {
			navigator.clipboard.writeText(icon);

			Toast.success({
				title: 'Clipboard',
				message: `The icon ${icon} was copied to clipboard!`,
				timer: 3000
			})
		}
	}
}
</script>

<style lang="scss">
$gridSize: 7.7rem;

.icons-list {
	box-sizing: border-box;
	display: grid;
	grid-template-rows: $gridSize;
	grid-template-columns: repeat(6, $gridSize);

	.list-ri-icon {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: $gridSize;
		height: $gridSize;

		svg {
			width: 24px;
			height: 24px;
			margin-bottom: 28px;
		}

		small {
			height: 22px;
			font-size: 11px;
			font-weight: 600;
			color: #909090;
		}
	}
}
</style>
