# Button

The button component is a lightweight extension of the standard HTML button, supporting: themes, icons, states, etc.

[[toc]]

## Basic Button

<Button>Default</Button>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <button>Default</button>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Themes

Every button can define a **theme** and a **variant**. The theme defines the design of the button and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline">
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="success">Success</Button>
    <Button variant="info">Info</Button>
</p>

### Outlined

<p class="components-inline">
    <Button theme="outlined">Default</Button>
    <Button theme="outlined" variant="primary">Primary</Button>
    <Button theme="outlined" variant="secondary">Secondary</Button>
    <Button theme="outlined" variant="danger">Danger</Button>
    <Button theme="outlined" variant="warning">Warning</Button>
    <Button theme="outlined" variant="success">Success</Button>
    <Button theme="outlined" variant="info">Info</Button>
</p>

### Text

<p class="components-inline">
    <Button theme="text">Default</Button>
    <Button theme="text" variant="primary">Primary</Button>
    <Button theme="text" variant="secondary">Secondary</Button>
    <Button theme="text" variant="danger">Danger</Button>
    <Button theme="text" variant="warning">Warning</Button>
    <Button theme="text" variant="success">Success</Button>
    <Button theme="text" variant="info">Info</Button>
</p>

### Text Solid

<p class="components-inline">
    <Button theme="text-solid">Default</Button>
    <Button theme="text-solid" variant="primary">Primary</Button>
    <Button theme="text-solid" variant="secondary">Secondary</Button>
    <Button theme="text-solid" variant="danger">Danger</Button>
    <Button theme="text-solid" variant="warning">Warning</Button>
    <Button theme="text-solid" variant="success">Success</Button>
    <Button theme="text-solid" variant="info">Info</Button>
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <!-- Solid -->
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="success">Success</Button>
    <Button variant="info">Info</Button>

    <!-- Outlined -->
    <Button theme="outlined">Default</Button>
    <Button theme="outlined" variant="primary">Primary</Button>
    <Button theme="outlined" variant="secondary">Secondary</Button>
    <Button theme="outlined" variant="danger">Danger</Button>
    <Button theme="outlined" variant="warning">Warning</Button>
    <Button theme="outlined" variant="success">Success</Button>
    <Button theme="outlined" variant="info">Info</Button>

    <!-- Text -->
    <Button theme="text">Default</Button>
    <Button theme="text" variant="primary">Primary</Button>
    <Button theme="text" variant="secondary">Secondary</Button>
    <Button theme="text" variant="danger">Danger</Button>
    <Button theme="text" variant="warning">Warning</Button>
    <Button theme="text" variant="success">Success</Button>
    <Button theme="text" variant="info">Info</Button>

    <!-- Text Solid -->
    <Button theme="text-solid">Default</Button>
    <Button theme="text-solid" variant="primary">Primary</Button>
    <Button theme="text-solid" variant="secondary">Secondary</Button>
    <Button theme="text-solid" variant="danger">Danger</Button>
    <Button theme="text-solid" variant="warning">Warning</Button>
    <Button theme="text-solid" variant="success">Success</Button>
    <Button theme="text-solid" variant="info">Info</Button>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Sizes

The buttons can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the buttons will use the **md** size by default.

<p class="components-inline">
    <Button size="sm">Small button</Button>
    <Button size="md">Medium button</Button>
    <Button size="lg">Large button</Button>
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <Button size="sm">Small button</Button>
    <Button size="md">Medium button</Button>
    <Button size="lg">Large button</Button>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Icons

Buttons can define their icons through the **icon** prop. By default the icon will be placed in the beginning of the button. To place the icon on the right side you can use the **icon-position** prop.

### Starting with an icon

<p class="components-inline">
    <Button size="sm" icon="chat-3-line">Chat</Button>
    <Button icon="chat-3-line">Chat</Button>
    <Button size="lg" icon="chat-3-line">Chat</Button>
</p>

### Ending with an icon

<p class="components-inline">
    <Button size="sm" icon="chat-3-line" icon-position="end">Chat</Button>
    <Button icon="chat-3-line" icon-position="end">Chat</Button>
    <Button size="lg" icon="chat-3-line" icon-position="end">Chat</Button>
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <!-- Starting with an icon -->
    <Button size="sm" icon="chat-3-line">Chat</Button>
    <Button icon="chat-3-line">Chat</Button>
    <Button size="lg" icon="chat-3-line">Chat</Button>

    <!-- Ending with an icon -->
    <Button size="sm" icon="chat-3-line" icon-position="end">Chat</Button>
    <Button icon="chat-3-line" icon-position="end">Chat</Button>
    <Button size="lg" icon="chat-3-line" icon-position="end">Chat</Button>
