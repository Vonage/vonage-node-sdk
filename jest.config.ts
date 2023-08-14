import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/packages/**/__tests__',
  ],
  projects: [
    {
      displayName: 'ACCOUNTS',
      testMatch: ['<rootDir>/packages/accounts/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'APPLICATIONS',
      testMatch: ['<rootDir>/packages/applications/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'AUDIT',
      testMatch: ['<rootDir>/packages/audit/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'AUTH',
      testMatch: ['<rootDir>/packages/auth/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'JWT',
      testMatch: ['<rootDir>/packages/jwt/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'MEDIA',
      testMatch: ['<rootDir>/packages/media/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'MESSAGES',
      testMatch: ['<rootDir>/packages/messages/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'MEETINGS',
      testMatch: ['<rootDir>/packages/meetings/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'NUMBER INSIGHTS',
      testMatch: ['<rootDir>/packages/number-insights/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'NUMBERS',
      testMatch: ['<rootDir>/packages/numbers/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'PRICING',
      testMatch: ['<rootDir>/packages/pricing/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'PROACTIVE CONNECT',
      testMatch: [
        '<rootDir>/packages/proactive-connect/__tests__/**/*.test.ts',
      ],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'REDACT',
      testMatch: ['<rootDir>/packages/redact/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'SERVER CLIENT',
      testMatch: ['<rootDir>/packages/server-client/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'SERVER SDK',
      testMatch: ['<rootDir>/packages/server-sdk/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'SMS',
      testMatch: ['<rootDir>/packages/sms/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'SUB ACCOUNTS',
      testMatch: ['<rootDir>/packages/subaccounts/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'USER',
      testMatch: ['<rootDir>/packages/users/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'VERIFY',
      testMatch: ['<rootDir>/packages/verify/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'VERIFY 2',
      testMatch: ['<rootDir>/packages/verify2/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'VETCH',
      testMatch: ['<rootDir>/packages/vetch/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'VIDEO',
      testMatch: ['<rootDir>/packages/video/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
    {
      displayName: 'VOICE',
      testMatch: ['<rootDir>/packages/voice/__tests__/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', '__tests__'],
    },
  ],
  moduleNameMapper: {
    '@vonage/(.+)': '<rootDir>/packages/$1/lib',
  },
};

export default config;
