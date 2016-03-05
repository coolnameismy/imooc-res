
var gulp = require("gulp");
var livereload = require("gulp-livereload");

gulp.task('watch',function(){

	//启动livereload监听
	livereload.listen();

	//只监听html文件
	gulp.watch('./*.html',function(file){
			console.log(file);
			gulp.src(file.path).pipe(livereload());
	});
	
});