/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' ),
	request = require( 'superagent' );

/**
 * Internal dependencies
 */
var Site = require( '../site' );


var Controller = React.createClass({displayName: "Controller",

	componentDidMount: function() {
		
		var self = this;

		page( '/', function( ctx ) {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/posts";

			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: React.createElement(Site, {data:  data }) });
				});

		});

		page( '/:year/:month/:day/:slug', function ( ctx ) {
			var data,
				slug = ctx.params.slug,
				url = "/wp-json/wp/v2/posts/?name=" + slug;
			console.log( url );
			request
				.get( url )
				.end( function( err, res ) {
					data = JSON.parse( res.text );
					self.setState({ component: React.createElement(Site, {data:  data }) });
				});
		});

		page.start();

	},

	getInitialState: function() {
		return { component: React.createElement("div", null) };
	},


	render: function() {
		return this.state.component;
	}

});

module.exports = Controller;
 
