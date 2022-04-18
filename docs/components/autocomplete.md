# Autocomplete

The autocomplete component is an implementation of the [Input](./input.md) component that automatically lists results matching what the user writes.

[[toc]]

## API

### Props

| Name                                       | Type     | Required | Description                                                                                                                 |
| ------------------------------------------ | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| fetch <span style="color: red;">\* </span> | Function | `true`   | Function that will be called whenever the Autocomplete needs to fetch (search) results to show                              |
| [...Input](./input.md#props)               |          |          | All the props from the [Input](./input.md) component are also available here and are applied directly to the Input instance |

## Basic Autocomplete

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Autocomplete :fetch="fetchHandler" />
</template>

<script>
export default {
	data() {
		return {
			value: '',
		}
	},

	methods: {
		async fetchHandler(value) {
			// Simulate HTTP request to retrieve
			// the autocomplete details
			if (!value) return []

			return new Promise(resolve => {
				setTimeout(() => {
					console.log('timeout value: ', value)
					resolve([
						{ key: 1, name: 'Result 1' },
						{ key: 2, name: 'Result 2' },
						{ key: 3, name: 'Result 3' },
					])
				}, 1500)
			})
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

<br/>

## Loading

The autocomplete component is in loading state whenever the user starts typing and until the `fetch` function returns from its execution.

<div class="half-width-fill-on-mobile">
    <AutocompleteLoadingState />
</div>

<br/>

## Placeholder

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy placeholder="Write here..." />
</div>

<br/>

## Label

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy label="Start" />
    <br>
    <AutocompleteProxy label="Center" label-position="center" />
    <br>
    <AutocompleteProxy label="End" label-position="end" />
    <br>
    <AutocompleteProxy label="Inline" inline />
</div>

<br/>

## Sizes

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy size="sm" placeholder="Small autocomplete" label="Small autocomplete"  />
    <br>
    <AutocompleteProxy size="md" placeholder="Normal autocomplete" label="Normal autocomplete" />
    <br>
    <AutocompleteProxy size="lg" placeholder="Large autocomplete" label="Large autocomplete" />
</div>

<br/>

## Icons

<div class="half-width-fill-on-mobile">
    <AutocompleteProxy icon="chat-3-line" size="sm" placeholder="Small autocomplete"  />
    <br>
    <AutocompleteProxy icon="chat-3-line" size="md" placeholder="Normal autocomplete" />
    <br>
    <AutocompleteProxy icon="chat-3-line" size="lg" placeholder="Large autocomplete" />
    <br>
    <br>
    <AutocompleteProxy icon="chat-3-line" icon-position="end" size="sm" placeholder="Small autocomplete"  />
    <br>
    <AutocompleteProxy icon="chat-3-line" icon-position="end" size="md" placeholder="Normal autocomplete" />
    <br>
    <AutocompleteProxy icon="chat-3-line" icon-position="end" size="lg" placeholder="Large autocomplete" />
</div>

<br/>

## States

The autocomplete components can also define a set of props to control their visible states.

### Disabled

<p class="half-width-fill-on-mobile">
    <AutocompleteProxy placeholder="Disabled autocomplete" disabled />
</p>
