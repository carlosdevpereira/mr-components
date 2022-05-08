# Textarea

The textarea component is a lightweight extension of the standard textarea element, supporting: themes, icons, states, etc.

[[toc]]

## API

### Props

| Name                       | Type                     | Default         | Description                                                                                                                                                        |
| -------------------------- | ------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| theme                      | `String`                 | `'default'`     | Defines the theme of the textarea component. Possible values are: `default`, `solid` and `outlined`                                                                |
| variant                    | `String`                 | `'default'`     | Defines the variant of the theme applied to the textarea component. Possible values are: `default`, `primary`, `secondary`, `danger`, `warning`, `success`, `info` |
| size                       | `String`                 | `'md'`          | Defines the size of the textarea component. Possible values are: `sm`, `md`, `lg`                                                                                  |
| disabled                   | `Boolean`                | `false`         | Defines if the textarea component is disabled or not                                                                                                               |
| label                      | `String`                 | `''`            | Label to display on top or besides the textarea element                                                                                                            |
| label-position             | `String`                 | `'start'`       | Defines where the label text must be placed. Possible values are: `start`, `center` and `end`                                                                      |
| inline                     | `Boolean`                | `false`         | Defines if the label and the textarea must be inline or not                                                                                                        |
| icon                       | `String`                 | `''`            | Defines the icon to show inside the textarea element                                                                                                               |
| icon-position              | `String`                 | `'start'`       | Defines where the icon must be placed. Possible values are: `start` and `end`                                                                                      |
| placeholder                | `String`                 | `''`            | Defines the placeholder to show when the textarea is empty                                                                                                         |
| model-value                | `Object\|Number\|String` | `null`          | Defines the value of the textarea                                                                                                                                  |
| read-only                  | `Boolean`                | `false`         | Defines if the textarea should only allow reads and prevent writes                                                                                                 |
| required                   | `Boolean`                | `false`         | Defines the textarea as required                                                                                                                                   |
| max-length                 | `Number`                 | `null`          | Defines the maximum number of characters the user can write in the textarea                                                                                        |
| height                     | `String`                 | `'fit-content'` | Defines the height of the textarea writable area. Possible values are: `sm`, `md`, `lg` and `fit-content`                                                          |
| not-resizable              | `Boolean`                | `false`         | Defines if the user should be able to resize the textarea manually or not                                                                                          |
| not-resizable-horizontally | `Boolean`                | `false`         | Defines if the user should be able to resize the textarea horizontally manually or not                                                                             |
| not-resizable-vertically   | `Boolean`                | `false`         | Defines if the user should be able to resize the textarea vertically manually or not                                                                               |
| errors                     | `Array<String>`          | `[]`            | Defines a String array of validation errors for the textarea field                                                                                                 |

### Events

| Name               | Description                                              |
| ------------------ | -------------------------------------------------------- |
| update:model-value | Event emitted whenever the value of the textarea changes |

## Basic Textarea

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea v-model="value" />
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
    <Textarea-Proxy placeholder="Write here..." />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea v-model="value" placeholder="Write here..." />
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

<strong>Positions:</strong>

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy label="Start" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy label="Center" label-position="center" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy label="End" label-position="end" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea v-model="value" label="Start" />
	<Textarea v-model="value" label="Center" label-position="center" />
	<Textarea v-model="value" label="End" label-position="end" />
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
    <Textarea-Proxy label="Inline" inline/>
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy label="Inline End" label-position="end" inline />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea v-model="value" label="Inline" inline />
	<Textarea v-model="value" label="Inline End" inline label-position="end" />
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

<div class="half-width-fill-on-mobile">
    <Textarea-Proxy label="Description" :errors="['Description is too short']" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea-Proxy label="Description" :errors="['Description is too short']" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Themes

Every textarea can define a **theme** and a **variant**. The theme defines the design of the textarea box and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy theme="solid" placeholder="Solid textarea" />
    <Textarea-Proxy theme="solid" variant="primary" placeholder="Solid primary textarea" />
    <Textarea-Proxy theme="solid" variant="secondary" placeholder="Solid secondary textarea" />
    <Textarea-Proxy theme="solid" variant="danger" placeholder="Solid danger textarea" />
    <Textarea-Proxy theme="solid" variant="warning" placeholder="Solid warning textarea" />
    <Textarea-Proxy theme="solid" variant="success" placeholder="Solid success textarea" />
    <Textarea-Proxy theme="solid" variant="info" placeholder="Solid info textarea" />
</p>

### Outlined

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy theme="outlined" placeholder="Outlined textarea" />
    <Textarea-Proxy theme="outlined" variant="primary" placeholder="Outlined primary textarea" />
    <Textarea-Proxy theme="outlined" variant="secondary" placeholder="Outlined secondary textarea" />
    <Textarea-Proxy theme="outlined" variant="danger" placeholder="Outlined danger textarea" />
    <Textarea-Proxy theme="outlined" variant="warning" placeholder="Outlined warning textarea" />
    <Textarea-Proxy theme="outlined" variant="success" placeholder="Outlined success textarea" />
    <Textarea-Proxy theme="outlined" variant="info" placeholder="Outlined info textarea" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Textarea theme="solid" placeholder="Solid textarea" />
	<Textarea theme="solid" variant="primary" placeholder="Solid primary textarea" />
	<Textarea theme="solid" variant="secondary" placeholder="Solid secondary textarea" />
	<Textarea theme="solid" variant="danger" placeholder="Solid danger textarea" />
	<Textarea theme="solid" variant="warning" placeholder="Solid warning textarea" />
	<Textarea theme="solid" variant="success" placeholder="Solid success textarea" />
	<Textarea theme="solid" variant="info" placeholder="Solid info textarea" />

	<!-- Outlined -->
	<Textarea theme="outlined" placeholder="Outlined textarea" />
	<Textarea theme="outlined" variant="primary" placeholder="Outlined primary textarea" />
	<Textarea theme="outlined" variant="secondary" placeholder="Outlined secondary textarea" />
	<Textarea theme="outlined" variant="danger" placeholder="Outlined danger textarea" />
	<Textarea theme="outlined" variant="warning" placeholder="Outlined warning textarea" />
	<Textarea theme="outlined" variant="success" placeholder="Outlined success textarea" />
	<Textarea theme="outlined" variant="info" placeholder="Outlined info textarea" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Sizes

