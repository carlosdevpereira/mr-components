<template>
    <Select 
        v-model:value="value"
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
            options: [{key: 1, name: 'Option 1'},{key: 2, name: 'Option 2'},{key: 3, name: 'Option 3'},{key: 4, name: 'Option 4'},{key: 1, name: 'Option 1'},{key: 2, name: 'Option 2'},{key: 3, name: 'Option 3'},{key: 4, name: 'Option 4'},{key: 1, name: 'Option 1'},{key: 2, name: 'Option 2'},{key: 3, name: 'Option 3'},{key: 4, name: 'Option 4'}]
        }
    },
}
</script>