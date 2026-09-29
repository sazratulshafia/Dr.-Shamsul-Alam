/**
 * Medical Practice Data for Dr. Shamsul Alam - Pain Medicine Specialist
 * Structured for easy CMS / WordPress theme migration.
 * 
 * IMPORTANT: This is a DEMO PROJECT.
 * All demo credentials, schedules, and clinical educational items are clearly identified.
 */

export interface Condition {
  id: string;
  title: string;
  category: 'Spine' | 'Joints' | 'Nerves' | 'Musculoskeletal';
  shortDescription: string;
  clinicalOverview: string;
  commonSymptoms: string[];
  anatomicalFocus: string;
  potentialInterventions: string[];
}

export interface Treatment {
  id: string;
  title: string;
  classification: string;
  shortDescription: string;
  detailedOverview: string;
  whoMayBenefit: string[];
  procedureApproach: string;
  recoveryNote: string;
}

export interface Chamber {
  id: string;
  name: string;
  area: string;
  days: string;
  timing: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapCoords: { lat: number; lng: number };
  landmark: string;
}

export interface TimelineMilestone {
  yearRange: string;
  title: string;
  focus: string;
  institutionNote: string;
  category: 'Education' | 'Advanced Training' | 'Specialization' | 'Intervention' | 'Practice';
}

export interface EducationItem {
  id: string;
  title: string;
  type: 'video' | 'article';
  durationOrReadTime: string;
  summary: string;
  category: string;
  keyTakeaways: string[];
  isDemo: boolean;
}

export interface Testimonial {
  id: string;
  initials: string;
  patientContext: string;
  conditionTreated: string;
  quote: string;
  outcomeNote: string;
  isDemo: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Consultation' | 'Conditions' | 'Treatments' | 'Appointments';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Pain Management' | 'Back Pain' | 'Neck Pain' | 'Sciatica' | 'Joint Pain' | 'Patient Education';
  readTime: string;
  publishDate: string;
  excerpt: string;
  body: string[];
  isDemo: boolean;
}

export const DOCTOR_PROFILE = {
  name: "Dr. Shamsul Alam",
  honorific: "Dr.",
  specialty: "Pain Medicine Specialist",
  subSpecialty: "Interventional Pain Management & Musculoskeletal Care",
  positioningStatement: "Helping patients understand, manage and move beyond persistent pain.",
  biography: [
    "Dr. Shamsul Alam is a dedicated Pain Medicine Specialist with over 15 years of clinical practice focusing on the rigorous diagnosis and targeted interventional management of complex acute and persistent pain disorders.",
    "Trained in modern fluoroscopic and ultrasound-guided interventional pain techniques, his clinical philosophy centers on precision: identifying the exact pain generator rather than merely masking symptoms with high-dose systemic medications.",
    "His practice emphasizes compassionate, patient-centered care—integrating structured diagnostic blocks, minimally invasive procedures, physical rehabilitation coordination, and long-term functional recovery strategies."
  ],
  credentials: [
    { label: "Clinical Specialty", value: "Pain Medicine & Interventional Pain Care" },
    { label: "Experience", value: "15+ Years Clinical Practice (Demo)" },
    { label: "Focus Areas", value: "Spine, Sciatica, Joint & Neuropathic Disorders" },
    { label: "Approach", value: "Targeted, Image-Guided Interventions" }
  ],
  stats: [
    { value: "15+", label: "Years Experience", description: "Focused on pain medicine and functional recovery" },
    { value: "Precision", label: "Image-Guided Interventions", description: "Fluoroscopy and ultrasound targeting accuracy" },
    { value: "Multidisciplinary", label: "Care Model", description: "Integration with physical rehabilitation and medical therapy" },
    { value: "2", label: "Modern Chambers", description: "Dhanmondi and Panthapath practice locations" }
  ],
  phonePrimary: "+880 1716 840850",
  whatsappNumber: "+8801716840850",
  emailOfficial: "care@drshamsulalam.com",
  photoUrl: "https://sazratulhub.com/wp-content/uploads/2026/09/doctor_portrait.webp"
};

