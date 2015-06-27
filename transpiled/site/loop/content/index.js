/**
 * External dependencies
 */
var React = require( 'react' );

var Content = React.createClass({displayName: "Content",

	render: function() {
		return (
			React.createElement("article", null, 
				React.createElement("h1", {dangerouslySetInnerHTML: { __html: this.props.title.rendered}}), 
				React.createElement("div", {className: "entry-content", dangerouslySetInnerHTML: { __html: this.props.content.rendered}})
			)
		);
	}

});

module.exports = Content;