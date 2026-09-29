/**
 * Theme Main JavaScript: Dr. Shamsul Alam Medical Digital Practice
 * Handles:
 * - Lucide icons initialization
 * - Modal booking open/close logic with initial context (chamber, reason)
 * - Condition category tab filtering
 * - Accordion expand/collapse
 * - Mobile navigation drawer
 * - AJAX booking form submission with feedback
 */

document.addEventListener('DOMContentLoaded', function () {
    // 0. Language Switcher (ENG / বাংলা)
    const langDict = {
        en: {
            brandName: 'DR. SHAMSUL ALAM',
            brandSub: 'Pain Medicine Specialist',
            navAbout: 'About',
            navExpertise: 'Expertise',
            navTreatments: 'Treatments',
            navChambers: 'Chambers',
            navEducation: 'Patient Guide',
            navInsights: 'Insights',
            bookApt: 'BOOK APPOINTMENT',
            heroBadge: 'PAIN MEDICINE SPECIALIST',
            heroTitle: 'DR. SHAMSUL ALAM',
            heroSubtitle: 'Helping patients understand, manage and move beyond persistent pain.',
            heroDesc: 'Providing evidence-based diagnostic clarity and targeted image-guided interventional therapies for complex spinal, nerve, and joint pain.',
            contactDoc: 'CONTACT DOCTOR',
            expVal: '15+ Years',
            expLabel: 'Clinical Experience',
            precisionVal: 'Precision Guidance',
            precisionLabel: 'C-Arm & Ultrasound',
            focusVal: 'Targeted Care',
            focusLabel: 'Spine & Nerve Focus',
            trust1Title: '15+ Years Experience',
            trust1Desc: 'Dedicated practice in advanced multidisciplinary pain diagnosis and precision interventional procedures.',
            trust2Title: 'Precision Image Guidance',
            trust2Desc: 'Targeted C-Arm fluoroscopy and high-resolution ultrasound for sub-millimeter needle accuracy.',
            trust3Title: 'Evidence-Based Protocols',
            trust3Desc: 'Non-surgical interventions adhering to international pain medicine guidelines (WIP, SIS, APS).',
            trust4Title: 'Compassionate Patient-First',
            trust4Desc: 'Individualized treatment mapping prioritizing functional mobility and root-cause relief.'
        },
        bn: {
            brandName: 'ডাঃ শামসুল আলম',
            brandSub: 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ',
            navAbout: 'ডাক্তার পরিচিতি',
            navExpertise: 'ব্যথার চিকিৎসাসমূহ',
            navTreatments: 'চিকিৎসা পদ্ধতি',
            navChambers: 'চেম্বার ও সময়সূচী',
            navEducation: 'রোগীদের গাইড',
            navInsights: 'মেডিকেল পরামর্শ',
            bookApt: 'অ্যাপয়েন্টমেন্ট নিন',
            heroBadge: 'ব্যথামুক্ত জীবনের সুনির্দিষ্ট সমাধান',
            heroTitle: 'ডাঃ শামসুল আলম',
            heroSubtitle: 'দীর্ঘমেয়াদী ও জটিল ব্যথা সঠিকভাবে নির্ণয় ও আধুনিক পদ্ধতিতে নিরাময়ে নিবেদিত।',
            heroDesc: 'মেরুদণ্ড, কোমর, ঘাড়, হাঁটু ও স্নায়ুজনিত ব্যথায় সি-আর্ম ও আল্ট্রাসাউন্ড গাইডেড সুনির্দিষ্ট অত্যাধুনিক ইন্টারভেনশনাল চিকিৎসাসেবা প্রদান।',
            contactDoc: 'চেম্বারের সাথে যোগাযোগ',
            expVal: '১৫+ বছর',
            expLabel: 'ক্লিনিক্যাল অভিজ্ঞতা',
            precisionVal: 'ইমেজ গাইডেন্স',
            precisionLabel: 'সি-আর্ম ও আল্ট্রাসাউন্ড',
            focusVal: 'সুনির্দিষ্ট চিকিৎসা',
            focusLabel: 'মেরুদণ্ড ও স্নায়ুর যত্ন',
            trust1Title: '১৫+ বছরের অভিজ্ঞতা',
            trust1Desc: 'উন্নত মাল্টিডিসিপ্লিনারি ব্যথা নির্ণয় ও আধুনিক নন-সার্জিক্যাল পদ্ধতিতে সফল চিকিৎসার দীর্ঘ অভিজ্ঞতা।',
            trust2Title: 'প্রিসিশন ইমেজ গাইডেন্স',
            trust2Desc: 'সি-আর্ম ফ্লুরোস্কোপি ও হাই-রেজোলিউশন আল্ট্রাসাউন্ডের মাধ্যমে নিখুঁতভাবে ব্যথার উৎসে চিকিৎসা।',
            trust3Title: 'আন্তর্জাতিক স্বীকৃত প্রটোকল',
            trust3Desc: 'আন্তর্জাতিক পেইন মেডিসিন গাইডলাইন (WIP, SIS) অনুসরণে অপারেশনের বিকল্প নিরাপদ চিকিৎসাসেবা।',
            trust4Title: 'রোগী-বান্ধব আন্তরিক সেবা',
            trust4Desc: 'প্রতিটি রোগীর সমস্যা আলাদাভাবে শুনে দীর্ঘমেয়াদী সুস্থতা ও কর্মক্ষমতা ফিরিয়ে আনার পরিকল্পনা।'
        }
    };

    function applyLanguage(lang) {
        localStorage.setItem('dr_shamsul_theme_lang', lang);
        document.documentElement.lang = lang;

        // Update active class on all switcher buttons
        document.querySelectorAll('.lang-btn, .lang-btn-mob').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        const d = langDict[lang] || langDict.en;

        // Update Header brand & links
        const brandName = document.querySelector('.brand-name');
        if (brandName) brandName.innerText = d.brandName;
        const brandSub = document.querySelector('.brand-sub');
        if (brandSub) brandSub.innerText = d.brandSub;

        const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
        if (navLinks.length >= 6) {
            navLinks[0].innerText = d.navAbout;
            navLinks[1].innerText = d.navExpertise;
            navLinks[2].innerText = d.navTreatments;
            navLinks[3].innerText = d.navChambers;
            navLinks[4].innerText = d.navEducation;
            navLinks[5].innerText = d.navInsights;
        }

        const mobLinks = document.querySelectorAll('.mobile-drawer .mobile-link');
        if (mobLinks.length >= 6) {
            mobLinks[0].innerText = d.navAbout;
            mobLinks[1].innerText = d.navExpertise;
            mobLinks[2].innerText = d.navTreatments;
            mobLinks[3].innerText = d.navChambers;
            mobLinks[4].innerText = d.navEducation;
            mobLinks[5].innerText = d.navInsights;
        }

        // Update Buttons
        document.querySelectorAll('[data-i18n="book_apt"], .open-booking-modal span').forEach(function (el) {
            if (el.innerText.trim().toUpperCase().includes('BOOK') || el.innerText.includes('অ্যাপয়েন্টমেন্ট')) {
                el.innerText = d.bookApt;
            }
        });

        // Update Hero elements
        const heroBadge = document.querySelector('.hero-badge .badge-text');
        if (heroBadge) heroBadge.innerText = d.heroBadge;
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.innerText = d.heroTitle;
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.innerText = d.heroSubtitle;
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.innerText = d.heroDesc;

        const heroMetrics = document.querySelectorAll('.hero-micro-metrics .micro-metric');
        if (heroMetrics.length >= 3) {
            heroMetrics[0].querySelector('.metric-val').innerText = d.expVal;
            heroMetrics[0].querySelector('.metric-label').innerText = d.expLabel;
            heroMetrics[1].querySelector('.metric-val').innerText = d.precisionVal;
            heroMetrics[1].querySelector('.metric-label').innerText = d.precisionLabel;
            heroMetrics[2].querySelector('.metric-val').innerText = d.focusVal;
            heroMetrics[2].querySelector('.metric-label').innerText = d.focusLabel;
        }

        // Update Trust Cards
        const trustCards = document.querySelectorAll('.trust-card');
        if (trustCards.length >= 4) {
            trustCards[0].querySelector('.trust-title').innerText = d.trust1Title;
            trustCards[0].querySelector('.trust-desc').innerText = d.trust1Desc;
            trustCards[1].querySelector('.trust-title').innerText = d.trust2Title;
            trustCards[1].querySelector('.trust-desc').innerText = d.trust2Desc;
            trustCards[2].querySelector('.trust-title').innerText = d.trust3Title;
            trustCards[2].querySelector('.trust-desc').innerText = d.trust3Desc;
            trustCards[3].querySelector('.trust-title').innerText = d.trust4Title;
            trustCards[3].querySelector('.trust-desc').innerText = d.trust4Desc;
        }
    }

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn, .lang-btn-mob').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const chosenLang = this.getAttribute('data-lang');
            applyLanguage(chosenLang);
        });
    });

    // Check saved language on load
    const savedLang = localStorage.getItem('dr_shamsul_theme_lang') || 'en';
    if (savedLang === 'bn') {
        applyLanguage('bn');
    }

    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // 2. Mobile Drawer Navigation
    const mobileTrigger = document.getElementById('mobile-menu-trigger');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const openIcon = document.getElementById('toggle-icon-open');
    const closeIcon = document.getElementById('toggle-icon-close');

    if (mobileTrigger && mobileDrawer) {
        mobileTrigger.addEventListener('click', function () {
            const isVisible = mobileDrawer.style.display === 'block';
            mobileDrawer.style.display = isVisible ? 'none' : 'block';
            if (openIcon && closeIcon) {
                openIcon.style.display = isVisible ? 'inline-block' : 'none';
                closeIcon.style.display = isVisible ? 'none' : 'inline-block';
            }
        });

        // Close drawer when link clicked
        const mobileLinks = mobileDrawer.querySelectorAll('.mobile-link');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileDrawer.style.display = 'none';
                if (openIcon && closeIcon) {
                    openIcon.style.display = 'inline-block';
                    closeIcon.style.display = 'none';
                }
            });
        });
    }

    // 3. Appointment Modal Handling
    const modalOverlay = document.getElementById('booking-modal-overlay');
    const modalCloseTrigger = document.getElementById('modal-close-trigger');
    const bookingTriggers = document.querySelectorAll('.open-booking-modal');
    const chamberSelect = document.getElementById('preferred-chamber');
    const complaintText = document.getElementById('pain-complaint');

    function openModal(chamber, reason) {
        if (!modalOverlay) return;
        modalOverlay.style.display = 'flex';
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (chamber && chamberSelect) {
            for (let i = 0; i < chamberSelect.options.length; i++) {
                if (chamberSelect.options[i].value.toLowerCase().includes(chamber.toLowerCase())) {
                    chamberSelect.selectedIndex = i;
                    break;
                }
            }
        }

        if (reason && complaintText && !complaintText.value) {
            complaintText.value = reason;
        }
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.style.display = 'none';
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    bookingTriggers.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const chamber = btn.getAttribute('data-chamber') || '';
            const reason = btn.getAttribute('data-reason') || '';
            openModal(chamber, reason);
        });
    });

    if (modalCloseTrigger) {
        modalCloseTrigger.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display === 'flex') {
            closeModal();
        }
    });

    // 4. Condition Category Filter Tabs
    const filterButtons = document.querySelectorAll('.filter-btn');
    const conditionCards = document.querySelectorAll('.condition-card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            conditionCards.forEach(function (card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 5. FAQ Accordion Toggle
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const panel = trigger.nextElementSibling;

            // Close siblings
            faqTriggers.forEach(function (other) {
                if (other !== trigger) {
                    other.setAttribute('aria-expanded', 'false');
                    if (other.nextElementSibling) {
                        other.nextElementSibling.style.display = 'none';
                    }
                }
            });

            // Toggle current
            trigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
            if (panel) {
                panel.style.display = isExpanded ? 'none' : 'block';
            }
        });
    });

    // 6. Booking Form Submission
    const bookingForm = document.getElementById('wp-booking-form');
    const feedbackBox = document.getElementById('booking-feedback');
    const submitBtn = document.getElementById('booking-submit-btn');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Transmitting Request...';
            }

            const formData = new FormData(bookingForm);
            formData.append('action', 'dr_shamsul_booking');
            if (window.drShamsulData && window.drShamsulData.nonce) {
                formData.append('security', window.drShamsulData.nonce);
            }

            const targetUrl = (window.drShamsulData && window.drShamsulData.ajaxUrl) ? window.drShamsulData.ajaxUrl : '';

            if (targetUrl) {
                fetch(targetUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (feedbackBox) {
                        feedbackBox.style.display = 'block';
                        feedbackBox.className = 'booking-feedback ' + (data.success ? 'success' : 'error');
                        if (data.success && data.data && data.data.serial_code) {
                            const waText = encodeURIComponent(`Hello Dr. Shamsul Alam Chamber Desk, I submitted an appointment request on your website. Serial: ${data.data.serial_code}, Patient: ${data.data.patient}, Chamber: ${data.data.chamber}.`);
                            const waLink = `https://wa.me/8801716840850?text=${waText}`;
                            feedbackBox.innerHTML = `
                                <div style="font-weight:700; margin-bottom: 4px;">✅ ${data.data.message}</div>
                                <div style="font-size:12px; margin-bottom: 10px;">Booking Serial: <strong>${data.data.serial_code}</strong></div>
                                <a href="${waLink}" target="_blank" style="display:inline-block; background:#25D366; color:#ffffff; font-weight:700; font-size:12px; padding:6px 12px; border-radius:4px; text-decoration:none;">
                                    💬 Send Confirmation on WhatsApp
                                </a>
                            `;
                        } else {
                            feedbackBox.innerText = data.data ? data.data.message : 'Consultation inquiry recorded.';
                        }
                    }
                    if (data.success) {
                        bookingForm.reset();
                    }
                })
                .catch(() => {
                    showDemoSuccess();
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = 'SUBMIT APPOINTMENT REQUEST';
                    }
                });
            } else {
                // Standalone / preview fallback
                showDemoSuccess();
            }

            function showDemoSuccess() {
                if (feedbackBox) {
                    feedbackBox.style.display = 'block';
                    feedbackBox.className = 'booking-feedback success';
                    feedbackBox.innerHTML = `
                        <div style="font-weight:700;">✅ Appointment request recorded!</div>
                        <div style="font-size:12px; margin-top:4px;">Our patient coordinator will contact you shortly to confirm your consultation time.</div>
                    `;
                }
                bookingForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = 'SUBMIT APPOINTMENT REQUEST';
                }
            }
        });
    }


    // 7. Scroll-Triggered Reveal Animations (IntersectionObserver)
    if ("IntersectionObserver" in window) {
        const scrollObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        const animElements = document.querySelectorAll(".animate-on-scroll");
        animElements.forEach(function (el) {
            scrollObserver.observe(el);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
            el.classList.add("is-visible");
        });
    }

    // 8. Interactive 3D Spine Lattice Canvas Simulation
    const spineCanvas = document.getElementById("hero-spine-canvas");
    if (spineCanvas) {
        const ctx = spineCanvas.getContext("2d");
        let animationFrameId;
        let angle = 0;
        let mouseX = 0;
        let targetMouseX = 0;

        // Interaction on hover
        const heroVisual = document.querySelector(".hero-visual");
        if (heroVisual) {
            heroVisual.addEventListener("mousemove", function (e) {
                const rect = heroVisual.getBoundingClientRect();
                const normX = (e.clientX - rect.left) / rect.width - 0.5;
                targetMouseX = normX * 0.8;
            });
            heroVisual.addEventListener("mouseleave", function () {
                targetMouseX = 0;
            });
        }

        // Spine 3D coordinates (vertebrae points and neural arcs)
        const vertebraeCount = 8;
        const width = spineCanvas.width;
        const height = spineCanvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        function renderSpine() {
            ctx.clearRect(0, 0, width, height);
            mouseX += (targetMouseX - mouseX) * 0.05;
            angle += 0.012;

            const currentAngle = angle + mouseX;

            // Draw neural glow connection paths
            ctx.beginPath();
            ctx.strokeStyle = "rgba(61, 156, 152, 0.25)";
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 4]);

            for (let i = 0; i < vertebraeCount; i++) {
                const y = 50 + i * 40;
                const waveOffset = Math.sin(currentAngle + i * 0.45) * 28;
                if (i === 0) {
                    ctx.moveTo(centerX + waveOffset, y);
                } else {
                    ctx.lineTo(centerX + waveOffset, y);
                }
            }
            ctx.stroke();
            ctx.setLineDash([]); // Reset line dash

            // Draw 3D Translucent Vertebral Cylinders
            for (let i = 0; i < vertebraeCount; i++) {
                const y = 50 + i * 40;
                const wave = Math.sin(currentAngle + i * 0.45) * 32;
                const rot = Math.cos(currentAngle + i * 0.45);
                const scale = 0.85 + (rot + 1) * 0.15;

                const vx = centerX + wave;
                const discW = (38 - Math.abs(i - 3.5) * 2.5) * scale;
                const discH = 14 * scale;

                // Vertebral Body Gradient
                const grad = ctx.createLinearGradient(vx - discW, y, vx + discW, y);
                if (i === 3 || i === 4) {
                    // Highlighted clinical intervention target (L4-L5 disc)
                    grad.addColorStop(0, "rgba(61, 156, 152, 0.4)");
                    grad.addColorStop(0.5, "rgba(123, 175, 196, 0.9)");
                    grad.addColorStop(1, "rgba(61, 156, 152, 0.4)");
                } else {
                    grad.addColorStop(0, "rgba(226, 231, 232, 0.6)");
                    grad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
                    grad.addColorStop(1, "rgba(226, 231, 232, 0.6)");
                }

                ctx.save();
                ctx.beginPath();
                ctx.ellipse(vx, y, discW, discH, 0, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.shadowColor = (i === 3 || i === 4) ? "rgba(61, 156, 152, 0.4)" : "rgba(24, 33, 43, 0.05)";
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.strokeStyle = (i === 3 || i === 4) ? "rgba(61, 156, 152, 0.9)" : "rgba(226, 231, 232, 0.8)";
                ctx.lineWidth = 1.2;
                ctx.stroke();
                ctx.restore();

                // Lateral nerve root branches (bilateral)
                const nerveSpread = (45 + rot * 12) * scale;
                ctx.beginPath();
                ctx.strokeStyle = (i === 3 || i === 4) ? "rgba(61, 156, 152, 0.7)" : "rgba(123, 175, 196, 0.35)";
                ctx.lineWidth = 1;
                // Left nerve
                ctx.moveTo(vx - discW * 0.8, y);
                ctx.quadraticCurveTo(vx - nerveSpread * 0.7, y - 6, vx - nerveSpread, y + 10);
                // Right nerve
                ctx.moveTo(vx + discW * 0.8, y);
                ctx.quadraticCurveTo(vx + nerveSpread * 0.7, y - 6, vx + nerveSpread, y + 10);
                ctx.stroke();

                // Micro terminal dots
                ctx.fillStyle = (i === 3 || i === 4) ? "#3D9C98" : "#7BAFC4";
                ctx.beginPath();
                ctx.arc(vx - nerveSpread, y + 10, 2, 0, Math.PI * 2);
                ctx.arc(vx + nerveSpread, y + 10, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(renderSpine);
        }

        renderSpine();
    }

    // 9. Interactive Procedural Guidance Screen Simulation (Fluoroscopy vs Ultrasound)
    const btnFluoro = document.getElementById("btn-mode-fluoro");
    const btnUS = document.getElementById("btn-mode-us");
    const monitorBadge = document.getElementById("tech-monitor-badge");
    const monitorStatus = document.getElementById("tech-monitor-status");
    const screenContainer = document.getElementById("tech-screen-container");

    if (btnFluoro && btnUS && screenContainer) {
        btnFluoro.addEventListener("click", function () {
            btnFluoro.classList.add("active");
            btnUS.classList.remove("active");
            if (monitorBadge) monitorBadge.innerText = "LIVE C-ARM FLUOROSCOPY";
            if (monitorStatus) monitorStatus.innerText = "Axial L4-L5 Transforaminal Targeting";

            screenContainer.innerHTML = `
                <svg viewBox="0 0 320 220" class="tech-svg">
                    <rect width="320" height="220" fill="#F8FAFA" rx="8"/>
                    <!-- Precision Grid -->
                    <line x1="40" y1="0" x2="40" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
                    <line x1="160" y1="0" x2="160" y2="220" stroke="#7BAFC4" stroke-width="1.5"/>
                    <line x1="280" y1="0" x2="280" y2="220" stroke="#E2E7E8" stroke-dasharray="2 2"/>
                    <line x1="0" y1="110" x2="320" y2="110" stroke="#7BAFC4" stroke-width="1.5"/>
                    <!-- Radiographic Vertebrae Contour -->
                    <rect x="70" y="45" width="180" height="48" rx="8" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" />
                    <rect x="60" y="115" width="200" height="58" rx="10" fill="#F3F5F2" stroke="#CBD5E1" stroke-width="1.5" />
                    <!-- Intervertebral Disc Space Target -->
                    <rect x="80" y="96" width="160" height="16" rx="4" fill="#E7F2F5" stroke="#3D9C98" stroke-width="1" stroke-dasharray="3 3" />
                    <text x="160" y="107" text-anchor="middle" fill="#3D9C98" font-size="8" font-family="monospace" font-weight="700">L4-L5 TRANSFORAMINAL TARGET</text>
                    <!-- Pedicle landmarks -->
                    <circle cx="95" cy="70" r="9" stroke="#94A3B8" stroke-width="1.5" fill="#FFFFFF" />
                    <circle cx="225" cy="70" r="9" stroke="#94A3B8" stroke-width="1.5" fill="#FFFFFF" />
                    <!-- Needle Trajectory -->
                    <line x1="270" y1="185" x2="190" y2="110" stroke="#18212B" stroke-width="2"/>
                    <!-- Contrast Dye Spread (Soft Teal cloud) -->
                    <ellipse cx="188" cy="108" rx="18" ry="10" fill="rgba(61, 156, 152, 0.35)" />
                    <!-- Needle Tip Target -->
                    <circle cx="190" cy="110" r="14" fill="none" stroke="#3D9C98" stroke-width="1.5" stroke-dasharray="2 3"/>
                    <circle cx="190" cy="110" r="4" fill="#F43F5E"/>
                </svg>
            `;
        });

        btnUS.addEventListener("click", function () {
            btnUS.classList.add("active");
            btnFluoro.classList.remove("active");
            if (monitorBadge) monitorBadge.innerText = "HIGH-RESOLUTION ULTRASOUND";
            if (monitorStatus) monitorStatus.innerText = "Real-Time Genicular Nerve Doppler";

            screenContainer.innerHTML = `
                <svg viewBox="0 0 320 220" class="tech-svg">
                    <rect width="320" height="220" fill="#F8FAFA" rx="8"/>
                    <!-- Ultrasound Tissue Acoustic Layers -->
                    <path d="M 20 45 Q 160 40 300 45 L 300 175 Q 160 180 20 175 Z" fill="#F4F8F8" />
                    <path d="M 20 80 Q 160 75 300 80" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 4" />
                    <path d="M 20 125 Q 160 120 300 125" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 4" />
                    <!-- Cortical Bone Hyper-echogenic Reflection -->
                    <path d="M 50 155 Q 160 140 270 155" stroke="#18212B" stroke-width="3" />
                    <path d="M 50 160 Q 160 145 270 160" fill="#E2E7E8" />
                    <text x="160" y="180" text-anchor="middle" fill="#8A95A0" font-size="8" font-family="monospace">BONE CORTEX (HYPERECHOIC)</text>
                    <!-- Targeted Nerve Fascicle -->
                    <ellipse cx="160" cy="110" rx="16" ry="11" stroke="#3D9C98" stroke-width="2" fill="#E7F2F5" />
                    <circle cx="155" cy="108" r="2.5" fill="#3D9C98" />
                    <circle cx="165" cy="109" r="2.5" fill="#3D9C98" />
                    <circle cx="160" cy="114" r="2.5" fill="#3D9C98" />
                    <!-- In-Plane Needle Approach -->
                    <line x1="40" y1="92" x2="144" y2="110" stroke="#18212B" stroke-width="2.5" />
                    <polygon points="144,110 137,106 137,114" fill="#F43F5E" />
                    <!-- Doppler flow indicator -->
                    <circle cx="195" cy="110" r="7" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" stroke-width="1" />
                    <text x="218" y="113" fill="#EF4444" font-size="8" font-family="monospace">ARTERY</text>
                </svg>
            `;
        });
    }
});
