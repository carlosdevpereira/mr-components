<div align="center">

![Mr. Components Icon](./docs/.vuepress/public/images/logo%402x.png)

# Mr. Components

![Tests](https://github.com/carlosdevpereira/mr-components/actions/workflows/on-push-test-and-build.yml/badge.svg)
![Coverage](https://img.shields.io/codecov/c/github/carlosdevpereira/mr-components?label=Coverage&token=UD340F6YOJ)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)

<a href="https://mr-components.carlosdevpereira.com" target="_blank">Docs</a> | <a href="https://mr-components-next.carlosdevpereira.com" target="_blank">@Next</a>

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

-   [Autocomplete](https://mr-components.carlosdevpereira.com/components/autocomplete.html)
-   [Button](https://mr-components.carlosdevpereira.com/components/button.html)
-   [Checkbox](https://mr-components.carlosdevpereira.com/components/checkbox.html)
-   [Dropdown](https://mr-components.carlosdevpereira.com/components/dropdown.html)
-   [Icon](https://mr-components.carlosdevpereira.com/components/icon.html)
-   [Input](https://mr-components.carlosdevpereira.com/components/input.html)
-   [Message](https://mr-components.carlosdevpereira.com/components/message.html)
-   [Modal](https://mr-components.carlosdevpereira.com/components/modal.html)
-   [Pagination](https://mr-components.carlosdevpereira.com/components/pagination.html)
-   [Radio Button](https://mr-components.carlosdevpereira.com/components/radio-button.html)
-   [Table](https://mr-components.carlosdevpereira.com/components/table.html)
-   [Textarea](https://mr-components.carlosdevpereira.com/components/textarea.html)
-   [Spinner](https://mr-components.carlosdevpereira.com/components/spinner.html)
-   [Select](https://mr-components.carlosdevpereira.com/components/select.html)

<div align="center" style="margin-top: 5rem;">
    
![Mr. Components Icon](./docs/.vuepress/public/images/logo@1x.png)

<sub>
    <sup>This icon has been designed using resources from Flaticon.com</sup>
</sub>

</div>
