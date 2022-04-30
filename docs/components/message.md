# Message

The message component allows to display highlighted messages to the user inside a specific section.

[[toc]]

## API

### Props

| Name      | Type      | Default | Description                                                                                                                  |
| --------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| variant   | `String`  | `''`    | Defines the variant of the theme applied to the input component. Possible values are: `danger`, `warning`, `success`, `info` |
| icon      | `String`  | `''`    | Defines the icon to show inside the input element                                                                            |
| closeable | `Boolean` | `false` | Defines if the message can be closed manually by the user or not                                                             |

### Events

| Name              | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| update:is-visible | Event emitted whenever the message is shown or hidden (destroyed) |

<br>

## Basic Message

<MessageProxy />

<template>
	<Message ref="message" />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.message.show(
				'Example message',
			)
		},
	},
}
</script>

<br>

## Body

<MessageProxy
	body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
/>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message ref="message" />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.message.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br>

## Closeable

<div class="space-between-lines">
    <MessageProxy closeable />
    <MessageProxy 
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message ref="onlyTitle" closeable />

	<Message ref="withBody" closeable />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.onlyTitle.show('Example message')

			this.$refs.withBody.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br>

## Variants

### Simple

<div class="space-between-lines">
	<MessageProxy 
		closeable
	/>
	<MessageProxy
		variant="danger"
		closeable
	/>
	<MessageProxy
		variant="warning"
		closeable
	/>
	<MessageProxy
		variant="success"
		closeable
	/>
	<MessageProxy
		variant="info"
		closeable
	/>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message ref="defaultMessage" closeable />
	<Message ref="dangerMessage" variant="danger" closeable />
	<Message ref="warningMessage" variant="warning" closeable />
	<Message ref="successMessage" variant="success" closeable />
	<Message ref="infoMessage" variant="info" closeable />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.defaultMessage.show('Example message')
			this.$refs.dangerMessage.show('Example message')
			this.$refs.warningMessage.show('Example message')
			this.$refs.successMessage.show('Example message')
			this.$refs.infoMessage.show('Example message')
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br>

### With Body

<div class="space-between-lines">
	<MessageProxy 
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
	<MessageProxy
		variant="danger"
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
	<MessageProxy
		variant="warning"
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
	<MessageProxy
		variant="success"
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
	<MessageProxy
		variant="info"
		closeable
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
	/>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message ref="defaultMessage" closeable />
	<Message ref="dangerMessage" closeable variant="danger" />
	<Message ref="warningMessage" closeable variant="warning" />
	<Message ref="successMessage" closeable variant="success" />
	<Message ref="infoMessage" closeable variant="info" />
</template>

<script>
export default {
	methods: {
		showMessage() {
			this.$refs.defaultMessage.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
			this.$refs.dangerMessage.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
			this.$refs.warningMessage.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
			this.$refs.successMessage.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
			this.$refs.infoMessage.show(
				'Example message',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'
			)
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
