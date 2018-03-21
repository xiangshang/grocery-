var gulp = require('gulp');
let cleanCSS = require('gulp-clean-css'); //压缩css
let uglify = require('gulp-uglify'); //压缩js
let gzip = require('gulp-gzip'); //压缩js

//压缩css
function miniCss() {
	return gulp.src('./src/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('./tmp'));
}

//编译js
function compileJs() {
	return gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gzip())
		.pipe(gulp.dest('./tmp'));
}

//注册 build_dist 任务
gulp.task('dist', gulp.series(
	compileJs,
	miniCss
));

 
gulp.task('compile', function() {
    return gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});