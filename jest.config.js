/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
}
