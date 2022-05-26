function init(grunt) {
    "use strict";
    function loadConfig(pattern) {
        let config = {},
            fileName,
            fileData;

        grunt.file.expand(pattern).forEach(function (filePath) {
            fileName = filePath.split('/').pop().split('.')[0];
            fileData = require('./' + filePath)(grunt);
            config[fileName] = fileData;
        });

        return config;
    }

    function loadGrunt() {
        const config = {
            pkg: grunt.file.readJSON('package.json')
        };

        require('load-grunt-tasks')(grunt);

        if (grunt.file.exists('grunt/tasks')) {
            grunt.log.writeln('task directory found, loading tasks...');
            grunt.loadTasks('grunt/tasks');
        }

        // Disabling this for now
        // if (grunt.file.exists("grunt.yaml")) {
        //     const { workspace }= grunt.file.readYAML("grunt.yaml");
        //     config.workspace = workspace;
        // }

        grunt.util._.extend(config, loadConfig('grunt/configs/**/*.js'));

        grunt.initConfig(config);

        grunt.registerTask("publish", ["copy:cname", "gh-pages"]);
    }
    loadGrunt();

}

module.exports = init;
