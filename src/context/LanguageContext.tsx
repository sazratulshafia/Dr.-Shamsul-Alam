import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.about': 'About Doctor',
    'nav.expertise': 'Expertise',
    'nav.treatments': 'Treatments',
    'nav.chambers': 'Chambers',
    'nav.education': 'Patient Guide',
    'nav.articles': 'Insights',
    'nav.contact': 'Contact',
    'nav.book': 'Book Appointment',
    'nav.wpTheme': 'WP Theme',
    'nav.copyHtml': 'Copy HTML Blocks',

    // Hero
    'hero.badge': 'PRECISION IN PAIN CARE',
    'hero.badge_sub': 'INTERVENTIONAL SPECIALIST',
    'hero.title': 'DR. SHAMSUL ALAM',
    'hero.specialty': 'Pain Medicine Specialist',
    'hero.subtitle': 'Helping patients understand, manage and move beyond persistent pain.',
    'hero.description': 'Providing evidence-based diagnostic clarity and targeted image-guided interventional therapies for complex spinal, nerve, and joint pain.',
    'hero.book_btn': 'BOOK AN APPOINTMENT',
    'hero.contact_btn': 'CONTACT DOCTOR',
    'hero.exp_val': '15+ Years',
    'hero.exp_label': 'Clinical Experience',
    'hero.precision_val': 'Precision Guidance',
    'hero.precision_label': 'C-Arm & Ultrasound',
    'hero.focus_val': 'Targeted Care',
    'hero.focus_label': 'Spine & Nerve Focus',
    'hero.card_badge': 'Interventional Pain Care',
    'hero.card_caption': 'Fluoroscopy & Ultrasound Precision Guidance',

    // Trust
    'trust.exp_title': '15+ Years Experience',
    'trust.exp_desc': 'Dedicated practice in advanced multidisciplinary pain diagnosis and precision interventional procedures.',
    'trust.guidance_title': 'Precision Image Guidance',
    'trust.guidance_desc': 'Targeted C-Arm fluoroscopy and high-resolution ultrasound for sub-millimeter needle accuracy.',
    'trust.evidence_title': 'Evidence-Based Protocols',
    'trust.evidence_desc': 'Non-surgical interventions adhering to international pain medicine guidelines (WIP, SIS, APS).',
    'trust.patient_title': 'Compassionate Patient-First',
    'trust.patient_desc': 'Individualized treatment mapping prioritizing functional mobility and root-cause relief.',

    // About
    'about.eyebrow': 'PHYSICIAN PROFILE',
    'about.title': 'Accurate Diagnosis Is The Foundation Of True Pain Relief',
    'about.bio1': 'Dr. Shamsul Alam is a distinguished Pain Medicine Specialist specializing in the diagnosis and minimally invasive interventional management of chronic and complex pain conditions.',
    'about.bio2': 'With extensive postgraduate qualifications and international training, his practice bridges precise neuro-anatomy with advanced image guidance technologies to identify exact pain generators.',
    'about.chambers_headline': 'Chambers & Schedule',
    'about.dhanmondi_timing': 'Sat, Mon, Wed · 6:00 PM – 9:00 PM',
    'about.panthapath_timing': 'Sun, Tue, Thu · 3:00 PM – 8:00 PM',

    // Expertise
    'expertise.eyebrow': 'CLINICAL SCOPE',
    'expertise.title': 'Conditions We Diagnose & Treat',
    'expertise.subtitle': 'Targeted evaluation and image-guided interventions for acute and long-standing musculoskeletal, spinal, and neurological pain conditions.',
    'tab.all': 'All Conditions',
    'tab.spine': 'Spine & Back',
    'tab.joints': 'Joints & Arthritis',
    'tab.nerves': 'Nerve Pain',
    'tab.musculoskeletal': 'Musculoskeletal',

    // Featured Treatment
    'featured.badge': 'INTERVENTIONAL SPOTLIGHT',
    'featured.title': 'Radiofrequency Ablation (RFA) & Targeted Nerve Blocks',
    'featured.lead': 'A clinically validated, non-surgical therapy providing sustained relief for chronic facet joint arthrosis and cervical or lumbar spine conditions by interrupting pain signals.',
    'featured.benefit1': 'Minimally invasive day-case procedure',
    'featured.benefit2': 'Real-time fluoroscopy (C-Arm) guidance',
    'featured.benefit3': '6 to 18 months of significant pain reduction',
    'featured.benefit4': 'Rapid return to daily physical functioning',

    // Treatments
    'treatments.eyebrow': 'PRECISION INTERVENTIONS',
    'treatments.title': 'Image-Guided Treatments',
    'treatments.subtitle': 'Modern non-surgical interventional options designed to target inflammation and break pain circuits without general anesthesia.',

    // Chambers
    'chambers.eyebrow': 'CHAMBERS & LOCATIONS',
    'chambers.title': 'Where to Consult Dr. Shamsul Alam',
    'chambers.subtitle': 'Convenient consultation locations across Dhaka with complete diagnostic and interventional facilities.',

    // Education
    'education.eyebrow': 'PATIENT GUIDE',
    'education.title': 'Understanding Your Pain',
    'education.subtitle': 'Empowering patients with clear explanations of pain mechanisms, diagnostic pathways, and what to expect during interventional procedures.',

    // Testimonials
    'testimonials.eyebrow': 'PATIENT STORIES',
    'testimonials.title': 'Restoring Mobility & Quality of Life',

    // Insights / Blog
    'blog.eyebrow': 'CLINICAL INSIGHTS',
    'blog.title': 'Articles & Pain Education',

    // Final CTA
    'cta.eyebrow': 'TAKE THE NEXT STEP',
    'cta.title': 'Move Beyond Persistent Pain',
    'cta.lead': 'Schedule a focused clinical consultation with Dr. Shamsul Alam. Accurate diagnosis is the foundation of effective relief.',
    'cta.book': 'BOOK AN APPOINTMENT',
    'cta.call': 'CALL CHAMBER DESK',

    // Booking Modal
    'modal.title': 'Book an Appointment',
    'modal.name': 'Patient Full Name',
    'modal.phone': 'Contact Phone Number',
    'modal.chamber': 'Preferred Chamber',
    'modal.date': 'Preferred Date',
    'modal.complaint': 'Primary Pain Complaint or Referring Diagnosis',
    'modal.submit': 'SUBMIT APPOINTMENT REQUEST',
    'modal.privacy': 'Your clinical details remain strictly private. Our clinic desk will phone you to confirm slot time.',
    'modal.success_title': 'Appointment Request Confirmed!',
    'modal.success_desc': 'Your request has been securely recorded. An instant notification has been dispatched to our clinic coordinator.',
    'modal.serial': 'Booking Serial Reference',
    'modal.wa_btn': 'Send Confirmation via WhatsApp',
    'modal.close': 'Close Window',

    // Footer
    'footer.brand_sub': 'Pain Medicine Specialist',
    'footer.bio': 'Dedicated to precision interventional pain management, utilizing image-guided techniques to accurately diagnose and alleviate complex acute and persistent pain conditions.',
    'footer.links_heading': 'CLINICAL DIRECTORY',
    'footer.chambers_heading': 'CHAMBER LOCATIONS',
    'footer.consultation_heading': 'CONSULTATION',
    'footer.disclaimer': 'Medical Disclaimer: This website provides general educational information about pain conditions and interventional therapies. It does not replace personal clinical evaluation by a qualified specialist.',
  },
  bn: {
    // Nav
    'nav.about': 'ডাক্তার পরিচিতি',
    'nav.expertise': 'ব্যথার চিকিৎসাসমূহ',
    'nav.treatments': 'চিকিৎসা পদ্ধতি',
    'nav.chambers': 'চেম্বার ও সময়সূচী',
    'nav.education': 'রোগীদের গাইড',
    'nav.articles': 'মেডিকেল আর্টিকেল',
    'nav.contact': 'যোগাযোগ',
    'nav.book': 'অ্যাপয়েন্টমেন্ট নিন',
    'nav.wpTheme': 'ওয়ার্ডপ্রেস থিম',
    'nav.copyHtml': 'এইচটিএমএল ব্লকস',

    // Hero
    'hero.badge': 'ব্যথামুক্ত জীবনের সুনির্দিষ্ট সমাধান',
    'hero.badge_sub': 'ইন্টারভেনশনাল পেইন স্পেশালিস্ট',
    'hero.title': 'ডাঃ শামসুল আলম',
    'hero.specialty': 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ',
    'hero.subtitle': 'দীর্ঘমেয়াদী ও জটিল ব্যথা সঠিকভাবে নির্ণয় ও আধুনিক পদ্ধতিতে নিরাময়ে নিবেদিত।',
    'hero.description': 'মেরুদণ্ড, কোমর, ঘাড়, হাঁটু ও স্নায়ুজনিত ব্যথায় সি-আর্ম ও আল্ট্রাসাউন্ড গাইডেড সুনির্দিষ্ট অত্যাধুনিক ইন্টারভেনশনাল চিকিৎসাসেবা প্রদান।',
    'hero.book_btn': 'অ্যাপয়েন্টমেন্ট বুক করুন',
    'hero.contact_btn': 'চেম্বারের সাথে যোগাযোগ',
    'hero.exp_val': '১৫+ বছর',
    'hero.exp_label': 'ক্লিনিক্যাল অভিজ্ঞতা',
    'hero.precision_val': 'ইমেজ গাইডেন্স',
    'hero.precision_label': 'সি-আর্ম ও আল্ট্রাসাউন্ড',
    'hero.focus_val': 'সুনির্দিষ্ট চিকিৎসা',
    'hero.focus_label': 'মেরুদণ্ড ও স্নায়ুর যত্ন',
    'hero.card_badge': 'ইন্টারভেনশনাল পেইন কেয়ার',
    'hero.card_caption': 'ফ্লুরোস্কোপি ও আল্ট্রাসাউন্ড প্রিসিশন গাইডেন্স',

    // Trust
    'trust.exp_title': '১৫+ বছরের অভিজ্ঞতা',
    'trust.exp_desc': 'উন্নত মাল্টিডিসিপ্লিনারি ব্যথা নির্ণয় ও আধুনিক নন-সার্জিক্যাল পদ্ধতিতে সফল চিকিৎসার দীর্ঘ অভিজ্ঞতা।',
    'trust.guidance_title': 'প্রিসিশন ইমেজ গাইডেন্স',
    'trust.guidance_desc': 'সি-আর্ম ফ্লুরোস্কোপি ও হাই-রেজোলিউশন আল্ট্রাসাউন্ডের মাধ্যমে নিখুঁতভাবে ব্যথার উৎসে চিকিৎসা।',
    'trust.evidence_title': 'আন্তর্জাতিক স্বীকৃত প্রটোকল',
    'trust.evidence_desc': 'আন্তর্জাতিক পেইন মেডিসিন গাইডলাইন (WIP, SIS) অনুসরণে অপারেশনের বিকল্প নিরাপদ চিকিৎসাসেবা।',
    'trust.patient_title': 'রোগী-বান্ধব আন্তরিক সেবা',
    'trust.patient_desc': 'প্রতিটি রোগীর সমস্যা আলাদাভাবে শুনে দীর্ঘমেয়াদী সুস্থতা ও কর্মক্ষমতা ফিরিয়ে আনার পরিকল্পনা।',

    // About
    'about.eyebrow': 'বিশেষজ্ঞ পরিচিতি',
    'about.title': 'সঠিক রোগ নির্ণয়ই দীর্ঘস্থায়ী ব্যথা নিরাময়ের প্রথম ধাপ',
    'about.bio1': 'ডাঃ শামসুল আলম একজন সুপরিচিত পেইন মেডিসিন বিশেষজ্ঞ, যিনি জটিল ও দীর্ঘমেয়াদী ব্যথার আধুনিক নন-সার্জিক্যাল চিকিৎসায় বিশেষভাবে পারদর্শী।',
    'about.bio2': 'উচ্চতর প্রশিক্ষণ ও অভিজ্ঞতার সমন্বয়ে তিনি আল্ট্রাসাউন্ড ও সি-আর্ম প্রযুক্তির সাহায্যে কোনো বড় অপারেশন ছাড়াই সরাসরি ব্যথার মূল উৎসে কার্যকর চিকিৎসা প্রদান করেন।',
    'about.chambers_headline': 'চেম্বার ও সময়সূচী',
    'about.dhanmondi_timing': 'শনি, সোম, বুধ · সন্ধ্যা ৬:০০ – রাত ৯:০০',
    'about.panthapath_timing': 'রবি, মঙ্গল, বৃহস্পতি · বিকাল ৩:০০ – রাত ৮:০০',

    // Expertise
    'expertise.eyebrow': 'চিকিৎসাসেবার ক্ষেত্র',
    'expertise.title': 'যেসব ব্যথার চিকিৎসা দেওয়া হয়',
    'expertise.subtitle': 'মেরুদণ্ড, কোমর, ঘাড়, হাঁটু ও স্নায়ুজনিত তীব্র বা দীর্ঘস্থায়ী ব্যথার আধুনিক ইন্টারভেনশনাল সমাধান।',
    'tab.all': 'সব ধরনের ব্যথা',
    'tab.spine': 'মেরুদণ্ড ও কোমর ব্যথা',
    'tab.joints': 'হাঁটু ও জয়েন্টের ব্যথা',
    'tab.nerves': 'স্নায়ু বা নার্ভের ব্যথা',
    'tab.musculoskeletal': 'পেশি ও হাড়ের ব্যথা',

    // Featured Treatment
    'featured.badge': 'বিশেষ চিকিৎসা পদ্ধতি',
    'featured.title': 'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA) ও নার্ভ ব্লক',
    'featured.lead': 'অপারেশনবিহীন এমন একটি আধুনিক চিকিৎসা পদ্ধতি যেখানে নিখুঁতভাবে ব্যথাবহনকারী নার্ভ সিগন্যাল বন্ধ করে রোগীকে দীর্ঘস্থায়ী আরাম প্রদান করা হয়।',
    'featured.benefit1': 'কোনো বড় কাটাছেঁড়া বা অপারেশনের প্রয়োজন নেই',
    'featured.benefit2': 'সি-আর্ম মেশিনের সরাসরি পর্যবেক্ষণে সুনির্দিষ্ট চিকিৎসা',
    'featured.benefit3': '৬ মাস থেকে দেড় বছর পর্যন্ত আরামদায়ক ব্যথা নিরাময়',
    'featured.benefit4': 'চিকিৎসার পরপরই স্বাভাবিক হাঁটাচলা ও বাড়ি ফেরা সম্ভব',

    // Treatments
    'treatments.eyebrow': 'অত্যাধুনিক ইন্টারভেনশন',
    'treatments.title': 'ইমেজ-গাইডেড চিকিৎসা পদ্ধতি',
    'treatments.subtitle': 'অ্যানেস্থেসিয়ার ঝুঁকি ছাড়াই ব্যথার উৎসে প্রদাহ কমিয়ে রোগীর স্বাভাবিক জীবনযাত্রা ফিরিয়ে আনার চিকিৎসাসমূহ।',

    // Chambers
    'chambers.eyebrow': 'চেম্বার ও লোকেশন',
    'chambers.title': 'ডাঃ শামসুল আলমের পরামর্শ নিন',
    'chambers.subtitle': 'ঢাকা শহরের কেন্দ্রস্থলে ধানমন্ডি ও পান্থপথে আধুনিক সুযোগ-সুবিধা সম্বলিত চেম্বার।',

    // Education
    'education.eyebrow': 'রোগীদের জন্য তথ্য',
    'education.title': 'আপনার ব্যথা সম্পর্কে জানুন',
    'education.subtitle': 'ব্যথার কারণ, প্রতিকার এবং ইন্টারভেনশনাল চিকিৎসার প্রক্রিয়া সম্পর্কে স্পষ্ট ধারণা ও সচেতনতামূলক নির্দেশিকা।',

    // Testimonials
    'testimonials.eyebrow': 'রোগীদের অভিজ্ঞতা',
    'testimonials.title': 'ব্যথামুক্ত হয়ে স্বাভাবিক জীবনে ফেরা মানুষের কথা',

    // Insights / Blog
    'blog.eyebrow': 'মেডিকেল পরামর্শ',
    'blog.title': 'ব্যথা ব্যবস্থাপনা বিষয়ক লেখা ও টিপস',

    // Final CTA
    'cta.eyebrow': 'সুস্থ জীবনের পথে একধাপ এগিয়ে যান',
    'cta.title': 'দীর্ঘদিনের ব্যথা নিয়ে আর কষ্ট নয়',
    'cta.lead': 'ডাঃ শামসুল আলমের পরামর্শের জন্য আজই সিরিয়াল বুক করুন। সঠিক রোগ নির্ণয়ই আপনাকে দেবে সুস্থতা।',
    'cta.book': 'অ্যাপয়েন্টমেন্ট বুক করুন',
    'cta.call': 'চেম্বারে সরাসরি কল করুন',

    // Booking Modal
    'modal.title': 'অ্যাপয়েন্টমেন্ট বুকিং',
    'modal.name': 'রোগীর পুরো নাম',
    'modal.phone': 'মোবাইল / যোগাযোগের নম্বর',
    'modal.chamber': 'পছন্দের চেম্বার নির্বাচন করুন',
    'modal.date': 'পরামর্শের সম্ভাব্য তারিখ',
    'modal.complaint': 'ব্যথার মূল লক্ষণ বা পূর্ববর্তী প্রেসক্রিপশন সংক্রান্ত তথ্য',
    'modal.submit': 'অ্যাপয়েন্টমেন্ট রিকোয়েস্ট জমা দিন',
    'modal.privacy': 'আপনার তথ্য সম্পূর্ণ গোপনীয় থাকবে। আমাদের চেম্বার সহকারী আপনাকে ফোন করে সময় নিশ্চিত করবেন।',
    'modal.success_title': 'বুকিং সফলভাবে সম্পন্ন হয়েছে!',
    'modal.success_desc': 'আপনার অনুরোধটি ডাটাবেজে সংরক্ষিত হয়েছে এবং চেম্বার কো-অর্ডিনেটরের কাছে ইমেইল পাঠানো হয়েছে।',
    'modal.serial': 'বুকিং সিরিয়াল রেফারেন্স',
    'modal.wa_btn': 'হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করুন',
    'modal.close': 'উইন্ডো বন্ধ করুন',

    // Footer
    'footer.brand_sub': 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ',
    'footer.bio': 'মেরুদণ্ড, হাড় ও স্নায়ুজনিত জটিল ব্যথায় সর্বাধুনিক ইমেজ-গাইডেড পদ্ধতিতে নিবেদিত চিকিৎসাসেবা।',
    'footer.links_heading': 'ক্লিনিক্যাল ডিরেক্টরি',
    'footer.chambers_heading': 'চেম্বার লোকেশন',
    'footer.consultation_heading': 'পরামর্শ সেবা',
    'footer.disclaimer': 'সতর্কীকরণ: এই ওয়েবসাইটের তথ্য কেবল জনসচেতনতার উদ্দেশ্যে। ব্যক্তিগত শারীরিক সমস্যার ক্ষেত্রে চিকিৎসকের সরাসরি পরামর্শ অপরিহার্য।',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('dr_shamsul_lang');
      return saved === 'bn' ? 'bn' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('dr_shamsul_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
