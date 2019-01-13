'use strict';

const gulp = require('gulp'),
	del = require('del'),
	browserSync = require('browser-sync').create();

const scripts = require('./gulpTasks/script'),
			deploy = require('./gulpTasks/deploy'),
			pug = require('./gulpTasks/pug'),
			sass = require('./gulpTasks/sass'),
			webpack = require('./gulpTasks/webpack'),
      images = require('./gulpTasks/images');


gulp.task('scripts', scripts);
gulp.task('deploy', deploy);
gulp.task('pug', pug);
gulp.task('sass', sass);
gulp.task('webpack', webpack);
gulp.task('images', images);

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('build', browserSync.reload);
});



gulp.task('watch', function(){
	gulp.watch('app/sass/**/*', gulp.series(sass));
  gulp.watch('app/sass/help/*', gulp.series(sass));
  gulp.watch('app/blocks/**/*.scss', gulp.series(sass));
	gulp.watch('app/**/*.pug', gulp.series(pug));
  gulp.watch('app/pages/*.pug', gulp.series(pug));
  gulp.watch('app/layouts/*.pug', gulp.series(pug));
	gulp.watch('app/blocks/**/*.pug', gulp.series(pug));
	gulp.watch('build/*.html', browserSync.reload);
	gulp.watch('app/js/**/*', gulp.series(scripts));
  gulp.watch('app/js/libs.js', gulp.series(webpack));
  gulp.watch('app/blocks/**/*.js', gulp.series(scripts));
  gulp.watch('app/images/**/*', gulp.series('delImages', images));
});

gulp.task('default',gulp.series(
  sass, pug, scripts, webpack, images,
	gulp.parallel('serve', 'watch')
));

gulp.task('del', function(){
	return del('build');
});

gulp.task('delImages', function(){
  return del('build/images');
});




