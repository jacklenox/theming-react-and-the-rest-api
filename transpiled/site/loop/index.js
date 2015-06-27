/**
 * External dependencies
 */
var React = require( 'react' ),
	page = require( 'page' );

/**
 * Internal dependencies
 */
var Content = require( './content' );
var PostNavigation = require( './postNavigation' );

var Loop = React.createClass({displayName: "Loop",

	render: function() {

		document.onkeydown = function( e ) {
			// Left arrow keydown
			var el,
				url;
			if ( e.keyCode === 37 || e.keyCode === 33 ) {
				e.preventDefault();
				el = document.querySelector('.nav-previous a');
				url = el.href;
				url = url.replace(/^.*\/\/[^\/]+/, '');
				page( url );
			}

			// Right arrow keydown
			if ( e.keyCode === 39 || e.keyCode === 34 ) {
				e.preventDefault();
				el = document.querySelector('.nav-next a');
				url = el.href;
				url = url.replace(/^.*\/\/[^\/]+/, '');
				page( url );
			}
		};

		var postNodes = this.props.data.map( function( post ) {
			return (
				React.createElement("div", null, 
					React.createElement(Content, {id:  post.id, title:  post.title, date:  post.date, content:  post.content}), 
					React.createElement(PostNavigation, {previous_post_url:  post.previous_post_url, previous_post_title:  post.previous_post_title, next_post_url:  post.next_post_url, next_post_title:  post.next_post_title})
				)
			);
		});

		return (
			React.createElement("div", {id: "loop"}, 
				 postNodes 
			)
		);
	}

});

module.exports = Loop;