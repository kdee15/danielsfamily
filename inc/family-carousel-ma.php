<div class="o-section carousel-section">
  <div class="family-ma owl-carousel">
    <div class="owl-stage-outer">
    <div class="owl-stage">
      <?php

      $args=array(
        'post_type' => 'carousel',
        'post_status' => 'publish',
        'order' => 'DESC',
        'posts_per_page' => 10,

        'tax_query' => array(
          array (
            'taxonomy' => 'families',
            'field' => 'slug',
            'terms' => 'ma',
          )
        )
      );
      $my_query = null;
      $my_query = new WP_Query($args);

      if( $my_query->have_posts() ) {
        while ($my_query->have_posts()) : $my_query->the_post(); ?>

          <article class="service-card owl-item">
            <?php the_post_thumbnail() ?>
          </article>

        <?php

        endwhile;
      }
      wp_reset_query();  // Restore global post data stomped by the_post().
      ?>

    </div>
    </div>
  </div>
</div>



