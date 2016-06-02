var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp.task('materialize', function(){
    gulp
        .src('node_modules/materialize-css/sass/materialize.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('public/css/'));
    
})

gulp.task('default', ['materialize']);