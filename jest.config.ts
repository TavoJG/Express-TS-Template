import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	roots: ['./tests'],
	testEnvironment: 'node',
	setupFiles: ['<rootDir>/tests/env.js'],
	moduleNameMapper: {
		'@models/(.*)': '<rootDir>/src/models/$1',
		'@environments/(.*)': '<rootDir>/src/environments/$1',
		'@lib/(.*)': '<rootDir>/src/lib/$1',
		'@services/(.*)': '<rootDir>/src/services/$1',
		'@routes/(.*)': '<rootDir>/src/routes/$1',
		'@middleware/(.*)': '<rootDir>/src/middleware/$1',
		'@config/(.*)': '<rootDir>/src/config/$1',
	},
};

export default config;
