module.exports = {
  projects: [
    {
      displayName: 'frontend',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/frontend/**/*.test.js'],
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    },
    {
      displayName: 'backend',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/backend/**/*.test.js'],
    },
  ],
};
