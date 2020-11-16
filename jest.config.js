module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/**/*.spec.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
