const gulp = require('gulp'),
      jsimport = require('gulp-js-import'),
      babel = require('gulp-babel');


 module.exports = function() {
   return gulp.src('app/js/app.js')
     .pipe(jsimport())
     .pipe(babel({
       presets: ['@babel/env']
     }))
     .pipe(gulp.dest('build/js/'));
 };
