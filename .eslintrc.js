module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'jest'
    ],
    rules: {
        'linebreak-style': 0,
        'prefer-destructuring': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'no-param-reassing':0,
      },
};