'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        index: "index.html"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('./sass/*.sass', ['sass']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

/*
gulp.task('sass', function () {
    gulp.src('./sass/!**!/!*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/!**!/!*.sass', ['sass']);
});
*/
