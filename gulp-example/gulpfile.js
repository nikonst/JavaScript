const gulp = require('gulp')
const imagemin = require('gulp-imagemin');

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