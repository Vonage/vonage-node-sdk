// eslint-disable-next-line n/no-extraneous-import
import globals from 'globals';
import vonage from '@vonage/eslint-config';
import packageJson from 'eslint-plugin-package-json';
import { defineConfig } from 'eslint/config';

export default defineConfig([
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
    ignores: ['scripts/**', 'packages/**/dist/**', 'coverage/**'],
  },
  ...vonage.configs.base,
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
      '@typescript-eslint/no-unused-expressions': 'off',
      // Leave this off. This rule cannot handle monorepos
      'n/no-missing-import': ['off'],
      'n/no-unsupported-features/es-builtins': [
        'error', {
          'ignores': []
        }]
    },
  },
  {
    ...packageJson.configs.recommended,
    files: ['packages/**/package.json'],
    rules: {
      ...packageJson.configs.recommended.rules,
      'package-json/require-type': 'error',
      'package-json/require-engines': 'error',
      'package-json/require-files': 'error',
      'package-json/require-types': 'error',
      'package-json/restrict-dependency-ranges': [
        'error',
        [
          {
            rangeType: 'pin',
          },
        ],
      ],
    }
  },
]);
