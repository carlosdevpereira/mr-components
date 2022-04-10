# Checkbox

The checkbox component is a lightweight extension of the standard HTML input type="checkbox" element, featuring: themes, sizes, etc.

[[toc]]

## Basic Checkbox

<CheckboxProxy variant="default" label="Default" />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Checkbox v-model="value" variant="default" label="Default" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Themes

Every checkbox can define a **theme** and a **variant**. The theme defines the design of the checkbox and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline">
    <CheckboxProxy variant="default" label="Default" />
    <CheckboxProxy variant="primary" label="Primary" />
    <CheckboxProxy variant="secondary" label="Secondary" />
    <CheckboxProxy variant="danger" label="Danger" />
    <CheckboxProxy variant="warning" label="Warning" />
    <CheckboxProxy variant="success" label="Success" />
    <CheckboxProxy variant="info" label="Info" />
</p>

### Outlined

<p class="components-inline">
    <CheckboxProxy theme="outlined" variant="default" label="Default" />
    <CheckboxProxy theme="outlined" variant="primary" label="Primary" />
    <CheckboxProxy theme="outlined" variant="secondary" label="Secondary" />
    <CheckboxProxy theme="outlined" variant="danger" label="Danger" />
    <CheckboxProxy theme="outlined" variant="warning" label="Warning" />
    <CheckboxProxy theme="outlined" variant="success" label="Success" />
    <CheckboxProxy theme="outlined" variant="info" label="Info" />
</p>

### Switch

<p class="components-inline">
    <CheckboxProxy theme="switch" variant="default" label="Default" />
    <CheckboxProxy theme="switch" variant="primary" label="Primary" />
    <CheckboxProxy theme="switch" variant="secondary" label="Secondary" />
    <CheckboxProxy theme="switch" variant="danger" label="Danger" />
    <CheckboxProxy theme="switch" variant="warning" label="Warning" />
    <CheckboxProxy theme="switch" variant="success" label="Success" />
    <CheckboxProxy theme="switch" variant="info" label="Info" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Checkbox v-model="value" variant="default" label="Default" />
	<Checkbox v-model="value" variant="primary" label="Primary" />
	<Checkbox v-model="value" variant="secondary" label="Secondary" />
	<Checkbox v-model="value" variant="danger" label="Danger" />
	<Checkbox v-model="value" variant="warning" label="Warning" />
	<Checkbox v-model="value" variant="success" label="Success" />
	<Checkbox v-model="value" variant="info" label="Info" />

	<!-- Outlined -->
	<Checkbox v-model="value" theme="outlined" variant="default" label="Default" />
	<Checkbox v-model="value" theme="outlined" variant="primary" label="Primary" />
	<Checkbox v-model="value" theme="outlined" variant="secondary" label="Secondary" />
	<Checkbox v-model="value" theme="outlined" variant="danger" label="Danger" />
	<Checkbox v-model="value" theme="outlined" variant="warning" label="Warning" />
	<Checkbox v-model="value" theme="outlined" variant="success" label="Success" />
	<Checkbox v-model="value" theme="outlined" variant="info" label="Info" />

	<!-- Switch -->
	<Checkbox v-model="value" theme="switch" variant="default" label="Default" />
	<Checkbox v-model="value" theme="switch" variant="primary" label="Primary" />
	<Checkbox v-model="value" theme="switch" variant="secondary" label="Secondary" />
	<Checkbox v-model="value" theme="switch" variant="danger" label="Danger" />
	<Checkbox v-model="value" theme="switch" variant="warning" label="Warning" />
	<Checkbox v-model="value" theme="switch" variant="success" label="Success" />
	<Checkbox v-model="value" theme="switch" variant="info" label="Info" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Sizes

### Checkbox

<p class="components-inline">
    <CheckboxProxy size="sm" label="Small checkbox" />
    <CheckboxProxy size="md" label="Medium checkbox" />
    <CheckboxProxy size="lg" label="Large checkbox" />
</p>

### Switch

