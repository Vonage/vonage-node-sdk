module.exports = {
    roots: ['<rootDir>/'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$'],
    verbose: true,
    testPathIgnorePatterns: [
        '<rootDir>.*(node_modules)(?!.*@vonage.*).*$',
        '/src/',
        '/test/',
        '/typings/',
        '\\.snap$',
        '/packages/.*/build',
    ],
}
