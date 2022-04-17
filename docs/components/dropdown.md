# Dropdown

The dropdown component is a simple implementation of a [Button](./button.md) component, that triggers a dropdown menu when clicked. The content of the dropdown menu can be fully costumized through a default slot.

[[toc]]

## API

### Props

| Name                           | Type | Default | Description                                                                                                                    |
| ------------------------------ | ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [...Button](./button.md#props) |      |         | All the props from the [Button](./button.md) component are also available here and are applied directly to the Button instance |

## Basic Dropdown

<Dropdown label="Click me">
    <Button theme="text" class="mr-dropdown-option">Option 1</Button>
    <Button theme="text" class="mr-dropdown-option">Option 2</Button>
    <Button theme="text" class="mr-dropdown-option">Option 3</Button>
</Dropdown>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Dropdown label="Click me">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Button

By default, the dropdown accepts all the props also accepted by the [Button](./button.md) component (themes, variants, sizes, etc). All those props are passed down automatically to the button instance.

### Themes

#### Solid

<div class="components-inline">
    <Dropdown label="Default">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Primary" variant="primary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Secondary" variant="secondary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Danger" variant="danger">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Warning" variant="warning">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Success" variant="success">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Info" variant="info">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
</div>

#### Outlined

<div class="components-inline">
    <Dropdown label="Default" theme="outlined">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Primary" theme="outlined" variant="primary">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Secondary" theme="outlined" variant="secondary">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Danger" theme="outlined" variant="danger">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Warning" theme="outlined" variant="warning">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Success" theme="outlined" variant="success">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Info" theme="outlined" variant="info">
        <Button theme="text"  class="mr-dropdown-option">Option 1</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 2</Button>
        <Button theme="text"  class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
</div>

#### Text

<div class="components-inline">
    <Dropdown label="Default" theme="text">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Primary" theme="text" variant="primary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Secondary" theme="text" variant="secondary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Danger" theme="text" variant="danger">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Warning" theme="text" variant="warning">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Success" theme="text" variant="success">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Info" theme="text" variant="info">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
</div>

#### Text Solid

<div class="components-inline">
    <Dropdown label="Default" theme="text-solid">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Primary" theme="text-solid" variant="primary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Secondary" theme="text-solid" variant="secondary">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Danger" theme="text-solid" variant="danger">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Warning" theme="text-solid" variant="warning">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Success" theme="text-solid" variant="success">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Info" theme="text-solid" variant="info">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<!-- Solid -->
	<Dropdown label="Default">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Primary" variant="primary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Secondary" variant="secondary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Danger" variant="danger">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Warning" variant="warning">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Success" variant="success">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Info" variant="info">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<!-- Outlined -->
	<Dropdown label="Default" theme="outlined">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Primary" theme="outlined" variant="primary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Secondary" theme="outlined" variant="secondary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Danger" theme="outlined" variant="danger">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Warning" theme="outlined" variant="warning">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Success" theme="outlined" variant="success">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Info" theme="outlined" variant="info">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<!-- Text -->
	<Dropdown label="Default" theme="text">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Primary" theme="text" variant="primary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Secondary" theme="text" variant="secondary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Danger" theme="text" variant="danger">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Warning" theme="text" variant="warning">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Success" theme="text" variant="success">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Info" theme="text" variant="info">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<!-- Text Solid -->
	<Dropdown label="Default" theme="text-solid">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Primary" theme="text-solid" variant="primary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Secondary" theme="text-solid" variant="secondary">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Danger" theme="text-solid" variant="danger">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Warning" theme="text-solid" variant="warning">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Success" theme="text-solid" variant="success">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>

	<Dropdown label="Info" theme="text-solid" variant="info">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>
</template>
```

  </CodeGroupItem>
</CodeGroup>

### Sizes

<div class="components-inline">
    <Dropdown label="Small button" size="sm">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Normal button" size="sm">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
    <Dropdown label="Large button" size="lg">
        <Button theme="text" class="mr-dropdown-option">Option 1</Button>
        <Button theme="text" class="mr-dropdown-option">Option 2</Button>
        <Button theme="text" class="mr-dropdown-option">Option 3</Button>
    </Dropdown>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Dropdown label="Click me" theme="outlined">
		<Button theme="text" class="mr-dropdown-option">Option 1</Button>
		<Button theme="text" class="mr-dropdown-option">Option 2</Button>
		<Button theme="text" class="mr-dropdown-option">Option 3</Button>
	</Dropdown>
</template>
```

  </CodeGroupItem>
</CodeGroup>
