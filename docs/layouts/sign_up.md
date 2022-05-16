---
pageClass: custom-layout
---

# Sign Up Layout

## Basic Registration Layout

<div style="width: 100%; height: 800px; border: 1px solid #c1c1c1;">
    <Registration-Layout />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Registration-Layout />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Custom Registration Actions

<div style="width: 100%; height: 800px; border: 1px solid #c1c1c1;">
    <Registration-Layout>
        <template #custom-registration-actions>
            <Button label="Sign Up with Github" icon="github-fill" theme="outlined" variant="secondary" />
        </template>
    </Registration-Layout>
</div>
