var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imgmin', function () {
    return gulp.src('assets/img/**')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('app/img'));
});

gulp.task('default', ['imgmin']);