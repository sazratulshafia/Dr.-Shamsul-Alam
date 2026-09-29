<?php
/**
 * Header Template
 * 
 * @package Dr_Shamsul_Alam
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Sticky Light Navigation Bar -->
<header id="site-header" class="site-header">
    <div class="nav-container">
        <!-- Brand Wordmark -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link">
            <span class="brand-name">DR. SHAMSUL ALAM</span>
            <span class="brand-sub">Pain Medicine Specialist</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="<?php esc_attr_e('Main Navigation', 'dr-shamsul-alam'); ?>">
            <a href="#about" class="nav-link"><?php _e('About', 'dr-shamsul-alam'); ?></a>
            <a href="#expertise" class="nav-link"><?php _e('Expertise', 'dr-shamsul-alam'); ?></a>
            <a href="#treatments" class="nav-link"><?php _e('Treatments', 'dr-shamsul-alam'); ?></a>
            <a href="#chambers" class="nav-link"><?php _e('Chambers', 'dr-shamsul-alam'); ?></a>
            <a href="#education" class="nav-link"><?php _e('Patient Guide', 'dr-shamsul-alam'); ?></a>
            <a href="#insights" class="nav-link"><?php _e('Insights', 'dr-shamsul-alam'); ?></a>
        </nav>

        <!-- CTA, Language Switcher & Mobile Toggle -->
        <div class="nav-actions">
            <!-- Language Switcher Pill -->
            <div class="lang-switch-pill" id="theme-lang-toggle">
                <button type="button" class="lang-btn active" data-lang="en">ENG</button>
                <button type="button" class="lang-btn" data-lang="bn">বাং</button>
            </div>

            <button type="button" class="btn btn-primary open-booking-modal" data-chamber="" data-reason="">
                <i data-lucide="calendar" class="icon-inline"></i>
                <span data-i18n="book_apt"><?php _e('BOOK APPOINTMENT', 'dr-shamsul-alam'); ?></span>
            </button>
            <button type="button" class="mobile-toggle" id="mobile-menu-trigger" aria-label="<?php esc_attr_e('Toggle Menu', 'dr-shamsul-alam'); ?>">
                <i data-lucide="menu" id="toggle-icon-open"></i>
                <i data-lucide="x" id="toggle-icon-close" style="display:none;"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-drawer" class="mobile-drawer">
        <div class="mobile-lang-switch">
            <button type="button" class="lang-btn-mob active" data-lang="en">English</button>
            <button type="button" class="lang-btn-mob" data-lang="bn">বাংলা</button>
        </div>
        <div class="mobile-nav-links">
            <a href="#about" class="mobile-link"><?php _e('About Doctor', 'dr-shamsul-alam'); ?></a>
            <a href="#expertise" class="mobile-link"><?php _e('Conditions Treated', 'dr-shamsul-alam'); ?></a>
            <a href="#treatments" class="mobile-link"><?php _e('Interventional Treatments', 'dr-shamsul-alam'); ?></a>
            <a href="#chambers" class="mobile-link"><?php _e('Chamber Locations & Hours', 'dr-shamsul-alam'); ?></a>
            <a href="#education" class="mobile-link"><?php _e('Patient Education', 'dr-shamsul-alam'); ?></a>
            <a href="#insights" class="mobile-link"><?php _e('Clinical Insights', 'dr-shamsul-alam'); ?></a>
            <div class="mobile-drawer-cta">
                <button type="button" class="btn btn-primary btn-block open-booking-modal">
                    <?php _e('BOOK AN APPOINTMENT', 'dr-shamsul-alam'); ?>
                </button>
            </div>
        </div>
    </div>
</header>
