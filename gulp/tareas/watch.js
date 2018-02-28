var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})

	watch ('./app/index.html', function(){
		browserSync.reload();
	})

	watch('./app/css/**/*.css', function(){
		gulp.start('compilarEstilos');
	})
})

gulp.task('compilarEstilos', ['estilos'], function(){
	return gulp.src('./app/dest/css/estilos.css')
	.pipe(browserSync.stream());
})