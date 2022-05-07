# Dialog

The Dialog plugin allows to dispatch dialogs so that the user can confirm his intention to perform a specific action.

[[toc]]

<Dialog />

## Setup

For the dispatched dialogs to appear, a `Dialog` component and `DialogPlugin` must be registered in your project.

### 1. Component Instance

To create the `Dialog` component instance you need to import the `Dialog` component from `@carlosdevpereira/mr-components` and instantiate it using the following syntax in a global file (usually `App.vue`):

```vue
<template>
	<Dialog />
</template>
```

### 2. Plugin Registration

Registering the `Dialog` plugin is the next and last step before being able to dispatch dialogs. The registration of the plugin can be automatic if the full `@carlosdevpereira/mr-components` package was registered globally, or manually otherwise.

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
import { DialogPlugin } from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
app.config.globalProperties.$dialog = DialogPlugin

// ...
```

#### c) Manual (local component) registration

```vue
<script>
import { DialogPlugin } from '@carlosdevpereira/mr-components'

export default {
	created() {
		this.$dialog = DialogPlugin
	},
}
</script>
```

## Triggering a dialog

### a) Inside of a Vue component

#### Success

<DialogProxy type="success" title="Exported successfully" message="Export finished successfully. Would you like to export to another format?" :cancel-button-label="`No`" :confirm-button-label="`Yes`" />

<CodeGroup>
    <CodeGroupItem title="Success" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.success({
				title: 'Exported successfully',
				message:
					'Export finished successfully. Would you like to export to another format?',
				cancelButtonLabel: 'No',
				confirmButtonLabel: 'Yes',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Danger

<DialogProxy type="danger" title="Delete account" message="Are you sure you want to delete this account? If you delete this account, you will lose your profile, messages and photos." />

<CodeGroup>
    <CodeGroupItem title="Danger" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.danger({
				title: 'Delete account',
				message:
					'Are you sure you want to delete this account? If you delete this account, you will lose your profile, messages and photos.',
				confirmButtonLabel: 'Delete anyway',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Warning

<DialogProxy type="warning" title="Unsaved changes" message="You're about to leave this page without saving. All changes will be lost. Do you still wish to leave?" :cancel-button-label="`No`" :confirm-button-label="`Yes`" />

<CodeGroup>
    <CodeGroupItem title="Warning" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.warning({
				title: 'Unsaved changes',
				message:
					"You're about to leave this page without saving. All changes will be lost. Do you still wish to leave?",
				cancelButtonLabel: 'No',
				confirmButtonLabel: 'Yes',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

#### Info

<DialogProxy type="info" title="New version available" message="There's a new version of mr-components available. Would you like to update now?" :cancel-button-label="`No`" :confirm-button-label="`Yes`" />

<CodeGroup>
    <CodeGroupItem title="Info" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.info({
				title: 'New version available',
				message:
					"There's a new version of mr-components available. Would you like to update now?",
				cancelButtonLabel: 'No',
				confirmButtonLabel: 'Yes',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### b) Outside of a Vue component

A dialog can be triggered in any plain javascript or typescript file, by using the following syntax:

```js
import { DialogPlugin } from '@carlosdevpereira/mr-components'
// other imports

DialogPlugin.success({ title: 'Dialog title', message: 'Your message' })
DialogPlugin.alert({ title: 'Dialog title', message: 'Your message' })
DialogPlugin.warn({ title: 'Dialog title', message: 'Your message' })
DialogPlugin.info({ title: 'Dialog title', message: 'Your message' })
```

## Custom button labels

<DialogProxy type="danger" title="SOS" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" cancel-button-label="Nooooo!! Abort!!" confirm-button-label="It is what it is :\" />

<CodeGroup>
    <CodeGroupItem title="Custom button labels" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.alert({
				title: 'SOS',
				message: 'Your notification message goes here.',
				cancelButtonLabel: 'Nooooo!! Abort!!',
				confirmButtonLabel: 'It is what it is :\ ',
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Callbacks

<DialogProxy type="info" title="New version available" message="There's a new version of mr-components available. Would you like to update now?" :cancel-button-label="`No`" :confirm-button-label="`Yes`" with-callbacks />

<CodeGroup>
    <CodeGroupItem title="Custom button labels" active>

```vue
<script>
export default {
	methods: {
		trigger() {
			this.$dialog.info({
				title: 'New version available',
				message:
					"There's a new version of mr-components available. Would you like to update now?",
				cancelButtonLabel: 'No',
				confirmButtonLabel: 'Yes',
				onCancel: () => () => {
					alert('Canceled')
				},
				onConfirm: () => {
					alert('Starting the update')
				},
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
