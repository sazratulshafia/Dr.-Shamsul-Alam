<?php
/**
 * Dr. Shamsul Alam Theme Functions and Definitions
 * 
 * @package Dr_Shamsul_Alam
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('DR_SHAMSUL_THEME_VERSION', '1.0.0');

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function dr_shamsul_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Title tag management by WordPress.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 800, true);
    add_image_size('medical-hero', 1600, 1000, true);
    add_image_size('medical-card', 800, 500, true);
    add_image_size('doctor-portrait', 900, 1100, true);

    // Switch default core markup for search form, comment form, and comments to valid HTML5.
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ]);

    // Custom Logo
    add_theme_support('custom-logo', [
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    // Register primary navigation menus.
    register_nav_menus([
        'primary' => __('Primary Header Menu', 'dr-shamsul-alam'),
        'footer'  => __('Footer Medical Navigation', 'dr-shamsul-alam'),
    ]);
}
add_action('after_setup_theme', 'dr_shamsul_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function dr_shamsul_enqueue_assets() {
    // Google Font: Inter & Plus Jakarta Sans
    wp_enqueue_style(
        'dr-shamsul-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
        [],
        null
    );

    // Theme main stylesheet
    wp_enqueue_style(
        'dr-shamsul-main-style',
        get_stylesheet_uri(),
        ['dr-shamsul-fonts'],
        DR_SHAMSUL_THEME_VERSION
    );

    // Theme components CSS
    wp_enqueue_style(
        'dr-shamsul-components',
        get_template_directory_uri() . '/assets/css/theme-components.css',
        ['dr-shamsul-main-style'],
        DR_SHAMSUL_THEME_VERSION
    );

    // Lucide Icons (CDN lightweight browser build)
    wp_enqueue_script(
        'lucide-icons',
        'https://unpkg.com/lucide@latest/dist/umd/lucide.js',
        [],
        '0.546.0',
        true
    );

    // Main Interactive Scripts (Modals, Smooth scrolling, Accordion, Tab filtering)
    wp_enqueue_script(
        'dr-shamsul-main-js',
        get_template_directory_uri() . '/assets/js/theme-main.js',
        ['lucide-icons'],
        DR_SHAMSUL_THEME_VERSION,
        true
    );

    // Localize script with AJAX URL & Nonce for booking form
    wp_localize_script('dr-shamsul-main-js', 'drShamsulData', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('dr_shamsul_booking_nonce'),
        'siteUrl' => home_url('/'),
        'i18n'    => [
            'bookingSuccess' => __('Your appointment inquiry has been received. Our clinical coordinator will confirm your slot shortly.', 'dr-shamsul-alam'),
            'bookingError'   => __('An error occurred. Please call the chamber directly at +880 1711 000001.', 'dr-shamsul-alam')
        ]
    ]);
}
add_action('wp_enqueue_scripts', 'dr_shamsul_enqueue_assets');

/**
 * Register Custom Post Types for Pain Medicine Practice:
 * - Conditions (Spine, Nerves, Joints, Musculoskeletal)
 * - Treatments (Interventional procedures, Radiofrequency, Injections)
 * - Chambers (Practice locations, hours, coordinates)
 * - FAQs (Clinical questions & answers)
 */
