import Button from './index.vue'

export default {
    title: 'Components/Button',
    component: Button,
}

const ThemesTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: `
    <section>
        <h2>Themes:</h2>
        <h3>Solid:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
        </div>

        <h3>Outlined:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="outlined">Default</Button>
            <Button theme="outlined" variant="primary">Primary</Button>
            <Button theme="outlined" variant="secondary">Secondary</Button>
            <Button theme="outlined" variant="danger">Danger</Button>
            <Button theme="outlined" variant="warning">Warning</Button>
            <Button theme="outlined" variant="success">Success</Button>
            <Button theme="outlined" variant="info">Info</Button>
        </div>

        <h3>Text:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="text">Default</Button>
            <Button theme="text" variant="primary">Primary</Button>
            <Button theme="text" variant="secondary">Secondary</Button>
            <Button theme="text" variant="danger">Danger</Button>
            <Button theme="text" variant="warning">Warning</Button>
            <Button theme="text" variant="success">Success</Button>
            <Button theme="text" variant="info">Info</Button>
        </div>

        <h3>Text Solid:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="text-solid">Default</Button>
            <Button theme="text-solid" variant="primary">Primary</Button>
            <Button theme="text-solid" variant="secondary">Secondary</Button>
            <Button theme="text-solid" variant="danger">Danger</Button>
            <Button theme="text-solid" variant="warning">Warning</Button>
            <Button theme="text-solid" variant="success">Success</Button>
            <Button theme="text-solid" variant="info">Info</Button>
        </div>
    </section>
    `,
})

export const Themes = ThemesTemplate.bind({})
Themes.args = {}

const SizesTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: `
    <section>
        <h2>Sizes:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 400px; max-width: 95%;">
            <Button size="sm">Small button</Button>
            <Button size="md">Medium button</Button>
            <Button size="lg">Large button</Button>
        </div>
    </section>
    `,
})

export const Sizes = SizesTemplate.bind({})
Sizes.args = {}

const WithIconTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: `
    <section>
        <h2>Starting with an icon:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 400px; max-width: 95%;">
            <Button size="sm" icon="chat-3-line">Chat</Button>
            <Button icon="chat-3-line">Chat</Button>
            <Button size="lg" icon="chat-3-line">Chat</Button>
        </div>

        <h2>Ending with an icon:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 400px; max-width: 95%;">
            <Button size="sm" icon="chat-3-line" icon-position="end">Chat</Button>
            <Button icon="chat-3-line" icon-position="end">Chat</Button>
            <Button size="lg" icon="chat-3-line" icon-position="end">Chat</Button>
        </div>
    </section>
    `,
})

export const WithIcon = WithIconTemplate.bind({})
WithIcon.args = {}

const DisabledTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: `
    <section>
        <h2>Disabled:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button disabled>Default</Button>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="warning" disabled>Warning</Button>
            <Button variant="success" disabled>Success</Button>
            <Button variant="info" disabled>Info</Button>
        </div>

        <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="outlined" disabled>Default</Button>
            <Button theme="outlined" variant="primary" disabled>Primary</Button>
            <Button theme="outlined" variant="secondary" disabled>Secondary</Button>
            <Button theme="outlined" variant="danger" disabled>Danger</Button>
            <Button theme="outlined" variant="warning" disabled>Warning</Button>
            <Button theme="outlined" variant="success" disabled>Success</Button>
            <Button theme="outlined" variant="info" disabled>Info</Button>
        </div>

        <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="text-solid" disabled>Default</Button>
            <Button theme="text-solid" variant="primary" disabled>Primary</Button>
            <Button theme="text-solid" variant="secondary" disabled>Secondary</Button>
            <Button theme="text-solid" variant="danger" disabled>Danger</Button>
            <Button theme="text-solid" variant="warning" disabled>Warning</Button>
            <Button theme="text-solid" variant="success" disabled>Success</Button>
            <Button theme="text-solid" variant="info" disabled>Info</Button>
        </div>

        <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Button theme="text" disabled>Default</Button>
            <Button theme="text" variant="primary" disabled>Primary</Button>
            <Button theme="text" variant="secondary" disabled>Secondary</Button>
            <Button theme="text" variant="danger" disabled>Danger</Button>
            <Button theme="text" variant="warning" disabled>Warning</Button>
            <Button theme="text" variant="success" disabled>Success</Button>
            <Button theme="text" variant="info" disabled>Info</Button>
        </div>
    </section>
    `,
})

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {}
