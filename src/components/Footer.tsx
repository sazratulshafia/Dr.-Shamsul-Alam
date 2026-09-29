import React from 'react';
import { DOCTOR_PROFILE, CHAMBERS_LIST } from '../data/doctorData';
import { ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenWordPressTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenWordPressTheme }) => {
  return (
    <footer id="contact" className="bg-[#EEF2F1] text-[#5E6872] text-sm border-t border-[#E2E7E8] pt-20 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E2E7E8]">
          
          {/* Brand & Doctor Authority Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="font-display font-bold text-2xl text-[#18212B] tracking-tight hover:text-[#3D9C98] transition-colors inline-block">
              {DOCTOR_PROFILE.name}
            </a>
            <div className="text-sm font-semibold text-[#3D9C98]">
              {DOCTOR_PROFILE.specialty}
            </div>
            <p className="text-[#5E6872] text-xs sm:text-sm leading-relaxed pr-6">
              Dedicated to pinpoint diagnosis and targeted interventional management for spinal disorders, radiculopathy, and persistent musculoskeletal pain syndromes.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-[#3D9C98] transition-colors">About Doctor</a></li>
              <li><a href="#expertise" className="hover:text-[#3D9C98] transition-colors">Conditions Managed</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Interventional Procedures</a></li>
              <li><a href="#chambers" className="hover:text-[#3D9C98] transition-colors">Chamber Locations</a></li>
              <li><a href="#education" className="hover:text-[#3D9C98] transition-colors">Patient Education</a></li>
              <li><a href="#blog" className="hover:text-[#3D9C98] transition-colors">Clinical Articles</a></li>
            </ul>
          </div>

          {/* Key Treatments Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              Interventions
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Nerve Blocks (Medial Branch)</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Epidural Steroid Injections</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Radiofrequency Ablation (RFA)</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Joint & Bursa Injections</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">Sciatica Radiculopathy Care</a></li>
            </ul>
          </div>

          {/* Practice Chambers Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              Chambers & Contact
            </div>
            <div className="space-y-3 text-xs">
              {CHAMBERS_LIST.map((chamber) => (
                <div key={chamber.id} className="p-3 rounded-lg bg-white border border-[#E2E7E8] shadow-2xs">
                  <div className="text-[#18212B] font-medium">{chamber.name}</div>
                  <div className="text-[#5E6872]">{chamber.days} · {chamber.timing}</div>
                  <a href={`tel:${chamber.phone}`} className="text-[#3D9C98] font-medium hover:underline block mt-0.5">
                    {chamber.phone}
                  </a>
                </div>
              ))}
              <div className="pt-1 text-[#5E6872]">
                Email: <a href="mailto:care@drshamsulalam.com" className="text-[#18212B] hover:text-[#3D9C98]">care@drshamsulalam.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimers & Legal Notice */}
        <div className="py-8 space-y-4 text-xs text-[#5E6872] leading-relaxed border-b border-[#E2E7E8]">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#D8C6A0] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#18212B] font-semibold uppercase tracking-wider">Medical Information Disclaimer: </span>
              The information provided on this website is for educational and informational purposes only and does not constitute formal medical diagnosis, treatment advice, or a doctor-patient relationship. Patients experiencing acute severe neurological symptoms (such as progressive leg weakness or loss of bowel/bladder control) should seek immediate emergency medical care.
            </div>
          </div>

          <div className="text-[11px] text-[#5E6872] font-mono">
            IMPORTANT DEMO NOTICE: This website is a conceptual portfolio design demo created to showcase medical brand identity and digital patient experience. Information marked DEMO, placeholder, or example must not be interpreted as verified real-world medical data.
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E6872]">
          <div>
            © {new Date().getFullYear()} Dr. Shamsul Alam · Pain Medicine Specialist. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {onOpenWordPressTheme && (
              <button
                onClick={onOpenWordPressTheme}
                className="text-[#3D9C98] font-bold hover:underline cursor-pointer"
              >
                WordPress Theme (.zip)
              </button>
            )}
            <span>·</span>
            <a href="#" className="hover:text-[#18212B] transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#18212B] transition-colors">Terms of Practice</a>
            <span>·</span>
            <a href="#chambers" className="hover:text-[#18212B] transition-colors">Chamber Directory</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
