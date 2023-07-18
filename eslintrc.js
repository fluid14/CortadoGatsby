module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env'],
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 2,
  },
};
