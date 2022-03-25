module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~(.*)$': '<rootDir>/node_modules/$1',
        '^.+\\.(css|scss)$': '<rootDir>/tests/transformers/cssTransform.js',
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\.svg$': './tests/transformers/svgTransform.js',
    },
    setupFilesAfterEnv: ['./tests/unit/setup-tests.js'],
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
    coverageReporters: ['text-summary', 'clover', 'html', 'lcov'],
}
