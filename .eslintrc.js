module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.js']}],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks':'error',
    'react-hooks/exhaustive-deps':'warn',
    'no-console':['error', {allow: ['tron']}],
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'react-native/no-raw-text': 'off',
    'global-require': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': ['error', {extension: ['.js', '.jsx']}],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import':{
        rootPathSuffix: 'src'
      },
    },
  },
};
