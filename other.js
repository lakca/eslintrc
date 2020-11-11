module.exports = {
  'accessor-pairs': 0,
  'array-callback-return': [ 2, {
    allowImplicit: true
  }],
  'block-scoped-var': 0,
  'callback-return': 0,
  'camelcase': [ 2, {
    ignoreDestructuring: true,
    properties: 'never'
  }],
  'class-methods-use-this': 2,
  'complexity': [ 1, {
    max: 10
  }],
  'consistent-return': 0,
  'consistent-this': [ 2, 'self' ],
  'constructor-super': 2,
  'default-case': 2,
  'for-direction': 2,
  'func-name-matching': 2,
  'func-names': [ 2, 'as-needed' ],
  'func-style': 0,
  'getter-return': 2,
  'global-require': 2,
  'guard-for-in': 1,
  'handle-callback-err': [ 2, '^(err|error|[a-zA-Z\\d]Error)$' ],
  'id-blacklist': 0,
  'id-length': 0,
  'id-match': [ 2, '^[a-z]+([A-Z][a-z]+)*$' ],
  'init-declarations': 0,
  'line-comment-position': [ 2, {
    position: 'above'
  }],
  'lines-around-directive': [ 2, 'always' ],
  'max-classes-per-file': 0,
  'max-depth': [ 2, 4 ],
  'max-len': [ 2, {
    ignoreRegExpLiterals: true,
    ignoreTemplateLiterals: true,
    ignoreUrls: true
  }],
  'max-lines': [ 2, {
    max: 200,
    skipBlankLines: true
  }],
  'max-lines-per-function': [ 2, {
    max: 30,
    skipBlankLines: true,
    skipComments: true
  }],
  'max-nested-callbacks': [ 2, 2 ],
  'max-params': [ 2, 3 ],
  'max-statements': 0,
  'max-statements-per-line': [ 2, {
    max: 2
  }],
  'multiline-ternary': [ 2, 'always-multiline' ],
  'new-cap': 2,
  'no-alert': 2,
  'no-array-constructor': 2,
  'no-async-promise-executor': 0,
  'no-await-in-loop': 2,
  'no-bitwise': 0,
  'no-buffer-constructor': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-class-assign': 2,
  'no-compare-neg-zero': 2,
  'no-cond-assign': [ 2, 'except-parens' ],
  'no-console': 1,
  'no-const-assign': 2,
  'no-constant-condition': [ 2, {
    checkLoops: false
  }],
  'no-continue': 0,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-duplicate-imports': 2,
  'no-empty': [ 2, {
    allowEmptyCatch: true
  }],
  'no-empty-character-class': 2,
  'no-empty-function': 0,
  'no-empty-pattern': 2,
  'no-eq-null': 1,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-fallthrough': [ 2, {
    commentPattern: 'break[\\s\\w]*omitted'
  }],
  'no-func-assign': 2,
  'no-global-assign': 2,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-inline-comments': 2,
  'no-inner-declarations': 0,
  'no-invalid-regexp': 2,
  'no-invalid-this': 2,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 0,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': [ 2, {
    ignoreArrayIndexes: true
  }],
  'no-misleading-character-class': 2,
  'no-mixed-operators': 0,
  'no-mixed-requires': 2,
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-assign': 0,
  'no-multi-str': 2,
  'no-negated-condition': 2,
  'no-nested-ternary': 0,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-object': 2,
  'no-new-require': 2,
  'no-new-symbol': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': [ 'warn', {
    props: true
  }],
  'no-path-concat': 2,
  'no-plusplus': 0,
  'no-process-env': 2,
  'no-process-exit': 2,
  'no-proto': 2,
  'no-prototype-builtins': 2,
  'no-redeclare': 2,
  'no-restricted-globals': 2,
  'no-restricted-imports': 0,
  'no-restricted-modules': 0,
  'no-restricted-properties': 0,
  'no-restricted-syntax': [ 2, 'WithStatement' ],
  'no-return-assign': [ 2, 'except-parens' ],
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow': 0,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 1,
  'no-sync': [ 1, {
    allowAtRootLevel: true
  }],
  'no-tabs': 2,
  'no-template-curly-in-string': 0,
  'no-ternary': 0,
  'no-this-before-super': 2,
  'no-throw-literal': 2,
  'no-undef': 2,
  'no-undefined': 2,
  'no-underscore-dangle': 0,
  'no-unexpected-multiline': 2,
  'no-unmodified-loop-condition': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unused-expressions': [ 2, {
    allowShortCircuit: true,
    allowTernary: true
  }],
  'no-unused-vars': [ 2, {
    vars: 'local'
  }],
  'no-use-before-define': [ 2, {
    classes: false,
    functions: false
  }],
  'no-useless-call': 2,
  'no-useless-catch': 2,
  'no-useless-concat': 2,
  'no-useless-constructor': 2,
  'no-useless-escape': 2,
  'no-void': 0,
  'no-warning-comments': [ 1, {
    terms: [ 'fixme', 'fix', 'fixit', 'bug', 'todo', 'xxx' ]
  }],
  'no-with': 2,
  'prefer-named-capture-group': 2,
  'prefer-promise-reject-errors': 2,
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'radix': 2,
  'require-atomic-updates': 2,
  'require-await': 2,
  'require-unicode-regexp': 2,
  'require-yield': 2,
  'sort-keys': 1,
  'symbol-description': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,
  'vars-on-top': 1,
  'vue/html-closing-bracket-newline': 0,
  'vue/max-attributes-per-line': [ 2, {
    multiline: {
      allowFirstLine: true,
      max: 1
    },
    singleline: 1
  }],
  'vue/no-unused-vars': 1,
  'vue/require-default-prop': 0,
  'vue/singleline-html-element-content-newline': [ 2, {
    ignoreWhenEmpty: true,
    ignoreWhenNoAttributes: true
  }],
  'vue/use-v-on-exact': 0
}
