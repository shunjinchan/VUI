var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var src = './public/src/';
var assets = './public/assets/';

gulp.task('sass', function() {
    gulp.src(src + 'sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(src + 'css'));
});

gulp.task('autoprefixer', function () {
    gulp.src(src + 'css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(src + 'dist'));
});

gulp.task('sass:watch', function() {
    gulp.watch(src + 'sass/**/*.scss', ['sass']);
});
