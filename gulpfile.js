var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js', function() {
    return gulp.src([
            'bower_components/easeljs/lib/easeljs-0.8.0.min.js',
            'bower_components/mousetrap/mousetrap.min.js',
            'js/*.js'
        ])
        .pipe(concat('spread.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(concat('spread.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js', 'css'], function() {
    gulp.watch(['js/*.js'], ['js']);
    gulp.watch(['css/*.css'], ['css']);
});
