const gulp = require('gulp');
const tslint = require('gulp-tslint');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const bro = require('gulp-bro');

gulp.task('lint', function () {
    return gulp.src(['./source/**/**.ts'])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
})

gulp.task('tsc', function () {
    let tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js.pipe(sourcemaps.write())
        //.pipe(bro())
        .pipe(gulp.dest('./dist/js'));
})



gulp.task('watch', ['tsc'], function () {
    gulp.watch(['./source/**/**.ts'], ['tsc']);
})
gulp.task('default', ['watch']);