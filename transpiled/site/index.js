/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var Loop = require( './loop' );

var Site = React.createClass({displayName: "Site",

	render: function() {
		return (
			React.createElement("div", {id: "page", className: "site"}, 
				React.createElement(Loop, {data:  this.props.data})
			)
		);
	}

});

module.exports = Site;