---
pageClass: custom-layout
---

# Password Recovery Layout

## Password Recovery Request

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Password-Recovery-Layout :recover-password="function (email) { /** ... **/ }" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Password-Recovery-Layout :recover-password="recoverPassword" />
</template>

<script>
export default {
	methods: {
		recoverPassword(email) {
			// call password recovery service ...
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Password Reset

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Password-Reset-Layout :reset-password="function (newPassword) { /** ... **/ }" />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Password-Reset-Layout :reset-password="resetPassword" />
</template>

<script>
export default {
	methods: {
		resetPassword(newPassword) {
			// call password reset service ...
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
