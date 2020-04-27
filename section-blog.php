<section class="o-block blog-posts">

  <div class="container">
    <div class="row no-gutters">

      <?php

      $args=array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'meta_key' => 'featured',
        'orderby' => 'meta_value date',
        'order' => 'DESC',
        'posts_per_page' => 4
      );
      $my_query = null;
      $my_query = new WP_Query($args);

      if( $my_query->have_posts() ) {
        while ($my_query->have_posts()) : $my_query->the_post(); ?>

          <article class="card blog-card col-12 col-md-4 col-lg-3 <?php the_field('featured') ?>">
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

    <a class="a-btn btn-blue" href="<?php echo esc_url( home_url( '/' ) ); ?>?page_id=22">VIEW MORE ARTICLES</a>

  </div>

</section>