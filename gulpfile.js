var gulp = require('gulp');
var mocha = require('gulp-mocha');
var beautify = require('js-beautify').js_beautify,
  fs = require('fs');

gulp.task('test', function() {
  var error = false;
  gulp.
  src('./test.js').
  pipe(mocha()).
  on('error', function() {
    console.log('Tests failed!');
    error = true;
  }).
  on('end', function() {
    if (!error) {
      console.log('Tests succeeded! Enter the below code:\n' +
        require('fs').readFileSync('./output.dat'));
      process.exit(0);
    }
  });
});

gulp.task('format', (file) => {
  fs.readFile('gulpfile.js', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    fs.writeFile('gulpfile.js', beautify(data, {
        indent_size: 2
      }), 'utf8')
      //console.log(beautify(data, { indent_size: 2 }));
  });
});

gulp.task('watch', function() {
  gulp.watch(['./test.js', './interface.js'], ['test', 'format']);
});