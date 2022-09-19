// const kebabCase = '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'
// const snakeCase = '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$'
// const upperCamelCase = '^[A-Z][a-zA-Z0-9]+$'
const lowerCamelCase = '^[a-z][a-zA-Z0-9]+$'

module.exports = {
  /**
  * DOC: https://stylelint.io/user-guide/configuration
  */
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    "prettier/prettier": [true, {"singleQuote": true, "tabWidth": 2}],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
    'scss/dollar-variable-pattern': lowerCamelCase,
    'scss/percent-placeholder-pattern': lowerCamelCase,
    'scss/at-function-pattern': lowerCamelCase,
    'scss/at-mixin-pattern': lowerCamelCase,
  },
  // stylelint ignores the node_modules directory by default.
  ignoreFiles: ['**/*.{js,ts}'],
}
