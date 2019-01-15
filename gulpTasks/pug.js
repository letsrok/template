const gulp = require('gulp'),
      pug = require('gulp-pug'),
      filter = require('gulp-filter'),
      rename = require('gulp-rename'),
      getData = require('jade-get-data')('app/json');

module.exports =  function(){
  return gulp.src('app/pages/*.pug')
    .pipe(filter(file => /app[\\\/]pages/.test(file.path)))
    .pipe(pug({
      pretty: true,
      data: {getData}
    }))
    .pipe(rename({ dirname: '.' }))
    .pipe(gulp.dest('build/'));
};