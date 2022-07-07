module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globalSetup: '<rootDir>/jest.global.setup.ts',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/src',
    '<rootDir>/pages',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  // coverageDirectory: 'coverage',
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}',
  //   'pages/**/*.{js,jsx,ts,tsx}',
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //     statements: 0,
  //   },
  // },
};
