module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    // code style config
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'default-param-last': 'off',
    'default-case': 'off',
    'prefer-spread': 'off',

    // import config
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',

    // typescript config
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-slot-attribute': 0,
  },
}