export const CONDITIONS_LIST: Condition[] = [
  {
    id: "chronic-back-pain",
    title: "Chronic Back Pain",
    category: "Spine",
    shortDescription: "Persistent lumbar or thoracic discomfort lasting beyond three months, originating from facet joints, discs, or muscular structures.",
    clinicalOverview: "Chronic back pain often stems from multifactorial origins including lumbar facet arthropathy, disc degeneration, sacroiliac dysfunction, or myofascial strain. Thorough physical examination paired with selective diagnostic injections helps isolate the primary pain generator.",
    commonSymptoms: ["Aching or sharp lower back stiffness", "Discomfort aggravated by prolonged sitting or standing", "Limited spinal range of motion"],
    anatomicalFocus: "Lumbar vertebrae L1-S1, facet joints, and paraspinal musculature",
    potentialInterventions: ["Medial branch nerve blocks", "Radiofrequency neurotomy", "Epidural steroid injections"]
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Cervical Spondylosis",
    category: "Spine",
    shortDescription: "Persistent cervical stiffness, tension, and radiating discomfort commonly related to postural strain, disc pathology, or facet inflammation.",
    clinicalOverview: "Cervical pain can significantly impair sleep and daily productivity. Interventional assessment clarifies whether symptoms originate from cervical facet joints, disc protrusions, or associated muscular trigger points.",
    commonSymptoms: ["Restricted head rotation", "Upper trapezius and shoulder aching", "Occipital tension headaches"],
    anatomicalFocus: "Cervical spine C2-C7, facet joints, and cervical nerve roots",
    potentialInterventions: ["Cervical medial branch blocks", "Trigger point injections", "Targeted physical therapy guidance"]
  },
  {
    id: "sciatica",
    title: "Sciatica & Radiculopathy",
    category: "Nerves",
    shortDescription: "Sharp, burning, or shooting pain traveling down the buttocks, thigh, and calf due to lumbar nerve root irritation.",
    clinicalOverview: "Sciatica arises when lumbar or sacral nerve roots are mechanically compressed or chemically irritated by a herniated disc, spinal stenosis, or spondylolisthesis.",
    commonSymptoms: ["Radiating electric shock or burning sensation", "Pins-and-needles numbness in foot or toes", "Increased pain during coughing or bending forward"],
    anatomicalFocus: "L4, L5, S1 spinal nerve roots forming the sciatic nerve",
    potentialInterventions: ["Transforaminal epidural injections", "Selective nerve root blocks", "Anti-neuropathic medical therapy"]
  },
  {
    id: "slip-disc",
    title: "Slip Disc Related Pain",
    category: "Spine",
    shortDescription: "Intervertebral disc displacement leading to local annular tearing and adjacent neural compression in the spine.",
    clinicalOverview: "When the outer annulus fibrosus weakens, nucleus pulposus material can bulge or extrude, creating acute inflammatory chemical radiculitis and mechanical nerve compression.",
    commonSymptoms: ["Sudden severe lumbar or cervical pain", "Shooting radiating pain with leg weakness", "Inability to maintain straight posture"],
    anatomicalFocus: "Intervertebral disc annulus and nucleus pulposus",
    potentialInterventions: ["Epidural steroid delivery", "Fluoroscopic targeted nerve blocks", "Structured core stabilization protocol"]
  },
  {
    id: "knee-pain",
    title: "Knee Pain & Osteoarthritis",
    category: "Joints",
    shortDescription: "Progressive cartilage thinning, subchondral changes, and joint stiffness limiting walking tolerance and stair climbing.",
    clinicalOverview: "Osteoarthritis of the knee causes debilitating chronic pain. When conservative oral medications provide inadequate relief or cause gastrointestinal side effects, targeted interventional therapies offer valuable joint preservation.",
    commonSymptoms: ["Morning joint stiffness", "Cracking or grinding sensation (crepitus)", "Pain worsening after weight-bearing activity"],
    anatomicalFocus: "Tibiofemoral and patellofemoral articulating spaces, genicular nerves",
    potentialInterventions: ["Genicular nerve blocks & radiofrequency ablation", "Intra-articular viscosupplementation", "Corticosteroid joint injections"]
  },
  {
    id: "arthritis-pain",
    title: "Arthritis & Degenerative Pain",
    category: "Joints",
    shortDescription: "Inflammatory or degenerative changes across axial and peripheral joints causing chronic stiffness and immobility.",
    clinicalOverview: "Whether osteoarthritis, rheumatoid arthritis, or spondyloarthropathy, persistent joint inflammation requires a balanced approach combining disease control with localized symptom modulation.",
    commonSymptoms: ["Joint warmth and swelling", "Reduced functional mobility", "Flaring discomfort during weather fluctuations"],
    anatomicalFocus: "Axial joints, peripheral large and small articulations",
    potentialInterventions: ["Ultrasound-guided joint aspirations & injections", "Multimodal non-opioid pharmacotherapy"]
  },
  {
    id: "neuropathic-pain",
    title: "Neuropathic Pain & Neuralgias",
    category: "Nerves",
    shortDescription: "Pain generated by damaged or dysfunctional nervous tissue, characterized by burning, allodynia, or hyperalgesia.",
    clinicalOverview: "Includes conditions such as post-herpetic neuralgia, diabetic peripheral neuropathy, trigeminal neuralgia, and post-surgical persistent pain. Neuropathic pain responds poorly to conventional analgesics.",
    commonSymptoms: ["Hypersensitivity to light touch (allodynia)", "Burning or freezing sensations", "Unpredictable electric jabbing sensations"],
    anatomicalFocus: "Peripheral sensory nerves and central pain pathways",
    potentialInterventions: ["Diagnostic sympathetic blocks", "Peripheral nerve stimulation assessment", "Membrane-stabilizing pharmacotherapy"]
  },
  {
    id: "shoulder-pain",
    title: "Shoulder Pain & Rotator Cuff Tendinopathy",
    category: "Musculoskeletal",
    shortDescription: "Discomfort during arm elevation, frozen shoulder (adhesive capsulitis), and subacromial impingement syndromes.",
    clinicalOverview: "Complex shoulder biomechanics make accurate anatomical localization critical. Ultrasound examination helps differentiate rotator cuff tears, subacromial bursitis, and adhesive capsulitis.",
    commonSymptoms: ["Inability to sleep on the affected shoulder", "Sharp pain when reaching overhead or behind the back", "Progressive loss of active shoulder elevation"],
    anatomicalFocus: "Glenohumeral joint, subacromial space, suprascapular nerve",
    potentialInterventions: ["Suprascapular nerve blocks", "Ultrasound-guided subacromial bursa injection", "Glenohumeral joint distension (hydrodilatation)"]
  },
  {
    id: "joint-pain",
    title: "Sacroiliac & Hip Joint Pain",
    category: "Joints",
    shortDescription: "Deep buttock, groin, and pelvic pain often masquerading as lumbar spine or sciatica symptoms.",
    clinicalOverview: "Sacroiliac joint (SIJ) dysfunction is a frequently overlooked source of low back and buttock pain. Precise fluoroscopic diagnostic injection is the gold standard for confirmation.",
    commonSymptoms: ["Unilateral buttock pain", "Difficulty transitioning from sitting to standing", "Pain aggravated by climbing stairs"],
    anatomicalFocus: "Sacroiliac joint articulation and lateral branch innervation",
    potentialInterventions: ["Fluoroscopy-guided SI joint injection", "Lateral branch radiofrequency neurotomy"]
  },
  {
    id: "chronic-musculoskeletal-pain",
    title: "Chronic Musculoskeletal Pain & Myofascial Syndromes",
    category: "Musculoskeletal",
    shortDescription: "Widespread or regional muscle trigger points, chronic posture-related fatigue, and soft-tissue pain syndromes.",
    clinicalOverview: "Prolonged muscular guarding secondary to injury or postural imbalance develops into tender, hyper-irritable taut bands (trigger points) that refer pain across distant anatomical regions.",
    commonSymptoms: ["Deep aching muscle heaviness", "Identifiable localized trigger points with referral pain", "Chronic postural exhaustion"],
    anatomicalFocus: "Deep fascial planes and axial postural muscle groups",
    potentialInterventions: ["Dry needling and trigger point injections", "Targeted muscle conditioning plans"]
  }
];

