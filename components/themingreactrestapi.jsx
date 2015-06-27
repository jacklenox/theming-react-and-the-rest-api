/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var Controller = require( './controller' );

/**
 * Go time
 */
var pageContent = document.getElementById( 'page' );

React.render(
	<Controller />, document.body
);