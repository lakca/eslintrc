module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "array-bracket-spacing": 0,
    "block-scoped-var": 0,
    "comma-dangle": 0,
    "comma-style": 0,
    "constructor-super": 2,
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "func-names": [
      "error",
      "as-needed"
    ],
    "guard-for-in": 1,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 2
      }
    ],
    "key-spacing": [
      "error",
      {
        "afterColon": true,
        "beforeColon": false
      }
    ],
    "new-cap": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-console": 1,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-else-return": 0,
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-character-class": 2,
    "no-eq-null": 1,
    "no-ex-assign": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-inner-declarations": 0,
    "no-loop-func": 2,
    "no-param-reassign": [
      "warn",
      {
        "props": true
      }
    ],
    "no-prototype-builtins": 2,
    "no-shadow": 0,
    "no-this-before-super": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local"
      }
    ],
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "one-var": [
      "off",
      "consecutive"
    ],
    "padded-blocks": 0,
    "prefer-const": 2,
    "space-before-function-paren": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 1
  }
}