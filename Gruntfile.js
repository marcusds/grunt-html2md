/**
 * grunt-turndown
 * https://github.com/marcusds/grunt-turndown
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function gruntConf(grunt) {
  require('time-grunt')(grunt); // Must be first item
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/*.md']
    },

    // Configuration to be run (and then tested).
	  turndown: {
      main: {
        options: {
          gfm: true
        },
        src: ['test/fixtures/default.html']
      },
      another: {
        files: {
          'test/fixtures/another.md': 'test/fixtures/default.html'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'turndown', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
