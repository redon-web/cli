module.exports = {
  extends: ['@antfu'],
  overrides: [
    {
      files: ['src/scripts/*.ts', 'scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
}
