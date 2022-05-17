# Input

The input component is a lightweight extension of the standard input element, supporting: themes, icons, states, etc.

[[toc]]

## API

### Props

| Name           | Type                     | Default     | Description                                                                                                                                                     |
| -------------- | ------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme          | `String`                 | `'default'` | Defines the theme of the input component. Possible values are: `default`, `solid` and `outlined`                                                                |
| variant        | `String`                 | `'default'` | Defines the variant of the theme applied to the input component. Possible values are: `default`, `primary`, `secondary`, `danger`, `warning`, `success`, `info` |
| size           | `String`                 | `'md'`      | Defines the size of the input component. Possible values are: `sm`, `md`, `lg`                                                                                  |
| disabled       | `Boolean`                | `false`     | Defines if the input component is disabled or not                                                                                                               |
| label          | `String`                 | `''`        | Label to display on top or besides the input element                                                                                                            |
| label-position | `String`                 | `'start'`   | Defines where the label text must be placed. Possible values are: `start`, `center` and `end`                                                                   |
| inline         | `Boolean`                | `false`     | Defines if the label and the input must be inline or not                                                                                                        |
| required       | `Boolean`                | `false`     | Defines if the input is required to have a value or not                                                                                                         |
| autocomplete   | `String`                 | `'off'`     | Defines if the browser should autocomplete the field automatically or not, and what values to use to autocomplete it                                            |
| icon           | `String`                 | `''`        | Defines the icon to show inside the input element                                                                                                               |
| icon-position  | `String`                 | `'start'`   | Defines where the icon must be placed. Possible values are: `start` and `end`                                                                                   |
| placeholder    | `String`                 | `''`        | Defines the placeholder to show when the input is empty                                                                                                         |
| model-value    | `Object\|Number\|String` | `null`      | Defines the value of the input                                                                                                                                  |
| errors         | `Array<String>`          | `[]`        | Defines a String array of validation errors for the input field                                                                                                 |

### Events

| Name               | Description                                           |
| ------------------ | ----------------------------------------------------- |
| update:model-value | Event emitted whenever the value of the input changes |
| focus              | Event emitted whenever the input is focused           |

## Basic Input

<div class="half-width-fill-on-mobile">
    <Input-Proxy />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input v-model="value" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Placeholder

<div class="half-width-fill-on-mobile">
    <Input-Proxy placeholder="Write here..." />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input v-model="value" placeholder="Write here" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Label

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Start" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Center" label-position="center" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="End" label-position="end" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input v-model="value" label="Start" />
	<Input v-model="value" label="Center" label-position="center" />
	<Input v-model="value" label="End" label-position="end" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br>

<strong>Dispositions:</strong>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Inline" inline/>
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Inline End" label-position="end" inline />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input v-model="value" label="Inline" inline />
	<Input v-model="value" label="Inline End" inline label-position="end" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Validations

### Single error

<div class="half-width-fill-on-mobile">
    <Input-Proxy :errors="['Username is too short']" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input-Proxy :errors="['Username is too short']" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

### Multiple errors

<div class="half-width-fill-on-mobile">
    <Input-Proxy :errors="['Username is too short', 'Username already taken']" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input-Proxy :errors="['Username is too short', 'Username already taken']" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Themes

Every input can define a **theme** and a **variant**. The theme defines the design of the input box and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="solid" placeholder="Solid input" />
    <Input-Proxy theme="solid" variant="primary" placeholder="Solid primary input" />
    <Input-Proxy theme="solid" variant="secondary" placeholder="Solid secondary input" />
    <Input-Proxy theme="solid" variant="danger" placeholder="Solid danger input" />
    <Input-Proxy theme="solid" variant="warning" placeholder="Solid warning input" />
    <Input-Proxy theme="solid" variant="success" placeholder="Solid success input" />
    <Input-Proxy theme="solid" variant="info" placeholder="Solid info input" />
</p>

