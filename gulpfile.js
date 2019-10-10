const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

// compile scss into css
function style() {
  // 1. locate scss file
  return gulp.src('./styles/styles.scss')
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
  // 2.1 autoprefix
    .pipe(autoprefixer({ grid: true }))
  // 3. where do I save the compiled CSS
    .pipe(gulp.dest('./styles'))
  // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function compile() {
  return gulp.src([
    'node_modules/babel-polyfill/dist/polyfill.js',
    './scripts/polyfills.js',
    './scripts/main.js'
  ])
  .pipe(babel({presets: ['@babel/preset-env']}))
  .pipe(concat('main_compiled.js'))
  .pipe(gulp.dest('./scripts'));
}

function stream() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./styles/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./scripts/main.js').on('change', gulp.series(compile, browserSync.reload));
}

exports.default = stream;