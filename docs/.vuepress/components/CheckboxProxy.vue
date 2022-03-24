<template>
    <Checkbox
        v-model="value"
        :theme="theme"
        :variant="variant"
        :label="label"
        :disabled="disabled"
        :size="size"
        style="margin-top: 0.5rem;"
    />
</template>

<script>
export default {
    props: ['theme', 'variant', 'label', 'disabled', 'size'],

    data() {
        return {
            value: true,
        }
    },
}
</script>
