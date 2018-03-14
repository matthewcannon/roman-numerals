var gulp = require('gulp');
var babel = require('babel-core/register');
var mocha = require('gulp-mocha');
var batch = require('gulp-batch');

gulp.task('default', ['test']);

gulp.task('test', function() {
    return gulp
        .src('./test/**/*.js', {
            read: false
        })
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }))
        .once('error', function(err) {
            console.log(err.stack);
            process.exit(1);
        })
        .once('end', function() {
            process.exit();
        });
});

gulp.task('tdd', function() {
    gulp.watch(['test/**', 'lib/**'], batch(function(events, cb) {
        return gulp.src(['test/*.js'])
            .pipe(mocha({
                reporter: 'list'
            }))
            .on('error', function(err) {
                console.log(err.stack);
            });
    }));
});
