/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Renders links to the next and previous posts.
 */
PostNavigation = React.createClass({displayName: "PostNavigation",

	render: function() {
		var previousPostLink;
		if ( this.props.previous_post_url ) {
			previousPostLink = React.createElement("div", {className: "nav-previous"}, 
				React.createElement("a", {href: this.props.previous_post_url, rel: "prev"}, 
					React.createElement("span", {className: "screen-reader-text"}, this.props.previous_post_title)
				)
			);
		}

		var nextPostLink;
		if ( this.props.next_post_url ) {
			nextPostLink = React.createElement("div", {className: "nav-next"}, 
				React.createElement("a", {href: this.props.next_post_url, rel: "next"}, 
					React.createElement("span", {className: "screen-reader-text"}, this.props.next_post_title)
				)
			);
		}

		return (
			React.createElement("nav", {className: "navigation post-navigation", role: "navigation"}, 
				React.createElement("div", {className: "nav-links"}, 
					 previousPostLink, 
					 nextPostLink 
				)
			)
		)
	}
});

module.exports = PostNavigation;