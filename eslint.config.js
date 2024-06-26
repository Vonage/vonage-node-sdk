// eslint-disable-next-line n/no-extraneous-import
import globals from 'globals';
import vonage from '@vonage/eslint-config';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
  },
  {
    files: ['packages/*/lib/**/*.{ts,tsx}'],
  },
  {
    ignores: ['packages/*/dist/**/*.js', 'coverage/**'],
  },
  ...vonage.configs.typescript,
  ...vonage.configs.jest,
  ...vonage.configs.node,
  {
    settings: {
      node: {
        version: '>=18.0.0',
      }
    },
    rules: {
      // Leave this off. This rule cannot handle monorepos
      'n/no-missing-import': ['off'],
      'n/no-unsupported-features/es-builtins': [
        'error', {
          'ignores': []
        }]
    },
  },

];
