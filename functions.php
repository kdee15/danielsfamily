<?php

    @ini_set( 'upload_max_size' , '64M' );
    @ini_set( 'upload_max_filesize' , '64M' );
    @ini_set( 'post_max_size', '64M');
    @ini_set( 'memory_limit', '3000M' );
    @ini_set( 'file_uploads', 'on' );
    @ini_set( 'max_execution_time', '300' );

    // Add RSS links to <head> section
    automatic_feed_links();

    // A.1.0.5. Wordpress Menu

    register_nav_menus( array(  
    'primary' => __( 'Primary Navigation', 'kdee' )
    ) );

    // A.1.0.5. Wordpress Menu

    // A.1.0.6. Wordpress Stuff
    
    add_theme_support( 'post-thumbnails' );

// A.3 TEMPLATE CUSTOMISATION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.1.0.1. REGISTER SIDEBAR

function social_sidebar_widgets_init() {

  register_sidebar( array(
    'name' => 'social sidebar widget',
    'id' => 'social_sidebar',
    'before_widget' => '<div>',
    'after_widget' => '</div>',
    'before_title' => '<h2 class="rounded">',
    'after_title' => '</h2>',
  ) );
}

add_action( 'widgets_init', 'social_sidebar_widgets_init' );

// A.1.0.1. END

// A.1.0.2. Twitter Widget

function arphabet_widgets_init() {

  register_sidebar( array(
    'name' => 'insta widget',
    'id' => 'instagram',
    'before_widget' => '<div class="o-insta-feed">',
    'after_widget' => '</div>',
  ) );
}

add_action( 'widgets_init', 'arphabet_widgets_init' );

// A.1.0.2. Twitter Widget

// A.3 END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.4 END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.4 END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A.5 END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// A.X BREADCRUMBS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//// BREADCRUMB START ////
function the_breadcrumb() {

  $showOnHome = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
  $delimiter = '&raquo;'; // delimiter between crumbs
  $home = 'Home'; // text for the 'Home' link
  $showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
  $before = '<span class="current">'; // tag before the current crumb
  $after = '</span>'; // tag after the current crumb

  global $post;
  $homeLink = get_bloginfo('url');

  if (is_home() || is_front_page()) {

    if ($showOnHome == 1) echo '<div id="crumbs"><a href="' . $homeLink . '">' . $home . '</a></div>';

  } else {

    echo '<div id="crumbs"><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . ' ';

    if ( is_category() ) {
      $thisCat = get_category(get_query_var('cat'), false);
      if ($thisCat->parent != 0) echo get_category_parents($thisCat->parent, TRUE, ' ' . $delimiter . ' ');
      echo $before . 'Archive by category "' . single_cat_title('', false) . '"' . $after;

    } elseif ( is_search() ) {
      echo $before . 'Search results for "' . get_search_query() . '"' . $after;

    } elseif ( is_day() ) {
      echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
      echo '<a href="' . get_month_link(get_the_time('Y'),get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . ' ';
      echo $before . get_the_time('d') . $after;

    } elseif ( is_month() ) {
      echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
      echo $before . get_the_time('F') . $after;

    } elseif ( is_year() ) {
      echo $before . get_the_time('Y') . $after;

    } elseif ( is_single() && !is_attachment() ) {
      if ( get_post_type() != 'post' ) {
        $post_type = get_post_type_object(get_post_type());
        $slug = $post_type->rewrite;
        echo '<a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
        if ($showCurrent == 1) echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
      } else {
        $cat = get_the_category(); $cat = $cat[0];
        $cats = get_category_parents($cat, TRUE, ' ' . $delimiter . ' ');
        if ($showCurrent == 0) $cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
        echo $cats;
        if ($showCurrent == 1) echo $before . get_the_title() . $after;
      }

    } elseif ( !is_single() && !is_page() && get_post_type() != 'post' && !is_404() ) {
      $post_type = get_post_type_object(get_post_type());
      echo $before . $post_type->labels->singular_name . $after;

    } elseif ( is_attachment() ) {
      $parent = get_post($post->post_parent);
      $cat = get_the_category($parent->ID); $cat = $cat[0];
      echo get_category_parents($cat, TRUE, ' ' . $delimiter . ' ');
      echo '<a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a>';
      if ($showCurrent == 1) echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;

    } elseif ( is_page() && !$post->post_parent ) {
      if ($showCurrent == 1) echo $before . get_the_title() . $after;

    } elseif ( is_page() && $post->post_parent ) {
      $parent_id  = $post->post_parent;
      $breadcrumbs = array();
      while ($parent_id) {
        $page = get_page($parent_id);
        $breadcrumbs[] = '<a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
        $parent_id  = $page->post_parent;
      }
      $breadcrumbs = array_reverse($breadcrumbs);
      for ($i = 0; $i < count($breadcrumbs); $i++) {
        echo $breadcrumbs[$i];
        if ($i != count($breadcrumbs)-1) echo ' ' . $delimiter . ' ';
      }
      if ($showCurrent == 1) echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;

    } elseif ( is_tag() ) {
      echo $before . 'Posts tagged "' . single_tag_title('', false) . '"' . $after;

    } elseif ( is_author() ) {
      global $author;
      $userdata = get_userdata($author);
      echo $before . 'Articles posted by ' . $userdata->display_name . $after;

    } elseif ( is_404() ) {
      echo $before . 'Error 404' . $after;
    }

    if ( get_query_var('paged') ) {
      if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';
      echo __('Page') . ' ' . get_query_var('paged');
      if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
    }

    echo '</div>';

  }
} // end the_breadcrumb()

//// BREADCRUMB END ////

// A.X END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Load jQuery
    if ( !is_admin() ) {
       wp_deregister_script('jquery');
       wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"), false);
       wp_enqueue_script('jquery');
    }
    

?>