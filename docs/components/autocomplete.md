# Autocomplete

The autocomplete component is an implementation of the [Input](./input.md) component that automatically lists results matching what the user writes.

[[toc]]

## API

### Props

| Name                         | Type       | Description                                                                                                                         |
| ---------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| items                        | `Array`    | Array of possible values for the autocomplete, that will appear as suggestions while the user types                                 |
| get-items                    | `Function` | Function that will be called whenever the Autocomplete needs to fetch (search) results to show                                      |
| lazy                         | `Boolean`  | Defines if the autocomplete should paginate and lazy load chunks of items instead of always showing all the available items at once |
| limit                        | `Number`   | Defines the amount of item suggestions that the autocomplete will lazy loads at a time                                              |
| [...Input](./input.md#props) | `...`      | All the props from the [Input](./input.md) component are also available and applied to the Input instance.                          |

<br />

## Local Autocomplete

The local autocomplete suggests values to the user based on a preset list. Try searching for the name of a country.

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete v-model="value" :items="items" />
</template>

<script>
export default {
	data() {
		return {
            value: '',
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Remote Autocomplete

The remote autocomplete shows suggestions returned from the `get-items` callback function, passed in as a prop.
The `get-items` function will receive the value that the user is searching for as the first argument and an options object as the second argument,
containing the pagination page and amount of items to return.

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy />
</div>

<small>\*The autocomplete will show whatever values the `get-items` function returns.</small>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete v-model="value" :get-items="getItems" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},

	methods: {
		getItems(value, options) {
			if (!value) return []

			// Simulate HTTP request to retrieve
			// the autocomplete suggestions
			return new Promise(resolve => {
				let response = [
					{ key: 1, name: 'Result 1' },
					{ key: 2, name: 'Result 2' },
					{ key: 3, name: 'Result 3' },
					{ key: 4, name: 'Result 4' },
					{ key: 5, name: 'Result 5' },
					{ key: 6, name: 'Result 6' },
					{ key: 7, name: 'Result 7' },
					{ key: 8, name: 'Result 8' },
					{ key: 9, name: 'Result 9' },
					{ key: 10, name: 'Result 10' },
					{ key: 11, name: 'Result 11' },
					{ key: 12, name: 'Result 12' },
					{ key: 13, name: 'Result 13' },
					{ key: 14, name: 'Result 14' },
					{ key: 15, name: 'Result 15' },
					{ key: 16, name: 'Result 16' },
					{ key: 17, name: 'Result 17' },
					{ key: 18, name: 'Result 18' },
					{ key: 19, name: 'Result 19' },
					{ key: 20, name: 'Result 20' },
					{ key: 21, name: 'Result 21' },
				]

				resolve(response)
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Lazy

A remote autocomplete can be defined as lazy through the `lazy` prop.
When the autocomplete is defined as lazy whenever the user scrolls to the end of the suggestions list
the autocomplete will try to load more results by repeating the call to the `get-items` function.

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy lazy />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete v-model="value" :get-items="getItems" lazy />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},

	methods: {
		getItems(value, options) {
			if (!value) return []

			// Simulate HTTP request to retrieve
			// the autocomplete suggestions
			return new Promise(resolve => {
				let response = [
					{ key: 1, name: 'Result 1' },
					{ key: 2, name: 'Result 2' },
					{ key: 3, name: 'Result 3' },
					{ key: 4, name: 'Result 4' },
					{ key: 5, name: 'Result 5' },
					{ key: 6, name: 'Result 6' },
					{ key: 7, name: 'Result 7' },
					{ key: 8, name: 'Result 8' },
					{ key: 9, name: 'Result 9' },
					{ key: 10, name: 'Result 10' },
					{ key: 11, name: 'Result 11' },
					{ key: 12, name: 'Result 12' },
					{ key: 13, name: 'Result 13' },
					{ key: 14, name: 'Result 14' },
					{ key: 15, name: 'Result 15' },
					{ key: 16, name: 'Result 16' },
					{ key: 17, name: 'Result 17' },
					{ key: 18, name: 'Result 18' },
					{ key: 19, name: 'Result 19' },
					{ key: 20, name: 'Result 20' },
					{ key: 21, name: 'Result 21' },
				]

				resolve(response)
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Placeholder

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal placeholder="Country..." />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete v-model="value" :items="items" placeholder="Country..." />
</template>

<script>
export default {
	data() {
		return {
            value: '',
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Labels

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal label="Start" />
    <br>
    <AutocompleteLocal label="Center" label-position="center" />
    <br>
    <AutocompleteLocal label="End" label-position="end" />
    <br>
    <AutocompleteLocal label="Inline" inline />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :items="items" label="Start" />
	<Autocomplete :items="items" label="Center" label-position="center" />
	<Autocomplete :items="items" label="End" label-position="end" />
	<Autocomplete :items="items" label="Inline" inline />
</template>

<script>
export default {
	data() {
		return {
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Validations

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal label="Country" :errors="['Country name is too short']" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :errors="['Country name is too short']" />
</template>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Sizes

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal size="sm" placeholder="Small autocomplete" label="Small autocomplete"  />
    <br>
    <AutocompleteLocal size="md" placeholder="Normal autocomplete" label="Normal autocomplete" />
    <br>
    <AutocompleteLocal size="lg" placeholder="Large autocomplete" label="Large autocomplete" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :items="items" size="sm" label="Small autocomplete" />
	<Autocomplete :items="items" size="md" label="Normal autocomplete" />
	<Autocomplete :items="items" size="lg" label="Large autocomplete" />
</template>

<script>
export default {
	data() {
		return {
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## Icons

<div class="half-width-fill-on-mobile">
    <AutocompleteLocal icon="chat-3-line" size="sm" label="Small autocomplete" placeholder="Small autocomplete" />
    <br>
    <AutocompleteLocal icon="chat-3-line" size="md" label="Normal autocomplete" placeholder="Normal autocomplete" />
    <br>
    <AutocompleteLocal icon="chat-3-line" size="lg" label="Large autocomplete" placeholder="Large autocomplete" />
    <br>
    <br>
    <AutocompleteLocal icon="chat-3-line" icon-position="end" size="sm" label="Small autocomplete" placeholder="Small autocomplete" />
    <br>
    <AutocompleteLocal icon="chat-3-line" icon-position="end" size="md" label="Normal autocomplete" placeholder="Normal autocomplete" />
    <br>
    <AutocompleteLocal icon="chat-3-line" icon-position="end" size="lg" label="Large autocomplete" placeholder="Large autocomplete" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :items="items" icon="chat-3-line" size="sm" />
	<Autocomplete :items="items" icon="chat-3-line" size="md" />
	<Autocomplete :items="items" icon="chat-3-line" size="lg" />

	<Autocomplete :items="items" icon="chat-3-line" icon-position="end" size="sm" />
	<Autocomplete :items="items" icon="chat-3-line" icon-position="end" size="md" />
	<Autocomplete :items="items" icon="chat-3-line" icon-position="end" size="lg" />
</template>

<script>
export default {
	data() {
		return {
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br />

## States

### Loading

The autocomplete component is in loading state whenever the user starts typing and until the `get-items` callback function returns or the autocomplete local filtering ends.

<div class="half-width-fill-on-mobile">
    <AutocompleteLoadingState />
</div>

<br />

### Disabled

<p class="half-width-fill-on-mobile">
    <AutocompleteProxy placeholder="Disabled autocomplete" disabled />
</p>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :items="items" placeholder="Disabled autocomplete" disabled />
</template>

<script>
export default {
	data() {
		return {
            items: [
                { key: 'PT', name: 'Portugal' },
                { ... }
            ]
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
