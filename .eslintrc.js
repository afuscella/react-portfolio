module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': [error, ignorePackages, {
      '@': 'never',
    }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
  },
};
