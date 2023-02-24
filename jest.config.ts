import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage/',
  projects: [
    {
      displayName: 'ACCOUNTS',
      testMatch: ['<rootDir>/packages/accounts/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'APPLICATIONS',
      testMatch: [
        '<rootDir>/packages/applications/__tests__/**/*.test.ts',
      ],
    },
    {
      displayName: 'AUDIT',
      testMatch: ['<rootDir>/packages/audit/tests__/**/*.test.ts'],
    },
    {
      displayName: 'AUTH',
      testMatch: ['<rootDir>/packages/auth/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'JWT',
      testMatch: ['<rootDir>/packages/jwt/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'MESSAGES',
      testMatch: ['<rootDir>/packages/messages/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'NUMBER INSIGHTS',
      testMatch: [
        '<rootDir>/packages/number-insights/__tests__/**/*.test.ts',
      ],
    },
    {
      displayName: 'NUMBERS',
      testMatch: ['<rootDir>/packages/numbers/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'PRICING',
      testMatch: ['<rootDir>/packages/pricing/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'SERVER CLIENT',
      testMatch: [
        '<rootDir>/packages/server-client/__tests__/**/*.test.ts',
      ],
    },
    {
      displayName: 'SERVER SDK',
      testMatch: ['<rootDir>/packages/server-sdk/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'SMS',
      testMatch: ['<rootDir>/packages/sms/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'VERIFY',
      testMatch: ['<rootDir>/packages/verify/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'VETCH',
      testMatch: ['<rootDir>/packages/vetch/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'VIDEO',
      testMatch: ['<rootDir>/packages/video/__tests__/**/*.test.ts'],
    },
    {
      displayName: 'VOICE',
      testMatch: ['<rootDir>/packages/voice/__tests__/**/*.test.ts'],
    },
  ],
  moduleNameMapper: {
    '@vonage/(.+)': '<rootDir>/packages/$1/lib',
  },
};

export default config;
