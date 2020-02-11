const errorHandler = require('gulp-plumber-error-handler'),
      spritesmith = require('gulp.spritesmith'),
      buffer = require('vinyl-buffer'),
      del = require('del'),
      merge = require('merge-stream'),
      changed = require('gulp-changed');


module.exports = function() {
  $.gulp.task('sprites', () => {
    var sptites = $.gulp.src('app/images/icons/*.*')
      .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'icons.scss',
        cssFormat: 'scss',
        algorithm: 'binary-tree',
        padding: 10,
        //cssTemplate: 'handlebarsInheritance.scss.handlebars',
        /*cssVarMap: function(sprite) {
            sprite.name = 's-' + sprite.name
        }*/
      }))
    
    var imgSprites = sptites.img
      .pipe(buffer())
      .pipe($.gulp.dest('build/images/icons/'));
    
    var cssStream = sptites.css
      .pipe($.gulp.dest('app/sass/help/'));

    return merge(imgSprites, cssStream);  
  });

};