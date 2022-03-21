import Checkbox from './index.vue'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
}

const ThemesTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: `
    <section>
        <h2>Themes:</h2>

        <h3>Solid:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox v-model="value" variant="default" label="Default" />
            <Checkbox v-model="value" variant="primary" label="Primary" />
            <Checkbox v-model="value" variant="secondary" label="Secondary" />
            <Checkbox v-model="value" variant="danger" label="Danger" />
            <Checkbox v-model="value" variant="warning" label="Warning" />
            <Checkbox v-model="value" variant="success" label="Success" />
            <Checkbox v-model="value" variant="info" label="Info" />
        </div>

        <h3>Outlined:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox v-model="value" theme="outlined" variant="default" label="Default" />
            <Checkbox v-model="value" theme="outlined" variant="primary" label="Primary" />
            <Checkbox v-model="value" theme="outlined" variant="secondary" label="Secondary" />
            <Checkbox v-model="value" theme="outlined" variant="danger" label="Danger" />
            <Checkbox v-model="value" theme="outlined" variant="warning" label="Warning" />
            <Checkbox v-model="value" theme="outlined" variant="success" label="Success" />
            <Checkbox v-model="value" theme="outlined" variant="info" label="Info" />
        </div>

        
        <h3>Switch:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox v-model="value" theme="switch" variant="default" label="Default" />
            <Checkbox v-model="value" theme="switch" variant="primary" label="Primary" />
            <Checkbox v-model="value" theme="switch" variant="secondary" label="Secondary" />
            <Checkbox v-model="value" theme="switch" variant="danger" label="Danger" />
            <Checkbox v-model="value" theme="switch" variant="warning" label="Warning" />
            <Checkbox v-model="value" theme="switch" variant="success" label="Success" />
            <Checkbox v-model="value" theme="switch" variant="info" label="Info" />
        </div>
    </section>
    `,
})

export const Themes = ThemesTemplate.bind({})
Themes.args = {
    value: true,
}

const SizesTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: `
    <section>
        <h2>Sizes:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 450px; max-width: 95%;">
            <Checkbox size="sm" :value="value" label="Small checkbox" />
            <Checkbox size="md" :value="value" label="Medium checkbox" />
            <Checkbox size="lg" :value="value" label="Large checkbox" />
        </div>

        <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 500px; max-width: 95%;">
            <Checkbox theme="switch" size="sm" :value="value" label="Small checkbox" />
            <Checkbox theme="switch" size="md" :value="value" label="Medium checkbox" />
            <Checkbox theme="switch" size="lg" :value="value" label="Large checkbox" />
        </div>
    </section>
    `,
})

export const Sizes = SizesTemplate.bind({})
Sizes.args = {
    value: true,
}

const DisabledTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: `
    <section>
        <h2>Themes:</h2>

        <h3>Solid:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox disabled :value="value" variant="default" label="Default" />
            <Checkbox disabled :value="value" variant="primary" label="Primary" />
            <Checkbox disabled :value="value" variant="secondary" label="Secondary" />
            <Checkbox disabled :value="value" variant="danger" label="Danger" />
            <Checkbox disabled :value="value" variant="warning" label="Warning" />
            <Checkbox disabled :value="value" variant="success" label="Success" />
            <Checkbox disabled :value="value" variant="info" label="Info" />
        </div>

        <h3>Outlined:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox disabled :value="value" theme="outlined" variant="default" label="Default" />
            <Checkbox disabled :value="value" theme="outlined" variant="primary" label="Primary" />
            <Checkbox disabled :value="value" theme="outlined" variant="secondary" label="Secondary" />
            <Checkbox disabled :value="value" theme="outlined" variant="danger" label="Danger" />
            <Checkbox disabled :value="value" theme="outlined" variant="warning" label="Warning" />
            <Checkbox disabled :value="value" theme="outlined" variant="success" label="Success" />
            <Checkbox disabled :value="value" theme="outlined" variant="info" label="Info" />
        </div>

        
        <h3>Switch:</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 750px; max-width: 95%;">
            <Checkbox disabled :value="value" theme="switch" variant="default" label="Default" />
            <Checkbox disabled :value="value" theme="switch" variant="primary" label="Primary" />
            <Checkbox disabled :value="value" theme="switch" variant="secondary" label="Secondary" />
            <Checkbox disabled :value="value" theme="switch" variant="danger" label="Danger" />
            <Checkbox disabled :value="value" theme="switch" variant="warning" label="Warning" />
            <Checkbox disabled :value="value" theme="switch" variant="success" label="Success" />
            <Checkbox disabled :value="value" theme="switch" variant="info" label="Info" />
        </div>
    </section>
    `,
})

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {
    value: true,
}
