/**
 * External dependencies
 */
var React = require( 'react' );

var Content = React.createClass({

	render: function() {
		return (
			<article>
				<h1 dangerouslySetInnerHTML={{ __html: this.props.title.rendered }} />
				<div className="entry-content" dangerouslySetInnerHTML={{ __html: this.props.content.rendered }} />
			</article>
		);
	}

});

module.exports = Content;