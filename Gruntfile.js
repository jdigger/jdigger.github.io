module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.',
          livereload: false,
          keepalive: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  grunt.registerTask('default', ['connect:server']);
};
