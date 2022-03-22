var ve=Object.defineProperty,ge=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var I=(e,n,t)=>n in e?ve(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))we.call(n,t)&&I(e,t,n[t]);if(z)for(var t of z(n))ye.call(n,t)&&I(e,t,n[t]);return e},V=(e,n)=>ge(e,fe(n));import{o as s,c as r,n as p,r as b,a as y,b as g,d as M,w as xe,v as Be,e as d,f as x,t as h,g as u,h as P,i as _e,F as S,j as k,T as Te,k as Ce,l as O,m as Se,p as ke,q as Pe,s as De,u as We,x as Le,y as Re,z as je,A as ze,B as Ie,C as Ve,D as Oe,E as $e,G as Ee,H as Ne,I as Ae}from"./vendor.d0f621ae.js";const Fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};Fe();const Me={actions:{argTypesRegex:"^on[A-Z].*"},controls:{}};var Ue=Object.freeze(Object.defineProperty({__proto__:null,parameters:Me},Symbol.toStringTag,{value:"Module"})),_=(e,n)=>{const t=e.__vccOpts||e;for(const[l,o]of n)t[l]=o;return t};const U={props:{name:{type:String,required:!0}}};function qe(e,n,t,l,o,a){return s(),r("i",{class:p(["mr-icon ri",`ri-${t.name}`])},null,2)}var R=_(U,[["render",qe]]);U.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"name",type:{name:"string"},required:!0}]};const $=["solid","outlined","text","text-solid"],E=["default","primary","secondary","danger","warning","success","info"],Ge=["sm","md","lg"],N=["start","end"],q={props:{theme:{type:String,default:$[0],validator:e=>$.includes(e)},variant:{type:String,default:E[0],validator:e=>E.includes(e)},size:{type:String,default:"md",validator:e=>Ge.includes(e)},icon:{type:String,default:""},iconPosition:{type:String,default:N[0],validator:e=>N.includes(e)},disabled:{type:Boolean,default:!1}},computed:{classes(){return`${this.theme}-theme variant-${this.variant} size-${this.size}`}},components:{Icon:R}},He=["disabled"];function Je(e,n,t,l,o,a){const c=b("Icon");return s(),r("button",{class:p(["mr-button",a.classes]),disabled:t.disabled},[t.iconPosition==="start"&&t.icon!==""?(s(),y(c,{key:0,name:t.icon,class:p(["icon-position-start",{"only-icon":!e.$slots.default}])},null,8,["name","class"])):g("",!0),M(e.$slots,"default"),t.iconPosition==="end"&&t.icon!==""?(s(),y(c,{key:1,name:t.icon,class:p(["icon-position-end",{"only-icon":!e.$slots.default}])},null,8,["name","class"])):g("",!0)],10,He)}var f=_(q,[["render",Je]]);q.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"themes[0]"},values:["solid","outlined","text","text-solid"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"variants[0]"},values:["default","primary","secondary","danger","warning","success","info"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"iconPositions[0]"},values:["start","end"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};var Ke={parameters:{storySource:{source:`import Button from './index.vue'

export default {
    title: 'Components/Button',
    component: Button,
}

const ThemesTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: \`
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
    \`,
})

export const Themes = ThemesTemplate.bind({})
Themes.args = {}

const SizesTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: \`
    <section>
        <h2>Sizes:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 400px; max-width: 95%;">
            <Button size="sm">Small button</Button>
            <Button size="md">Medium button</Button>
            <Button size="lg">Large button</Button>
        </div>
    </section>
    \`,
})

export const Sizes = SizesTemplate.bind({})
Sizes.args = {}

const WithIconTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: \`
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
    \`,
})

export const WithIcon = WithIconTemplate.bind({})
WithIcon.args = {}

const DisabledTemplate = (args) => ({
    components: { Button },
    data: () => args,
    template: \`
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
    \`,
})

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {}
`,locationsMap:{themes:{startLoc:{col:23,line:8},endLoc:{col:2,line:59},startBody:{col:23,line:8},endBody:{col:2,line:59}},sizes:{startLoc:{col:22,line:64},endLoc:{col:2,line:78},startBody:{col:22,line:64},endBody:{col:2,line:78}},"with-icon":{startLoc:{col:25,line:83},endLoc:{col:2,line:105},startBody:{col:25,line:83},endBody:{col:2,line:105}},disabled:{startLoc:{col:25,line:110},endLoc:{col:2,line:158},startBody:{col:25,line:110},endBody:{col:2,line:158}}}}},title:"Components/Button",component:f};const Ze=e=>({components:{Button:f},data:()=>e,template:`
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
    `}),G=Ze.bind({});G.args={};const Qe=e=>({components:{Button:f},data:()=>e,template:`
    <section>
        <h2>Sizes:</h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; width: 400px; max-width: 95%;">
            <Button size="sm">Small button</Button>
            <Button size="md">Medium button</Button>
            <Button size="lg">Large button</Button>
        </div>
    </section>
    `}),H=Qe.bind({});H.args={};const Xe=e=>({components:{Button:f},data:()=>e,template:`
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
    `}),J=Xe.bind({});J.args={};const Ye=e=>({components:{Button:f},data:()=>e,template:`
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
    `}),K=Ye.bind({});K.args={};const et=["Themes","Sizes","WithIcon","Disabled"];var tt=Object.freeze(Object.defineProperty({__proto__:null,default:Ke,Themes:G,Sizes:H,WithIcon:J,Disabled:K,__namedExportsOrder:et},Symbol.toStringTag,{value:"Module"}));const A=["solid","outlined","switch"],F=["default","primary","secondary","danger","warning","success","info"],nt=["sm","md","lg"],Z={props:{theme:{type:String,default:A[0],validator:e=>A.includes(e)},variant:{type:String,default:F[0],validator:e=>F.includes(e)},size:{type:String,default:"md",validator:e=>nt.includes(e)},disabled:{type:Boolean,default:!1},label:{type:String,default:""},modelValue:{type:Boolean,default:!1}},emit:["update:modelValue"],computed:{currentValue:{get(){return this.modelValue},set(e){return this.$emit("update:modelValue",e)}},classes(){return`${this.theme}-theme variant-${this.variant}`},labelClasses(){return`size-${this.size} ${this.disabled?"disabled":""}`}}},at=["disabled"];function ot(e,n,t,l,o,a){return s(),r("label",{class:p(["mr-checkbox-container",a.labelClasses])},[xe(d("input",{type:"checkbox",class:p(["mr-checkbox",a.classes]),disabled:t.disabled,"onUpdate:modelValue":n[0]||(n[0]=c=>a.currentValue=c)},null,10,at),[[Be,a.currentValue]]),x(" "+h(t.label),1)],2)}var C=_(Z,[["render",ot]]);Z.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"theme",type:{name:"string"},defaultValue:{func:!1,value:"themes[0]"},values:["solid","outlined","switch"]},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"variants[0]"},values:["default","primary","secondary","danger","warning","success","info"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}]};var st={parameters:{storySource:{source:`import Checkbox from './index.vue'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
}

const ThemesTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: \`
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
    \`,
})

export const Themes = ThemesTemplate.bind({})
Themes.args = {
    value: true,
}

const SizesTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: \`
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
    \`,
})

export const Sizes = SizesTemplate.bind({})
Sizes.args = {
    value: true,
}

const DisabledTemplate = (args) => ({
    components: { Checkbox },
    data: () => args,
    template: \`
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
    \`,
})

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {
    value: true,
}
`,locationsMap:{themes:{startLoc:{col:23,line:8},endLoc:{col:2,line:50},startBody:{col:23,line:8},endBody:{col:2,line:50}},sizes:{startLoc:{col:22,line:57},endLoc:{col:2,line:77},startBody:{col:22,line:57},endBody:{col:2,line:77}},disabled:{startLoc:{col:25,line:84},endLoc:{col:2,line:126},startBody:{col:25,line:84},endBody:{col:2,line:126}}}}},title:"Components/Checkbox",component:C};const it=e=>({components:{Checkbox:C},data:()=>e,template:`
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
    `}),Q=it.bind({});Q.args={value:!0};const lt=e=>({components:{Checkbox:C},data:()=>e,template:`
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
    `}),X=lt.bind({});X.args={value:!0};const rt=e=>({components:{Checkbox:C},data:()=>e,template:`
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
    `}),Y=rt.bind({});Y.args={value:!0};const dt=["Themes","Sizes","Disabled"];var ct=Object.freeze(Object.defineProperty({__proto__:null,default:st,Themes:Q,Sizes:X,Disabled:Y,__namedExportsOrder:dt},Symbol.toStringTag,{value:"Module"}));const ee={components:{Icon:R,Button:f},props:{page:{type:Number,default:1},limit:{type:Number,default:10},totalCount:{type:Number,default:0}},emits:["update:page","update:limit"],computed:{pageInitialItem(){return(this.page-1)*this.limit+1},pageLastItem(){const e=this.page*this.limit;return e>this.totalCount?this.totalCount:e},totalPages(){return Math.ceil(this.totalCount/this.limit)}},methods:{goToNextPage(){this.$emit("update:page",this.page+1)},goToPreviousPage(){this.$emit("update:page",this.page-1)}}},ut={class:"mr-pagination flex justify-content-between"},mt={class:"flex align-items-center"},ht={class:"page-first-item"},pt=x(),bt={class:"page-last-item"},vt=x(" of "),gt={class:"total-items-count"},ft={class:"mr-pagination-pages flex align-items-center"},wt={class:"ml-3 mr-3"},yt={class:"current-page"},xt=x(" of "),Bt={class:"total-pages"};function _t(e,n,t,l,o,a){const c=b("Icon"),w=b("Button");return s(),r("div",ut,[d("div",mt,[d("span",ht,h(a.pageInitialItem),1),pt,u(c,{name:"separator"}),d("span",bt,h(a.pageLastItem),1),vt,d("span",gt,h(t.totalCount),1)]),d("div",ft,[u(w,{size:"sm",theme:"text-solid",disabled:t.page===1,class:"go-to-previous-page",onClick:a.goToPreviousPage},{default:P(()=>[u(c,{name:"arrow-left-line"})]),_:1},8,["disabled","onClick"]),d("span",wt,[d("span",yt,h(t.page),1),xt,d("span",Bt,h(a.totalPages),1)]),u(w,{theme:"text-solid",size:"sm",disabled:a.totalPages===t.page,class:"go-to-next-page",onClick:a.goToNextPage},{default:P(()=>[u(c,{name:"arrow-right-line"})]),_:1},8,["disabled","onClick"])])])}var j=_(ee,[["render",_t]]);ee.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"page",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"update:page",type:{names:["undefined"]}},{name:"update:limit"}]};var Tt={parameters:{storySource:{source:`import Pagination from './index.vue'

export default {
    title: 'Components/Pagination',
    component: Pagination,
}

const BasicTemplate = (args) => ({
    components: { Pagination },
    data: () => args,
    template: \`
    <section style="max-width: 960px;">
        <Pagination
            v-model:page="page"
            v-model:limit="limit"
            :total-count="totalCount" />
    </section>\`,
})

export const BasicPagination = BasicTemplate.bind({})
BasicPagination.args = {
    page: 1,
    limit: 10,
    totalCount: 100,
}
`,locationsMap:{"basic-pagination":{startLoc:{col:22,line:8},endLoc:{col:2,line:18},startBody:{col:22,line:8},endBody:{col:2,line:18}}}}},title:"Components/Pagination",component:j};const Ct=e=>({components:{Pagination:j},data:()=>e,template:`
    <section style="max-width: 960px;">
        <Pagination
            v-model:page="page"
            v-model:limit="limit"
            :total-count="totalCount" />
    </section>`}),te=Ct.bind({});te.args={page:1,limit:10,totalCount:100};const St=["BasicPagination"];var kt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt,BasicPagination:te,__namedExportsOrder:St},Symbol.toStringTag,{value:"Module"}));const ne={},Pt={class:"mr-spinner"};function Dt(e,n){return s(),r("span",Pt)}var Wt=_(ne,[["render",Dt]]);ne.__docgenInfo={displayName:"Spinner",description:"",tags:{}};const ae={name:"Table",components:{Button:f,Checkbox:C,Pagination:j,Spinner:Wt,Icon:R},props:{loading:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},selectableRows:{type:Boolean,default:!1},page:{type:Number,default:0},rowsPerPage:{type:Number,default:10},totalRows:{type:Number,default:0},localPagination:{type:Boolean,default:!1},sortBy:{type:String,default:""},sortDirection:{type:String,default:"asc",validator:e=>["asc","desc"].includes(e.toLowerCase())},localSort:{type:Boolean,default:!1}},emits:["selected-rows-changed","update:page","update:rows-per-page","update:sort-by","update:sort-direction"],data(){return{selectedRows:[],columnVisibilityPanelIsOpen:!1}},computed:{hasPagination(){return this.currentPage>0&&this.limit>0&&this.totalRows>0},sortedRows(){return!this.localSort||!this.sortField?this.rows:[...this.rows].sort((e,n)=>this.sortFieldDirection==="asc"?e[this.sortField]>n[this.sortField]?1:e[this.sortField]<n[this.sortField]?-1:0:e[this.sortField]<n[this.sortField]?1:e[this.sortField]>n[this.sortField]?-1:0)},visibleRows(){return!this.localPagination||this.page===0||this.totalRows===0?this.sortedRows:this.sortedRows.filter((e,n)=>(this.currentPage-1)*this.limit<=n&&n<this.currentPage*this.limit)},currentPage:{get(){return this.page},set(e){this.$emit("update:page",e)}},limit:{get(){return this.rowsPerPage},set(e){this.$emit("update:rows-per-page",e)}},sortField:{get(){return this.sortBy},set(e){this.$emit("update:sort-by",e)}},sortFieldDirection:{get(){return this.sortDirection},set(e){this.$emit("update:sort-direction",e)}},visibleColumns:{get(){return this.columns.filter(e=>!e.hidden)},set(e){this.$emit("update:columns",e)}},selectToggleAllRows:{get(){return this.selectedRows.length===this.rows.length},set(e){e===!0?(this.selectedRows=[],this.selectedRows.push(...this.rows)):this.selectedRows=[]}}},watch:{selectedRows(e){this.$emit("selected-rows-changed",...e)}},methods:{setSort(e){this.sortBy===e?this.sortFieldDirection=this.sortFieldDirection==="asc"?"desc":"asc":(this.sortField=e,this.sortFieldDirection="asc")},isSelected(e){return this.selectedRows.indexOf(e)>-1},selectToggleRow(e,n){if(e===!0)this.selectedRows.push(n);else{const t=this.selectedRows.indexOf(n);this.selectedRows.splice(t,1)}},onBeforeEnter(e){e.style.opacity=0,e.style.height=0},onEnter(e,n){_e.to(e,{opacity:1,height:"auto",delay:e.dataset.index*.05,onComplete:n})}}},Lt={class:"mr-table-container"},Rt={class:"mr-table-header"},jt=d("div",{class:"mr-table-search"},null,-1),zt={class:"mr-table-options"},It={key:0,class:"columns-visibility-panel"},Vt={key:0,class:"row-selection-cell"},Ot=["onClick"],$t={key:0,class:"row-selection-cell","data-label":"Selected"},Et=["data-label"],Nt={key:1},At=["colspan"],Ft={key:0,class:"mr-table-footer"},Mt={key:1,class:"total-results"};function Ut(e,n,t,l,o,a){const c=b("Button"),w=b("Checkbox"),me=b("Icon"),he=b("Spinner"),pe=b("Pagination");return s(),r("div",Lt,[d("header",Rt,[jt,d("div",zt,[u(c,{theme:"text-solid",size:"sm",icon:"more-line",class:"column-visibility-panel-toggle",onClick:n[0]||(n[0]=i=>o.columnVisibilityPanelIsOpen=!o.columnVisibilityPanelIsOpen)}),u(Te,{name:"fade",appear:""},{default:P(()=>[o.columnVisibilityPanelIsOpen?(s(),r("div",It,[(s(!0),r(S,null,k(t.columns,(i,T)=>(s(),y(w,{key:T,label:i.name,modelValue:!i.hidden,"onUpdate:modelValue":m=>i.hidden=!i.hidden},null,8,["label","modelValue","onUpdate:modelValue"]))),128))])):g("",!0)]),_:1})])]),d("table",{class:p(["mr-table mr-table-fixed-header",{"is-loading":t.loading}])},[d("thead",null,[d("tr",null,[t.selectableRows?(s(),r("th",Vt,[u(w,{modelValue:a.selectToggleAllRows,"onUpdate:modelValue":n[1]||(n[1]=i=>a.selectToggleAllRows=i)},null,8,["modelValue"])])):g("",!0),(s(!0),r(S,null,k(a.visibleColumns,(i,T)=>(s(),r("th",{key:T,class:p(`${i.sortable?"sortable":""} 
                                 ${t.sortBy===i.key?"sort-active sort-"+t.sortDirection:""}`),onClick:m=>i.sortable?a.setSort(i.key):void 0},[x(h(i.name)+" ",1),t.sortBy===i.key?(s(),y(me,{key:0,name:`sort-${t.sortDirection}`},null,8,["name"])):g("",!0)],10,Ot))),128))])]),t.loading?(s(),r("tbody",Nt,[d("tr",null,[d("td",{class:"loading-cell",colspan:a.visibleColumns.length},[u(he)],8,At)])])):(s(),y(Ce,{key:0,appear:"",tag:"tbody",css:!1,onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter},{default:P(()=>[(s(!0),r(S,null,k(a.visibleRows,(i,T)=>(s(),r("tr",{key:T,class:p({active:a.isSelected(i)})},[t.selectableRows?(s(),r("td",$t,[u(w,{modelValue:a.isSelected(i),"onUpdate:modelValue":m=>a.selectToggleRow(m,i)},null,8,["modelValue","onUpdate:modelValue"])])):g("",!0),(s(!0),r(S,null,k(a.visibleColumns,(m,be)=>(s(),r("td",{key:be,"data-label":m.name},[M(e.$slots,`cell(${m.key})`,{row:i,column:m,value:i[m.key]},()=>[x(h(i[m.key]),1)])],8,Et))),128))],2))),128))]),_:3},8,["onBeforeEnter","onEnter"]))],2),t.loading?g("",!0):(s(),r("footer",Ft,[a.hasPagination?(s(),y(pe,{key:0,page:a.currentPage,"onUpdate:page":n[2]||(n[2]=i=>a.currentPage=i),limit:a.limit,"total-count":t.totalRows},null,8,["page","limit","total-count"])):(s(),r("div",Mt,h(t.totalRows||t.rows.length)+" Results",1))]))])}var v=_(ae,[["render",Ut]]);ae.__docgenInfo={displayName:"Table",exportName:"default",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"columns",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"rows",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"selectableRows",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"page",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"rowsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"totalRows",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"localPagination",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sortBy",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sortDirection",type:{name:"string"},defaultValue:{func:!1,value:"'asc'"},values:["asc","desc"]},{name:"localSort",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"selected-rows-changed",type:{names:["undefined"]}},{name:"update:page",type:{names:["undefined"]}},{name:"update:rows-per-page",type:{names:["undefined"]}},{name:"update:sort-by",type:{names:["undefined"]}},{name:"update:sort-direction",type:{names:["undefined"]}},{name:"update:columns",type:{names:["undefined"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"value",title:"binding"}]}]};const qt=[{key:"id",name:"#"},{key:"number",name:"Number"}],Gt=[{id:1,number:"2020_01"},{id:2,number:"2020_02"}];var B={columns:qt,rows:Gt};const Ht=[{key:"id",name:"#"},{key:"name",name:"Name"},{key:"status",name:"Status"},{key:"created_at",name:"Created At"}],Jt=[{id:1,name:"Test 01",status:"Created",created_at:"2022-03-18 01:24:00"},{id:2,name:"Test 02",status:"Created",created_at:"2022-03-18 01:24:00"},{id:3,name:"Test 03",status:"Created",created_at:"2022-03-18 01:24:00"},{id:4,name:"Test 04",status:"Created",created_at:"2022-03-18 01:24:00"},{id:5,name:"Test 05",status:"Created",created_at:"2022-03-18 01:24:00"},{id:6,name:"Test 06",status:"Created",created_at:"2022-03-18 01:24:00"},{id:7,name:"Test 07",status:"Created",created_at:"2022-03-18 01:24:00"},{id:8,name:"Test 08",status:"Created",created_at:"2022-03-18 01:24:00"},{id:9,name:"Test 09",status:"Created",created_at:"2022-03-18 01:24:00"},{id:10,name:"Test 10",status:"Created",created_at:"2022-03-18 01:24:00"},{id:11,name:"Test 11",status:"Created",created_at:"2022-03-18 01:24:00"},{id:12,name:"Test 12",status:"Created",created_at:"2022-03-18 01:24:00"},{id:13,name:"Test 13",status:"Created",created_at:"2022-03-18 01:24:00"},{id:14,name:"Test 14",status:"Created",created_at:"2022-03-18 01:24:00"},{id:15,name:"Test 15",status:"Created",created_at:"2022-03-18 01:24:00"},{id:16,name:"Test 16",status:"Created",created_at:"2022-03-18 01:24:00"},{id:17,name:"Test 17",status:"Created",created_at:"2022-03-18 01:24:00"},{id:18,name:"Test 18",status:"Created",created_at:"2022-03-18 01:24:00"},{id:19,name:"Test 19",status:"Created",created_at:"2022-03-18 01:24:00"},{id:20,name:"Test 20",status:"Created",created_at:"2022-03-18 01:24:00"},{id:21,name:"Test 21",status:"Created",created_at:"2022-03-18 01:24:00"}];var D={columns:Ht,rows:Jt};const Kt=[{key:"id",name:"#",sortable:!0},{key:"name",name:"Name",sortable:!0},{key:"status",name:"Status"},{key:"created_at",name:"Created At"}],Zt=[{id:1,name:"Test 01",status:"Created",created_at:"2022-03-18 01:24:00"},{id:5,name:"Test 55",status:"Created",created_at:"2022-03-18 01:24:00"},{id:2,name:"Test 20",status:"Created",created_at:"2022-03-18 01:24:00"},{id:4,name:"Test 04",status:"Created",created_at:"2022-03-18 01:24:00"},{id:9,name:"Test 09",status:"Created",created_at:"2022-03-18 01:24:00"},{id:6,name:"Test 06",status:"Created",created_at:"2022-03-18 01:24:00"},{id:7,name:"Test 07",status:"Created",created_at:"2022-03-18 01:24:00"},{id:3,name:"Test 03",status:"Created",created_at:"2022-03-18 01:24:00"},{id:8,name:"Test 08",status:"Created",created_at:"2022-03-18 01:24:00"},{id:11,name:"Test 11",status:"Created",created_at:"2022-03-18 01:24:00"},{id:10,name:"Test 10",status:"Created",created_at:"2022-03-18 01:24:00"},{id:12,name:"Test 12",status:"Created",created_at:"2022-03-18 01:24:00"},{id:13,name:"Test 13",status:"Created",created_at:"2022-03-18 01:24:00"},{id:15,name:"Test 15",status:"Created",created_at:"2022-03-18 01:24:00"},{id:14,name:"Test 14",status:"Created",created_at:"2022-03-18 01:24:00"},{id:16,name:"Test 16",status:"Created",created_at:"2022-03-18 01:24:00"},{id:17,name:"Test 17",status:"Created",created_at:"2022-03-18 01:24:00"},{id:18,name:"Test 18",status:"Created",created_at:"2022-03-18 01:24:00"},{id:19,name:"Test 19",status:"Created",created_at:"2022-03-18 01:24:00"},{id:20,name:"Test 20",status:"Created",created_at:"2022-03-18 01:24:00"},{id:21,name:"Test 21",status:"Created",created_at:"2022-03-18 01:24:00"}];var W={columns:Kt,rows:Zt},Qt={parameters:{storySource:{source:`import Table from './index.vue'
import SimpleTable from '../../../tests/fixtures/Table/SimpleTable.json'
import TableWithPagination from '../../../tests/fixtures/Table/TableWithPagination.json'
import TableSortable from '../../../tests/fixtures/Table/TableSortable.json'

export default {
    title: 'Components/Table',
    component: Table,
}

const BasicTableTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            v-model:columns="columns"
            :rows="rows" />\`,
})

export const BasicTable = BasicTableTemplate.bind({})
BasicTable.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
}

const LoadingTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            :columns="columns"
            :rows="rows"
            :loading="loading" />\`,
})

export const LoadingTable = LoadingTemplate.bind({})
LoadingTable.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
    loading: true,
}

const TableWithRowSelectionTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            v-model:columns="columns"
            :rows="rows"
            :selectable-rows="selectableRows" />\`,
})

export const WithRowSelection = TableWithRowSelectionTemplate.bind({})
WithRowSelection.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
    selectableRows: true,
}

const TableWithLocalPaginationTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :total-rows="totalRows"
            :rows="rows"
            local-pagination />\`,
})

export const WithLocalPagination = TableWithLocalPaginationTemplate.bind({})
WithLocalPagination.args = {
    rows: TableWithPagination.rows,
    columns: TableWithPagination.columns,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}

const TableWithRemotePaginationTemplate = (args) => ({
    components: { Table },
    data() {
        return {
            ...args,
            loading: false,
            paginatedRows: [],
        }
    },
    template: \`
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="paginatedRows"
            :loading="loading"
            :total-rows="totalRows" />\`,
    methods: {
        fetchRows(page, limit) {
            // Simulate request to get rows
            this.loading = true

            setTimeout(() => {
                this.paginatedRows = this.rows.filter((r, i) => {
                    return (page - 1) * limit <= i && i < page * limit
                })

                this.loading = false
            }, 750)
        },
    },
    watch: {
        page(currentPage) {
            this.fetchRows(currentPage, args.rowsPerPage)
        },
    },
    mounted() {
        this.fetchRows(1, 10)
    },
})

export const WithRemotePagination = TableWithRemotePaginationTemplate.bind({})
WithRemotePagination.args = {
    rows: TableWithPagination.rows,
    columns: TableWithPagination.columns,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}

const TableWithLocalSortingTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            :rows="rows"
            local-sort />\`,
})

export const WithLocalSorting = TableWithLocalSortingTemplate.bind({})
WithLocalSorting.args = {
    rows: TableSortable.rows,
    columns: TableSortable.columns,
    sortBy: 'name',
    sortDirection: 'asc',
    localSort: true,
}

const TableWithLocalSortingAndPaginationTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: \`
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="rows"
            :total-rows="totalRows"
            local-sort
            local-pagination/>\`,
})

export const WithLocalSortingAndPagination = TableWithLocalSortingAndPaginationTemplate.bind({})
WithLocalSortingAndPagination.args = {
    rows: TableSortable.rows,
    columns: TableSortable.columns,
    sortBy: 'id',
    sortDirection: 'asc',
    localSort: true,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}
`,locationsMap:{"basic-table":{startLoc:{col:27,line:11},endLoc:{col:2,line:18},startBody:{col:27,line:11},endBody:{col:2,line:18}},"loading-table":{startLoc:{col:24,line:26},endLoc:{col:2,line:34},startBody:{col:24,line:26},endBody:{col:2,line:34}},"with-row-selection":{startLoc:{col:38,line:43},endLoc:{col:2,line:51},startBody:{col:38,line:43},endBody:{col:2,line:51}},"with-local-pagination":{startLoc:{col:41,line:60},endLoc:{col:2,line:71},startBody:{col:41,line:60},endBody:{col:2,line:71}},"with-remote-pagination":{startLoc:{col:42,line:82},endLoc:{col:2,line:121},startBody:{col:42,line:82},endBody:{col:2,line:121}},"with-local-sorting":{startLoc:{col:38,line:132},endLoc:{col:2,line:142},startBody:{col:38,line:132},endBody:{col:2,line:142}},"with-local-sorting-and-pagination":{startLoc:{col:51,line:153},endLoc:{col:2,line:167},startBody:{col:51,line:153},endBody:{col:2,line:167}}}}},title:"Components/Table",component:v};const Xt=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            v-model:columns="columns"
            :rows="rows" />`}),oe=Xt.bind({});oe.args={rows:B.rows,columns:B.columns};const Yt=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            :columns="columns"
            :rows="rows"
            :loading="loading" />`}),se=Yt.bind({});se.args={rows:B.rows,columns:B.columns,loading:!0};const en=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            v-model:columns="columns"
            :rows="rows"
            :selectable-rows="selectableRows" />`}),ie=en.bind({});ie.args={rows:B.rows,columns:B.columns,selectableRows:!0};const tn=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :total-rows="totalRows"
            :rows="rows"
            local-pagination />`}),le=tn.bind({});le.args={rows:D.rows,columns:D.columns,page:1,rowsPerPage:10,totalRows:21};const nn=e=>({components:{Table:v},data(){return V(L({},e),{loading:!1,paginatedRows:[]})},template:`
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="paginatedRows"
            :loading="loading"
            :total-rows="totalRows" />`,methods:{fetchRows(n,t){this.loading=!0,setTimeout(()=>{this.paginatedRows=this.rows.filter((l,o)=>(n-1)*t<=o&&o<n*t),this.loading=!1},750)}},watch:{page(n){this.fetchRows(n,e.rowsPerPage)}},mounted(){this.fetchRows(1,10)}}),re=nn.bind({});re.args={rows:D.rows,columns:D.columns,page:1,rowsPerPage:10,totalRows:21};const an=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            :rows="rows"
            local-sort />`}),de=an.bind({});de.args={rows:W.rows,columns:W.columns,sortBy:"name",sortDirection:"asc",localSort:!0};const on=e=>({components:{Table:v},data:()=>e,template:`
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="rows"
            :total-rows="totalRows"
            local-sort
            local-pagination/>`}),ce=on.bind({});ce.args={rows:W.rows,columns:W.columns,sortBy:"id",sortDirection:"asc",localSort:!0,page:1,rowsPerPage:10,totalRows:21};const sn=["BasicTable","LoadingTable","WithRowSelection","WithLocalPagination","WithRemotePagination","WithLocalSorting","WithLocalSortingAndPagination"];var ln=Object.freeze(Object.defineProperty({__proto__:null,default:Qt,BasicTable:oe,LoadingTable:se,WithRowSelection:ie,WithLocalPagination:le,WithRemotePagination:re,WithLocalSorting:de,WithLocalSortingAndPagination:ce,__namedExportsOrder:sn},Symbol.toStringTag,{value:"Module"}));function ue(e){return{"/home/runner/work/mr-components/mr-components/src/components/Button/Button.stories.js":tt,"/home/runner/work/mr-components/mr-components/src/components/Checkbox/Checkbox.stories.js":ct,"/home/runner/work/mr-components/mr-components/src/components/Pagination/Pagination.stories.js":kt,"/home/runner/work/mr-components/mr-components/src/components/Table/Table.stories.js":ln}[e]}Object.assign(ue,{keys:()=>["/home/runner/work/mr-components/mr-components/src/components/Button/Button.stories.js","/home/runner/work/mr-components/mr-components/src/components/Checkbox/Checkbox.stories.js","/home/runner/work/mr-components/mr-components/src/components/Pagination/Pagination.stories.js","/home/runner/work/mr-components/mr-components/src/components/Table/Table.stories.js"],resolve:e=>({"/home/runner/work/mr-components/mr-components/src/components/Button/Button.stories.js":"./src/components/Button/Button.stories.js","/home/runner/work/mr-components/mr-components/src/components/Checkbox/Checkbox.stories.js":"./src/components/Checkbox/Checkbox.stories.js","/home/runner/work/mr-components/mr-components/src/components/Pagination/Pagination.stories.js":"./src/components/Pagination/Pagination.stories.js","/home/runner/work/mr-components/mr-components/src/components/Table/Table.stories.js":"./src/components/Table/Table.stories.js"})[e]});function rn(e){e(ue,{hot:!1},!1)}const dn=[Le,Re,je,ze,Ie,Ve,Oe,$e,Ee,Ne,Ue].filter(Boolean);dn.forEach(e=>{Object.keys(e).forEach(n=>{const t=e[n];switch(n){case"args":case"argTypes":return We.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(l=>De(l,!1));case"loaders":return t.forEach(l=>Pe(l,!1));case"parameters":return O(L({},t),!1);case"argTypesEnhancers":return t.forEach(l=>ke(l));case"argsEnhancers":return t.forEach(l=>Se(l));case"globals":case"globalTypes":{const l={};return l[n]=t,O(l,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})});rn(Ae);
//# sourceMappingURL=iframe.82778ea1.js.map
