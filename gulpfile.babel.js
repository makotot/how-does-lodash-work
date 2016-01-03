import gulp from 'gulp'
import del from 'del'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'


gulp.task('clean', (done) => {
  del(['./dist']).then(() => {
    done()
  })
})

gulp.task('template', () => {

  return gulp
    .src(['./src/*.html'])
    .pipe(gulp.dest('./dist/'))
})

gulp.task('serve', () => {
  runSequence('clean', ['template'], () => {
    browserSync.init({
      server: './dist',
      open: false
    })
  })
})

gulp.task('build', () => {
  runSequence('clean', ['template'], () => {
  })
})
