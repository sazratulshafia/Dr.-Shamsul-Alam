<?php
/**
 * Single Post Template: Condition / Treatment / Article
 * 
 * @package Dr_Shamsul_Alam
 */

get_header();
?>

<main id="primary" class="site-main">
    <article class="single-article-view">
        <div class="container">
            <div class="single-article-header">
                <div class="article-cat-badge">
                    <?php 
                    $post_type = get_post_type();
                    if ($post_type === 'condition') {
                        echo esc_html__('Condition Detail · Pain Medicine', 'dr-shamsul-alam');
                    } elseif ($post_type === 'treatment') {
                        echo esc_html__('Interventional Procedure', 'dr-shamsul-alam');
                    } else {
                        the_category(', ');
                    }
                    ?>
                </div>
                <h1 class="single-article-title"><?php the_title(); ?></h1>
                <div class="single-article-meta">
                    <span><?php _e('Clinical Overview by Dr. Shamsul Alam', 'dr-shamsul-alam'); ?></span>
                    <span>·</span>
                    <span><?php _e('Updated Clinical Reference', 'dr-shamsul-alam'); ?></span>
                </div>
            </div>

            <div class="single-article-layout">
                <div class="single-article-content editorial-body">
                    <?php
                    while (have_posts()) :
                        the_post();
                        the_content();
                    endwhile;
                    ?>

                    <div class="article-consult-card">
                        <h3><?php _e('Inquire About This Condition or Procedure', 'dr-shamsul-alam'); ?></h3>
                        <p><?php _e('Have your MRI or diagnosis evaluated by Dr. Shamsul Alam at our Dhanmondi or Panthapath chamber.', 'dr-shamsul-alam'); ?></p>
                        <button type="button" class="btn btn-primary open-booking-modal" data-reason="<?php echo esc_attr(get_the_title()); ?>">
                            <?php _e('BOOK A CLINICAL CONSULTATION', 'dr-shamsul-alam'); ?>
                        </button>
                    </div>
                </div>

                <aside class="single-article-sidebar">
                    <div class="sidebar-card">
                        <h4><?php _e('Practicing Physician', 'dr-shamsul-alam'); ?></h4>
                        <strong><?php _e('Dr. Shamsul Alam', 'dr-shamsul-alam'); ?></strong>
                        <p class="text-teal"><?php _e('Pain Medicine Specialist', 'dr-shamsul-alam'); ?></p>
                        <p class="text-sm"><?php _e('Trained in fluoroscopic & ultrasound-guided interventional pain management.', 'dr-shamsul-alam'); ?></p>
                        <a href="<?php echo esc_url(home_url('/#chambers')); ?>" class="btn-link">
                            <span><?php _e('View Chamber Hours', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    </article>
</main>

<?php
get_footer();
