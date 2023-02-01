module.exports = {
  extends: ['redon'],
  overrides: [
    {
      files: ['src/scripts/*.ts', 'scripts/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
