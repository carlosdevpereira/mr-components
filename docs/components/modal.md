# Modal

The modal component allows to create custom content pop-ups that overlays the webpage content.

[[toc]]

## API

### Props

| Name        | Type      | Default | Description                                                                 |
| ----------- | --------- | ------- | --------------------------------------------------------------------------- |
| title       | `String`  |         | Title text written in the modal header.                                     |
| size        | `String`  | `'md'`  | Defines the size of the Button. Possible values are: `sm`, `md`, `lg`, `xl` |
| maximizable | `Boolean` | `false` | Defines if the modal can be maximized to fill the full screen size          |

## Basic modal

<ModalProxy title="Example modal" />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Modal ref="modal" title="Example modal" />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.modal.open()
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Footer

<ModalWithFooter title="Example modal with footer"/>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Modal ref="modal" title="Example modal">
		<template #footer>
			<Button label="Cancel" />
			<Button label="Save" />
		</template>
	</Modal>
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.modal.open()
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Maximizable

<ModalProxy title="This modal can be maximized" maximizable />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Modal ref="modal" title="Example modal" maximizable />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.modal.open()
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Sizes

<ModalSizes />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Modal ref="smallModal" size="sm" title="Small modal example" />
	<Modal ref="mediumModal" size="md" title="Medium modal example" />
	<Modal ref="largeModal" size="lg" title="Large modal example" />
	<Modal ref="xlModal" size="xl" title="Extra large modal example" />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.smallModal.open()
			this.$refs.mediumModal.open()
			this.$refs.largeModal.open()
			this.$refs.xlModal.open()
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Cascading

<ModalWithInnerModal title="Example with inner modal"/>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Modal ref="outerModal" title="Example with inner modal">
		<Modal ref="innerModal" title="Inner modal">
			<span>This is from the inner modal</span>
		</Modal>

		<template #footer>
			<Button label="Open inner modal" @click="$refs.innerModal.open()" />
		</template>
	</Modal>
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.smallModal.open()
			this.$refs.mediumModal.open()
			this.$refs.largeModal.open()
			this.$refs.xlModal.open()
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
