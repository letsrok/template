const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      errorHandler = require('gulp-plumber-error-handler'),
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed');


module.exports = function() {
  return gulp.src('app/images/**/*')
    .pipe(plumber({ errorHandler: errorHandler('Error in img task') }))
    .pipe(changed('build/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}