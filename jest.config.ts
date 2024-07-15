import type { Config } from '@jest/types'; 

const baseDir =  '<rootDir>/src/app/PasswordChecker';
const baseTestDir =  '<rootDir>/src/tests/PasswordChecker';

const config: Config.InitialOptions = { 
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`
  ],
  testMatch: [
    `${baseTestDir}/**/*.ts`
  ],
}

export default config;