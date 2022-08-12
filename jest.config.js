/* eslint-disable @typescript-eslint/no-var-requires */

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/App.tsx',
    'src/index.tsx',
    'src/pages/index.tsx',
    'src/theme/',
    'src/styles/',
    'src/hooks/index.ts',
    'src/assets/',
    'src/types/',
    'src/helpers/',
    'src/services/',
    'src/tests/mocks/index.ts',
    'types.ts',
    'src/components/molecules/index.ts',
    'src/components/atoms/index.ts',
    'src/components/organisms/index.ts',
    'src/components/templates/index.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$'
}

module.exports = createJestConfig(customJestConfig)
