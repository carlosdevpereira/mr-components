<template>
    <div>
        <Radio-Button v-model="value" value="default" label="Default" disabled />
        <Radio-Button v-model="value" value="primary" variant="primary" label="Primary" disabled />
        <Radio-Button v-model="value" value="secondary" variant="secondary" label="Secondary" disabled />
        <Radio-Button v-model="value" value="danger" variant="danger" label="Danger" disabled />
        <Radio-Button v-model="value" value="warning" variant="warning" label="Warning" disabled />
        <Radio-Button v-model="value" value="success" variant="success" label="Success" disabled />
        <Radio-Button v-model="value" value="info" variant="info" label="Info" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'default',
        }
    },
}
</script>
