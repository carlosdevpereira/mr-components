---
pageClass: custom-layout
---

# Sidebar Layout

## Basic Layout

<div style=" width: 100%; height: 500px; border: 1px solid #c1c1c1;">
    <SidebarLayout></SidebarLayout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<SidebarLayout></SidebarLayout>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Sidebar Slot

<div style=" width: 100%; height: 500px; border: 1px solid #c1c1c1;">
    <SidebarLayout>
        <template #sidebar>
            Sidebar content can be injected through the sidebar slot.
        </template>
    </SidebarLayout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<SidebarLayout>
		<template #sidebar> Sidebar content can be injected through the sidebar slot. </template>
	</SidebarLayout>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Default Slot

<div style=" width: 100%; height: 500px; border: 1px solid #c1c1c1;">
    <SidebarLayout>
        SidebarLayout exposes a default slot that can be used to inject the content into the body of the layout.
        <br/><br/>
        The body of the layout will overflow by itself. 
    </SidebarLayout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<SidebarLayout>
		SidebarLayout exposes a default slot that can be used to inject the content into the body of
		the layout.
		<br /><br />
		The body of the layout will overflow by itself.
	</SidebarLayout>
</template>
```

  </CodeGroupItem>
</CodeGroup>
