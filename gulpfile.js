var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
	gulp.src('./scss/**/*.css')
		.pipe(gulp.dest('./css'));
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

