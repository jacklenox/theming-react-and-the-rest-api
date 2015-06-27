/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
var Loop = require( './loop' );

var Site = React.createClass({

	render: function() {
		return (
			<div id="page" className="site">
				<Loop data={ this.props.data } />
			</div>
		);
	}

});

module.exports = Site;