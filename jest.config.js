// jest.config.js
export default {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json',
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/.*\\.styled\\.ts$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.ts",
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};