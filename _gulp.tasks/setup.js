// REGISTER COMPONENTS ================================================================================================

var config = require('../_config.json'),
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    concat = require('gulp-concat');

var plugins = gulpLoadPlugins();

// END ================================================================================================================

// GULP TASK [SETUP] ==================================================================================================

// A. INSTALL CSS LIBRARIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('install-css', done => {
    // Add all css library files
    for( file in config.dist.css.libraries.files) {
        gulp.src(['node_modules/' + config.dist.css.libraries.files[file] ])
            .pipe(gulp.dest('dist/css/libraries').on('error', gutil.log))
            gutil.log(gutil.colors.cyan('++ Installing ' + config.dist.css.libraries.files[file]));
    }
    // Add all css library maps
    for( map in config.dist.css.libraries.maps) {
        gulp.src(['node_modules/' + config.dist.css.libraries.maps[map] ])
            .pipe(gulp.dest('dist/css/libraries').on('error', gutil.log))
            gutil.log(gutil.colors.cyan('++ Installing ' + config.dist.css.libraries.maps[map]));
    }
    // Add all css asset files
    for( file in config.assets.css.libraries.files) {
        gulp.src(['assets/' + config.assets.css.libraries.files[file] ])
            .pipe(plugins.cleanCss())
            .pipe(plugins.rename({
              suffix: '.min'
            }))
            .pipe(gulp.dest('dist/css/libraries').on('error', gutil.log))
            gutil.log(gutil.colors.cyan('++ Installing ' + config.assets.css.libraries.files[file]));
    }
    done();
});

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. COMPILE LIBRARIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('concat-css', done => {
    var files = [];
    for( library in config.dist.css.libraries.order) {
        files.push('dist/css/libraries/' + config.dist.css.libraries.order[library]);
    }
    for( library in config.assets.css.libraries.order) {
        files.push('dist/css/libraries/' + config.assets.css.libraries.order[library]);
    }
    gulp.src(files)
        .pipe(concat('libraries.css'))
        .pipe(gulp.dest('dist/css/').on('error', gutil.log))
        gutil.log(gutil.colors.cyan('++ Compiling libraries.css file '));
    done();
});

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. INSTALL JS LIBRARIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('install-js', done => {
    // Add all js library files.
    for( node in config.dist.js.libraries.nodes) {
        gulp.src(['node_modules/' + config.dist.js.libraries.nodes[node], ])
            .pipe(gulp.dest('dist/js/libraries/').on('error', gutil.log))
            gutil.log(gutil.colors.cyan('++ Installing ' + config.dist.js.libraries.nodes[node]));
    }
    // Add all js library maps
    for( map in config.dist.js.libraries.maps) {
        gulp.src(['node_modules/' + config.dist.js.libraries.maps[map], ])
            .pipe(gulp.dest('dist/js/libraries').on('error', gutil.log))
            gutil.log(gutil.colors.cyan('++ Installing ' + config.dist.js.libraries.maps[map]));
    }
    // Add all js asset files
    for( file in config.assets.js.libraries.files) {
        gulp.src(['assets/' + config.assets.js.libraries.files[file] ])
            .pipe(plugins.jshint())
            .pipe(plugins.uglify())
            .pipe(plugins.rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('dist/js/libraries').on('error', gutil.log))
        gutil.log(gutil.colors.cyan('++ Installing ' + config.assets.js.libraries.files[file]));
    }
    done();
});

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// D. COMPILE LIBRARIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('concat-js', done => {
    var files = [];
    for( library in config.dist.js.libraries.order) {
        files.push('dist/js/libraries/' + config.dist.js.libraries.order[library]);
    }
    for( asset in config.assets.js.libraries.order) {
        files.push('dist/js/libraries/' + config.assets.js.libraries.order[asset]);
    }
    gulp.src(files)
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest('dist/js/').on('error', gutil.log))
        gutil.log(gutil.colors.cyan('++ Compiling libraries.js file '));
    done();
});

// D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// E. SET UP PROJECT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('launch-the-cow', gulp.series(['install-css', 'install-js', 'concat-css', 'concat-js']), () => { });

// https://www.youtube.com/watch?v=t7_wAfATQoU 

// E. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END ================================================================================================================

// END OF FILE ========================================================================================================
