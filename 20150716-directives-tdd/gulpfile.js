var gulp = require('gulp');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');

gulp.task('templates', function() {
  return gulp.
    src('./*.html').
    pipe(html2js({
      outputModuleName: 'templates'
    })).
    pipe(concat('templates.js')).
    pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['templates']);
});