export const TREATMENTS_LIST: Treatment[] = [
  {
    id: "interventional-pain-management",
    title: "Interventional Pain Management",
    classification: "Diagnostic & Therapeutic",
    shortDescription: "Minimally invasive, image-guided procedures designed to interrupt pain signals directly at their anatomical origin.",
    detailedOverview: "Interventional pain management utilizes advanced real-time fluoroscopic (X-ray) or ultrasound guidance to deliver precise medication or therapeutic energy directly to injured nerves, discs, or joints, minimizing systemic medication side effects.",
    whoMayBenefit: [
      "Patients with chronic spinal pain unresponsive to standard oral medications",
      "Individuals seeking non-surgical alternatives for nerve or joint pain",
      "Patients needing precise diagnostic confirmation of pain generators"
    ],
    procedureApproach: "Performed in an outpatient sterile procedure suite under local anesthesia with continuous hemodynamic monitoring.",
    recoveryNote: "Most patients return home within 1–2 hours after observation."
  },
  {
    id: "nerve-blocks",
    title: "Targeted Nerve Blocks",
    classification: "Diagnostic & Interventional",
    shortDescription: "Targeted application of local anesthetic and anti-inflammatory agent near specific sensory nerve pathways.",
    detailedOverview: "Nerve blocks serve both as an invaluable diagnostic tool (confirming whether a specific nerve transmits the patient's pain) and as an effective therapeutic measure providing lasting symptomatic relief.",
    whoMayBenefit: [
      "Suspected facet joint arthropathy (Medial Branch Blocks)",
      "Occipital neuralgia and cervicogenic headaches",
      "Chronic knee osteoarthritis (Genicular Nerve Blocks)"
    ],
    procedureApproach: "Ultra-thin needles guided by continuous real-time imaging to ensure micro-millimeter precision.",
    recoveryNote: "Minimal downtime; immediate assessment of post-injection pain reduction."
  },
  {
    id: "epidural-injection",
    title: "Epidural Injections (Transforaminal & Interlaminar)",
    classification: "Spine Intervention",
    shortDescription: "Targeted anti-inflammatory medication delivered into the epidural space surrounding compressed spinal nerves.",
    detailedOverview: "Epidural steroid injections (ESIs) deliver potent anti-inflammatory agents directly to the site of disc herniation or spinal stenosis. Contrast dye injection verifies exact spread before therapeutic administration.",
    whoMayBenefit: [
      "Lumbar or cervical disc herniation causing radiculopathy",
      "Lumbar spinal canal stenosis with claudication symptoms",
      "Post-surgical persistent radicular pain"
    ],
    procedureApproach: "Transforaminal approach under live fluoroscopy with digital subtraction angiography to safeguard vascular structures.",
    recoveryNote: "Rapid return to daily routine; gradual reduction of radiating leg or arm pain over 3 to 10 days."
  },
  {
    id: "radiofrequency-treatment",
    title: "Radiofrequency Ablation (RFA)",
    classification: "Advanced Neurotomy",
    shortDescription: "High-precision thermal or pulsed radiofrequency energy used to safely desensitize pain-transmitting sensory nerves.",
    detailedOverview: "When diagnostic nerve blocks yield temporary pain reduction, radiofrequency ablation can provide long-lasting relief (typically 6 to 18 months) by gently stunning the tiny sensory nerve fibers that transmit joint pain.",
    whoMayBenefit: [
      "Confirmed facet joint arthritis of the neck or low back",
      "Severe knee osteoarthritis ineligible for or awaiting total knee replacement",
      "Chronic sacroiliac joint pain"
    ],
    procedureApproach: "Specialized insulated electrodes deliver controlled radiofrequency energy with sensory and motor stimulation testing for utmost patient safety.",
    recoveryNote: "Outpatient procedure; mild local soreness for 48 hours followed by progressive relief."
  },
  {
    id: "joint-injections",
    title: "Ultrasound-Guided Joint Injections",
    classification: "Musculoskeletal Intervention",
    shortDescription: "Direct therapeutic delivery into knee, shoulder, hip, or sacroiliac joints using high-resolution ultrasound.",
    detailedOverview: "Ultrasound guidance provides real-time visualization of soft tissues, tendons, and cartilage, guaranteeing 100% intra-articular accuracy without radiation exposure.",
    whoMayBenefit: [
      "Osteoarthritis of the knee, shoulder, or hip",
      "Adhesive capsulitis (frozen shoulder) requiring hydrodilatation",
      "Trochanteric bursitis and tendinopathies"
    ],
    procedureApproach: "Non-radiation dynamic sonographic visualization with needle trajectory tracking.",
    recoveryNote: "Gentle activity on the same day; ice application as directed."
  },
  {
    id: "chronic-pain-management",
    title: "Comprehensive Chronic Pain Care",
    classification: "Multidisciplinary",
    shortDescription: "Evidence-based, whole-patient management plan balancing interventional care, physical conditioning, and medications.",
    detailedOverview: "Persistent pain involves complex neural remodeling. Dr. Shamsul Alam designs structured care plans aimed at improving quality of life, restoring sleep, and progressively reclaiming functional independence.",
    whoMayBenefit: [
      "Patients managing pain lasting over 6 months",
      "Individuals experiencing systemic medication side effects",
      "Patients requiring post-operative pain rehabilitation"
    ],
    procedureApproach: "Initial comprehensive clinical interview, symptom mapping, and periodic milestone reviews.",
    recoveryNote: "Collaborative and iterative care model."
  },
  {
    id: "spine-pain-management",
    title: "Spine Pain Management",
    classification: "Axial Care",
    shortDescription: "Dedicated pathway for complex cervical, thoracic, and lumbar spine disorders avoiding unnecessary major surgery.",
    detailedOverview: "Focuses on identifying which spinal component—facet, disc, ligament, or nerve—is driving symptoms, followed by least-invasive targeted interventions.",
    whoMayBenefit: [
      "Persistent back stiffness after injury or repetitive strain",
      "Degenerative disc disease",
      "Spondylosis and spinal stenosis"
    ],
    procedureApproach: "Systematic diagnostic algorithms combining imaging findings with clinical provocative testing.",
    recoveryNote: "Designed to preserve spinal mobility and reduce reliance on bed rest."
  },
  {
    id: "neuropathic-pain-management",
    title: "Neuropathic Pain Management",
    classification: "Nerve Care",
    shortDescription: "Specialized therapy addressing nerve damage, post-shingles pain, and peripheral nerve neuropathies.",
    detailedOverview: "Targeting hyperactive nervous system signals through multimodal neuro-modulating agents, topical patches, and selective sympathetic or somatic nerve blocks.",
    whoMayBenefit: [
      "Post-herpetic neuralgia (after shingles)",
      "Diabetic painful neuropathy",
      "Trigeminal neuralgia and peripheral nerve entrapments"
    ],
    procedureApproach: "Carefully calibrated titration of membrane stabilizers alongside targeted regional blocks.",
    recoveryNote: "Close outpatient follow-up to optimize clinical comfort."
  }
];

