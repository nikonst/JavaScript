const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

//Copy HTML files
gulp.task("copyHTML", async () => {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

//Optimize images
gulp.task("imageMin", async () => {
    gulp.src("src/imgs/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))
})

//Minify js
gulp.task("minifyJS", async () => {
    gulp.src("src/js/*.js")
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
})

//Minify css
gulp.task("minifyCSS", async () => {
    gulp.src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})
