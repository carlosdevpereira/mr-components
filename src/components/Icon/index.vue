<template>
	<i
		class="mr-icon ri iconify"
		:data-icon="`ri:${name}`"
	/>
</template>

<script>
import '@iconify/iconify'
import '@purge-icons/generated'

export default {
	name: 'Icon',

	props: {
		name: {
			type: String,
			default: ''
		},
	},
}
</script>