</template>
```

  </CodeGroupItem>
</CodeGroup>

The icon library used contains more than 2200 icons and will be shipped by default when the Button component is imported. Full list of icons [here](https://remixicon.com/)

## States

Besides themes and sizes, every button can define a set of props to control their visible states.

### Disabled

<p class="components-inline">
    <Button disabled>Default</Button>
    <Button disabled variant="primary">Primary</Button>
    <Button disabled variant="secondary">Secondary</Button>
    <Button disabled variant="danger">Danger</Button>
    <Button disabled variant="warning">Warning</Button>
    <Button disabled variant="success">Success</Button>
    <Button disabled variant="info">Info</Button>
</p>

<p class="components-inline">
    <Button disabled theme="outlined">Default</Button>
    <Button disabled theme="outlined" variant="primary">Primary</Button>
    <Button disabled theme="outlined" variant="secondary">Secondary</Button>
    <Button disabled theme="outlined" variant="danger">Danger</Button>
    <Button disabled theme="outlined" variant="warning">Warning</Button>
    <Button disabled theme="outlined" variant="success">Success</Button>
    <Button disabled theme="outlined" variant="info">Info</Button>
</p>

<p class="components-inline">
    <Button disabled theme="text">Default</Button>
    <Button disabled theme="text" variant="primary">Primary</Button>
    <Button disabled theme="text" variant="secondary">Secondary</Button>
    <Button disabled theme="text" variant="danger">Danger</Button>
    <Button disabled theme="text" variant="warning">Warning</Button>
    <Button disabled theme="text" variant="success">Success</Button>
    <Button disabled theme="text" variant="info">Info</Button>
</p>

<p class="components-inline">
    <Button disabled theme="text-solid">Default</Button>
    <Button disabled theme="text-solid" variant="primary">Primary</Button>
    <Button disabled theme="text-solid" variant="secondary">Secondary</Button>
    <Button disabled theme="text-solid" variant="danger">Danger</Button>
    <Button disabled theme="text-solid" variant="warning">Warning</Button>
    <Button disabled theme="text-solid" variant="success">Success</Button>
    <Button disabled theme="text-solid" variant="info">Info</Button>
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <!-- Solid -->
    <Button disabled>Default</Button>
    <Button disabled variant="primary">Primary</Button>
    <Button disabled variant="secondary">Secondary</Button>
    <Button disabled variant="danger">Danger</Button>
    <Button disabled variant="warning">Warning</Button>
    <Button disabled variant="success">Success</Button>
    <Button disabled variant="info">Info</Button>

    <!-- Outlined -->
    <Button disabled theme="outlined">Default</Button>
    <Button disabled theme="outlined" variant="primary">Primary</Button>
    <Button disabled theme="outlined" variant="secondary">Secondary</Button>
    <Button disabled theme="outlined" variant="danger">Danger</Button>
    <Button disabled theme="outlined" variant="warning">Warning</Button>
    <Button disabled theme="outlined" variant="success">Success</Button>
    <Button disabled theme="outlined" variant="info">Info</Button>

    <!-- Text -->
    <Button disabled theme="text">Default</Button>
    <Button disabled theme="text" variant="primary">Primary</Button>
    <Button disabled theme="text" variant="secondary">Secondary</Button>
    <Button disabled theme="text" variant="danger">Danger</Button>
    <Button disabled theme="text" variant="warning">Warning</Button>
    <Button disabled theme="text" variant="success">Success</Button>
    <Button disabled theme="text" variant="info">Info</Button>

    <!-- Text Solid -->
    <Button disabled theme="text-solid">Default</Button>
    <Button disabled theme="text-solid" variant="primary">Primary</Button>
    <Button disabled theme="text-solid" variant="secondary">Secondary</Button>
    <Button disabled theme="text-solid" variant="danger">Danger</Button>
    <Button disabled theme="text-solid" variant="warning">Warning</Button>
    <Button disabled theme="text-solid" variant="success">Success</Button>
    <Button disabled theme="text-solid" variant="info">Info</Button>
</template>
```

  </CodeGroupItem>
</CodeGroup>
