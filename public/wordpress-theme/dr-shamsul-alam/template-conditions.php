<?php
/**
 * Template Name: Conditions & Treatments Directory
 * Description: Directory layout showcasing all conditions treated and image-guided interventions.
 * 
 * @package Dr_Shamsul_Alam
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="section section-expertise" style="padding-top:60px;">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('COMPREHENSIVE PAIN DIRECTORY', 'dr-shamsul-alam'); ?></span>
                <h1 class="section-title"><?php _e('Conditions & Interventional Procedures', 'dr-shamsul-alam'); ?></h1>
                <p class="section-lead"><?php _e('Detailed clinical overview of spinal, nerve, joint, and musculoskeletal pain conditions managed by Dr. Shamsul Alam.', 'dr-shamsul-alam'); ?></p>
            </div>

            <!-- Filter Bar -->
            <div class="condition-filter-bar">
                <button type="button" class="filter-btn active" data-filter="all"><?php _e('All Conditions', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Spine"><?php _e('Spine & Neck', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Nerves"><?php _e('Nerves & Sciatica', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Joints"><?php _e('Joints & Osteoarthritis', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Musculoskeletal"><?php _e('Musculoskeletal', 'dr-shamsul-alam'); ?></button>
            </div>

            <!-- Dynamic or Fallback Conditions Loop -->
            <div class="conditions-grid">
                <?php
                $conditions_query = new WP_Query([
                    'post_type'      => 'condition',
                    'posts_per_page' => 12,
                    'orderby'        => 'title',
                    'order'          => 'ASC'
                ]);

                if ($conditions_query->have_posts()) :
                    while ($conditions_query->have_posts()) : $conditions_query->the_post();
                        $terms = get_the_terms(get_the_ID(), 'condition_category');
                        $cat_name = (!empty($terms) && !is_wp_error($terms)) ? $terms[0]->name : 'Pain Medicine';
                        ?>
                        <div class="condition-card" data-category="<?php echo esc_attr($cat_name); ?>">
                            <span class="card-cat-badge"><?php echo esc_html($cat_name); ?></span>
                            <h2 class="condition-name" style="font-size:1.25rem;"><?php the_title(); ?></h2>
                            <div class="condition-desc">
                                <?php the_excerpt(); ?>
                            </div>
                            <div class="card-footer">
                                <a href="<?php the_permalink(); ?>" class="btn-link">
                                    <span><?php _e('Clinical Details', 'dr-shamsul-alam'); ?></span>
                                    <i data-lucide="arrow-right" class="icon-tiny"></i>
                                </a>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    // Fallback Demo Cards if no CPT posts entered yet
                    ?>
                    <div class="condition-card" data-category="Spine">
                        <span class="card-cat-badge">Spine</span>
                        <h2 class="condition-name" style="font-size:1.25rem;">Chronic Back Pain</h2>
                        <p class="condition-desc">Persistent lumbar discomfort lasting over three months originating from facet joints, discs, or spinal nerves.</p>
                        <div class="card-footer">
                            <button type="button" class="btn-link open-booking-modal" data-reason="Back Pain Consultation">
                                <span><?php _e('Request Consultation', 'dr-shamsul-alam'); ?></span>
                                <i data-lucide="arrow-right" class="icon-tiny"></i>
                            </button>
                        </div>
                    </div>
                    <div class="condition-card" data-category="Nerves">
                        <span class="card-cat-badge">Nerves</span>
                        <h2 class="condition-name" style="font-size:1.25rem;">Sciatica & Radiculopathy</h2>
                        <p class="condition-desc">Sharp, electric or burning pain traveling down the buttocks, thigh, and calf due to lumbar nerve root compression.</p>
                        <div class="card-footer">
                            <button type="button" class="btn-link open-booking-modal" data-reason="Sciatica Consultation">
                                <span><?php _e('Request Consultation', 'dr-shamsul-alam'); ?></span>
                                <i data-lucide="arrow-right" class="icon-tiny"></i>
                            </button>
                        </div>
                    </div>
                    <div class="condition-card" data-category="Joints">
                        <span class="card-cat-badge">Joints</span>
                        <h2 class="condition-name" style="font-size:1.25rem;">Knee Osteoarthritis</h2>
                        <p class="condition-desc">Cartilage thinning, joint stiffness, and mobility limitation treated via genicular nerve blocks and viscosupplementation.</p>
                        <div class="card-footer">
                            <button type="button" class="btn-link open-booking-modal" data-reason="Knee Pain Consultation">
                                <span><?php _e('Request Consultation', 'dr-shamsul-alam'); ?></span>
                                <i data-lucide="arrow-right" class="icon-tiny"></i>
                            </button>
                        </div>
                    </div>
                    <?php
                endif;
                ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
