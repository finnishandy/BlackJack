/**
 * Created by Finnishandy on 25/05/2015.
 */
var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task);
})

gulp.task('watch:js', ['js'], function() {
   gulp.watch('src/**/*.js', ['js'])
});


