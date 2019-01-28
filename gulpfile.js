var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ 
    return gulp.src('src/sass/**/*.sass') 
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'));
});