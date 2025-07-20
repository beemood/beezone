import nx from '@nx/eslint-plugin';
import eslintConfig from './.eslint/eslint.config.mjs';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...eslintConfig,
];
