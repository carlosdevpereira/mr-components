# Select

The select component is a lightweight extension of the standard select element, supporting: themes, icons, states, etc.

[[toc]]

## API

### Props

| Name        | Type                     | Default                     | Description                                                                                                                                                      |
| ----------- | ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme       | `String`                 | `'default'`                 | Defines the theme of the select component. Possible values are: `default`, `solid` and `outlined`                                                                |
| variant     | `String`                 | `'default'`                 | Defines the variant of the theme applied to the select component. Possible values are: `default`, `primary`, `secondary`, `danger`, `warning`, `success`, `info` |
| size        | `String`                 | `'md'`                      | Defines the size of the select component. Possible values are: `sm`, `md`, `lg`                                                                                  |
| disabled    | `Boolean`                | `false`                     | Defines if the select component is disabled or not                                                                                                               |
| label       | `String`                 | `'Please select an option'` | Defines the text to display on the select component. Defaults to static text when no option is selected, otherwise uses the option name as the label.            |
| value       | `Object\|Number\|String` | `null`                      | Defines the value of the select component.                                                                                                                       |
| options     | `Array`                  | `[]`                        | Defines the options to display when select is opened.                                                                                                            |
| option-key  | `String`                 | `'key'`                     | Defines the key identifier of the option.                                                                                                                        |
| option-name | `String`                 | `'name'`                    | Defines the name of the option that will be displayed as the option text and displayed as the value of the select when the option is selected.                   |

### Events

| Name         | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| update:value | Event emitted whenever an option from the select component is selected |

## Basic Select

<Select-Proxy />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Select v-model="value" :options="options" />
</template>

<script>
export default {
	data() {
		return {
			value: null,
			options: [
				{ key: 1, name: 'Option 1' },
				{ key: 2, name: 'Option 2' },
			],
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Themes

Every select can define a **theme** and a **variant**. The theme defines the design of the select box and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline">
    <SelectProxy theme="solid" />
    <SelectProxy theme="solid" variant="primary" />
    <SelectProxy theme="solid" variant="secondary" />
    <SelectProxy theme="solid" variant="danger" />
    <SelectProxy theme="solid" variant="warning" />
    <SelectProxy theme="solid" variant="success" />
    <SelectProxy theme="solid" variant="info" />
</p>

### Outlined

<p class="components-inline">
    <SelectProxy theme="outlined" />
    <SelectProxy theme="outlined" variant="primary" />
    <SelectProxy theme="outlined" variant="secondary" />
    <SelectProxy theme="outlined" variant="danger" />
    <SelectProxy theme="outlined" variant="warning" />
    <SelectProxy theme="outlined" variant="success" />
    <SelectProxy theme="outlined" variant="info" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid theme -->
	<Select v-model="value" :options="options" theme="solid" />
	<Select v-model="value" :options="options" theme="solid" variant="primary" />
	<Select v-model="value" :options="options" theme="solid" variant="secondary" />
	<Select v-model="value" :options="options" theme="solid" variant="danger" />
	<Select v-model="value" :options="options" theme="solid" variant="warning" />
	<Select v-model="value" :options="options" theme="solid" variant="success" />
	<Select v-model="value" :options="options" theme="solid" variant="info" />

	<!-- Outlined theme -->
	<Select v-model="value" :options="options" theme="outlined" />
	<Select v-model="value" :options="options" theme="outlined" variant="primary" />
	<Select v-model="value" :options="options" theme="outlined" variant="secondary" />
	<Select v-model="value" :options="options" theme="outlined" variant="danger" />
	<Select v-model="value" :options="options" theme="outlined" variant="warning" />
	<Select v-model="value" :options="options" theme="outlined" variant="success" />
	<Select v-model="value" :options="options" theme="outlined" variant="info" />
</template>

<script>
export default {
	data() {
		return {
			value: null,
			options: [
				{ key: 1, name: 'Option 1' },
				{ key: 2, name: 'Option 2' },
			],
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Sizes

The select boxes can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the select component will use the **md** size by default.

<p class="components-inline">
    <SelectProxy size="sm" />
    <SelectProxy size="md" />
    <SelectProxy size="lg" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Select v-model="value" :options="options" size="sm" />
	<Select v-model="value" :options="options" size="md" />
	<Select v-model="value" :options="options" size="lg" />
</template>

<script>
export default {
	data() {
		return {
			value: null,
			options: [
				{ key: 1, name: 'Option 1' },
				{ key: 2, name: 'Option 2' },
			],
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## States

Besides themes and sizes, every button can define a set of props to control their visible states.

### Disabled

<p class="components-inline">
    <SelectProxy disabled />
</p>

<p class="components-inline">
    <SelectProxy disabled theme="solid" />
    <SelectProxy disabled theme="solid" variant="primary" />
    <SelectProxy disabled theme="solid" variant="secondary" />
    <SelectProxy disabled theme="solid" variant="danger" />
    <SelectProxy disabled theme="solid" variant="warning" />
    <SelectProxy disabled theme="solid" variant="success" />
    <SelectProxy disabled theme="solid" variant="info" />
</p>

<p class="components-inline">
    <SelectProxy disabled theme="outlined" />
    <SelectProxy disabled theme="outlined" variant="primary" />
    <SelectProxy disabled theme="outlined" variant="secondary" />
    <SelectProxy disabled theme="outlined" variant="danger" />
    <SelectProxy disabled theme="outlined" variant="warning" />
    <SelectProxy disabled theme="outlined" variant="success" />
    <SelectProxy disabled theme="outlined" variant="info" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Default theme -->
	<Select v-model="value" :options="options" theme="solid" disabled />

	<!-- Solid theme -->
	<Select v-model="value" :options="options" theme="solid" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="primary" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="secondary" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="danger" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="warning" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="success" disabled />
	<Select v-model="value" :options="options" theme="solid" variant="info" disabled />

	<!-- Outlined theme -->
	<Select v-model="value" :options="options" theme="outlined" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="primary" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="secondary" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="danger" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="warning" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="success" disabled />
	<Select v-model="value" :options="options" theme="outlined" variant="info" disabled />
</template>

<script>
export default {
	data() {
		return {
			value: null,
			options: [
				{ key: 1, name: 'Option 1' },
				{ key: 2, name: 'Option 2' },
			],
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
