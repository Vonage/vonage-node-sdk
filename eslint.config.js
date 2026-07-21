// eslint-disable-next-line n/no-extraneous-import
import globals from 'globals';
import jest from 'eslint-plugin-jest';
// eslint-disable-next-line n/no-extraneous-import
import nodePlugin from 'eslint-plugin-n';
import packageJson from 'eslint-plugin-package-json';
// eslint-disable-next-line n/no-extraneous-import
import stylisticJs from '@stylistic/eslint-plugin-js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

const vonageWorkspacePackages = [
  '@vonage/accounts',
  '@vonage/applications',
  '@vonage/audit',
  '@vonage/auth',
  '@vonage/conversations',
  '@vonage/identity-insights',
  '@vonage/jwt',
  '@vonage/media',
  '@vonage/messages',
  '@vonage/network-client',
  '@vonage/network-number-verification',
  '@vonage/network-sim-swap',
  '@vonage/number-insight-v2',
  '@vonage/number-insights',
  '@vonage/numbers',
  '@vonage/pricing',
  '@vonage/redact',
  '@vonage/reports',
  '@vonage/server-client',
  '@vonage/server-sdk',
  '@vonage/sms',
  '@vonage/subaccounts',
  '@vonage/users',
  '@vonage/verify',
  '@vonage/verify2',
  '@vonage/vetch',
  '@vonage/video',
  '@vonage/voice',
];

export default defineConfig([
  globalIgnores([
    'scripts/**',
    'packages/**/dist/**',
    'coverage/**',
  ]),
  tseslint.configs.recommended,
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
  {
    plugins: { n: nodePlugin },
    extends: ['n/recommended-module'],
  },
  {
    ...packageJson.configs.recommended,
    files: ['packages/**/package.json'],
    rules: {
      ...packageJson.configs.recommended.rules,
      'package-json/require-name': 'error',
      'package-json/valid-name': 'error',

      'package-json/require-contributors': 'error',
      'package-json/valid-contributors': 'error',

      'package-json/require-version': 'error',
      'package-json/valid-version': 'error',

      'package-json/require-description': 'error',
      'package-json/valid-description': 'error',

      'package-json/require-type': 'error',
      'package-json/valid-type': 'error',

      'package-json/require-types': 'error',

      'package-json/require-engines': 'error',
      'package-json/valid-engines': 'error',

      'package-json/require-files': 'error',
      'package-json/valid-files': 'error',

      'package-json/require-bugs': 'error',
      'package-json/valid-bugs': 'error',

      // This is required since some PAAS solutions will say they are
      // in the browser
      'package-json/require-exports': 'error',
      'package-json/valid-exports': 'error',

      'package-json/require-license': 'error',
      'package-json/valid-license': 'error',

      'package-json/require-main': 'error',

      // We need to have this in exports instead of at the top level
      'package-json/require-browser': 'off',

      // The SDK is not expected to be bundeled for the browser
      'package-json/require-sideEffects': 'off',

      // Make sure all dependencies are pinned
      'package-json/restrict-dependency-ranges': [
        'error',
        [
          {
            rangeType: 'pin',
          },
        ],
      ],
      'package-json/order-properties': [
        'error',
        {
          'order': 'sort-package-json'
        }
      ]
    }
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/semi': ['error', 'always'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      '@stylistic/js/array-element-newline': ['error',

        { 'consistent': true, 'multiline': true }
      ],
    }
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
    settings: {
      n: {
        version: '>=22.0.0',
        tryExtensions: ['.js', '.ts', '.json', '.node'],
      },
    },
    files: ['packages/*/lib/**/*.{ts,js}', 'packages/*/__tests__/**/*.{ts,js}'],
    rules: {
      'n/no-missing-import': ['error',
        {
          allowModules: vonageWorkspacePackages,
        }],
    },
  },
]);
