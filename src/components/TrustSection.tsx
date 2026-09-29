import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const pillars = [
    {
      icon: Award,
      badge: lang === 'bn' ? "ক্লিনিক্যাল অভিজ্ঞতা" : "CLINICAL TENURE",
      headline: t('trust.exp_title'),
      subtext: t('trust.exp_desc')
    },
    {
      icon: Target,
      badge: lang === 'bn' ? "উন্নত প্রযুক্তি" : "ADVANCED PROCEDURES",
      headline: t('trust.guidance_title'),
      subtext: t('trust.guidance_desc')
    },
    {
      icon: Compass,
      badge: lang === 'bn' ? "স্বীকৃত মানদণ্ড" : "GLOBAL STANDARDS",
      headline: t('trust.evidence_title'),
      subtext: t('trust.evidence_desc')
    },
    {
      icon: HeartHandshake,
      badge: lang === 'bn' ? "রোগীর যত্ন" : "PATIENT ETHIC",
      headline: t('trust.patient_title'),
      subtext: t('trust.patient_desc')
    }
  ];

  return (
    <section className="relative py-16 border-y border-[#E2E7E8] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Lead Indicator */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E7E8] text-xs font-mono text-[#5E6872]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            <span className="text-[#18212B] font-semibold tracking-wider">
              {lang === 'bn' ? 'চিকিৎসার মূল ভিত্তি' : 'FOUNDATIONAL PILLARS'}
            </span>
          </div>
          <div className="text-[#5E6872]">
            {lang === 'bn' ? 'আন্তর্জাতিক পেইন মেডিসিন স্ট্যান্ডার্ড' : 'EVIDENCE-BASED MEDICAL STANDARD'}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E7F2F5] border border-[#DDE8E9] flex items-center justify-center text-[#3D9C98] group-hover:bg-[#3D9C98] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-[#5E6872] tracking-wider">0{idx + 1}</span>
                  </div>

                  <div className="font-mono text-[10px] text-[#3D9C98] tracking-widest uppercase mb-1.5 font-medium">
                    {pillar.badge}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#18212B] tracking-tight mb-2 group-hover:text-[#3D9C98] transition-colors">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-[#5E6872] leading-relaxed">
                    {pillar.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E7E8] w-12 group-hover:w-full group-hover:border-[#3D9C98] transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
