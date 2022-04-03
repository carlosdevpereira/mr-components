# Select

The select component is a lightweight extension of the standard select element, supporting: themes, icons, states, etc.

[[toc]]

## Basic Select

<SelectProxy />

## Themes

Every select can define a **theme** and a **variant**. The theme defines the design of the select box and the variant defines the colors applied to the theme.

### Solid

<p class="components-inline">
    <SelectProxy theme="solid" />
    <SelectProxy theme="solid" variant="primary" />
    <SelectProxy theme="solid" variant="secondary" />
    <SelectProxy theme="solid" variant="danger" />
    <SelectProxy theme="solid" variant="warning" />
    <SelectProxy theme="solid" variant="success" />
    <SelectProxy theme="solid" variant="info" />
</p>

### Outlined

<p class="components-inline">
    <SelectProxy theme="outlined" />
    <SelectProxy theme="outlined" variant="primary" />
    <SelectProxy theme="outlined" variant="secondary" />
    <SelectProxy theme="outlined" variant="danger" />
    <SelectProxy theme="outlined" variant="warning" />
    <SelectProxy theme="outlined" variant="success" />
    <SelectProxy theme="outlined" variant="info" />
</p>

## Sizes

The select boxes can also define their sizes, through the **size** prop. The available sizes are: **sm**, **md** and **lg** and the select component will use the **md** size by default.

<p class="components-inline">
    <SelectProxy size="sm" />
    <SelectProxy size="md" />
    <SelectProxy size="lg" />
</p>

## States

Besides themes and sizes, every button can define a set of props to control their visible states.

### Disabled

<p class="components-inline">
    <SelectProxy disabled />
</p>

<p class="components-inline">
    <SelectProxy disabled theme="solid" />
    <SelectProxy disabled theme="solid" variant="primary" />
    <SelectProxy disabled theme="solid" variant="secondary" />
    <SelectProxy disabled theme="solid" variant="danger" />
    <SelectProxy disabled theme="solid" variant="warning" />
    <SelectProxy disabled theme="solid" variant="success" />
    <SelectProxy disabled theme="solid" variant="info" />
</p>

<p class="components-inline">
    <SelectProxy disabled theme="outlined" />
    <SelectProxy disabled theme="outlined" variant="primary" />
    <SelectProxy disabled theme="outlined" variant="secondary" />
    <SelectProxy disabled theme="outlined" variant="danger" />
    <SelectProxy disabled theme="outlined" variant="warning" />
    <SelectProxy disabled theme="outlined" variant="success" />
    <SelectProxy disabled theme="outlined" variant="info" />
</p>