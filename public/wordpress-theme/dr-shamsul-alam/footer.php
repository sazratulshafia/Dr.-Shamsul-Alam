<?php
/**
 * Footer Template
 * 
 * @package Dr_Shamsul_Alam
 */
?>

<!-- Medical Practice Footer (#EEF2F1 Light Tone) -->
<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-grid">
            <!-- Col 1: Bio & Practice Summary -->
            <div class="footer-col col-brand">
                <div class="footer-logo">
                    <span class="footer-logo-title">DR. SHAMSUL ALAM</span>
                    <span class="footer-logo-badge"><?php _e('Pain Medicine Specialist', 'dr-shamsul-alam'); ?></span>
                </div>
                <p class="footer-bio">
                    <?php _e('Dedicated to precision interventional pain management, utilizing image-guided techniques to accurately diagnose and alleviate complex acute and persistent pain conditions.', 'dr-shamsul-alam'); ?>
                </p>
                <div class="footer-meta-pill">
                    <i data-lucide="check-circle-2" class="icon-tiny text-teal"></i>
                    <span><?php _e('15+ Years Clinical Practice (Demo)', 'dr-shamsul-alam'); ?></span>
                </div>
            </div>

            <!-- Col 2: Navigation Links -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php _e('CLINICAL DIRECTORY', 'dr-shamsul-alam'); ?></h4>
                <ul class="footer-links">
                    <li><a href="#about"><?php _e('Physician Biography', 'dr-shamsul-alam'); ?></a></li>
                    <li><a href="#expertise"><?php _e('Spine & Joint Conditions', 'dr-shamsul-alam'); ?></a></li>
                    <li><a href="#treatments"><?php _e('Targeted Nerve Blocks', 'dr-shamsul-alam'); ?></a></li>
                    <li><a href="#treatments"><?php _e('Radiofrequency Ablation', 'dr-shamsul-alam'); ?></a></li>
                    <li><a href="#education"><?php _e('Patient Video Lectures', 'dr-shamsul-alam'); ?></a></li>
                    <li><a href="#insights"><?php _e('Medical Articles & Insights', 'dr-shamsul-alam'); ?></a></li>
                </ul>
            </div>

            <!-- Col 3: Chambers Contact -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php _e('CHAMBER LOCATIONS', 'dr-shamsul-alam'); ?></h4>
                <div class="footer-chamber-card">
                    <strong><?php _e('Dhanmondi Practice', 'dr-shamsul-alam'); ?></strong>
                    <p><?php _e('Shamsul Pain & Spine Centre', 'dr-shamsul-alam'); ?></p>
                    <p class="text-muted"><?php _e('Sat, Mon, Wed · 6:00 PM – 9:00 PM', 'dr-shamsul-alam'); ?></p>
                    <a href="tel:+8801716840850" class="footer-phone"><i data-lucide="phone" class="icon-tiny"></i> +880 1716 840850</a>
                </div>
                <div class="footer-chamber-card">
                    <strong><?php _e('Panthapath Practice', 'dr-shamsul-alam'); ?></strong>
                    <p><?php _e('Advanced Pain Care Centre', 'dr-shamsul-alam'); ?></p>
                    <p class="text-muted"><?php _e('Sun, Tue, Thu · 3:00 PM – 8:00 PM', 'dr-shamsul-alam'); ?></p>
                    <a href="tel:+8801716840850" class="footer-phone"><i data-lucide="phone" class="icon-tiny"></i> +880 1716 840850</a>
                </div>
            </div>

            <!-- Col 4: Rapid Booking CTA -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php _e('CONSULTATION & WHATSAPP', 'dr-shamsul-alam'); ?></h4>
                <p class="footer-cta-text">
                    <?php _e('Direct hotline and WhatsApp serial desk available for priority scheduling.', 'dr-shamsul-alam'); ?>
                </p>
                <a href="https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20team,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block" style="margin-top:16px; display:inline-flex; align-items:center; justify-content:center; gap:8px;">
                    <i data-lucide="message-circle" class="icon-tiny"></i>
                    <span><?php _e('WHATSAPP (+880 1716 840850)', 'dr-shamsul-alam'); ?></span>
                </a>
            </div>
        </div>

        <!-- Disclaimer & Copyright -->
        <div class="footer-bottom">
            <div class="medical-disclaimer">
                <strong><?php _e('DEMO & MEDICAL DISCLAIMER:', 'dr-shamsul-alam'); ?></strong>
                <?php _e('This website is a demonstration medical brand project. Content provided is strictly for educational purposes and does not substitute for individualized medical consultation, diagnosis, or treatment. In medical emergencies, contact emergency services immediately.', 'dr-shamsul-alam'); ?>
            </div>
            <div class="footer-copy">
                <span>&copy; <?php echo date('Y'); ?> <?php _e('Dr. Shamsul Alam. All rights reserved. Precision in Pain Care.', 'dr-shamsul-alam'); ?></span>
                <span class="footer-theme-tag"><?php _e('WordPress Theme · Dr. Shamsul Alam Medical Digital Practice', 'dr-shamsul-alam'); ?></span>
            </div>
        </div>
    </div>
</footer>

<!-- Persistent Mobile Bottom Quick Action Bar -->
<div class="mobile-bottom-bar" id="mobile-bottom-bar">
    <div class="mobile-bar-actions">
        <a href="tel:+8801716840850" class="mobile-bar-btn">
            <i data-lucide="phone" class="icon-sm"></i>
            <span><?php _e('Call', 'dr-shamsul-alam'); ?></span>
        </a>
        <a href="https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20team,%20I%20would%20like%20to%20inquire%20about%20an%20appointment." target="_blank" rel="noopener noreferrer" class="mobile-bar-btn">
            <i data-lucide="message-circle" class="icon-sm"></i>
            <span><?php _e('WhatsApp', 'dr-shamsul-alam'); ?></span>
        </a>
        <button type="button" class="mobile-bar-btn btn-highlight open-booking-modal">
            <i data-lucide="calendar" class="icon-sm"></i>
            <span><?php _e('Book Appointment', 'dr-shamsul-alam'); ?></span>
        </button>
    </div>
</div>

<!-- Modal: Appointment Booking -->
<div id="booking-modal-overlay" class="modal-overlay" aria-hidden="true" style="display:none;">
    <div class="modal-card">
        <div class="modal-header">
            <div>
                <span class="modal-badge"><?php _e('DIRECT CONSULTATION', 'dr-shamsul-alam'); ?></span>
                <h3 class="modal-title"><?php _e('Request Clinical Consultation', 'dr-shamsul-alam'); ?></h3>
            </div>
            <button type="button" class="modal-close" id="modal-close-trigger" aria-label="<?php esc_attr_e('Close Modal', 'dr-shamsul-alam'); ?>">
                <i data-lucide="x"></i>
            </button>
        </div>
        <div class="modal-body">
            <form id="wp-booking-form" class="booking-form">
                <div class="form-group">
                    <label for="patient-name"><?php _e('Patient Full Name *', 'dr-shamsul-alam'); ?></label>
                    <input type="text" id="patient-name" name="name" required placeholder="<?php esc_attr_e('e.g. Mohammad Rahim', 'dr-shamsul-alam'); ?>">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="patient-phone"><?php _e('Phone Number *', 'dr-shamsul-alam'); ?></label>
                        <input type="tel" id="patient-phone" name="phone" required placeholder="<?php esc_attr_e('+880 17...', 'dr-shamsul-alam'); ?>">
                    </div>
                    <div class="form-group">
                        <label for="patient-email"><?php _e('Email Address (Optional)', 'dr-shamsul-alam'); ?></label>
                        <input type="email" id="patient-email" name="email" placeholder="<?php esc_attr_e('name@example.com', 'dr-shamsul-alam'); ?>">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="preferred-chamber"><?php _e('Select Practice Location *', 'dr-shamsul-alam'); ?></label>
                        <select id="preferred-chamber" name="chamber">
                            <option value="Dhanmondi - Shamsul Pain & Spine Centre"><?php _e('Dhanmondi (Sat, Mon, Wed · 6-9 PM)', 'dr-shamsul-alam'); ?></option>
                            <option value="Panthapath - Advanced Pain Care Centre"><?php _e('Panthapath (Sun, Tue, Thu · 3-8 PM)', 'dr-shamsul-alam'); ?></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="preferred-date"><?php _e('Preferred Date', 'dr-shamsul-alam'); ?></label>
                        <input type="date" id="preferred-date" name="date">
                    </div>
                </div>

                <div class="form-group">
                    <label for="pain-complaint"><?php _e('Primary Pain Complaint or Referring Diagnosis', 'dr-shamsul-alam'); ?></label>
                    <textarea id="pain-complaint" name="complaint" rows="3" placeholder="<?php esc_attr_e('e.g. Severe lower back pain radiating down left leg for 4 months...', 'dr-shamsul-alam'); ?>"></textarea>
                </div>

                <div class="form-notice">
                    <i data-lucide="shield-check" class="icon-tiny text-teal"></i>
                    <span><?php _e('Your clinical details remain strictly private. Our clinic desk will phone you to confirm slot time.', 'dr-shamsul-alam'); ?></span>
                </div>

                <div id="booking-feedback" class="booking-feedback" style="display:none;"></div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary btn-block" id="booking-submit-btn">
                        <span><?php _e('SUBMIT APPOINTMENT REQUEST', 'dr-shamsul-alam'); ?></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
