const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const concatCss = require("gulp-concat-css");

function defaultTask(cb) {
  watch();
  cb();
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return gulp
    .src("./scss/style.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
    .pipe(concatCss("styles.min.css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch("./index.html", browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.default = defaultTask;
exports.watch = watch;
exports.css = css;