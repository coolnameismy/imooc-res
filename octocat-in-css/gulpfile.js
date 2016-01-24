var gulp = require('gulp'),
 	sass = require('gulp-ruby-sass'),     
    livereload = require('gulp-livereload');

var cssSrc = 'styles/',
	cssDst = 'styles/';
	
 // 这里的watch，是自定义的，写成live或者别的也行
gulp.task('watch', function () {   


    livereload.listen();
    // /**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('./**/*.*', function(){
    	console.log("2");
        gulp.src('./**/*.*').pipe(livereload());
    });

    // var server = livereload(); 
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    // gulp.watch('./**/*.*', function (file) {
    //     console.log("1");
    //     server.changed(file.path);
    // });
    //sass(cssSrc).pipe(gulp.dest(cssDst));
    
});