'use strict';

var gutil     = require('gulp-util');
var through   = require('through2');
var assign    = require('object-assign');

var pegjs     = require('pegjs');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		
    if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-pegjs', 'Streaming not supported'));
			return;
		}

    // always generate source code of parser
		var options = assign({ output: 'source' }, opts);

		var filePath = file.path;

		try {
      file.contents = new Buffer(pegjs.buildParser(file.contents.toString(), options));
      file.path = gutil.replaceExtension(file.path, '.js');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-pegjs', err, {fileName: filePath}));
		}

		cb();
	});
};
