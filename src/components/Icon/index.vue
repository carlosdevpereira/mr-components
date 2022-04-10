<template>
	<i
		class="mr-icon ri"
		:class="`ri-${name}`"
	/>
</template>

<script>
export default {
	name: 'Icon',

	props: {
		name: {
			type: String,
			required: true,
		},
	},
}
</script>
