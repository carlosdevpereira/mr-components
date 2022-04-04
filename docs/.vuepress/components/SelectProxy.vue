<template>
    <Select 
        v-model="value"
        :theme="theme"
        :variant="variant"
        :options="options"
        :size="size"
        :disabled="disabled"
        :label="label" />
</template>

<script>
export default {
    props: ['theme', 'variant', 'label', 'disabled', 'size'],

    data() {
        return {
            value: null,
            options: [
                { key: 1, name: 'Option 1' },
                { key: 2, name: 'Option 2' },
                { key: 3, name: 'Option 3' },
                { key: 4, name: 'Option 4' },
                { key: 5, name: 'Option 5' },
                { key: 6, name: 'Option 6' },
                { key: 7, name: 'Option 7' },
                { key: 8, name: 'Option 8' },
                { key: 9, name: 'Option 9' },
                { key: 10, name: 'Option 10' },
                { key: 11, name: 'Option 11' },
                { key: 12, name: 'Option 12' }
            ]
        }
    },
}
</script>