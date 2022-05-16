---
pageClass: custom-layout
---

# Sign In Layout

## Basic Login Layout

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Login-Layout />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Login-Layout />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Custom Login Actions

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Login-Layout>
        <template #custom-login-actions>
            <Button label="Sign In with Github" icon="github-fill" theme="outlined" variant="secondary" />
        </template>
    </Login-Layout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Login-Layout>
		<template #custom-login-actions>
			<Button
				label="Sign In with Github"
				icon="github-fill"
				theme="outlined"
				variant="secondary"
			/>
		</template>
	</Login-Layout>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Events

### Sign-In

The sign-in event is emitted when the user presses the sign-in button and carries the login information.

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Login-Layout />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Login-Layout @sign-in="onSignIn" />
</template>

<script>
export default {
	methods: {
		onSignIn({ email, password, rememberMe }) {
			// ...
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Sign Up

The sign-up event is emitted when the user presses the "sign-up for free" link.

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Login-Layout />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Login-Layout @sign-up="onSignUp" />
</template>

<script>
export default {
	methods: {
		onSignUp() {
			this.$router.push({ name: 'sign-up' })
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Forgot Password

The forgot-password event is emitted when the user presses the "forgot password" button link.

<div style="width: 100%; height: 600px; border: 1px solid #c1c1c1;">
    <Login-Layout />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Login-Layout @forgot-password="onForgotPassword" />
</template>

<script>
export default {
	methods: {
		onForgotPassword() {
			this.$router.push({ name: 'forgot-password' })
		},
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
