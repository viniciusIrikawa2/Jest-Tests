import type { Config } from '@jest/types'; 

const baseDir =  '<rootDir>/src/app/server_app/server';
const baseTestDir =  '<rootDir>/src/tests/server_app2';

const config: Config.InitialOptions = { 
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`
  ],
  testMatch: [
    `${baseTestDir}/**/*spec.ts`
  ],
}

export default config;