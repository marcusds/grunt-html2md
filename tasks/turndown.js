/**
 * grunt-turndown
 * https://github.com/marcusds/grunt-turndown
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */

'use strict';

const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

module.exports = function turndown(grunt) {

  const filterSrc = function filterSrc(filepath) {
    // Warn on and remove invalid source files (if no null was set).
    if (!grunt.file.exists(filepath) || !grunt.file.isFile(filepath)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');

      return false;
    }

    return true;
  };

  const fileOpts = {
    encoding: 'utf8'
  };

  grunt.registerMultiTask('turndown', 'Transform HTML files to Markdown', function register() {

    const options = this.options({
      gfm: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function filesEach(files) {

      files.src.filter(filterSrc).forEach(function eachSrc(filepath) {

        // Read file source.
        const html = grunt.file.read(filepath, fileOpts);

        // Convert
        const gfm = turndownPluginGfm.gfm;
        const turndownService = TurndownService(options);
        turndownService.use(gfm);
        const md = turndownService.remove(['script', 'style', 'title']).turndown(html);

        // Replace suffix of source to create destination
        let dest = files.dest;

        if (typeof dest !== 'string') {
          // Assume that destination to be written next to source
          dest = filepath.substring(0, filepath.lastIndexOf('.')) + '.md';
        }

        // Write the destination file.
        grunt.file.write(dest, md, fileOpts);

        // Print a success message.
        grunt.log.writeln('File "' + dest + '" created.');

      });
    });
  });

};
