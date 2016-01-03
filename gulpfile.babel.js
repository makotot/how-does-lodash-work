import gulp from 'gulp'
import del from 'del'


gulp.task('clean', () => {
  del(['./dist']).then(() => {
    done()
  })
})

gulp.task('template', () => {

  return gulp
    .src(['./src/*.html'])
    .pipe(gulp.dest('./dist/'))
})
