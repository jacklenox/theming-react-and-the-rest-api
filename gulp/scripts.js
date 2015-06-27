module.exports = function (gulp, $, handleErrors) {
	var
		browserify = require( 'browserify' ),
		buffer = require( 'vinyl-buffer' ),
		reactify = require( 'reactify' ),
		// bundler = browserify( './components/themingreactrestapi.jsx' ),
		source = require( 'vinyl-source-stream' );
		// bundler.transform( reactify );

    return function () {

    	var b = browserify({
    	    entries: './components/themingreactrestapi.jsx',
    	    debug: true,
    	    extensions: ['.jsx'],
    	    // defining transforms here will avoid crashing your stream
    	    transform: [reactify]
    	  });

    	  return b.bundle()
    	    .pipe(source('themingreactrestapi.js'))
    	    .pipe(buffer())
    	    // .pipe(sourcemaps.init({loadMaps: true}))
    	        // Add transformation tasks to the pipeline here.
    	        // .pipe(uglify())
    	        // .on('error', gutil.log)
    	    // .pipe(sourcemaps.write('./'))
    	    .pipe(gulp.dest('./'));

		// bundler.on( 'update', bundle );

		// return bundler.bundle()
			// .on( 'error', $.util.log.bind( $.util, 'Browserify Error' ) )
			// .pipe( source( 'themingreactrestapi.js' ) )
				// .pipe( buffer() )
				// .pipe( $.sourcemaps.init( { loadMaps: true } ) )
				// .pipe( $.sourcemaps.write( './' ) )
			// .pipe( gulp.dest( './' ) );

	}

}