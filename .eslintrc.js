module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
  },
};
