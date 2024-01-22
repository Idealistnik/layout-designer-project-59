const {
  src,
  dest,
  parallel,
  watch
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();

// const browserSyncJob = () => {
//   browserSync.init({
//     server: "build/"
//   });
// };

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    // .pipe(browserSync.stream());
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/*.pug')
    .pipe(pug({pretty: true}))   
    .pipe(dest('build/'))
    // .pipe(browserSync.stream());
    
}

const watchers = () => {
  console.log('Наблюдаем за изменениями файлов');

  watch('app/**/*.pug', {
    events: 'change'
  }, buildPug);
  watch('app/scss/**/*.scss', {
    events: 'change'
  }, buildSass);
}

const copyFile = () => {
  console.log('Копируем файлы');

  return src('app/images/*.jpg')
    .pipe(dest('build/images'));
}

// const svgspriteConfig = {
//   mode: {
//     css: { // Activate the «css» mode
//       render: {
//         css: true // Activate CSS output (with default options)
//       }
//     }
//   }
// };

// const svgspriteConfig = {
//   mode: {
//     inline: true;
//     symbol: true;
//   }
// };

const svgspriteConfig = {
  mode: {
    stack: {
        sprite: "../sprite.svg", //sprite file name
        // example: true
    }
  },
}

const buildSvg = () => {
  console.log('Создаем спрайт');

  return src('app/images/icons/**/*.svg')
    .pipe(svgSprite(svgspriteConfig))
    .pipe(dest('build/images'));
};

exports.copy = copyFile;
exports.watch = watchers;
exports.buildPug = buildPug;
exports.buildSvg = buildSvg;
// exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug, copyFile);
