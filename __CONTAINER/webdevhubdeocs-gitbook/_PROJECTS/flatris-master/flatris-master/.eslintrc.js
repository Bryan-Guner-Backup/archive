module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:flowtype/recommended',
  ],
  plugins: ['react', 'flowtype'],
  env: {
    es6: true,
    'shared-node-browser': true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  globals: {
    global: true,
    process: true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  rules: {
    'no-console': 'off',
    'flowtype/generic-spacing': 'off',
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'babel.config.js',
        'jest-puppeteer.config.js',
        'jest.config.js',
        'jest.visual.config.js',
        'jest.framework-setup.js',
        'web/next.config.js',
        'server/**/*.js',
      ],
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
    {
      files: [
        'web/components/**/*.js',
        'web/pages/**/*.js',
        'web/mocks/**/*.js',
      ],
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
      },
    },
    {
      files: ['web/visualtest.js'],
      env: {
        browser: true,
        node: true,
      },
    },
  ],
};
