var gulp = require('gulp');
var postcss = require('gulp-postcss');
var prefixer = require('autoprefixer');
var variables = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');


gulp.task('estilos', function(){
	return gulp.src('./app/css/**/*.css')
	.pipe(postcss([cssImport, mixins, variables, nested, prefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/dest/css'));
})

