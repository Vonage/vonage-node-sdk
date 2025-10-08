import { createDefaultEsmPreset } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
  diagnostics: true,
  isolatedModules: false,
  tsconfig: './tsconfig.jest.json',
});

const projectDefault = {
  testEnvironment: 'node',
  ...presetConfig,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '@vonage/(.+)': '<rootDir>/packages/$1/lib',
  },
};

const config = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  transformIgnorePatterns: ['/node_modules/'],
  cacheDirectory: process.env.JEST_CACHE_DIR || '<rootDir>/.jest-cache',
  maxWorkers: '50%',
  extensionsToTreatAsEsm: ['.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  roots: ['<rootDir>/packages'],

  testPathIgnorePatterns: [
    '<rootDir>/packages/.*/dist',
    '<rootDir>/packages/.*/lib',
    'node_modules'
  ],

  modulePathIgnorePatterns: [
    '<rootDir>/packages/.*/dist',
    '<rootDir>/packages/.*/lib',
    'node_modules'
  ],

  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/testHelpers/*',
    '!**/__tests__/**',
    '!**/*.d.ts',
    '<rootDir>/packages/**/__tests__',
  ],

  projects: [
    {
      ...projectDefault,
      displayName: 'ACCOUNTS',
      testMatch: ['<rootDir>/packages/accounts/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'APPLICATIONS',
      testMatch: ['<rootDir>/packages/applications/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'AUDIT',
      testMatch: ['<rootDir>/packages/audit/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'AUTH',
      testMatch: ['<rootDir>/packages/auth/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'CONVERSATIONS',
      testMatch: ['<rootDir>/packages/conversations/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'JWT',
      testMatch: ['<rootDir>/packages/jwt/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'MEDIA',
      testMatch: ['<rootDir>/packages/media/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'MESSAGES',
      testMatch: ['<rootDir>/packages/messages/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NETWORK CLIENT',
      testMatch: ['<rootDir>/packages/network-client/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NETWORK SIM SWAP',
      testMatch: ['<rootDir>/packages/network-sim-swap/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NETWORK NUMBER VERIFICATION',
      testMatch: ['<rootDir>/packages/network-number-verification/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NUMBER INSIGHT V2',
      testMatch: [
        '<rootDir>/packages/number-insight-v2/__tests__/**/*.test.ts',
      ],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NUMBER INSIGHTS',
      testMatch: ['<rootDir>/packages/number-insights/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'NUMBERS',
      testMatch: ['<rootDir>/packages/numbers/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'PRICING',
      testMatch: ['<rootDir>/packages/pricing/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'REDACT',
      testMatch: ['<rootDir>/packages/redact/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'SERVER CLIENT',
      testMatch: ['<rootDir>/packages/server-client/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'SERVER SDK',
      testMatch: ['<rootDir>/packages/server-sdk/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'SMS',
      testMatch: ['<rootDir>/packages/sms/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'SUB ACCOUNTS',
      testMatch: ['<rootDir>/packages/subaccounts/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'USER',
      testMatch: ['<rootDir>/packages/users/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'VERIFY',
      testMatch: ['<rootDir>/packages/verify/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'VERIFY 2',
      testMatch: ['<rootDir>/packages/verify2/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'VIDEO',
      testMatch: ['<rootDir>/packages/video/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'VOICE',
      testMatch: ['<rootDir>/packages/voice/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      ...projectDefault,
      displayName: 'IDENTITY INSIGHTS',
      testMatch: ['<rootDir>/packages/identity-insights/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
  ],
};

export default config;
