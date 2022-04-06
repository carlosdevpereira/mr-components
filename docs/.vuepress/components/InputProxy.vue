<template>
    <Input 
        v-model="value"
        :theme="theme"
        :variant="variant"
        :size="size"
        :disabled="disabled"
        :inline="inline"
        :label="label"
        :label-position="labelPosition" 
        :placeholder="placeholder"
    />
</template>

<script>
export default {
    props: ['theme', 'variant', 'label', 'labelPosition', 'disabled', 'size', 'inline', 'placeholder'],

    data() {
        return {
            value: null,
        }
    },
}
</script>