# Toast

The Toast plugin allows to dispatch toast notifications to alert the user and supports themes, locations and timers

[[toc]]

<Toast />

## Setup

For the dispatched notifications to appear, a `Toast` component and `ToastPlugin` must be registered in your project.

### 1. Component Instance

To create the `Toast` component instance you need to import the `Toast` component from `@carlosdevpereira/mr-components` and instantiate it using the following syntax in a global file (usually `App.vue`):

```vue
<template>
	<Toast />
</template>
```

#### Position

The location where the notifications will appear depends on the `position` prop. The accepted values are:

-   `top-left`
-   `top-center`
-   `top-right` <small>(default)</small>
-   `bottom-left`
-   `bottom-center`
-   `bottom-right`

### 2. Plugin Registration

Registering the `Toast` plugin is the next and last step before being able to dispatch notifications. The registration of the plugin can be automatic if the full `@carlosdevpereira/mr-components` package was registered globally, or manually otherwise.

#### a) Automatic registration

If you registered the `@carlosdevpereira/mr-components` using the following syntax, you're all set and don't need to do anything else.

```js
import App from './App.vue'
import { createApp } from 'vue'

import '@carlosdevpereira/mr-components/dist/style.css'
import UseMrComponents from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
UseMrComponents(app)
```

#### b) Manual registration

```js
import App from './App.vue'
import { createApp } from 'vue'

import '@carlosdevpereira/mr-components/dist/style.css'
import { ToastPlugin } from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
app.config.globalProperties.$toast = ToastPlugin

// ...
```

#### c) Manual (local component) registration

```vue
<script>
import { ToastPlugin } from '@carlosdevpereira/mr-components'

export default {
	created() {
		this.$toast = ToastPlugin
	},
}
</script>
```

## Sending a notification

### a) Inside of a Vue component

#### Success

<ToastProxy type="success" />

<CodeGroup>
    <CodeGroupItem title="Success" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.success({
				message: 'Your notification message goes here.',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Error

<ToastProxy type="error" />

<CodeGroup>
    <CodeGroupItem title="Error" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.alert({
				message: 'Your notification message goes here.',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Warning

<ToastProxy type="warning" />

<CodeGroup>
    <CodeGroupItem title="Warning" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.warn({
				message: 'Your notification message goes here.',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Info

<ToastProxy type="info" />

<CodeGroup>
    <CodeGroupItem title="Info" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.info({
				message: 'Your notification message goes here.',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### b) Outside of a Vue component

A notification can be triggered in any plain javascript or typescript file, by using the following syntax:

```js
import { ToastPlugin } from '@carlosdevpereira/mr-components'
// other imports

ToastPlugin.success({ message: 'Your message' })
ToastPlugin.alert({ message: 'Your message' })
ToastPlugin.warn({ message: 'Your message' })
ToastPlugin.info({ message: 'Your message' })
```

## Custom notification title

<ToastProxy type="error" title="SOS" />

<CodeGroup>
    <CodeGroupItem title="Custom title" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.alert({
				title: 'SOS',
				message: 'Your notification message goes here.',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Uncloseable notification

<ToastProxy type="success" :closeable="false" />

<CodeGroup>
    <CodeGroupItem title="Close button does not appear" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.success({
				message: 'Your notification message goes here.',
				closeable: false,
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Timed notification

This notification will leave automatically 2 seconds after appearing.

<ToastProxy type="success" timer="2000" />

<CodeGroup>
    <CodeGroupItem title="Will disappear in 2 seconds" active>

```vue
<script>
export default {
	methods: {
		createToast() {
			this.$toast.success({
				message: 'Your notification message goes here.',
				timer: 2000,
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
