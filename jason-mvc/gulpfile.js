const gulp = require('gulp');
const browserify = require('gulp-browserify');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const tsMVCProject = tsc.createProject('./tsconfig.json');
const tsTestProject = tsc.createProject('./tsconfig.json');


gulp.task('lint', function () {
    return gulp.src([
            './source/**/**.ts',
            './test/**/**.ts'
        ])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('build:project', function () {
    let tsResult = gulp.src('./source/**/**.ts')
        .pipe(sourcemaps.init())
        .pipe(tsMVCProject());
    return tsResult.js.pipe(sourcemaps.write())
        //.pipe(bro())
        .pipe(gulp.dest('./build/source/'));
});

gulp.task('build:test', function () {
    let tsResult = gulp.src('./test/**/**.ts')
        .pipe(sourcemaps.init())
        .pipe(tsTestProject());
    return tsResult.js.pipe(sourcemaps.write())
        //.pipe(bro())
        .pipe(gulp.dest('./build/test/'));
});

gulp.task('bundle:project', function () {
    gulp.src('./build/source/app/main.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./bundled/source/'))
});

gulp.task('bundle:unit-test', function () {
    gulp.src('./build/test/bdd.test.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(rename('bdd.test.js'))
        .pipe(gulp.dest('./bundled/test/'))
});

gulp.task('bundle:e2e-test', function () {
    gulp.src('./build/test/e2e.test.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(rename('e2e.test.js'))
        .pipe(gulp.dest('./bundled/test/'))
});

gulp.task('default', ['build:project', 'build:test']);