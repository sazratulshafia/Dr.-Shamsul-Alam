<?php
/**
 * Template Name: Chamber Locations Page
 * Description: Dedicated page template for clinic locations and booking hours
 * 
 * @package Dr_Shamsul_Alam
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="section section-chambers" style="padding-top:60px;">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('CENTRAL DHAKA CLINICS', 'dr-shamsul-alam'); ?></span>
                <h1 class="section-title"><?php _e('Consultation Chambers & Hours', 'dr-shamsul-alam'); ?></h1>
                <p class="section-lead"><?php _e('Find visiting times, chamber addresses, serial booking contacts, and directions for Dr. Shamsul Alam.', 'dr-shamsul-alam'); ?></p>
            </div>

            <div class="chambers-grid">
                <!-- Chamber 1: Dhanmondi -->
                <div class="chamber-card">
                    <div class="chamber-badge"><?php _e('DHANMONDI LOCATION', 'dr-shamsul-alam'); ?></div>
                    <h2 class="chamber-name"><?php _e('Shamsul Pain & Spine Centre', 'dr-shamsul-alam'); ?></h2>
                    <p class="chamber-address"><?php _e('House 42, Road 9/A, Dhanmondi R/A, Dhaka 1209 (DEMO)', 'dr-shamsul-alam'); ?></p>
                    <div class="chamber-detail-row">
                        <i data-lucide="calendar" class="text-teal"></i>
                        <span><strong><?php _e('Days:', 'dr-shamsul-alam'); ?></strong> <?php _e('Saturday, Monday & Wednesday', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="clock" class="text-teal"></i>
                        <span><strong><?php _e('Visiting Hours:', 'dr-shamsul-alam'); ?></strong> <?php _e('6:00 PM – 9:00 PM', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="phone" class="text-teal"></i>
                        <span><strong><?php _e('Serial Desk:', 'dr-shamsul-alam'); ?></strong> +880 1711 000001</span>
                    </div>
                    <div class="chamber-card-cta">
                        <button type="button" class="btn btn-primary btn-block open-booking-modal" data-chamber="Dhanmondi - Shamsul Pain & Spine Centre">
                            <?php _e('BOOK DHANMONDI APPOINTMENT', 'dr-shamsul-alam'); ?>
                        </button>
                    </div>
                </div>

                <!-- Chamber 2: Panthapath -->
                <div class="chamber-card">
                    <div class="chamber-badge"><?php _e('PANTHAPATH LOCATION', 'dr-shamsul-alam'); ?></div>
                    <h2 class="chamber-name"><?php _e('Advanced Pain Care Centre', 'dr-shamsul-alam'); ?></h2>
                    <p class="chamber-address"><?php _e('Suite 502, Green Care Tower, 68 Panthapath, Dhaka 1205 (DEMO)', 'dr-shamsul-alam'); ?></p>
                    <div class="chamber-detail-row">
                        <i data-lucide="calendar" class="text-teal"></i>
                        <span><strong><?php _e('Days:', 'dr-shamsul-alam'); ?></strong> <?php _e('Sunday, Tuesday & Thursday', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="clock" class="text-teal"></i>
                        <span><strong><?php _e('Visiting Hours:', 'dr-shamsul-alam'); ?></strong> <?php _e('3:00 PM – 8:00 PM', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="phone" class="text-teal"></i>
                        <span><strong><?php _e('Serial Desk:', 'dr-shamsul-alam'); ?></strong> +880 1711 000002</span>
                    </div>
                    <div class="chamber-card-cta">
                        <button type="button" class="btn btn-primary btn-block open-booking-modal" data-chamber="Panthapath - Advanced Pain Care Centre">
                            <?php _e('BOOK PANTHAPATH APPOINTMENT', 'dr-shamsul-alam'); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
