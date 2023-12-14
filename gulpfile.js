const {
  src,
  dest,
  parallel,
  watch
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
}

const watchers = () => {
  watch('app/pages/*.pug', {
    events: 'change'
  }, buildPug);
  watch('app/scss/app.scss', {
    events: 'change'
  }, buildSass);
}

exports.watchers = watchers;
exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