The textarea boxes can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the textarea component will use the **md** size by default.

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy size="sm" placeholder="Small textarea" label="Small textarea" />
    <Textarea-Proxy size="md" placeholder="Normal textarea" label="Normal textarea" />
    <Textarea-Proxy size="lg" placeholder="Large textarea" label="Large textarea" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea size="sm" placeholder="Small textarea" label="Small textarea" />
	<Textarea size="md" placeholder="Normal textarea" label="Normal textarea" />
	<Textarea size="lg" placeholder="Large textarea" label="Large textarea" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

### Height

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy placeholder="Small textarea" label="Small textarea" height="sm" />
    <Textarea-Proxy placeholder="Normal textarea" label="Normal textarea" height="md" />
    <Textarea-Proxy placeholder="Large textarea" label="Large textarea" height="lg" />
    <Textarea-Proxy placeholder="This textarea will grow to fit its content" label="Fit content" height="fit-content" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea placeholder="Small textarea" label="Small textarea" height="sm" />
	<Textarea placeholder="Normal textarea" label="Normal textarea" height="md" />
	<Textarea placeholder="Large textarea" label="Large textarea" height="lg" />
	<Textarea
		placeholder="This textarea will grow to fit its content"
		label="Fit content"
		height="fit-content"
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

### Not resizable

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy placeholder="This textarea cannot be resized" label="Static textarea" not-resizable />
    <Textarea-Proxy placeholder="This textarea cannot be resized horizontally" label="Static textarea" not-resizable-horizontally />
    <Textarea-Proxy placeholder="This textarea cannot be resized vertically" label="Static textarea" not-resizable-vertically />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea placeholder="This textarea cannot be resized" label="Static textarea" not-resizable />
	<Textarea
		placeholder="This textarea cannot be resized horizontally"
		label="Static textarea"
		not-resizable-horizontally
	/>
	<Textarea
		placeholder="This textarea cannot be resized vertically"
		label="Static textarea"
		not-resizable-vertically
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Icons

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy icon="chat-3-line" size="sm" placeholder="Textarea with start icon" />
    <Textarea-Proxy icon="chat-3-line" size="md" placeholder="Textarea with start icon" />
    <Textarea-Proxy icon="chat-3-line" size="lg" placeholder="Textarea with start icon" />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy icon="chat-3-line" icon-position="end" size="sm" placeholder="Textarea with end icon" />
    <Textarea-Proxy icon="chat-3-line" icon-position="end" size="md" placeholder="Textarea with end icon" />
    <Textarea-Proxy icon="chat-3-line" icon-position="end" size="lg" placeholder="Textarea with end icon" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Icon on the left -->
	<Textarea icon="chat-3-line" size="sm" placeholder="Textarea with start icon" />
	<Textarea icon="chat-3-line" size="md" placeholder="Textarea with start icon" />
	<Textarea icon="chat-3-line" size="lg" placeholder="Textarea with start icon" />

	<!-- Icon on the right -->
	<Textarea
		icon="chat-3-line"
		icon-position="end"
		size="sm"
		placeholder="Textarea with end icon"
	/>
	<Textarea
		icon="chat-3-line"
		icon-position="end"
		size="md"
		placeholder="Textarea with end icon"
	/>
	<Textarea
		icon="chat-3-line"
		icon-position="end"
		size="lg"
		placeholder="Textarea with end icon"
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## States

Besides themes and sizes, every textarea box can define a set of props to control their visible states.

### Disabled

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy placeholder="Disabled textarea" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy theme="solid" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="primary" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="secondary" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="danger" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="warning" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="success" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="solid" variant="info" placeholder="Disabled textarea" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Textarea-Proxy theme="outlined" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="primary" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="secondary" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="danger" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="warning" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="success" placeholder="Disabled textarea" disabled />
    <Textarea-Proxy theme="outlined" variant="info" placeholder="Disabled textarea" disabled />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Textarea placeholder="Disabled textarea" disabled />

	<!-- Solid -->
	<Textarea theme="solid" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="primary" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="secondary" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="danger" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="warning" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="success" placeholder="Disabled textarea" disabled />
	<Textarea theme="solid" variant="info" placeholder="Disabled textarea" disabled />

	<!-- Outlined -->
	<Textarea theme="outlined" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="primary" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="secondary" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="danger" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="warning" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="success" placeholder="Disabled textarea" disabled />
	<Textarea theme="outlined" variant="info" placeholder="Disabled textarea" disabled />
</template>
```

  </CodeGroupItem>
</CodeGroup>
