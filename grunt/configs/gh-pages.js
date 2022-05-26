module.exports = function (grunt) {
    return {
        homepage: {
            options: {
                base: 'www',
                branch: 'gh-pages'
            },
            src: '**/*'
        }
    };
};
