const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  // plugins: [
    // '@typescript-eslint', 'import',
    //  'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json']
  },
  rules: {
    "import/no-unresolved": "error",
    "import/extensions": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'comma-dangle': [2, "always-multiline"]
  },
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: "detect"
    }
  }
}