function dr_shamsul_register_custom_post_types() {
    // 1. Conditions Post Type
    register_post_type('condition', [
        'labels' => [
            'name'          => __('Conditions', 'dr-shamsul-alam'),
            'singular_name' => __('Condition', 'dr-shamsul-alam'),
            'add_new_item'  => __('Add New Condition', 'dr-shamsul-alam'),
            'edit_item'     => __('Edit Condition', 'dr-shamsul-alam')
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-heart',
        'supports'      => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'show_in_rest'  => true,
        'rewrite'       => ['slug' => 'conditions']
    ]);

    // Condition Category Taxonomy
    register_taxonomy('condition_category', ['condition'], [
        'labels'        => [
            'name'          => __('Condition Categories', 'dr-shamsul-alam'),
            'singular_name' => __('Category', 'dr-shamsul-alam')
        ],
        'hierarchical'  => true,
        'show_in_rest'  => true,
        'rewrite'       => ['slug' => 'condition-category']
    ]);

    // 2. Treatments Post Type
    register_post_type('treatment', [
        'labels' => [
            'name'          => __('Treatments', 'dr-shamsul-alam'),
            'singular_name' => __('Treatment', 'dr-shamsul-alam'),
            'add_new_item'  => __('Add New Treatment', 'dr-shamsul-alam'),
            'edit_item'     => __('Edit Treatment', 'dr-shamsul-alam')
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-shield',
        'supports'      => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'show_in_rest'  => true,
        'rewrite'       => ['slug' => 'treatments']
    ]);

    // 3. Chambers Post Type
    register_post_type('chamber', [
        'labels' => [
            'name'          => __('Chambers & Clinics', 'dr-shamsul-alam'),
            'singular_name' => __('Chamber', 'dr-shamsul-alam')
        ],
        'public'        => true,
        'has_archive'   => false,
        'menu_icon'     => 'dashicons-location',
        'supports'      => ['title', 'editor', 'custom-fields'],
        'show_in_rest'  => true
    ]);

    // 4. FAQs Post Type
    register_post_type('faq', [
        'labels' => [
            'name'          => __('FAQs', 'dr-shamsul-alam'),
            'singular_name' => __('FAQ', 'dr-shamsul-alam')
        ],
        'public'        => true,
        'has_archive'   => false,
        'menu_icon'     => 'dashicons-editor-help',
        'supports'      => ['title', 'editor', 'custom-fields'],
        'show_in_rest'  => true
    ]);
}
add_action('init', 'dr_shamsul_register_custom_post_types');

/**
 * Handle AJAX Booking Form Submissions
 */
function dr_shamsul_handle_booking_submission() {
    check_ajax_referer('dr_shamsul_booking_nonce', 'security');

    $patient_name    = sanitize_text_field($_POST['name'] ?? '');
    $patient_phone   = sanitize_text_field($_POST['phone'] ?? '');
    $patient_email   = sanitize_email($_POST['email'] ?? '');
    $chamber_choice  = sanitize_text_field($_POST['chamber'] ?? '');
    $preferred_date  = sanitize_text_field($_POST['date'] ?? '');
    $pain_complaint  = sanitize_textarea_field($_POST['complaint'] ?? '');

    if (empty($patient_name) || empty($patient_phone)) {
        wp_send_json_error(['message' => __('Please provide your name and contact phone number.', 'dr-shamsul-alam')]);
    }

    // Save as demo consultation entry or email notification to chamber staff
    $to = get_option('admin_email');
    $subject = sprintf('[Appointment Request] %s - %s', $patient_name, $chamber_choice);
    $body = "New Patient Consultation Booking Request:\n\n";
    $body .= "Patient: {$patient_name}\n";
    $body .= "Phone: {$patient_phone}\n";
    $body .= "Email: {$patient_email}\n";
    $body .= "Chamber: {$chamber_choice}\n";
    $body .= "Preferred Date: {$preferred_date}\n";
    $body .= "Pain Complaint: {$pain_complaint}\n";
    $body .= "\nNote: Sent via Dr. Shamsul Alam Medical Digital Practice Website.";

    // Mail to admin (commented out or safe demo execution)
    wp_mail($to, $subject, $body);

    wp_send_json_success([
        'message' => __('Consultation request received successfully. Our patient coordinator will contact you to confirm timing.', 'dr-shamsul-alam')
    ]);
}
add_action('wp_ajax_dr_shamsul_booking', 'dr_shamsul_handle_booking_submission');
add_action('wp_ajax_nopriv_dr_shamsul_booking', 'dr_shamsul_handle_booking_submission');

/**
 * Schema.org Physician Structured Data
 */
function dr_shamsul_add_schema_json_ld() {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Physician',
        'name' => 'Dr. Shamsul Alam',
        'medicalSpecialty' => 'Pain Medicine Specialist',
        'description' => 'Helping patients understand, manage and move beyond persistent pain with image-guided interventional pain procedures.',
        'telephone' => '+8801700000000',
        'email' => 'care@drshamsulalam.com',
        'url' => home_url('/'),
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => 'House 42, Road 9/A, Dhanmondi R/A',
            'addressLocality' => 'Dhaka',
            'postalCode' => '1209',
            'addressCountry' => 'BD'
        ],
        'availableService' => [
            ['@type' => 'MedicalProcedure', 'name' => 'Interventional Pain Management'],
            ['@type' => 'MedicalProcedure', 'name' => 'Radiofrequency Ablation'],
            ['@type' => 'MedicalProcedure', 'name' => 'Epidural Steroid Injections'],
            ['@type' => 'MedicalProcedure', 'name' => 'Ultrasound-Guided Nerve Blocks']
        ]
    ];

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
}
add_action('wp_head', 'dr_shamsul_add_schema_json_ld');
