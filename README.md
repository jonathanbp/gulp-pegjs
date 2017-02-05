# gulp-pegjs

[![Build Status](https://travis-ci.org/jonathanbp/gulp-pegjs.svg?branch=master)](https://travis-ci.org/jonathanbp/gulp-pegjs)

This gulp plugin will generate a parser based on a pegjs grammar for its input files.

## Install

```bash
npm install --save-dev gulp-pegjs
```

## Usage

To generate the PEG.js parser you simply need to add these lines to your gulpfile.
```javascript
var gulp  = require('gulp');
var pegjs = require('gulp-pegjs');

gulp.task('default', function() {
    return gulp.src('src/*.pegjs')
        .pipe(pegjs())
        .pipe(gulp.dest('dist'));
});
```

You can tweak the generated parser by passing an argument to the function call.
The options are described in the [PEG.js documentation](https://pegjs.org/documentation#generating-a-parser-javascript-api).
```javascript
var gulp  = require('gulp');
var pegjs = require('gulp-pegjs');

gulp.task('default', function() {
    return gulp.src('src/*.pegjs')
        .pipe(pegjs({format: "globals", exportVar: "parser"}))
        .pipe(gulp.dest('dist'));
});
```
