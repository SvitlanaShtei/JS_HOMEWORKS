// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-console': 'warn',
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['warn', { 'args': 'none' }],
        'max-len': ['error', { 'code': 80 }],
        'arrow-parens': ['error', 'always'],
        'no-implicit-coercion': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-magic-numbers': ['warn', { 'ignore': [0, 1] }],
    },
};
