var gulp = require('gulp'),
browserSync = require('browser-sync'),
less = require('gulp-less'),
jade = require('gulp-jade'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify');

/*
 * Browser-sync task
 */
gulp.task('browser-sync', function() {
    browserSync.init(['dist/assets/css/style.css', 'dist/*.html'], {
        server: {
            baseDir: './dist/'
        }
    });
});

/*
 * Less task
 */
gulp.task('less', function() {
    gulp.src('assets/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('dist/assets/css'));
});

/*
 * Jade task
 */
gulp.task('templates', function() {
    var YOUR_LOCALS = {};

    gulp.src('jades/*.jade')
    .pipe(jade({
        locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dist/'))
});

/*
 * Copy vendors task
 */
gulp.task('vendors', function() {
    gulp.src('assets/vendors/**/*.*')
    .pipe(gulp.dest('dist/assets/vendors'));
});

/*
 * Copy fonts task
 */
gulp.task('fonts', function() {
    gulp.src('assets/fonts/**/*.*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

/*
 * Copy assets to CMS theme
 */
gulp.task('buildCMS', function() {
    gulp.src('dist/assets/**/*.*')
    .pipe(gulp.dest('../sites/all/themes/mytheme/assets'));
});

/*
 * Uglify JS
 */
gulp.task('compress', function() {
    gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

/*
 * Minify images
 */
gulp.task('imagemin', function() {
    gulp.src(['assets/images/*.png', 'assets/images/*.jpeg', 'assets/images/*.jpg', 'assets/images/*.gif'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

/*
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch('assets/less/**/*.less', ['less']);
    gulp.watch('jades/**/*.jade', ['templates']);
    gulp.watch('assets/images/**/*.*', ['imagemin']);
    gulp.watch('assets/vendors/**/*.*', ['vendors']);
    gulp.watch('assets/js/**/*.*', ['compress']);
    gulp.watch('assets/fonts/**/*.*', ['fonts']);
});

/*
 * Default task to be run with `gulp`
 */
gulp.task('default', [
    'fonts',
    'vendors',
    'imagemin',
    'less',
    'compress',
    'templates',
    'browser-sync',
    'watch'
]);

/*
 * Build task : copy the assets to drupal (or other CMS)
 */
gulp.task('cms', [
    'fonts',
    'vendors',
    'imagemin',
    'less',
    'compress',
    'templates',
    'buildCMS'
]);
