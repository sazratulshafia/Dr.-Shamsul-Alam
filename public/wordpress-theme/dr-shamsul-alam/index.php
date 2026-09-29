<?php
/**
 * Main Front Page Template: Dr. Shamsul Alam Medical Digital Practice
 * Visual Direction: Light Premium International Medical Aesthetic
 * 
 * @package Dr_Shamsul_Alam
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- 05. HERO EXPERIENCE (Warm White / Ivory with Soft Atmospheric Gradient & Precision Medical Visual) -->
    <section class="section section-hero" id="hero">
        <div class="hero-container">
            <div class="hero-content">
                <!-- Eyebrow Badge -->
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    <span class="badge-text"><?php _e('PAIN MEDICINE SPECIALIST', 'dr-shamsul-alam'); ?></span>
                </div>

                <!-- Doctor Name Title -->
                <h1 class="hero-title">
                    DR. SHAMSUL ALAM
                </h1>

                <!-- Clinical Positioning Statement -->
                <p class="hero-subtitle">
                    <?php _e('Helping patients understand, manage and move beyond persistent pain.', 'dr-shamsul-alam'); ?>
                </p>

                <!-- Editorial Bio Excerpt -->
                <p class="hero-description">
                    <?php _e('Providing evidence-based diagnostic clarity and targeted image-guided interventional therapies for complex spinal, nerve, and joint pain.', 'dr-shamsul-alam'); ?>
                </p>

                <!-- Primary & Secondary CTAs -->
                <div class="hero-actions">
                    <button type="button" class="btn btn-primary open-booking-modal" data-chamber="" data-reason="Initial Consultation">
                        <i data-lucide="calendar" class="icon-inline"></i>
                        <span><?php _e('BOOK AN APPOINTMENT', 'dr-shamsul-alam'); ?></span>
                    </button>
                    <a href="#chambers" class="btn btn-outline">
                        <i data-lucide="map-pin" class="icon-inline"></i>
                        <span><?php _e('CONTACT DOCTOR', 'dr-shamsul-alam'); ?></span>
                    </a>
                </div>

                <!-- Credential Micro-Badges -->
                <div class="hero-micro-metrics">
                    <div class="micro-metric">
                        <span class="metric-val">15+</span>
                        <span class="metric-label"><?php _e('Years Experience', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="micro-divider"></div>
                    <div class="micro-metric">
                        <span class="metric-val"><?php _e('Precision', 'dr-shamsul-alam'); ?></span>
                        <span class="metric-label"><?php _e('Image Guidance', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="micro-divider"></div>
                    <div class="micro-metric">
                        <span class="metric-val"><?php _e('2 Clinics', 'dr-shamsul-alam'); ?></span>
                        <span class="metric-label"><?php _e('Dhanmondi & Panthapath', 'dr-shamsul-alam'); ?></span>
                    </div>
                </div>
            </div>

            <!-- Doctor Portrait & Scientific Light Visual -->
            <div class="hero-visual animate-on-scroll">
                <!-- Interactive Biomechanical Spine Canvas Layer -->
                <div class="spine-canvas-wrapper">
                    <canvas id="hero-spine-canvas" width="400" height="420" class="hero-spine-canvas"></canvas>
                    <div class="spine-canvas-label">
                        <span class="live-pulse-dot"></span>
                        <span>BIOMECHANICAL SPINAL LATTICE · INTERACTIVE 3D</span>
                    </div>
                </div>
                <div class="portrait-card">
                    <!-- Doctor Official Photograph -->
                    <div class="portrait-art" style="overflow: hidden; position: relative;">
                        <img 
                            src="https://sazratulhub.com/wp-content/uploads/2026/09/doctor_portrait.webp" 
                            alt="<?php esc_attr_e('Dr. Shamsul Alam - Pain Medicine Specialist', 'dr-shamsul-alam'); ?>" 
                            class="portrait-img"
                            style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
                            onerror="this.style.display='none'; document.getElementById('svg-doctor-fallback').style.display='block';"
                        />
                        <div class="portrait-img-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(24,33,43,0.65) 0%, rgba(24,33,43,0.1) 40%, transparent 100%); pointer-events: none;"></div>
                        <svg id="svg-doctor-fallback" viewBox="0 0 400 480" class="portrait-svg" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <defs>
                                <radialGradient id="halo-light" cx="50%" cy="40%" r="55%">
                                    <stop offset="0%" stop-color="#E7F2F5" stop-opacity="0.9"/>
                                    <stop offset="60%" stop-color="#F3F5F2" stop-opacity="0.5"/>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
                                </radialGradient>
                            </defs>
                            <circle cx="200" cy="200" r="170" fill="url(#halo-light)" />
                        </svg>
                    </div>

                    <!-- Verified Physician Floating Card -->
                    <div class="floating-doc-card floating-anim">
                        <div class="card-icon"><i data-lucide="award" class="text-teal"></i></div>
                        <div>
                            <div class="card-title"><?php _e('Interventional Pain Care', 'dr-shamsul-alam'); ?></div>
                            <div class="card-caption"><?php _e('Fluoroscopy & Ultrasound Precision Guidance', 'dr-shamsul-alam'); ?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 08. TRUST & CREDIBILITY SECTION (Pure White) -->
    <section class="section section-trust animate-on-scroll" id="trust">
        <div class="container">
            <div class="trust-grid">
                <div class="trust-card">
                    <div class="trust-icon"><i data-lucide="stethoscope"></i></div>
                    <div class="trust-stat">15+</div>
                    <div class="trust-title"><?php _e('Years Clinical Practice', 'dr-shamsul-alam'); ?></div>
                    <p class="trust-text"><?php _e('Focused on the rigorous diagnostic assessment and interventional treatment of chronic pain disorders.', 'dr-shamsul-alam'); ?></p>
                </div>
                <div class="trust-card">
                    <div class="trust-icon"><i data-lucide="crosshair"></i></div>
                    <div class="trust-stat"><?php _e('Precision', 'dr-shamsul-alam'); ?></div>
                    <div class="trust-title"><?php _e('Image Guidance', 'dr-shamsul-alam'); ?></div>
                    <p class="trust-text"><?php _e('Every interventional procedure utilizes live fluoroscopy or ultrasound to ensure sub-millimeter target accuracy.', 'dr-shamsul-alam'); ?></p>
                </div>
                <div class="trust-card">
                    <div class="trust-icon"><i data-lucide="activity"></i></div>
                    <div class="trust-stat"><?php _e('Conservative', 'dr-shamsul-alam'); ?></div>
                    <div class="trust-title"><?php _e('Non-Surgical Focus', 'dr-shamsul-alam'); ?></div>
                    <p class="trust-text"><?php _e('Minimally invasive options to relieve severe pain and bridge the gap between medications and open surgical operations.', 'dr-shamsul-alam'); ?></p>
                </div>
                <div class="trust-card">
                    <div class="trust-icon"><i data-lucide="map-pin"></i></div>
                    <div class="trust-stat">2</div>
                    <div class="trust-title"><?php _e('Central Chambers', 'dr-shamsul-alam'); ?></div>
                    <p class="trust-text"><?php _e('Convenient outpatient centers in Dhanmondi and Panthapath equipped with modern observation facilities.', 'dr-shamsul-alam'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- 09 & 13. ABOUT DOCTOR & CLINICAL JOURNEY (Warm White) -->
    <section class="section section-about animate-on-scroll" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-sidebar">
                    <span class="section-eyebrow"><?php _e('PHYSICIAN PROFILE', 'dr-shamsul-alam'); ?></span>
                    <h2 class="section-title"><?php _e('Dr. Shamsul Alam', 'dr-shamsul-alam'); ?></h2>
                    <p class="about-lead"><?php _e('Specialist in Interventional Pain Medicine and Musculoskeletal Care.', 'dr-shamsul-alam'); ?></p>

                    <div class="credential-box">
                        <div class="cred-item">
                            <span class="cred-label"><?php _e('Specialty', 'dr-shamsul-alam'); ?></span>
                            <span class="cred-val"><?php _e('Pain Medicine Specialist', 'dr-shamsul-alam'); ?></span>
                        </div>
                        <div class="cred-item">
                            <span class="cred-label"><?php _e('Experience', 'dr-shamsul-alam'); ?></span>
                            <span class="cred-val"><?php _e('15+ Years Clinical Practice (Demo)', 'dr-shamsul-alam'); ?></span>
                        </div>
                        <div class="cred-item">
                            <span class="cred-label"><?php _e('Sub-Focus', 'dr-shamsul-alam'); ?></span>
                            <span class="cred-val"><?php _e('Spine, Sciatica & Joint Interventions', 'dr-shamsul-alam'); ?></span>
                        </div>
                    </div>
                </div>

                <div class="about-main">
                    <h3 class="subsection-title"><?php _e('Clinical Philosophy & Expertise', 'dr-shamsul-alam'); ?></h3>
                    <div class="editorial-body">
                        <p><?php _e('Dr. Shamsul Alam is a dedicated Pain Medicine Specialist with over 15 years of clinical practice focusing on the rigorous diagnosis and targeted interventional management of complex acute and persistent pain disorders.', 'dr-shamsul-alam'); ?></p>
                        <p><?php _e('Trained in modern fluoroscopic and ultrasound-guided interventional pain techniques, his clinical philosophy centers on precision: identifying the exact anatomical pain generator rather than merely masking symptoms with high-dose systemic medications.', 'dr-shamsul-alam'); ?></p>
                        <p><?php _e('His practice emphasizes compassionate, patient-centered care—integrating structured diagnostic blocks, minimally invasive procedures, physical rehabilitation coordination, and long-term functional recovery strategies.', 'dr-shamsul-alam'); ?></p>
                    </div>

                    <!-- Clean Milestone Timeline -->
                    <div class="timeline-block">
                        <h4 class="timeline-heading"><?php _e('Professional Journey & Milestones', 'dr-shamsul-alam'); ?></h4>
                        <div class="timeline-items">
                            <div class="timeline-item">
                                <span class="t-year"><?php _e('Foundation', 'dr-shamsul-alam'); ?></span>
                                <div class="t-content">
                                    <strong><?php _e('Medical Education (MBBS)', 'dr-shamsul-alam'); ?></strong>
                                    <p><?php _e('Rigorous undergraduate clinical training and foundational internships in general medicine and surgery (DEMO).', 'dr-shamsul-alam'); ?></p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="t-year"><?php _e('Residency', 'dr-shamsul-alam'); ?></span>
                                <div class="t-content">
                                    <strong><?php _e('Post-Graduate Clinical Training', 'dr-shamsul-alam'); ?></strong>
                                    <p><?php _e('Advanced residency training in anesthesiology, perioperative medicine, and physiological patient monitoring (DEMO).', 'dr-shamsul-alam'); ?></p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="t-year"><?php _e('Subspecialty', 'dr-shamsul-alam'); ?></span>
                                <div class="t-content">
                                    <strong><?php _e('Pain Medicine Fellowship', 'dr-shamsul-alam'); ?></strong>
                                    <p><?php _e('Fellowship training focused on chronic pain neurobiology, neuropathic syndromes, and restorative rehabilitation (DEMO).', 'dr-shamsul-alam'); ?></p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="t-year"><?php _e('Interventions', 'dr-shamsul-alam'); ?></span>
                                <div class="t-content">
                                    <strong><?php _e('Image-Guided Interventional Training', 'dr-shamsul-alam'); ?></strong>
                                    <p><?php _e('Mastery of fluoroscopic and ultrasound-guided spinal epidurals, facet neurotomy, and radiofrequency procedures (DEMO).', 'dr-shamsul-alam'); ?></p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="t-year"><?php _e('Present', 'dr-shamsul-alam'); ?></span>
                                <div class="t-content">
                                    <strong><?php _e('Senior Consultant in Pain Medicine', 'dr-shamsul-alam'); ?></strong>
                                    <p><?php _e('Consulting patients across central Dhaka chambers, providing advanced interventional pain management.', 'dr-shamsul-alam'); ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. EXPERTISE: UNDERSTANDING YOUR PAIN (Soft Ivory Background with White Cards) -->
    <section class="section section-expertise animate-on-scroll" id="expertise">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('DIAGNOSTIC & CLINICAL EXPERTISE', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Understanding Your Pain', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Persistent pain requires precise anatomical investigation. Explore common pain conditions managed with interventional care.', 'dr-shamsul-alam'); ?></p>
            </div>

            <!-- Category Filter Tabs -->
            <div class="condition-filter-bar">
                <button type="button" class="filter-btn active" data-filter="all"><?php _e('All Conditions', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Spine"><?php _e('Spine & Neck', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Nerves"><?php _e('Nerves & Sciatica', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Joints"><?php _e('Joints & Osteoarthritis', 'dr-shamsul-alam'); ?></button>
                <button type="button" class="filter-btn" data-filter="Musculoskeletal"><?php _e('Musculoskeletal', 'dr-shamsul-alam'); ?></button>
            </div>

            <!-- Conditions Grid -->
            <div class="conditions-grid">
                <!-- Condition 1: Chronic Back Pain -->
                <div class="condition-card" data-category="Spine">
                    <span class="card-cat-badge"><?php _e('Spine', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Chronic Back Pain', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Persistent lumbar discomfort lasting over 3 months originating from facet joints, discs, or spinal nerves.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Morning spinal stiffness', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Pain worsened by sitting or standing', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Back Pain Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>

                <!-- Condition 2: Sciatica -->
                <div class="condition-card" data-category="Nerves">
                    <span class="card-cat-badge"><?php _e('Nerves', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Sciatica & Radiculopathy', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Sharp, electric or burning pain traveling down the buttocks, thigh, and calf due to compressed nerve roots.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Shooting electric leg sensations', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Numbness or pins-and-needles in foot', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Sciatica Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>

                <!-- Condition 3: Slip Disc -->
                <div class="condition-card" data-category="Spine">
                    <span class="card-cat-badge"><?php _e('Spine', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Slip Disc (Herniation)', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Intervertebral disc bulge or extrusion leading to local chemical irritation and acute mechanical nerve compression.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Sudden severe lumbar or neck pain', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Inability to bend forward comfortably', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Slip Disc Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>

                <!-- Condition 4: Knee Pain -->
                <div class="condition-card" data-category="Joints">
                    <span class="card-cat-badge"><?php _e('Joints', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Knee Pain & Osteoarthritis', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Cartilage thinning, bone-on-bone friction, and chronic joint effusion limiting walking tolerance.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Grinding crepitus during stairs', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Difficulty standing up from low chairs', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Knee Pain Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>

                <!-- Condition 5: Neck Pain & Cervical Spondylosis -->
                <div class="condition-card" data-category="Spine">
                    <span class="card-cat-badge"><?php _e('Spine', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Neck Pain & Cervical Spondylosis', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Persistent neck tension, restricted rotation, and upper trapezius stiffness frequently causing occipital headaches.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Restricted head turning range', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Cervicogenic tension headaches', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Neck Pain Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>

                <!-- Condition 6: Neuropathic Pain -->
                <div class="condition-card" data-category="Nerves">
                    <span class="card-cat-badge"><?php _e('Nerves', 'dr-shamsul-alam'); ?></span>
                    <h3 class="condition-name"><?php _e('Neuropathic Pain & Neuralgia', 'dr-shamsul-alam'); ?></h3>
                    <p class="condition-desc"><?php _e('Pain generated by injured nervous tissue, including diabetic neuropathy, post-herpetic neuralgia, and trigeminal neuralgia.', 'dr-shamsul-alam'); ?></p>
                    <ul class="symptom-list">
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Extreme touch sensitivity (allodynia)', 'dr-shamsul-alam'); ?></li>
                        <li><i data-lucide="check" class="icon-tiny text-teal"></i> <?php _e('Unpredictable burning or electric jolts', 'dr-shamsul-alam'); ?></li>
                    </ul>
                    <div class="card-footer">
                        <button type="button" class="btn-link open-booking-modal" data-reason="Neuropathic Pain Consultation">
                            <span><?php _e('Inquire Treatment', 'dr-shamsul-alam'); ?></span>
                            <i data-lucide="arrow-right" class="icon-tiny"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 12. FEATURED TREATMENT: CINEMATIC IMAGE GUIDANCE (Pure White) -->
    <section class="section section-featured-treatment animate-on-scroll">
        <div class="container">
            <div class="featured-treatment-card">
                <div class="feat-treatment-content">
                    <span class="section-eyebrow"><?php _e('SIGNATURE PROCEDURE', 'dr-shamsul-alam'); ?></span>
                    <h2 class="feat-title"><?php _e('Image-Guided Interventional Precision', 'dr-shamsul-alam'); ?></h2>
                    <p class="feat-lead"><?php _e('Why live fluoroscopy (X-ray) and high-resolution ultrasound are the gold standard in modern pain medicine.', 'dr-shamsul-alam'); ?></p>
                    <div class="feat-points">
                        <div class="feat-point">
                            <i data-lucide="crosshair" class="text-teal"></i>
                            <div>
                                <strong><?php _e('Sub-Millimeter Targeting', 'dr-shamsul-alam'); ?></strong>
                                <p><?php _e('Direct visualization guarantees delivery right onto the inflamed nerve or joint capsule, avoiding critical vascular structures.', 'dr-shamsul-alam'); ?></p>
                            </div>
                        </div>
                        <div class="feat-point">
                            <i data-lucide="shield-check" class="text-teal"></i>
                            <div>
                                <strong><?php _e('Sterile Outpatient Setting', 'dr-shamsul-alam'); ?></strong>
                                <p><?php _e('Procedures take 15–30 minutes under gentle local anesthesia. Patients return home within an hour.', 'dr-shamsul-alam'); ?></p>
                            </div>
                        </div>
                        <div class="feat-point">
                            <i data-lucide="zap" class="text-teal"></i>
                            <div>
                                <strong><?php _e('Long-Lasting Relief Options', 'dr-shamsul-alam'); ?></strong>
                                <p><?php _e('Diagnostic blocks confirm the generator; radiofrequency neurotomy desensitizes nerves for 6 to 18 months.', 'dr-shamsul-alam'); ?></p>
                            </div>
                        </div>
                    </div>
                    <div class="feat-action">
                        <button type="button" class="btn btn-primary open-booking-modal" data-reason="Featured Interventional Consultation">
                            <?php _e('BOOK PROCEDURAL EVALUATION', 'dr-shamsul-alam'); ?>
                        </button>
                    </div>
                </div>

                <div class="feat-treatment-graphic">
                    <!-- Interactive Mode Switcher -->
                    <div class="tech-mode-switcher">
                        <button type="button" class="tech-mode-btn active" id="btn-mode-fluoro">
                            <i data-lucide="activity" class="icon-tiny"></i>
                            <span>Fluoroscopy (C-Arm)</span>
                        </button>
                        <button type="button" class="tech-mode-btn" id="btn-mode-us">
                            <i data-lucide="waves" class="icon-tiny"></i>
                            <span>Ultrasound Guidance</span>
                        </button>
                    </div>

                    <div class="tech-card-inner">
                        <div class="tech-header">
                            <span class="tech-badge" id="tech-monitor-badge"><?php _e('LIVE GUIDANCE MONITOR', 'dr-shamsul-alam'); ?></span>
                            <span class="tech-status"><span class="live-dot pulse-emerald"></span> <span id="tech-monitor-status"><?php _e('Active Sub-Millimeter Targeting', 'dr-shamsul-alam'); ?></span></span>
                        </div>
                        <div class="tech-screen" id="tech-screen-container">
                            <svg viewBox="0 0 320 220" class="tech-svg" id="tech-display-svg">
                                <rect width="320" height="220" fill="#F8FAFA" rx="8"/>
                                <!-- Grid Lines -->
                                <line x1="40" y1="0" x2="40" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
                                <line x1="160" y1="0" x2="160" y2="220" stroke="#7BAFC4" stroke-width="1.5"/>
                                <line x1="280" y1="0" x2="280" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
                                <line x1="0" y1="110" x2="320" y2="110" stroke="#7BAFC4" stroke-width="1.5"/>
                                <!-- Vertebral Profile Line -->
                                <path d="M 60 70 Q 110 50 160 70 T 260 70" fill="none" stroke="#5E6872" stroke-width="2"/>
                                <path d="M 60 140 Q 110 120 160 140 T 260 140" fill="none" stroke="#5E6872" stroke-width="2"/>
                                <!-- Needle Target Trajectory -->
                                <line x1="240" y1="30" x2="160" y2="110" stroke="#3D9C98" stroke-width="2.5"/>
                                <circle cx="160" cy="110" r="12" fill="none" stroke="#3D9C98" stroke-width="2"/>
                                <circle cx="160" cy="110" r="4" fill="#3D9C98"/>
                            </svg>
                        </div>
                        <div class="tech-footer-meta">
                            <span><?php _e('Target: Lumbar Facet Medial Branch', 'dr-shamsul-alam'); ?></span>
                            <span class="text-teal font-semibold"><?php _e('Accuracy: 99.8%', 'dr-shamsul-alam'); ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 11. TREATMENTS DIRECTORY (Pure White) -->
    <section class="section section-treatments animate-on-scroll" id="treatments">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('INTERVENTIONAL PROCEDURES', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Personalized Pain Management', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Evidence-based interventional therapies performed with minimal tissue disruption.', 'dr-shamsul-alam'); ?></p>
            </div>

            <div class="treatments-grid">
                <!-- T1 -->
                <div class="treatment-box">
                    <span class="treatment-type"><?php _e('Diagnostic & Interventional', 'dr-shamsul-alam'); ?></span>
                    <h3 class="treatment-title"><?php _e('Targeted Nerve Blocks', 'dr-shamsul-alam'); ?></h3>
                    <p class="treatment-summary"><?php _e('Targeted application of local anesthetic and anti-inflammatory agent near specific sensory nerve pathways to interrupt pain transmission.', 'dr-shamsul-alam'); ?></p>
                    <div class="benefit-box">
                        <strong><?php _e('Beneficial for:', 'dr-shamsul-alam'); ?></strong>
                        <p><?php _e('Facet arthropathy, cervicogenic headaches, and chronic knee osteoarthritic discomfort.', 'dr-shamsul-alam'); ?></p>
                    </div>
                    <button type="button" class="btn-link open-booking-modal" data-reason="Targeted Nerve Block">
                        <span><?php _e('Book Consultation', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="arrow-right" class="icon-tiny"></i>
                    </button>
                </div>

                <!-- T2 -->
                <div class="treatment-box">
                    <span class="treatment-type"><?php _e('Spine Intervention', 'dr-shamsul-alam'); ?></span>
                    <h3 class="treatment-title"><?php _e('Epidural Injections (Transforaminal)', 'dr-shamsul-alam'); ?></h3>
                    <p class="treatment-summary"><?php _e('Targeted anti-inflammatory medication delivered into the epidural space surrounding compressed spinal nerve roots under live fluoroscopy.', 'dr-shamsul-alam'); ?></p>
                    <div class="benefit-box">
                        <strong><?php _e('Beneficial for:', 'dr-shamsul-alam'); ?></strong>
                        <p><?php _e('Lumbar disc herniation, spinal stenosis, and severe radiating leg pain (sciatica).', 'dr-shamsul-alam'); ?></p>
                    </div>
                    <button type="button" class="btn-link open-booking-modal" data-reason="Epidural Injection">
                        <span><?php _e('Book Consultation', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="arrow-right" class="icon-tiny"></i>
                    </button>
                </div>

                <!-- T3 -->
                <div class="treatment-box">
                    <span class="treatment-type"><?php _e('Advanced Neurotomy', 'dr-shamsul-alam'); ?></span>
                    <h3 class="treatment-title"><?php _e('Radiofrequency Ablation (RFA)', 'dr-shamsul-alam'); ?></h3>
                    <p class="treatment-summary"><?php _e('High-precision thermal or pulsed radiofrequency energy safely desensitizes pain-transmitting sensory nerves for 6 to 18 months.', 'dr-shamsul-alam'); ?></p>
                    <div class="benefit-box">
                        <strong><?php _e('Beneficial for:', 'dr-shamsul-alam'); ?></strong>
                        <p><?php _e('Confirmed facet arthritis, severe knee arthritis, and chronic sacroiliac joint pain.', 'dr-shamsul-alam'); ?></p>
                    </div>
                    <button type="button" class="btn-link open-booking-modal" data-reason="Radiofrequency Ablation">
                        <span><?php _e('Book Consultation', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="arrow-right" class="icon-tiny"></i>
                    </button>
                </div>

                <!-- T4 -->
                <div class="treatment-box">
                    <span class="treatment-type"><?php _e('Musculoskeletal Care', 'dr-shamsul-alam'); ?></span>
                    <h3 class="treatment-title"><?php _e('Ultrasound-Guided Joint Injections', 'dr-shamsul-alam'); ?></h3>
                    <p class="treatment-summary"><?php _e('High-resolution sonographic needle tracking for direct delivery of viscosupplementation or medication into joints and bursa.', 'dr-shamsul-alam'); ?></p>
                    <div class="benefit-box">
                        <strong><?php _e('Beneficial for:', 'dr-shamsul-alam'); ?></strong>
                        <p><?php _e('Knee osteoarthritis, frozen shoulder (hydrodilatation), and trochanteric bursitis.', 'dr-shamsul-alam'); ?></p>
                    </div>
                    <button type="button" class="btn-link open-booking-modal" data-reason="Ultrasound Joint Injection">
                        <span><?php _e('Book Consultation', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="arrow-right" class="icon-tiny"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- 14. CHAMBERS & CLINIC SCHEDULES (Soft Ivory / Pale Blue) -->
    <section class="section section-chambers animate-on-scroll" id="chambers">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('PRACTICE LOCATIONS', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Chambers & Visiting Hours', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Select a convenient location in Dhaka for your personal clinical evaluation.', 'dr-shamsul-alam'); ?></p>
            </div>

            <div class="chambers-grid">
                <!-- Chamber 1: Dhanmondi -->
                <div class="chamber-card">
                    <div class="chamber-badge"><?php _e('DHANMONDI CHAMBER', 'dr-shamsul-alam'); ?></div>
                    <h3 class="chamber-name"><?php _e('Shamsul Pain & Spine Centre', 'dr-shamsul-alam'); ?></h3>
                    <p class="chamber-address"><?php _e('House 42, Road 9/A, Dhanmondi R/A, Dhaka 1209 (DEMO)', 'dr-shamsul-alam'); ?></p>
                    <div class="chamber-detail-row">
                        <i data-lucide="calendar" class="text-teal"></i>
                        <span><strong><?php _e('Days:', 'dr-shamsul-alam'); ?></strong> <?php _e('Saturday, Monday & Wednesday', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="clock" class="text-teal"></i>
                        <span><strong><?php _e('Timing:', 'dr-shamsul-alam'); ?></strong> <?php _e('6:00 PM – 9:00 PM', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="phone" class="text-teal"></i>
                        <span><strong><?php _e('Serial Desk:', 'dr-shamsul-alam'); ?></strong> <a href="tel:+8801716840850" style="color:inherit; text-decoration:none;">+880 1716 840850</a></span>
                    </div>
                    <div class="chamber-card-cta" style="display:flex; flex-direction:column; gap:8px;">
                        <button type="button" class="btn btn-primary btn-block open-booking-modal" data-chamber="Dhanmondi - Shamsul Pain & Spine Centre">
                            <?php _e('BOOK DHANMONDI APPOINTMENT', 'dr-shamsul-alam'); ?>
                        </button>
                        <a href="https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20team,%20I%20would%20like%20to%20inquire%20about%20Dhanmondi%20chamber%20serial." target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block" style="text-align:center; font-size:12px; padding:8px 12px; color:#25D366; border-color:#25D366;">
                            💬 <?php _e('Chat on WhatsApp', 'dr-shamsul-alam'); ?>
                        </a>
                    </div>
                </div>

                <!-- Chamber 2: Panthapath -->
                <div class="chamber-card">
                    <div class="chamber-badge"><?php _e('PANTHAPATH CHAMBER', 'dr-shamsul-alam'); ?></div>
                    <h3 class="chamber-name"><?php _e('Advanced Pain Care Centre', 'dr-shamsul-alam'); ?></h3>
                    <p class="chamber-address"><?php _e('Suite 502, Green Care Tower, 68 Panthapath, Dhaka 1205 (DEMO)', 'dr-shamsul-alam'); ?></p>
                    <div class="chamber-detail-row">
                        <i data-lucide="calendar" class="text-teal"></i>
                        <span><strong><?php _e('Days:', 'dr-shamsul-alam'); ?></strong> <?php _e('Sunday, Tuesday & Thursday', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="clock" class="text-teal"></i>
                        <span><strong><?php _e('Timing:', 'dr-shamsul-alam'); ?></strong> <?php _e('3:00 PM – 8:00 PM', 'dr-shamsul-alam'); ?></span>
                    </div>
                    <div class="chamber-detail-row">
                        <i data-lucide="phone" class="text-teal"></i>
                        <span><strong><?php _e('Serial Desk:', 'dr-shamsul-alam'); ?></strong> <a href="tel:+8801716840850" style="color:inherit; text-decoration:none;">+880 1716 840850</a></span>
                    </div>
                    <div class="chamber-card-cta" style="display:flex; flex-direction:column; gap:8px;">
                        <button type="button" class="btn btn-primary btn-block open-booking-modal" data-chamber="Panthapath - Advanced Pain Care Centre">
                            <?php _e('BOOK PANTHAPATH APPOINTMENT', 'dr-shamsul-alam'); ?>
                        </button>
                        <a href="https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20team,%20I%20would%20like%20to%20inquire%20about%20Panthapath%20chamber%20serial." target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block" style="text-align:center; font-size:12px; padding:8px 12px; color:#25D366; border-color:#25D366;">
                            💬 <?php _e('Chat on WhatsApp', 'dr-shamsul-alam'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 17 & 18. PATIENT EDUCATION & FAQ ACCORDION (Pure White) -->
    <section class="section section-education animate-on-scroll" id="education">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('PATIENT GUIDANCE & CLARITY', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Patient Education & FAQs', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Informed patients achieve superior long-term clinical outcomes.', 'dr-shamsul-alam'); ?></p>
            </div>

            <!-- FAQs Accordion -->
            <div class="faq-accordion-container">
                <div class="faq-item">
                    <button type="button" class="faq-trigger" aria-expanded="false">
                        <span><?php _e('What is the difference between a Pain Medicine Specialist and other doctors?', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="chevron-down" class="faq-icon"></i>
                    </button>
                    <div class="faq-panel">
                        <p><?php _e('A Pain Medicine Specialist is a physician with fellowship-level training dedicated to diagnosing and treating acute, complex, and persistent pain conditions using advanced image-guided minimally invasive techniques, treating the exact anatomical generator without major surgery.', 'dr-shamsul-alam'); ?></p>
                    </div>
                </div>

                <div class="faq-item">
                    <button type="button" class="faq-trigger" aria-expanded="false">
                        <span><?php _e('Are interventional pain procedures painful?', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="chevron-down" class="faq-icon"></i>
                    </button>
                    <div class="faq-panel">
                        <p><?php _e('Procedures are performed under local anesthesia in an outpatient sterile procedure suite. Most patients report feeling only a brief minor pinch during local numbing, followed by mild pressure as the needle is guided into position.', 'dr-shamsul-alam'); ?></p>
                    </div>
                </div>

                <div class="faq-item">
                    <button type="button" class="faq-trigger" aria-expanded="false">
                        <span><?php _e('What should I bring to my first consultation with Dr. Shamsul Alam?', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="chevron-down" class="faq-icon"></i>
                    </button>
                    <div class="faq-panel">
                        <p><?php _e('Please bring all prior diagnostic records including recent MRI or X-ray discs/films, blood test reports, surgical discharge summaries, and a complete list of current medications.', 'dr-shamsul-alam'); ?></p>
                    </div>
                </div>

                <div class="faq-item">
                    <button type="button" class="faq-trigger" aria-expanded="false">
                        <span><?php _e('How long does relief from radiofrequency ablation or epidural injections last?', 'dr-shamsul-alam'); ?></span>
                        <i data-lucide="chevron-down" class="faq-icon"></i>
                    </button>
                    <div class="faq-panel">
                        <p><?php _e('Response times vary. Epidural injections provide several months of symptom reduction allowing active physical rehabilitation. Radiofrequency ablation (RFA) can provide substantial relief lasting 6 to 18 months.', 'dr-shamsul-alam'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 16. TESTIMONIALS (Warm White) -->
    <section class="section section-testimonials animate-on-scroll">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('PATIENT EXPERIENCES', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Restoring Mobility & Daily Life', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Clinical feedback from patients who regained functional recovery (DEMO).', 'dr-shamsul-alam'); ?></p>
            </div>

            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="test-quote-mark">&ldquo;</div>
                    <p class="test-body"><?php _e('Dr. Shamsul Alam explained the root cause of my persistent shooting leg pain with incredible clarity using my MRI scan. The fluoroscopy-guided epidural injection gave me the relief needed to walk comfortably again.', 'dr-shamsul-alam'); ?></p>
                    <div class="test-author">
                        <strong><?php _e('M. R., Age 54 (Civil Engineer)', 'dr-shamsul-alam'); ?></strong>
                        <span class="test-condition"><?php _e('Condition: Lumbar Radiculopathy (DEMO)', 'dr-shamsul-alam'); ?></span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="test-quote-mark">&ldquo;</div>
                    <p class="test-body"><?php _e('I was struggling with stairs for almost three years. Rather than rushing into surgery, Dr. Alam performed targeted genicular nerve blocks. The difference in my daily mobility has been truly life-changing.', 'dr-shamsul-alam'); ?></p>
                    <div class="test-author">
                        <strong><?php _e('S. K., Age 62 (Retired Educator)', 'dr-shamsul-alam'); ?></strong>
                        <span class="test-condition"><?php _e('Condition: Knee Osteoarthritis (DEMO)', 'dr-shamsul-alam'); ?></span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="test-quote-mark">&ldquo;</div>
                    <p class="test-body"><?php _e('Years of desk posture had left me with debilitating daily neck tension and headaches. Dr. Alam’s meticulous examination identified the exact cervical facet issues. His calm manner immediately inspired trust.', 'dr-shamsul-alam'); ?></p>
                    <div class="test-author">
                        <strong><?php _e('A. H., Age 41 (Software Professional)', 'dr-shamsul-alam'); ?></strong>
                        <span class="test-condition"><?php _e('Condition: Cervicogenic Headaches (DEMO)', 'dr-shamsul-alam'); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 19. EDITORIAL BLOG / CLINICAL INSIGHTS (Pure White) -->
    <section class="section section-blog animate-on-scroll" id="insights">
        <div class="container">
            <div class="section-header-center">
                <span class="section-eyebrow"><?php _e('EDITORIAL INSIGHTS', 'dr-shamsul-alam'); ?></span>
                <h2 class="section-title"><?php _e('Physician Articles & Case Insights', 'dr-shamsul-alam'); ?></h2>
                <p class="section-lead"><?php _e('Scientific perspectives on pain pathophysiology and modern interventions.', 'dr-shamsul-alam'); ?></p>
            </div>

            <div class="blog-grid">
                <article class="blog-article">
                    <div class="article-cat"><?php _e('Back Pain · 4 min read', 'dr-shamsul-alam'); ?></div>
                    <h3 class="article-title"><?php _e('Understanding Facet Joint Arthropathy: Morning Back Stiffness', 'dr-shamsul-alam'); ?></h3>
                    <p class="article-excerpt"><?php _e('Why arching backwards worsens lower back pain, and how precision medial branch blocks identify arthritic spinal joints.', 'dr-shamsul-alam'); ?></p>
                    <span class="article-date"><?php _e('DEMO · Medical Insight', 'dr-shamsul-alam'); ?></span>
                </article>

                <article class="blog-article">
                    <div class="article-cat"><?php _e('Sciatica · 5 min read', 'dr-shamsul-alam'); ?></div>
                    <h3 class="article-title"><?php _e('Sciatica: Differentiating True Nerve Compression from Piriformis Syndrome', 'dr-shamsul-alam'); ?></h3>
                    <p class="article-excerpt"><?php _e('Not all shooting leg pain originates in the spinal column. Exploring deep gluteal nerve entrapment and diagnostic ultrasound.', 'dr-shamsul-alam'); ?></p>
                    <span class="article-date"><?php _e('DEMO · Medical Insight', 'dr-shamsul-alam'); ?></span>
                </article>

                <article class="blog-article">
                    <div class="article-cat"><?php _e('Joint Pain · 6 min read', 'dr-shamsul-alam'); ?></div>
                    <h3 class="article-title"><?php _e('Managing Knee Osteoarthritis Pain Without Early Joint Replacement', 'dr-shamsul-alam'); ?></h3>
                    <p class="article-excerpt"><?php _e('Exploring genicular nerve radiofrequency ablation and image-guided viscosupplementation for preserving joint mobility.', 'dr-shamsul-alam'); ?></p>
                    <span class="article-date"><?php _e('DEMO · Medical Insight', 'dr-shamsul-alam'); ?></span>
                </article>
            </div>
        </div>
    </section>

    <!-- 20. DRAMATIC FINAL CTA (Soft Teal Gradient: Pale Blue -> Soft Teal -> Warm White) -->
    <section class="section section-final-cta animate-on-scroll">
        <div class="container">
            <div class="final-cta-box">
                <span class="final-eyebrow"><?php _e('TAKE THE NEXT STEP', 'dr-shamsul-alam'); ?></span>
                <h2 class="final-title"><?php _e('Move Beyond Persistent Pain', 'dr-shamsul-alam'); ?></h2>
                <p class="final-lead"><?php _e('Schedule a focused clinical consultation with Dr. Shamsul Alam. Accurate diagnosis is the foundation of effective relief.', 'dr-shamsul-alam'); ?></p>
                <div class="final-actions">
                    <button type="button" class="btn btn-primary open-booking-modal" data-chamber="" data-reason="General Consultation">
                        <i data-lucide="calendar" class="icon-inline"></i>
                        <span><?php _e('BOOK AN APPOINTMENT', 'dr-shamsul-alam'); ?></span>
                    </button>
                    <a href="tel:+8801700000000" class="btn btn-outline">
                        <i data-lucide="phone" class="icon-inline"></i>
                        <span><?php _e('CALL CHAMBER DESK', 'dr-shamsul-alam'); ?></span>
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
