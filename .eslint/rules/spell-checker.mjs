import spellcheck from 'eslint-plugin-spellcheck';
import skipWords from '../common/skip-words.mjs';

export default {
  files: ['**/*.ts'],
  plugins: {
    spellcheck,
  },
  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords,
      },
    ],
  },
};
