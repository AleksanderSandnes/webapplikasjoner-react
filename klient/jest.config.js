module.exports = {
    collectCoverageFrom: [
        'src/**/*.js?(x)'
    ],

    setupFilesAfterEnv: ['<rootDir>/testing/enzymeAdapter.js'],

    testEnvironment: "jsdom",

    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)", "**/?(*,)+(spec|test).[jt]s?(x)"
    ]
};