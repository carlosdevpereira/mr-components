<div align="center">

![Mr. Components Icon](./docs/.vuepress/public/images/logo%402x.png)

# Mr. Components

![Tests](https://github.com/carlosdevpereira/mr-components/actions/workflows/on-push-test-and-build.yml/badge.svg)
![Coverage](https://img.shields.io/codecov/c/github/carlosdevpereira/mr-components?label=Coverage&token=UD340F6YOJ)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)

[![Deploy](https://api.netlify.com/api/v1/badges/a8db4607-cb44-46a5-b7a5-2b5c925b2fbd/deploy-status)](https://mr-components.carlosdevpereira.com)

<a href="https://mr-components.carlosdevpereira.com" target="_blank">Docs</a>

</div>

## Installation

The **@mr-components** package can be installed by running:

```bash:no-line-numbers
npm install --save-dev @carlosdevpereira/mr-components
```

## How to use

To start using the components, you can either:

### Register the components globally in your `main.js` file:

```js
import App from './App.vue'
import { createApp } from 'vue'

import '@carlosdevpereira/mr-components/dist/style.css'
import UseMrComponents from '@carlosdevpereira/mr-components'
// other imports

let app = createApp(App)
UseMrComponents(app)
```

### Register only the components you need:

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

### Import the components directly in your Single File Components:

```html
<template>
	<div>
		<button>Click me</button>
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

## Checkout the available components:

-   [Button](https://mr-components.carlosdevpereira.com/components/button.html#basic-button)
-   [Checkbox](https://mr-components.carlosdevpereira.com/components/checkbox.html)
-   [Icon](https://mr-components.carlosdevpereira.com/components/icon.html)
-   [Pagination](https://mr-components.carlosdevpereira.com/components/pagination.html)
-   [Table](https://mr-components.carlosdevpereira.com/components/table.html#column-definition)
-   [Spinner](https://mr-components.carlosdevpereira.com/components/spinner.html)
-   [Select](https://mr-components.carlosdevpereira.com/components/select.html)

<div align="center" style="margin-top: 5rem;">
    
![Mr. Components Icon](./docs/.vuepress/public/images/logo@1x.png)

<sub>
    <sup>This icon has been designed using resources from Flaticon.com</sup>
</sub>

</div>
