# Radio Button

The radio button component is a lightweight extension of the standard HTML input type="radio" element, featuring: variants, sizes, states, etc.

[[toc]]

## Basic Radio Buttons

<Simple-Radio-Buttons />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Radio-Button v-model="value" value="first" label="First" />
	<Radio-Button v-model="value" value="second" label="Second" />
	<Radio-Button v-model="value" value="third" label="Third" />
</template>

<script>
export default {
	data() {
		return {
			value: null,
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Variants

Every radio button can define a **variant**. The variant defines the colors applied to the radio button.

<Simple-Radio-Button-Variants />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Radio-Button v-model="value" value="default" label="Default" />
	<Radio-Button v-model="value" value="primary" variant="primary" label="Primary" />
	<Radio-Button v-model="value" value="secondary" variant="secondary" label="Secondary" />
	<Radio-Button v-model="value" value="danger" variant="danger" label="Danger" />
	<Radio-Button v-model="value" value="warning" variant="warning" label="Warning" />
	<Radio-Button v-model="value" value="success" variant="success" label="Success" />
	<Radio-Button v-model="value" value="info" variant="info" label="Info" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Sizes

<Radio-Button-Sizes />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Radio-Button v-model="value" size="sm" value="small" label="Small" />
	<Radio-Button v-model="value" size="md" value="medium" label="Medium" />
	<Radio-Button v-model="value" size="lg" value="large" label="Large" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## States

### Disabled

<Radio-Button-Disabled />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Radio-Button value="default" label="Default" disabled />
	<Radio-Button value="primary" variant="primary" label="Primary" disabled />
	<Radio-Button value="secondary" variant="secondary" label="Secondary" disabled />
	<Radio-Button value="danger" variant="danger" label="Danger" disabled />
	<Radio-Button value="warning" variant="warning" label="Warning" disabled />
	<Radio-Button value="success" variant="success" label="Success" disabled />
	<Radio-Button value="info" variant="info" label="Info" disabled />
</template>
```

  </CodeGroupItem>
</CodeGroup>
