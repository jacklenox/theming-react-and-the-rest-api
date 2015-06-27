// Stash requires in variables
var
    $ = require('gulp-load-plugins')(),
	gulp = require( 'gulp' ),
	handleErrors = require('./gulp/handleErrors.js')(gulp, $);

// helper to get partials
function getGulpPartial(task) {
    return require('./gulp/' + task)(gulp, $, handleErrors);
}

// get tasks from partials
gulp.task( 'styles', getGulpPartial('styles') );
gulp.task( 'scripts', getGulpPartial('scripts') );
gulp.task( 'watch', getGulpPartial('watch') );

// Builder
gulp.task( 'build', ['styles', 'scripts']);

// Alias build to default
gulp.task( 'default', ['watch'] );

gulp.task('transpile-js', function() {
  return gulp.src('./components/**/*.jsx')
    .pipe($.react())
    .pipe(gulp.dest('./transpiled'));
});

gulp.task( 'build-theme', function() {
	var React = require( 'react' );
	var Site = React.createFactory( require( './transpiled/site/index.js' ) );

	var data = "[{\"title\":\"the_title\",\"content\":\"the_content\"}]";

	var jsonData = JSON.parse( data );

	var reactHTML = "<?php get_header(); ?>";
	reactHTML += React.renderToStaticMarkup( Site({ data: jsonData }) );
	reactHTML += "<?php get_footer(); ?>";

	var newReactHTML = reactHTML.replace( /the_title/gi, '<?php the_title(); ?>');
	newReactHTML = newReactHTML.replace( /the_content/gi, '<?php the_content(); ?>');

	return $.file('index.php', newReactHTML, { src: true }).pipe(gulp.dest('./'));
});