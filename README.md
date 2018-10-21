# grunt-turndown

> Transform HTML files to Markdown in a Grunt task

[![Build Status](https://travis-ci.org/marcusds/grunt-turndown.svg?branch=master)](https://travis-ci.org/marcusds/grunt-turndown)
[![Maintainability](https://api.codeclimate.com/v1/badges/8a98dae35b4e2bb57d60/maintainability)](https://codeclimate.com/github/marcusds/grunt-turndown/maintainability)
[![dependencies Status](https://david-dm.org/marcusds/grunt-turndown/status.svg)](https://david-dm.org/marcusds/grunt-turndown)

## Getting Started

This Grunt task plugin transforms the given HTML files to the
[Markdown format](http://daringfireball.net/projects/markdown/).

This plugin requires [Grunt](http://gruntjs.com/) `~1.0` and [Node.js](https://nodejs.org/en/)
version to be minimum of `8.11.1`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule), and
handles the transformation via
[Turndown](https://github.com/domchristie/turndown) `~5.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to
create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and
use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```sh
npm install grunt-turndown --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-turndown');
```


## The "turndown" task

### Overview

In your project's Gruntfile, add a section named `turndown` to the data object passed
into `grunt.initConfig()`.

```js
grunt.initConfig({
  turndown: {
    your_target: {
      // Target-specific source file lists and/or file write options go here.
    },
  },
})
```


### Options

Options are passed to the `turndown` handler, please see
https://github.com/domchristie/turndown for further details

#### options.gfm

Type: `boolean`

Default value: `false`

> GitHub Flavoured Markdown

### Usage Examples

#### Default Options

In this example, the default options are used, as there aren't any at the moment.
All the files matching the `src/*.html` and `legacy/*.html` selectors will be used
as HTML sources, which will be converted to Markdown files placed in the same folder
as the given source file.

```js
grunt.initConfig({
  turndown: {
    main: {
      src: [
        'src/*.html',
        'legacy/*.html'
      ]
    },
  },
})
```
## Testing and Linting

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

Unit tests are done with [Nodeunit](https://github.com/caolan/nodeunit/ "Easy unit testing in node.js and the browser, based on the assert module").

```sh
npm install
npm run lint
npm test
```

## Version history
* `v3.1.0` (2018-10)
  - Fix optional GFM.
  
* `v3.0.0` (2018-10)
  - Initial release of grunt-turndown
  - Use Turndown, the replacement for html2md


## License

Portions copyright [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>.

Licensed under the [MIT license](LICENSE).
