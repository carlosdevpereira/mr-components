# Input

The input component is a lightweight extension of the standard input element, supporting: themes, icons, states, etc.

[[toc]]

## API

### Props

| Name     | Type      | Default     | Description                                                                                                                                                     |
| -------- | --------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme    | `String`  | `'default'` | Defines the theme of the input component. Possible values are: `solid` and `outlined`                                                                           |
| variant  | `String`  | `'default'` | Defines the variant of the theme applied to the input component. Possible values are: `default`, `primary`, `secondary`, `danger`, `warning`, `success`, `info` |
| size     | `String`  | `'md'`      | Defines the size of the input component. Possible values are: `sm`, `md`, `lg`                                                                                  |
| disabled | `Boolean` | `false`     | Defines if the input component is disabled or not                                                                                                               |

### Events

| Name               | Description                                           |
| ------------------ | ----------------------------------------------------- |
| update:model-value | Event emitted whenever the value of the input changes |

## Basic Input

<div class="half-width-fill-on-mobile">
    <Input-Proxy />
</div>

### Placeholder

<div class="half-width-fill-on-mobile">
    <Input-Proxy placeholder="Write here..." />
</div>

### Label

<strong>Positions:</strong>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Start" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Center" label-position="center" />
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="End" label-position="end" />
</div>

<br>

<strong>Dispositions:</strong>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Inline" inline/>
</div>

<br>

<div class="half-width-fill-on-mobile">
    <Input-Proxy label="Inline End" label-position="end" inline />
</div>

## Themes

Every input can define a **theme** and a **variant**. The theme defines the design of the input box and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="solid" placeholder="Solid input" />
    <Input-Proxy theme="solid" variant="primary" placeholder="Solid primary input" />
    <Input-Proxy theme="solid" variant="secondary" placeholder="Solid secondary input" />
    <Input-Proxy theme="solid" variant="danger" placeholder="Solid danger input" />
    <Input-Proxy theme="solid" variant="warning" placeholder="Solid warning input" />
    <Input-Proxy theme="solid" variant="success" placeholder="Solid success input" />
    <Input-Proxy theme="solid" variant="info" placeholder="Solid info input" />
</p>

### Outlined

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="outlined" placeholder="Outlined input" />
    <Input-Proxy theme="outlined" variant="primary" placeholder="Outlined primary input" />
    <Input-Proxy theme="outlined" variant="secondary" placeholder="Outlined secondary input" />
    <Input-Proxy theme="outlined" variant="danger" placeholder="Outlined danger input" />
    <Input-Proxy theme="outlined" variant="warning" placeholder="Outlined warning input" />
    <Input-Proxy theme="outlined" variant="success" placeholder="Outlined success input" />
    <Input-Proxy theme="outlined" variant="info" placeholder="Outlined info input" />
</p>

## Sizes

The input boxes can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the input component will use the **md** size by default.

<p class="components-inline">
    <Input-Proxy size="sm" placeholder="Small input" label="Small input" />
    <Input-Proxy size="md" placeholder="Normal input" label="Normal input" />
    <Input-Proxy size="lg" placeholder="Large input" label="Large input" />
</p>

## States

Besides themes and sizes, every input box can define a set of props to control their visible states.

### Disabled

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy placeholder="Disabled input" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="solid" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="primary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="secondary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="danger" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="warning" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="success" placeholder="Disabled input" disabled />
    <Input-Proxy theme="solid" variant="info" placeholder="Disabled input" disabled />
</p>

<p class="components-inline half-width-fill-on-mobile">
    <Input-Proxy theme="outlined" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="primary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="secondary" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="danger" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="warning" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="success" placeholder="Disabled input" disabled />
    <Input-Proxy theme="outlined" variant="info" placeholder="Disabled input" disabled />
</p>
