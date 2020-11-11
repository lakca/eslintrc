module.exports = {
  'array-bracket-newline': [2, 'consistent'],
  'array-bracket-spacing': [2, 'always', {
    singleValue: false,
    arraysInArrays: false,
    objectsInArrays: false
  }],
  'array-element-newline': [2, 'consistent'],
  'arrow-body-style': [2, 'as-needed'],
  'arrow-parens': [2, 'as-needed'],
  'arrow-spacing': [2, {
    after: true,
    before: true
  }],
  'block-spacing': [2, 'always'],
  'brace-style': [2, '1tbs', {
    allowSingleLine: false
  }],
  'capitalized-comments': 0,
  'comma-dangle': [2, 'always-multiline'],
  'comma-spacing': [2, {
    after: true,
    before: false
  }],
  'comma-style': [2, 'last'],
  'computed-property-spacing': [2, 'never'],
  'curly': [2, 'multi-line'],
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  'eol-last': 2,
  'eqeqeq': [2, 'always', {
    null: 'ignore'
  }],
  'func-call-spacing': [2, 'never'],
  'function-paren-newline': [2, {
    minItems: 4
  }],
  'generator-star-spacing': [2, {
    after: false,
    before: true
  }],
  'implicit-arrow-linebreak': [2, 'beside'],
  'indent': [2, 2, {
    SwitchCase: 1,
    VariableDeclarator: 2
  }],
  'jsx-quotes': [2, 'prefer-double'],
  'key-spacing': [2, {
    afterColon: true,
    beforeColon: false
  }],
  'keyword-spacing': [2, {
    after: true,
    before: true
  }],
  'linebreak-style': [2, 'unix'],
  'lines-around-comment': [2, {
    beforeBlockComment: true,
    beforeLineComment: true
  }],
  'lines-between-class-members': [2, 'never'],
  'multiline-comment-style': [2, 'starred-block'],
  'new-parens': 2,
  'newline-per-chained-call': [2, {
    ignoreChainWithDepth: 2
  }],
  'no-confusing-arrow': [2, {
    allowParens: true
  }],
  'no-div-regex': 0,
  'no-else-return': [ 2, { allowElseIf: true } ],
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-label': 2,
  'no-extra-parens': 2,
  'no-extra-semi': 2,
  'no-floating-decimal': 2,
  'no-implicit-coercion': 0,
  'no-lonely-if': 2,
  'no-multi-spaces': 2,
  'no-multiple-empty-lines': [2, {
    max: 1,
    maxEOF: 1
  }],
  'no-regex-spaces': 2,
  'no-trailing-spaces': 2,
  'no-undef-init': 2,
  'no-unneeded-ternary': 2,
  'no-unsafe-negation': 2,
  'no-unused-labels': 2,
  'no-useless-computed-key': 2,
  'no-useless-rename': 2,
  'no-useless-return': 2,
  'no-var': 2,
  'no-whitespace-before-property': 2,
  'nonblock-statement-body-position': [2, 'beside'],
  'object-curly-newline': [2, {
    consistent: true,
    multiline: true
  }],
  'object-curly-spacing': [2, 'always'],
  'object-property-newline': [2, {
    allowAllPropertiesOnSameLine: true
  }],
  'object-shorthand': [ 2, 'consistent-as-needed' ],
  'one-var': [2, 'consecutive'],
  'one-var-declaration-per-line': [2, 'initializations'],
  'operator-assignment': [2, 'always'],
  'operator-linebreak': [2, 'before'],
  'padded-blocks': [2, 'never'],
  'padding-line-between-statements': [2, {
    blankLine: 'always',
    next: '*',
    prev: 'block-like'
  }, {
    blankLine: 'always',
    next: '*',
    prev: 'var'
  }, {
    blankLine: 'always',
    next: '*',
    prev: 'let'
  }, {
    blankLine: 'always',
    next: '*',
    prev: 'const'
  }, {
    blankLine: 'always',
    next: '*',
    prev: 'function'
  }, {
    blankLine: 'always',
    next: 'var',
    prev: '*'
  }, {
    blankLine: 'always',
    next: 'let',
    prev: '*'
  }, {
    blankLine: 'always',
    next: 'const',
    prev: '*'
  }, {
    blankLine: 'always',
    next: 'function',
    prev: '*'
  }],
  'prefer-arrow-callback': 2,
  'prefer-const': 2,
  'prefer-destructuring': [2, {
    array: true,
    object: true
  }, {
    enforceForRenamedProperties: false
  }],
  'prefer-numeric-literals': 2,
  'prefer-object-spread': 2,
  'prefer-template': 2,
  'quote-props': [2, 'consistent-as-needed'],
  'quotes': [2, 'single', {
    allowTemplateLiterals: true,
    avoidEscape: true
  }],
  'rest-spread-spacing': [2, 'never'],
  'semi': [2, 'never', {
    beforeStatementContinuationChars: 'always'
  }],
  'semi-spacing': [2, {
    after: true,
    before: false
  }],
  'semi-style': [2, 'first'],
  'sort-imports': [2, {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
  }],
  'sort-vars': 2,
  'space-before-blocks': 2,
  'space-before-function-paren': [ 2, 'never' ],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [2, {
    nonwords: false,
    words: true
  }],
  'spaced-comment': [2, 'always'],
  'strict': [2, 'safe'],
  'switch-colon-spacing': [2, {
    after: true,
    before: false
  }],
  'template-curly-spacing': [2, 'never'],
  'template-tag-spacing': [2, 'never'],
  'unicode-bom': [2, 'never'],
  'wrap-iife': [2, 'outside'],
  'wrap-regex': 0,
  'yield-star-spacing': [2, 'after'],
  'yoda': [2, 'never', {
    onlyEquality: true
  }]
}
