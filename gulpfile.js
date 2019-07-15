const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// compile scss into css
function style() {
  // 1. locate scss file
  return gulp.src('./styles/**/*.scss')
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
  // 2.1 autoprefix
    .pipe(autoprefixer({}))
  // 3. where do I save the compiled CSS
    .pipe(gulp.dest('./styles'))
  // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./styles/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload)
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;