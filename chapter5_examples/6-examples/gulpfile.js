var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');

gulp.task('browserify', function() {
  return gulp.
    src('./index.js').
    pipe(browserify()).
    pipe(gulp.dest('./bin'));
});

gulp.task('templates', function() {
  return gulp.
    src('./templates/*.html').
    pipe(html2js({
      outputModuleName: 'templates'
    })).
    pipe(concat('templates.js')).
    pipe(gulp.dest('./bin'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.js'], ['browserify']);
  gulp.watch(['./templates/*.html'], ['templates']);
});
