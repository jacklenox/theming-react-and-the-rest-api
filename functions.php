<?php

function trr_scripts() {
	wp_enqueue_style( 'trr-fonts', '//fonts.googleapis.com/css?family=Cabin:400,700|Bitter:400,700', array(), null );
	wp_enqueue_style( 'trr-style', get_stylesheet_uri(), '20150627' );
	wp_enqueue_style( 'trr-prism-styles', get_template_directory_uri() . '/prism.css', array(), null );
	wp_register_script( 'trr-script', get_template_directory_uri() . '/themingreactrestapi.js', array(), '20150627', true );
	wp_enqueue_script( 'trr-script' );
	wp_register_script( 'trr-prism', get_template_directory_uri() . '/prism.js', array(), '20150627', true );
	wp_enqueue_script( 'trr-prism' );
}
add_action( 'wp_enqueue_scripts', 'trr_scripts' );

function trr_links( $response ) {

	// Get next and previous links
	global $post;
	$post = get_post( $response->data['id'] );

	$previous_post = get_adjacent_post( false, '', true );
	if ( $previous_post ) {
		$response->data['previous_post_url']   = get_permalink( $previous_post );
		$response->data['previous_post_title'] = get_the_title( $previous_post );
	}

	$next_post = get_adjacent_post( false, '', false );
	if ( $next_post ) {
		$response->data['next_post_url']   = get_permalink( $next_post );
		$response->data['next_post_title'] = get_the_title( $next_post );
	}

	return $response;

}

add_filter( 'rest_prepare_post', 'trr_links' );