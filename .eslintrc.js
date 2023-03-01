module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    JSX: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { usePrettier: true }],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser'
    }
  ]
}
