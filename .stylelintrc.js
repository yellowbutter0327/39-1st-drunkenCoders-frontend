// .stylelintrc.js

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-property-sort-order-smacss', // SMACSS 기반으로 속성 정렬
  ],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['src/styles/reset.scss', 'src/styles/common.scss'], // reset과 common scss는 ignore합니다.
  rules: {
    'at-rule-no-unknown': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'keyframes-name-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
    'max-nesting-depth': 3,
    'no-descending-specificity': null,
    'string-quotes': 'single',
    'scss/at-rule-conditional-no-parentheses': null,
  },
};
