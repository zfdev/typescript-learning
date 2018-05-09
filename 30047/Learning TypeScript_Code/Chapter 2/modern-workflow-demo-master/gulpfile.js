var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var gulp = require('gulp');
var browserify = require('gulp-browserify'),
  transform = require('vinyl-transform'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('lint', function () {
  return gulp.src(['./source/ts/**/**.ts', '.test/**/**.test.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

var tsProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
})

gulp.task('tsc', function () {
  return gulp.src('./source/ts/**/*.ts')
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./temp/source/js'))
});

var tsTestProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
})

gulp.task('tsc-tests', function () {
  return gulp.src('./test/**/**.test.ts')
    .pipe(ts(tsTestProject))
    .js.pipe(gulp.dest('./temp/test/'))
});

gulp.task('bundle-js', function(){
  return gulp.src('./temp/source/js/main.js')
    .pipe(browserify())
    // .pipe(sourcemaps.init({
    //   loadMaps: true
    // }))
    // .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/js/'))
})

gulp.task('bundle-test', function(){
  return gulp.src('./temp/test/**/**.test.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist/test/'))
})
gulp.task('default', ['lint', 'tsc', 'tsc-tests', 'bundle-js', 'bundle-test']);