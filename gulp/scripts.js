/**
 * Created by Finnishandy on 25/05/2015.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src(['src/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('server/target'))
});
