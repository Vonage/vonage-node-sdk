// Copyright 2020 Vonage
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const base = require('./jest.config.base.js')

module.exports = {
    ...base,
    projects: ['<rootDir>/packages/*/jest.config.js'],
    coverageDirectory: '<rootDir>/coverage/',
}
// module.exports = {
//     transform: { '^.+\\.(ts)?$': 'ts-jest' },
//     testEnvironment: 'node',
//     testPathIgnorePatterns: ['.d.ts', '.js'],
//     testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
//   moduleFileExtensions: ['ts', 'js'],
//     collectCoverageFrom: [`**/packages/.*/lib/*.ts`],
//     modulePathIgnorePatterns: [
//         'src/.*',
//         '/test/.*',
//         '/typings/.*',
//         'packages/.*/dist',
//     ],
// }
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     collectCoverageFrom: [`**/packages/*/**/*.ts`],
//     modulePathIgnorePatterns: [
//         'src/.*',
//         '/test/.*',
//         '/typings/.*',
//         'packages/.*/build',
//     ],
//     coverageThreshold: {
//         global: {
//             branches: 80,
//             functions: 80,
//             lines: 80,
//             statements: 80,
//         },
//     },
//     projects: ['<rootDir>', '<rootDir>/packages/*/'],
//     testPathIgnorePatterns: [
//         '<rootDir>.*(node_modules)(?!.*@vonage.*).*$',
//         '/src/',
//         '/test/',
//         '/typings/',
//         '\\.snap$',
//         '/packages/.*/build',
//     ],
//     testMatch: ['**/__test__/**/*.test.+(ts)'],
//     watchPathIgnorePatterns: ['coverage'],
// }
