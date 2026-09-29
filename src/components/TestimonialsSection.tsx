import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_LIST } from '../data/doctorData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAF7] border-t border-[#E2E7E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>PATIENT EXPERIENCES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              Clinical Recovery Perspectives
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              Reflections on diagnostic clarity, targeted interventional care, and regaining daily quality of life.
            </p>
          </div>

          <div className="text-xs font-mono text-[#5E6872]">
            DEMO CLINICAL CASE PERSPECTIVES
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#E2E7E8] flex flex-col justify-between relative group hover:border-[#3D9C98] transition-all duration-300 shadow-[0_15px_45px_rgba(24,33,43,0.03)] hover:shadow-[0_20px_50px_rgba(61,156,152,0.08)]"
            >
              <div>
                {/* Header: Patient Initials & Large Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#E7F2F5] border border-[#7BAFC4]/30 flex items-center justify-center font-display font-bold text-[#3D9C98] text-sm">
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[#18212B] text-sm">
                        Patient {item.initials}
                      </div>
                      <div className="text-xs text-[#5E6872]">
                        {item.patientContext}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-[#3D9C98]/20 group-hover:text-[#3D9C98]/40 transition-colors" />
                </div>

                {/* Condition Tag */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-[#3D9C98] uppercase tracking-wider font-semibold">
                    {item.conditionTreated}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-[#18212B] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Outcome Note */}
              <div className="pt-4 border-t border-[#E2E7E8] text-xs text-[#5E6872]">
                <span className="text-[#18212B] font-medium">Outcome: </span>
                {item.outcomeNote}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-[#5E6872] font-mono">
          Note: Patient experiences are illustrative demo records intended to demonstrate clinical presentation and treatment response. Individual medical outcomes vary.
        </div>

      </div>
    </section>
  );
};