### Outlined

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="outlined" placeholder="Outlined input" />
    <Input-Proxy theme="outlined" variant="primary" placeholder="Outlined primary input" />
    <Input-Proxy theme="outlined" variant="secondary" placeholder="Outlined secondary input" />
    <Input-Proxy theme="outlined" variant="danger" placeholder="Outlined danger input" />
    <Input-Proxy theme="outlined" variant="warning" placeholder="Outlined warning input" />
    <Input-Proxy theme="outlined" variant="success" placeholder="Outlined success input" />
    <Input-Proxy theme="outlined" variant="info" placeholder="Outlined info input" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Input theme="solid" placeholder="Solid input" />
	<Input theme="solid" variant="primary" placeholder="Solid primary input" />
	<Input theme="solid" variant="secondary" placeholder="Solid secondary input" />
	<Input theme="solid" variant="danger" placeholder="Solid danger input" />
	<Input theme="solid" variant="warning" placeholder="Solid warning input" />
	<Input theme="solid" variant="success" placeholder="Solid success input" />
	<Input theme="solid" variant="info" placeholder="Solid info input" />

	<!-- Outlined -->
	<Input theme="outlined" placeholder="Outlined input" />
	<Input theme="outlined" variant="primary" placeholder="Outlined primary input" />
	<Input theme="outlined" variant="secondary" placeholder="Outlined secondary input" />
	<Input theme="outlined" variant="danger" placeholder="Outlined danger input" />
	<Input theme="outlined" variant="warning" placeholder="Outlined warning input" />
	<Input theme="outlined" variant="success" placeholder="Outlined success input" />
	<Input theme="outlined" variant="info" placeholder="Outlined info input" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Sizes

The input boxes can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the input component will use the **md** size by default.

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy size="sm" placeholder="Small input" label="Small input" />
    <Input-Proxy size="md" placeholder="Normal input" label="Normal input" />
    <Input-Proxy size="lg" placeholder="Large input" label="Large input" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input size="sm" placeholder="Small input" label="Small input" />
	<Input size="md" placeholder="Normal input" label="Normal input" />
	<Input size="lg" placeholder="Large input" label="Large input" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Icons

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy icon="chat-3-line" size="sm" placeholder="Input with start icon" />
    <Input-Proxy icon="chat-3-line" size="md" placeholder="Input with end icon" />
    <Input-Proxy icon="chat-3-line" size="lg" placeholder="Input with end icon" />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy icon="chat-3-line" icon-position="end" size="sm" placeholder="Input with start icon" />
    <Input-Proxy icon="chat-3-line" icon-position="end" size="md" placeholder="Input with end icon" />
    <Input-Proxy icon="chat-3-line" icon-position="end" size="lg" placeholder="Input with end icon" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Icon on the left -->
	<Input icon="chat-3-line" size="sm" placeholder="Input with start icon" />
	<Input icon="chat-3-line" size="md" placeholder="Input with end icon" />
	<Input icon="chat-3-line" size="lg" placeholder="Input with end icon" />

	<!-- Icon on the right -->
	<Input icon="chat-3-line" icon-position="end" size="sm" placeholder="Input with start icon" />
	<Input icon="chat-3-line" icon-position="end" size="md" placeholder="Input with end icon" />
	<Input icon="chat-3-line" icon-position="end" size="lg" placeholder="Input with end icon" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## States

Besides themes and sizes, every input box can define a set of props to control their visible states.

### Disabled

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy placeholder="Disabled input" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="solid" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="primary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="secondary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="danger" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="warning" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="success" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="info" placeholder="Disabled input" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="outlined" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="primary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="secondary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="danger" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="warning" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="success" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="info" placeholder="Disabled input" disabled />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Input placeholder="Disabled input" disabled />

	<!-- Solid -->
	<Input theme="solid" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="primary" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="secondary" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="danger" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="warning" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="success" placeholder="Disabled input" disabled />
	<Input theme="solid" variant="info" placeholder="Disabled input" disabled />

	<!-- Outlined -->
	<Input theme="outlined" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="primary" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="secondary" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="danger" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="warning" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="success" placeholder="Disabled input" disabled />
	<Input theme="outlined" variant="info" placeholder="Disabled input" disabled />
</template>
```

  </CodeGroupItem>
</CodeGroup>
