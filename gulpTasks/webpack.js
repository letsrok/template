const gulp = require('gulp'),
    webpack = require('webpack'),
    uglify = require('gulp-uglify'),
    webpackStream = require('webpack-stream');

module.exports = function(){
  return gulp.src('app/js/libs.js')
    .pipe(webpackStream({
      output: {
        filename: 'libs.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader?presets[]=es2015',
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      externals: {
        jquery: 'jQuery'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
};