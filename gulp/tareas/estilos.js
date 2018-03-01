var gulp = require('gulp');
var postcss = require('gulp-postcss');
var prefixer = require('autoprefixer');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var variables = require('postcss-simple-vars');

gulp.task('estilos', function(){
	return gulp.src('./app/css/**/*.css')
	.pipe(postcss([prefixer, cssImport, mixins, nested, variables]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/dest/css'));
})

