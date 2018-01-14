module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],

        files: [
            { pattern: 'src/main/**/*.ts' },
            { pattern: 'src/test/**/*.ts'}
        ],

        preprocessors: {
            'src/main/**/*.ts': ['karma-typescript'],
            'src/test/**/*.ts': ['karma-typescript']
        },

        reporters: ['mocha', 'coverage', 'karma-typescript'],

        mochaReporter: {
            showDiff: true
        },

        colors: true,

        browsers: ['PhantomJS']
    });
};