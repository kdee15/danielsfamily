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

<main class="p-main page__blog">

  <!-- C.2. SECTIONS ---------------------------------- -->

  <div class="container">
    <div class="row no-gutters">

      <?php

      $args=array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'orderby' => 'meta_value date',
        'order' => 'DESC',
        'posts_per_page' => 10
      );
      $my_query = null;
      $my_query = new WP_Query($args);

      if( $my_query->have_posts() ) {
        while ($my_query->have_posts()) : $my_query->the_post(); ?>

          <article class="card blog-card col-12 col-md-4">
            <a class="o-card hover-card" href="<?php the_permalink() ?>">
              <figure class="m-card-image">
                <?php the_post_thumbnail(); ?>
              </figure>
              <div class="m-card-body">
                <h3 class="a-card-header"><?php the_title(); ?></h3>
                <?php the_excerpt(); ?>
              </div>

            </a>
          </article>

        <?php

        endwhile;
      }
      wp_reset_query();  // Restore global post data stomped by the_post().
      ?>

    </div>

  </div>

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