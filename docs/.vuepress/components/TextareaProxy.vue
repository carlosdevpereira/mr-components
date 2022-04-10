<template>
    <Textarea 
        v-model="value"
        v-bind="$attrs"
    />
</template>

<script>
export default {
    data() {
        return {
            value: null,
        }
    },
}
</script>