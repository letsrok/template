'use strict';
/*
const gulp = require('gulp'),
	del = require('del'),
	browserSync = require('browser-sync').create();

const scripts = require('./gulpTasks/script'),
			deploy = require('./gulpTasks/deploy'),
			pug = require('./gulpTasks/pug'),
			sass = require('./gulpTasks/sass'),
			webpack = require('./gulpTasks/webpack'),
      images = require('./gulpTasks/images'),
      libs = require('./gulpTasks/libs');
*/
global.$ = {
  path: {
    task: require('./gulpTasks/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  del: require('del')
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

/*
gulp.task('scripts', scripts);
gulp.task('deploy', deploy);
gulp.task('pug', pug);
gulp.task('sass', sass);
gulp.task('webpack', webpack);
gulp.task('images', images);
gulp.task('libs', libs);
*/
$.gulp.task('serve', function() {
    $.browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    $.browserSync.watch('build', $.browserSync.reload);
});


/*
$.gulp.task('watch', function(){

});
*/
$.gulp.task('default', $.gulp.series(
  'sass', 'pug', 'scripts', 'libs', 'images',
  $.gulp.parallel('serve', 'watch')
));

$.gulp.task('del', function(){
	return del('build');
});

$.gulp.task('delImages', function(){
  return del('build/images');
});




