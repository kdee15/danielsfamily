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

<main class="p-main page single">

  <!-- C.1. PAGE HEADER ------------------------------- -->

  <?php while ( have_posts() ) : the_post(); ?>

    <figure class="o-article-header">
      <?php the_post_thumbnail(); ?>
      <h3 class="a-post-title"><?php the_title(); ?><span class="a-footnote"><?php the_date(); ?></span></h3>
    </figure>


  <?php endwhile; // end of the loop. ?>

  <!-- C.1. END --------------------------------------- -->

  <!-- C.2. SECTIONS ---------------------------------- -->

  <?php while ( have_posts() ) : the_post(); ?>

    <section class="container">

      <?php the_content(); ?>

    </section>

  <?php endwhile; // end of the loop. ?>

  <!-- C.2. END --------------------------------------- -->

  <!-- C.3. FOOTER  ----------------------------------- -->

  <?php get_footer(); ?>

  <!-- C.3. END --------------------------------------- -->

</main>

<!-- C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<!-- D.1. FOOTER JS -->

<?php get_template_part( 'inc/footer-scripts' ); ?>

<!-- D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->