module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js'],
}
