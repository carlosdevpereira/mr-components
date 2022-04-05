# Getting Started

## Installation

To install the **@carlosdevpereira/mr-components** package in your project you just need to run one of the following commands:

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install --save-dev @carlosdevpereira/mr-components
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add -D @carlosdevpereira/mr-components
```

  </CodeGroupItem>

</CodeGroup>

Now you just need to register the components within your Vue instance. To do this, you can either register all available components at once:

```js
import App from './App.vue'
import { createApp } from 'vue'

import '@carlosdevpereira/mr-components/dist/style.css'
import UseMrComponents from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
UseMrComponents(app)
```

or just the components you need:

```js
import App from './App.vue'
import { createApp } from 'vue'

import '@carlosdevpereira/mr-components/dist/style.css'
import { Button, Checkbox } from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
app.component('Button', Button)
app.component('Checkbox', Checkbox)
```

You can also import and register the **@mr-components** locally within a Single File Component:

```vue
<template>
	<div>
		<Button>Click me</Button>
	</div>
</template>

<script>
import '@carlosdevpereira/mr-components/dist/style.css'
import { Button } from '@carlosdevpereira/mr-components'

export default {
	components: {
		Button,
	},

	// ...
}
</script>
```
