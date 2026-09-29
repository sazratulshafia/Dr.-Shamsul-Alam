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

    // 5. Patient Appointments Post Type (Stores all bookings inside WordPress Admin)
    register_post_type('appointment', [
        'labels' => [
            'name'                  => __('Appointments', 'dr-shamsul-alam'),
            'singular_name'         => __('Appointment', 'dr-shamsul-alam'),
            'menu_name'             => __('Appointments', 'dr-shamsul-alam'),
            'all_items'             => __('All Appointments', 'dr-shamsul-alam'),
            'add_new_item'          => __('Add New Appointment', 'dr-shamsul-alam'),
            'edit_item'             => __('View / Edit Appointment', 'dr-shamsul-alam'),
            'search_items'          => __('Search Appointments', 'dr-shamsul-alam'),
            'not_found'             => __('No appointments found', 'dr-shamsul-alam'),
        ],
        'public'            => false,
        'show_ui'           => true,
        'show_in_menu'      => true,
        'menu_position'     => 6,
        'menu_icon'         => 'dashicons-calendar-alt',
        'capability_type'   => 'post',
        'hierarchical'      => false,
        'supports'          => ['title', 'editor', 'custom-fields'],
        'show_in_rest'      => false
    ]);
}
add_action('init', 'dr_shamsul_register_custom_post_types');

/**
 * Custom Columns in WordPress Admin for Appointments
 */
function dr_shamsul_appointment_columns($columns) {
    return [
        'cb'            => $columns['cb'],
        'title'         => __('Patient Name / Serial', 'dr-shamsul-alam'),
        'patient_phone' => __('Phone Number', 'dr-shamsul-alam'),
        'chamber'       => __('Chamber', 'dr-shamsul-alam'),
        'pref_date'     => __('Preferred Date', 'dr-shamsul-alam'),
        'complaint'     => __('Pain Complaint / Reason', 'dr-shamsul-alam'),
        'booking_time'  => __('Submission Time', 'dr-shamsul-alam'),
    ];
}
add_filter('manage_appointment_posts_columns', 'dr_shamsul_appointment_columns');

function dr_shamsul_appointment_custom_column($column, $post_id) {
    switch ($column) {
        case 'patient_phone':
            $phone = get_post_meta($post_id, '_patient_phone', true);
            echo $phone ? '<a href="tel:' . esc_attr($phone) . '"><strong>' . esc_html($phone) . '</strong></a>' : '—';
            break;
        case 'chamber':
            echo esc_html(get_post_meta($post_id, '_chamber', true) ?: '—');
            break;
        case 'pref_date':
            echo esc_html(get_post_meta($post_id, '_preferred_date', true) ?: '—');
            break;
        case 'complaint':
            $complaint = get_post_meta($post_id, '_pain_complaint', true);
            echo esc_html(wp_trim_words($complaint, 12, '...'));
            break;
        case 'booking_time':
            echo get_the_date('d M Y, h:i A', $post_id);
            break;
    }
}
add_action('manage_appointment_posts_custom_column', 'dr_shamsul_appointment_custom_column', 10, 2);

