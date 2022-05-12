---
pageClass: custom-layout
---

# Maintenance Layout

## Basic Layout

<div style=" width: 100%; height: 700px; border: 1px solid #c1c1c1;">
    <MaintenanceLayout></MaintenanceLayout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Maintenance-Layout />
</template>
```

  </CodeGroupItem>
</CodeGroup>

## Custom text

<div style=" width: 100%; height: 700px; border: 1px solid #c1c1c1;">
    <MaintenanceLayout title="Be right back!" description="Pariatur incididunt qui culpa labore anim dolor enim." />
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<MaintenanceLayout
		title="Be right back!"
		description="Pariatur incididunt qui culpa labore anim dolor enim."
	/>
</template>
```

  </CodeGroupItem>
</CodeGroup>

## With contact button

<div style=" width: 100%; height: 700px; border: 1px solid #c1c1c1;">
    <MaintenanceLayout contact-address="example@example.com"></MaintenanceLayout>
</div>

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Maintenance-Layout contact-address="example@example.com" />
</template>
```

  </CodeGroupItem>
</CodeGroup>
