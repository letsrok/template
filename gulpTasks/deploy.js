let gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');

module.exports = function(){
  return gulp.src('build/**/*')
    .pipe(ghPages());
};