/**
 * Handle AJAX Booking Form Submissions
 * Saves directly into WordPress Database under 'appointment' post type & Sends Email to sazratulfreedom@gmail.com
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

    $serial_code = 'ALAM-' . strtoupper(wp_generate_password(5, false, false));
    $post_title = sprintf('%s - %s (%s)', $serial_code, $patient_name, $chamber_choice);

    // 1. Save directly into WordPress Database
    $post_id = wp_insert_post([
        'post_title'   => $post_title,
        'post_type'    => 'appointment',
        'post_status'  => 'publish',
        'post_content' => sprintf(
            "Patient Name: %s\nPhone: %s\nEmail: %s\nChamber: %s\nPreferred Date: %s\n\nComplaint / Diagnosis:\n%s",
            $patient_name,
            $patient_phone,
            $patient_email ?: 'Not provided',
            $chamber_choice,
            $preferred_date ?: 'Not specified',
            $pain_complaint ?: 'None entered'
        ),
    ]);

    if (!is_wp_error($post_id)) {
        update_post_meta($post_id, '_serial_code', $serial_code);
        update_post_meta($post_id, '_patient_name', $patient_name);
        update_post_meta($post_id, '_patient_phone', $patient_phone);
        update_post_meta($post_id, '_patient_email', $patient_email);
        update_post_meta($post_id, '_chamber', $chamber_choice);
        update_post_meta($post_id, '_preferred_date', $preferred_date);
        update_post_meta($post_id, '_pain_complaint', $pain_complaint);
    }

    // 2. Send instant Email Notification to sazratulfreedom@gmail.com
    $to = 'sazratulfreedom@gmail.com';
    $subject = sprintf('🩺 [New Appointment - %s] %s (%s)', $serial_code, $patient_name, $chamber_choice);

    $headers = [
        'Content-Type: text/html; charset=UTF-8',
        'From: Dr. Shamsul Alam Practice <care@' . wp_parse_url(home_url(), PHP_URL_HOST) . '>',
    ];
    if ($patient_email) {
        $headers[] = 'Reply-To: ' . $patient_name . ' <' . $patient_email . '>';
    }

    $email_html = "
    <div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E7E8; border-radius: 12px; overflow: hidden; color: #18212B;'>
        <div style='background: #3D9C98; padding: 24px 28px; color: #FFFFFF;'>
            <h2 style='margin: 0; font-size: 20px; font-weight: 700;'>New Patient Appointment Request</h2>
            <p style='margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;'>Serial Reference: <strong>{$serial_code}</strong> · Dr. Shamsul Alam Medical Digital Practice</p>
        </div>
        <div style='padding: 28px;'>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr>
                    <td style='padding: 10px 0; color: #5E6872; width: 35%; border-bottom: 1px solid #EEF2F1;'>Patient Name</td>
                    <td style='padding: 10px 0; font-weight: 700; border-bottom: 1px solid #EEF2F1;'>{$patient_name}</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; color: #5E6872; border-bottom: 1px solid #EEF2F1;'>Contact Phone</td>
                    <td style='padding: 10px 0; font-weight: 700; color: #3D9C98; border-bottom: 1px solid #EEF2F1;'><a href='tel:{$patient_phone}' style='color: #3D9C98; text-decoration: none;'>{$patient_phone}</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; color: #5E6872; border-bottom: 1px solid #EEF2F1;'>Patient Email</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EEF2F1;'>" . ($patient_email ? esc_html($patient_email) : 'Not specified') . "</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; color: #5E6872; border-bottom: 1px solid #EEF2F1;'>Chamber Location</td>
                    <td style='padding: 10px 0; font-weight: 600; border-bottom: 1px solid #EEF2F1;'>{$chamber_choice}</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; color: #5E6872; border-bottom: 1px solid #EEF2F1;'>Preferred Date</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EEF2F1;'>" . ($preferred_date ? esc_html($preferred_date) : 'Earliest Available') . "</td>
                </tr>
            </table>

            <div style='margin-top: 20px; background: #F8FAFA; border: 1px solid #E2E7E8; border-radius: 8px; padding: 16px;'>
                <div style='font-size: 11px; font-weight: 700; text-transform: uppercase; color: #8A95A0; letter-spacing: 0.05em; margin-bottom: 6px;'>Primary Pain Complaint / Reason</div>
                <div style='font-size: 14px; line-height: 1.6; color: #18212B;'>" . nl2br(esc_html($pain_complaint ?: 'No specific complaint entered.')) . "</div>
            </div>

            <div style='margin-top: 24px; text-align: center;'>
                <a href='" . admin_url('edit.php?post_type=appointment') . "' style='display: inline-block; background: #18212B; color: #FFFFFF; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;'>View in WordPress Admin Dashboard &rarr;</a>
            </div>
        </div>
        <div style='background: #FAFAF7; padding: 14px 28px; border-top: 1px solid #E2E7E8; font-size: 12px; color: #8A95A0; text-align: center;'>
            This request was received via the official practice website at sazratulhub.com
        </div>
    </div>";

    @wp_mail($to, $subject, $email_html, $headers);

    wp_send_json_success([
        'message'     => __('Your appointment request has been confirmed and saved! A notification has been dispatched to our clinic coordinator.', 'dr-shamsul-alam'),
        'serial_code' => $serial_code,
        'chamber'     => $chamber_choice,
        'patient'     => $patient_name,
        'phone'       => $patient_phone
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
