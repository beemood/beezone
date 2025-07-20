import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: [
      '**/package.json',
      '**/executors.json',
      '**/package.json',
      '**/generators.json',
      '**/executors.json',
    ],
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
