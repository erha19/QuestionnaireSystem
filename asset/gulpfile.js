var source = require('vinyl-source-stream'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    watchify = require('watchify'),
    notify = require("gulp-notify"),
    browserSync = require('browser-sync'),
    rename= require("gulp-rename");

var scriptsDir = './client';
var buildDir = './public/build';

function sync() {
    // 代理服务器监听
    var files = [
        buildDir+'/**/*',
        'public/**/*'
    ];
    browserSync.init(files, {
        proxy: "http://localhost:8080"
    });
    gulp.watch(scriptsDir+'/**/*', ['build']);
    gulp.watch(files).on('change', browserSync.reload);
}
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
  var props = {entries: [scriptsDir + '/' + file]};
  var bundler = watch ? watchify(props) : browserify(props);
  bundler.transform(reactify);
  function rebundle() {
    console.log('build')
    var stream = bundler.bundle({debug: true});
    return stream.on('error', handleErrors)
    .pipe(source(file))
    .pipe(rename({basename:'bundle'})) 
    .pipe(gulp.dest(buildDir + '/'))
    .pipe(browserSync.stream());
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}


gulp.task('build', function() {
  return buildScript('client.js', false);
});

gulp.task('sync',sync);

gulp.task('default', ['build'], function() {
  return buildScript('client.js', true);
});