export const CHAMBERS_LIST: Chamber[] = [
  {
    id: "dhanmondi",
    name: "Shamsul Pain & Spine Centre",
    area: "Dhanmondi, Dhaka",
    days: "Saturday, Monday & Wednesday",
    timing: "6:00 PM – 9:00 PM",
    address: "House 42, Road 9/A, Dhanmondi R/A, Dhaka 1209 (DEMO)",
    phone: "+880 1716 840850",
    whatsapp: "+8801716840850",
    mapCoords: { lat: 23.7465, lng: 90.3760 },
    landmark: "Near Dhanmondi Lake & Road 9/A Medical Hub"
  },
  {
    id: "panthapath",
    name: "Advanced Pain Care Centre",
    area: "Panthapath, Dhaka",
    days: "Sunday, Tuesday & Thursday",
    timing: "3:00 PM – 8:00 PM",
    address: "Suite 502, Green Care Tower, 68 Panthapath, Dhaka 1205 (DEMO)",
    phone: "+880 1716 840850",
    whatsapp: "+8801716840850",
    mapCoords: { lat: 23.7512, lng: 90.3881 },
    landmark: "Opposite to Square Hospital Intersection"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    yearRange: "Foundation",
    title: "Medical Education",
    focus: "Undergraduate Medical Degree (MBBS)",
    institutionNote: "Rigorous clinical medical education and foundational hospital internships in internal medicine and surgery (DEMO).",
    category: "Education"
  },
  {
    yearRange: "Residency",
    title: "Advanced Clinical Training",
    focus: "Post-Graduate Specialty Residency",
    institutionNote: "Intensive training in anesthesiology, acute perioperative management, critical care, and physiological monitoring (DEMO).",
    category: "Advanced Training"
  },
  {
    yearRange: "Subspecialty",
    title: "Pain Medicine Fellowship",
    focus: "Specialized Training in Chronic Pain Pathophysiology",
    institutionNote: "Dedicated focus on neuroanatomy, pain signaling pathways, pharmacological management, and multimodal patient rehabilitation (DEMO).",
    category: "Specialization"
  },
  {
    yearRange: "Interventions",
    title: "Interventional Pain Training",
    focus: "Image-Guided Interventions (Fluoroscopy & Ultrasound)",
    institutionNote: "Comprehensive procedural mastery in spinal epidurals, facet neurotomy, radiofrequency ablation, and joint injections (DEMO).",
    category: "Intervention"
  },
  {
    yearRange: "Present",
    title: "Current Clinical Practice",
    focus: "Senior Consultant in Pain Medicine",
    institutionNote: "Leading specialized clinical chambers in Dhanmondi and Panthapath, providing compassionate patient consultations and precision interventional care.",
    category: "Practice"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "t-1",
    initials: "M. R.",
    patientContext: "Age 54, Civil Engineer",
    conditionTreated: "Chronic Lumbar Radiculopathy & L5-S1 Disc Herniation",
    quote: "Dr. Shamsul Alam explained the root cause of my persistent shooting leg pain with incredible clarity using my MRI scan. The fluoroscopy-guided epidural injection gave me the relief needed to walk comfortably again without relying on heavy daily painkillers.",
    outcomeNote: "Returned to regular site inspections after targeted spinal intervention and rehabilitation.",
    isDemo: true
  },
  {
    id: "t-2",
    initials: "S. K.",
    patientContext: "Age 62, Retired Educator",
    conditionTreated: "Bilateral Knee Osteoarthritis & Mobility Limitation",
    quote: "I was struggling with stairs for almost three years. Rather than rushing into surgery, Dr. Alam performed targeted genicular nerve blocks. The difference in my daily mobility and morning comfort has been truly life-changing.",
    outcomeNote: "Resumed daily morning walks with significantly reduced pain scores.",
    isDemo: true
  },
  {
    id: "t-3",
    initials: "A. H.",
    patientContext: "Age 41, Software Professional",
    conditionTreated: "Cervicogenic Headaches & Upper Neck Strain",
    quote: "Years of desk posture had left me with debilitating daily neck tension and headaches. Dr. Alam’s meticulous clinical examination identified the exact cervical facet issues. His calm, methodical manner immediately inspired trust.",
    outcomeNote: "Substantial reduction in headache frequency alongside posture correction therapy.",
    isDemo: true
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "edu-1",
    title: "Understanding Chronic Back Pain: Beyond the X-Ray",
    type: "video",
    durationOrReadTime: "12 min clinical lecture",
    summary: "Dr. Shamsul Alam explains why radiographic disc degeneration does not always equate to pain, and how precise anatomical testing uncovers the actual pain driver.",
    category: "Spine Health",
    keyTakeaways: [
      "Disc changes on MRI are common and often benign",
      "Facet joints, ligaments, and nerves must be clinically evaluated",
      "Diagnostic blocks provide definitive clarity before major interventions"
    ],
    isDemo: true
  },
  {
    id: "edu-2",
    title: "When Should You See a Pain Medicine Specialist?",
    type: "article",
    durationOrReadTime: "5 min clinical read",
    summary: "A practical guide outlining clinical red flags, timelines for persistent pain, and how specialized interventional care bridges the gap between medications and surgery.",
    category: "Consultation Guide",
    keyTakeaways: [
      "Pain persisting beyond 6 to 12 weeks requires specialized investigation",
      "Radiating numbness, weakness, or burning signals nerve involvement",
      "Early targeted intervention prevents chronic central sensitization"
    ],
    isDemo: true
  },
  {
    id: "edu-3",
    title: "Sciatica: Causes, Myths, and Evidence-Based Treatment Options",
    type: "video",
    durationOrReadTime: "15 min video guide",
    summary: "An in-depth anatomical review of sciatic nerve compression, dispelling common misconceptions regarding bed rest and detailing transforaminal epidural benefits.",
    category: "Nerve Disorders",
    keyTakeaways: [
      "Prolonged bed rest can worsen sciatica recovery",
      "Image-guided transforaminal injections reduce localized inflammation",
      "Dynamic physical therapy should be initiated once acute pain is calmed"
    ],
    isDemo: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the difference between a Pain Medicine Specialist and other doctors?",
    answer: "A Pain Medicine Specialist is a physician who has undergone fellowship-level training dedicated specifically to diagnosing and treating acute, complex, and persistent pain conditions. While general practitioners prescribe medications and surgeons focus on operative reconstruction, an interventional pain specialist employs advanced image-guided minimally invasive techniques to treat the exact anatomical pain generator without major open surgery.",
    category: "Consultation"
  },
  {
    id: "faq-2",
    question: "Are interventional pain procedures painful?",
    answer: "Procedures are performed under local anesthesia in a sterile outpatient suite. Most patients report feeling only a brief minor pinch during local numbing, followed by mild pressure as the thin needle is guided into position. Our clinical team continuously monitors patient comfort throughout the procedure.",
    category: "Treatments"
  },
  {
    id: "faq-3",
    question: "What should I bring to my first consultation with Dr. Shamsul Alam?",
    answer: "Please bring all prior diagnostic records including recent MRI or X-ray discs/films, blood test reports, surgical discharge summaries, and a complete list of all medications you currently take. Having your clinical history organized helps us make the most of your consultation.",
    category: "Appointments"
  },
  {
    id: "faq-4",
    question: "How do I know if my back pain requires an interventional injection?",
    answer: "Injections are typically considered when persistent back or radiating leg pain has not resolved with standard rest, medication, or physical therapy, or when pain is too severe to participate in physical rehabilitation. An injection is also used diagnostically to pinpoint whether a facet joint or nerve root is responsible.",
    category: "Conditions"
  },
  {
    id: "faq-5",
    question: "Does receiving a nerve block mean I will never need surgery?",
    answer: "Interventional pain procedures aim to relieve severe inflammation and reduce pain so the body can heal naturally and engage in rehabilitation. In many cases, patients successfully avoid major surgery; in cases where progressive neurological deficits exist, we coordinate prompt surgical referral with neurosurgeons or orthopedic spine surgeons.",
    category: "Treatments"
  },
  {
    id: "faq-6",
    question: "How long does relief from radiofrequency ablation or epidural injections last?",
    answer: "Response times vary based on the underlying anatomical condition. Epidural injections often provide several months of symptom reduction, allowing active physical therapy. Radiofrequency ablation (RFA) can provide substantial relief lasting between 6 to 18 months, as sensory nerve endings take time to regenerate.",
    category: "Treatments"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Understanding Facet Joint Arthropathy: The Hidden Culprit in Morning Back Stiffness",
    slug: "understanding-facet-joint-arthropathy",
    category: "Back Pain",
    readTime: "4 min read",
    publishDate: "DEMO · Oct 2026",
    excerpt: "Why arching backwards worsens your lower back pain, and how precision medial branch blocks identify arthritic spinal joints.",
    body: [
      "Many patients with persistent lower back pain find that standing for prolonged periods or bending backwards triggers an intense, dull ache in the lumbar region.",
      "The lumbar facet joints are small stabilizing hinge joints connecting adjacent vertebrae. Like knees and hips, they are lined with cartilage and surrounded by a capsule that can undergo osteoarthritis.",
      "Because standard MRI reports often mention multiple disc bulges, the facet joints are easily overlooked. Through selective diagnostic medial branch blocks, we test whether numbing the sensory nerve of the facet relieves pain immediately.",
      "If the test is positive, radiofrequency neurotomy can provide prolonged relief, breaking the cycle of chronic spasm and spinal stiffness."
    ],
    isDemo: true
  },
  {
    id: "blog-2",
    title: "Sciatica: Differentiating True Nerve Compression from Piriformis Syndrome",
    slug: "sciatica-vs-piriformis-syndrome",
    category: "Sciatica",
    readTime: "5 min read",
    publishDate: "DEMO · Sep 2026",
    excerpt: "Not all shooting leg pain originates in the spinal column. Exploring deep gluteal nerve entrapment and diagnostic differentiation.",
    body: [
      "Sciatica is a symptom rather than a singular disease. While lumbar disc herniation is the most common etiology, the sciatic nerve can also be compressed in the deep gluteal space by the piriformis muscle.",
      "Patients with piriformis syndrome typically experience exacerbated pain while sitting on hard chairs or during internal hip rotation.",
      "Detailed provocative clinical testing combined with targeted diagnostic ultrasound-guided injections clarifies whether the nerve is pinched in the spine or in the pelvis, preventing unnecessary spinal interventions."
    ],
    isDemo: true
  },
  {
    id: "blog-3",
    title: "Managing Knee Osteoarthritis Pain Without Early Joint Replacement",
    slug: "knee-osteoarthritis-pain-management",
    category: "Joint Pain",
    readTime: "6 min read",
    publishDate: "DEMO · Aug 2026",
    excerpt: "Exploring genicular nerve radiofrequency ablation and image-guided viscosupplementation for preserving joint mobility.",
    body: [
      "For patients with moderate to severe knee osteoarthritis who are not yet candidates for surgical joint replacement—or who have co-morbidities that elevate surgical risk—pain management is vital.",
      "Genicular nerves are the sensory branches that transmit pain signals from the knee capsule to the brain. By targeting these nerves with radiofrequency energy, pain signals are blocked without altering the motor strength of the leg.",
      "This approach allows patients to resume daily walking, preserve cardiovascular health, and maintain muscle tone."
    ],
    isDemo: true
  }
];
