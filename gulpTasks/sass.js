const sass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      bulkSass = require('gulp-sass-bulk-import'),
      postcss = require('gulp-postcss'),
      errorHandler = require('gulp-plumber-error-handler'),
      autoprefixer = require('gulp-autoprefixer'),
      gulpGroup= require('gulp-group-css-media-queries');


module.exports = function(){
  $.gulp.task('sass', () => {
    return $.gulp.src('app/sass/main.scss')
      .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
      .pipe(bulkSass())
      .pipe(sass({
        indentType: 'tab',
        indentWidth: 1,
        outputStyle: 'expanded'
      }))
      .pipe(postcss([
        require('postcss-import'),
        require('postcss-discard-comments'),
        require('postcss-discard-duplicates'),
      ]))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulpGroup())
      .pipe($.gulp.dest('build/css'));
  });
};