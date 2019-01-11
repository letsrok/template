'use strict';

let gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	clean = require('gulp-clean-css'),
	fs = require('fs'),
	browserSync = require('browser-sync').create(),
  bulkSass = require('gulp-sass-bulk-import'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  filter = require('gulp-filter'),
  jsimport = require('gulp-js-import'),
  postcss = require('gulp-postcss'),
  webpack = require('webpack'),
	uglify = require('gulp-uglify'),
  webpackStream = require('webpack-stream'),
  errorHandler = require('gulp-plumber-error-handler');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    
});
/*
gulp.task('scripts', function(){
	return gulp.src('app/js/app.js')
    .pipe(webpackStream({
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },
      externals: {
        jquery: 'jQuery'
      }
    }))
		.pipe(uglify())
    .pipe(gulp.dest('build/js/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});
*/

gulp.task('scripts', function(){
  return gulp.src('app/js/app.js')
    .pipe(jsimport())
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('pug', function(){
	return gulp.src('app/pages/*.pug')
    .pipe(filter(file => /app[\\\/]pages/.test(file.path)))
		.pipe(pug({
			pretty: true,
		}))
    .pipe(rename({ dirname: '.' }))
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('sass',function(){
	return gulp.src('app/sass/main.scss')
    .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
    .pipe(bulkSass())
		.pipe(sass())
    .pipe(postcss([
      require('postcss-discard-comments'),
      require('postcss-import'),
      require('postcss-discard-duplicates'),
    ]))
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
				}))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*', gulp.series('sass'));
  gulp.watch('app/sass/help/*', gulp.series('sass'));
  gulp.watch('app/blocks/**/*.scss', gulp.series('sass'));
	gulp.watch('app/**/*.pug', gulp.series('pug'));
  gulp.watch('app/pages/*.pug', gulp.series('pug'));
  gulp.watch('app/layouts/*.pug', gulp.series('pug'));
	gulp.watch('app/blocks/**/*.pug', gulp.series('pug'));
	gulp.watch('build/*.html', browserSync.reload);
	gulp.watch('app/js/**/*', gulp.series('scripts'));
  gulp.watch('app/blocks/**/*.js', gulp.series('scripts'));
});

gulp.task('default',gulp.series(
	'sass',
	gulp.parallel('serve', 'watch')
));

gulp.task('del', function(){
	return del('build');
});

gulp.task('img-build', () =>
	gulp.src('app/images/*').pipe(imagemin()).pipe(gulp.dest('build/images/'))
);
gulp.task('css-build', function(){return gulp.src('app/css/*').pipe(gulp.dest('build/css/'))});
gulp.task('html-build', function(){return gulp.src('app/*.html').pipe(gulp.dest('build/'))});
gulp.task('js-build', function(){return gulp.src('app/js/*').pipe(gulp.dest('build/js/'))});
gulp.task('fonts-build', function () { return gulp.src('app/fonts/*').pipe(gulp.dest('build/fonts/')) });


gulp.task('build', gulp.series('del', 'css-build', 'html-build', 'img-build', 'js-build', 'fonts-build'));


