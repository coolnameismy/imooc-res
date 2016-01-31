var gulp = require('gulp'),
 	sass = require('gulp-ruby-sass'),     
    livereload = require('gulp-livereload');

var cssSrc = 'styles/',
	cssDst = 'styles/';
	
 // 这里的watch，是自定义的，写成live或者别的也行
gulp.task('watch', function () {   
    //监听css
    gulp.watch('./styles/*.scss', function(){
        gulp.run('css');
    });
});

gulp.task('css', function () {
    sass('./styles/*.scss').pipe(gulp.dest('./styles/'));
});

gulp.task('watch-livereload',function(){
  livereload.listen();
    // /**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('./**/*.html', function(file){
        console.log(file);
        gulp.src(file.path).pipe(livereload());
    });
});