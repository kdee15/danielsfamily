<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Spartan
 * @since Spartan 1.0
 */

get_header();

?>

<!-- C. WORK AREA +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- C.1. PAGE HEADER --------------------------------- -->

<?php get_template_part( 'inc/page-header' ); ?>

<?php get_template_part( 'inc/navigation-page' ); ?>

<!-- C.1. END ----------------------------------------- -->

<main class="p-main page default-page">

  <div class="container">

    <!-- C.2. SECTIONS -------------------------------- -->

    <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part( 'content', 'page' ); ?>
      <?php comments_template( '', true ); ?>
    <?php endwhile; // end of the loop. ?>

    <!-- C.2. END ------------------------------------- -->

  </div>

  <!-- C.3. FOOTER  ----------------------------------- -->

  <?php get_footer(); ?>

  <!-- C.3. END --------------------------------------- -->

</main>

<!-- C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D.1. FOOTER JS -->

<?php get_template_part( 'inc/footer-scripts' ); ?>

<!-- D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->