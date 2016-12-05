var gulp = require('gulp');
var inject = require('gulp-inject');

var config = {
    index : 'app/index.html',
    client: 'app',
    js: ['app/**/*.js', '!app/bower_components/**/*']
}

gulp.task('wiredep', function(){
	var wiredep = require('wiredep').stream;
	return gulp.src(config.index)  
			.pipe(wiredep())
			.pipe(inject(gulp.src(config.js), {relative: true}))
			.pipe(gulp.dest(config.client));
});