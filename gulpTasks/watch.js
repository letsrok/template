module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('app/sass/**/*', {usePolling: true}, $.gulp.series('sass'));
    $.gulp.watch('app/sass/help/*', {usePolling: true}, $.gulp.series('sass'));
    $.gulp.watch('app/blocks/**/*.scss', {usePolling: true}, $.gulp.series('sass'));
    $.gulp.watch('app/components/**/*.scss', {usePolling: true}, $.gulp.series('sass'));
    $.gulp.watch('app/**/*.pug', {usePolling: true}, $.gulp.series('pug'));
    $.gulp.watch('app/pages/*.pug', {usePolling: true}, $.gulp.series('pug'));
    $.gulp.watch('app/layouts/*.pug', {usePolling: true}, $.gulp.series('pug'));
    $.gulp.watch('app/blocks/**/*.pug', {usePolling: true}, $.gulp.series('pug'));
    $.gulp.watch('app/components/**/*.pug', {usePolling: true}, $.gulp.series('pug'));
    $.gulp.watch('build/*.html', {usePolling: true}, $.browserSync.reload);
    $.gulp.watch('app/js/**/*', {usePolling: true}, $.gulp.series('scripts'));
    $.gulp.watch('app/js/libs/**/*', {usePolling: true}, $.gulp.series('libs'));
    $.gulp.watch('app/blocks/**/*.js', {usePolling: true}, $.gulp.series('scripts'));
    $.gulp.watch('app/components/**/*.js', {usePolling: true}, $.gulp.series('scripts'));
    $.gulp.watch('app/images/**/*', {usePolling: true}, $.gulp.series('imagesGet'));
    $.gulp.watch('app/images/icons/*.*', {usePolling: true}, $.gulp.series('sprites'));
  })
};