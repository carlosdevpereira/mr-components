# Message

The message component allows to display highlighted messages to the user inside a specific section.

[[toc]]

## API

### Props

| Name      | Type      | Default | Description                                                                                                                  |
| --------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| variant   | `String`  | `''`    | Defines the variant of the theme applied to the input component. Possible values are: `danger`, `warning`, `success`, `info` |
| icon      | `String`  | `''`    | Defines the icon to show inside the input element                                                                            |
| title     | `String`  | ``      | Defines the main piece of text of the message                                                                                |
| body      | `String`  | ``      | Defines the smaller piece of text of the message. Used for long descriptions                                                 |
| closeable | `Boolean` | `false` | Defines if the message can be closed manually by the user or not                                                             |

### Events

| Name  | Description                                                       |
| ----- | ----------------------------------------------------------------- |
| close | Event emitted whenever the message wants to be closed (destroyed) |

<br>

## Basic Message

<MessageProxy title="This is a basic message" />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message title="This is a base message" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br>

## Body

<MessageProxy 
    title="This message has a body" 
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" 
/>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message
		title="This message has a body"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br>

## Closeable

<div class="space-between-lines">
    <MessageProxy title="This is a basic message" closeable />
    <MessageProxy
        closeable
        title="This message has a body"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna"
    />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message title="This is a basic message" closeable />

	<Message
		title="This message has a body"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br>

## Variants

### Simple

<div class="space-between-lines">
    <MessageProxy title="Test message" closeable />
    <MessageProxy title="Test message" variant="danger" closeable />
    <MessageProxy title="Test message" variant="warning" closeable />
    <MessageProxy title="Test message" variant="success" closeable />
    <MessageProxy title="Test message" variant="info" closeable />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message title="Test message" closeable />
	<Message title="Test message" variant="danger" closeable />
	<Message title="Test message" variant="warning" closeable />
	<Message title="Test message" variant="success" closeable />
	<Message title="Test message" variant="info" closeable />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br>

### With Body

<div class="space-between-lines">
    <MessageProxy title="Test message" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" closeable />
    <MessageProxy title="Test message" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" variant="danger" closeable />
    <MessageProxy title="Test message" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" variant="warning" closeable />
    <MessageProxy title="Test message" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" variant="success" closeable />
    <MessageProxy title="Test message" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec imperdiet ligula. Sed sodales, nulla at fringilla lacinia, erat nisl ultricies libero, in sollicitudin velit mauris a urna" variant="info" closeable />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Message
		title="Test message"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
		closeable
	/>
	<Message
		closeable
		variant="danger"
		title="Test message"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
	/>
	<Message
		closeable
		variant="warning"
		title="Test message"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
	/>
	<Message
		closeable
		variant="success"
		title="Test message"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
	/>
	<Message
		closeable
		variant="info"
		title="Test message"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>