<p class="components-inline">
    <CheckboxProxy theme="switch" size="sm" label="Small switch" />
    <CheckboxProxy theme="switch" size="md" label="Medium switch" />
    <CheckboxProxy theme="switch" size="lg" label="Large switch" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Checkbox v-model="value" size="sm" label="Small checkbox" />
	<Checkbox v-model="value" size="md" label="Medium checkbox" />
	<Checkbox v-model="value" size="lg" label="Large checkbox" />

	<!-- Switch -->
	<Checkbox v-model="value" theme="switch" size="sm" label="Small switch" />
	<Checkbox v-model="value" theme="switch" size="md" label="Medium switch" />
	<Checkbox v-model="value" theme="switch" size="lg" label="Large switch" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## States

Besides themes and sizes, every checkbox can define a set of props to control their visible states.

### Disabled

<p class="components-inline">
    <CheckboxProxy disabled variant="default" label="Default" />
    <CheckboxProxy disabled variant="primary" label="Primary" />
    <CheckboxProxy disabled variant="secondary" label="Secondary" />
    <CheckboxProxy disabled variant="danger" label="Danger" />
    <CheckboxProxy disabled variant="warning" label="Warning" />
    <CheckboxProxy disabled variant="success" label="Success" />
    <CheckboxProxy disabled variant="info" label="Info" />
</p>

<p class="components-inline">
    <CheckboxProxy disabled theme="outlined" variant="default" label="Default" />
    <CheckboxProxy disabled theme="outlined" variant="primary" label="Primary" />
    <CheckboxProxy disabled theme="outlined" variant="secondary" label="Secondary" />
    <CheckboxProxy disabled theme="outlined" variant="danger" label="Danger" />
    <CheckboxProxy disabled theme="outlined" variant="warning" label="Warning" />
    <CheckboxProxy disabled theme="outlined" variant="success" label="Success" />
    <CheckboxProxy disabled theme="outlined" variant="info" label="Info" />
</p>

<p class="components-inline">
    <CheckboxProxy disabled theme="switch" variant="default" label="Default" />
    <CheckboxProxy disabled theme="switch" variant="primary" label="Primary" />
    <CheckboxProxy disabled theme="switch" variant="secondary" label="Secondary" />
    <CheckboxProxy disabled theme="switch" variant="danger" label="Danger" />
    <CheckboxProxy disabled theme="switch" variant="warning" label="Warning" />
    <CheckboxProxy disabled theme="switch" variant="success" label="Success" />
    <CheckboxProxy disabled theme="switch" variant="info" label="Info" />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Checkbox v-model="value" variant="default" label="Default" disabled />
	<Checkbox v-model="value" variant="primary" label="Primary" disabled />
	<Checkbox v-model="value" variant="secondary" label="Secondary" disabled />
	<Checkbox v-model="value" variant="danger" label="Danger" disabled />
	<Checkbox v-model="value" variant="warning" label="Warning" disabled />
	<Checkbox v-model="value" variant="success" label="Success" disabled />
	<Checkbox v-model="value" variant="info" label="Info" disabled />

	<!-- Outlined -->
	<Checkbox v-model="value" theme="outlined" variant="default" label="Default" disabled />
	<Checkbox v-model="value" theme="outlined" variant="primary" label="Primary" disabled />
	<Checkbox v-model="value" theme="outlined" variant="secondary" label="Secondary" disabled />
	<Checkbox v-model="value" theme="outlined" variant="danger" label="Danger" disabled />
	<Checkbox v-model="value" theme="outlined" variant="warning" label="Warning" disabled />
	<Checkbox v-model="value" theme="outlined" variant="success" label="Success" disabled />
	<Checkbox v-model="value" theme="outlined" variant="info" label="Info" disabled />

	<!-- Switch -->
	<Checkbox v-model="value" theme="switch" variant="default" label="Default" disabled />
	<Checkbox v-model="value" theme="switch" variant="primary" label="Primary" disabled />
	<Checkbox v-model="value" theme="switch" variant="secondary" label="Secondary" disabled />
	<Checkbox v-model="value" theme="switch" variant="danger" label="Danger" disabled />
	<Checkbox v-model="value" theme="switch" variant="warning" label="Warning" disabled />
	<Checkbox v-model="value" theme="switch" variant="success" label="Success" disabled />
	<Checkbox v-model="value" theme="switch" variant="info" label="Info" disabled />
</template>
```

  </CodeGroupItem>
</CodeGroup>
