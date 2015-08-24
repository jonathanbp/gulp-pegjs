# gulp-pegjs

[![Build Status](https://travis-ci.org/jonathanbp/gulp-pegjs.svg?branch=master)](https://travis-ci.org/jonathanbp/gulp-pegjs)

This gulp plugin will generate a parser based on a pegjs grammar for its input files.

## Install

    npm install --save-dev gulp-pegjs

## Usage

    var gulp  = require('gulp');
    var pegjs = require('gulp-pegjs');

    gulp.task('default', function() {
      return gulp.src('src/*.pegjs')
          .pipe(pegjs())
          .pipe(gulp.dest('dist'));
    });
