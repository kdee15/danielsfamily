<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>

    <link rel="author" href="https://plus.google.com/+YOUR-PROFILE-HERE"/>

    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/dist/images/icons/favicon.png" />
    <link href="<?php echo get_template_directory_uri(); ?>/dist/images/icons/apple-touch-icon.png" rel="apple-touch-icon" />
    <link href="<?php echo get_template_directory_uri(); ?>/dist/images/icons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
    <link href="<?php echo get_template_directory_uri(); ?>/dist/images/icons/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
    <link href="<?php echo get_template_directory_uri(); ?>/dist/images/icons/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />


    <!-- A. CSS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

    <!-- A.1. CDN ------------------------------------- -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">

    <!-- A.2. LOCAL ----------------------------------- -->
    <!--    <link rel="stylesheet" href="../dist/css/libraries.css">-->

    <!-- A.3. CUSTOM CSS ------------------------------ -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/css/style.css">

    <!--[if IE]>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/all-ie-only.css">
    <![endif]-->

    <!-- A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

    <!-- B. HEAD JS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

    <!-- B.1. CDN ------------------------------------- -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--    <script src="../dist/js/libraries/vue.js"></script>-->

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

    <!-- B.2. LOCAL ----------------------------------- -->
    <!--    <script src="../dist/js/components.js"></script>-->
    <script src="<?php echo get_template_directory_uri(); ?>/dist/js/libraries/owl.carouselfilter.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/dist/js/libraries/tweenmax.min.js"></script>

  </head>

  <body <?php body_class(); ?>>