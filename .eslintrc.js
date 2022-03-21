module.exports = {
    parser: 'babel-eslint',
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        'vue/multi-word-component-names': 'off',
    },
}
