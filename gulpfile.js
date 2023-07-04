const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const sassCompiler = require('sass');

// sources
const paths = {
    styles: {
        src: {
            // Get source files from here
            custom: './Styles/scss/**/*.scss'
        },
        // Place compiled files here
        dist: './Styles/css/'
    }
};

// styles custom optimize
function CustomStyles() {
    return gulp.src(paths.styles.src.custom)
        .pipe(sass({ compiler: sassCompiler }).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['> 3%'], cascade: false }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest(paths.styles.dist));
}

// watch for changes
function watch() {
    gulp.watch(paths.styles.src.custom, CustomStyles);
}

gulp.task('styles', CustomStyles);
gulp.task('watch', watch);

gulp.task('build', gulp.parallel(CustomStyles));
gulp.task('default', gulp.series('build', 'watch'));