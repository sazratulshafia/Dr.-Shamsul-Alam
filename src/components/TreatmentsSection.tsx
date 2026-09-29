import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TREATMENTS_LIST, Treatment } from '../data/doctorData';
import { Sparkles, ArrowRight, X, Shield, Clock, Users, CheckCircle2 } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenBooking: (preferredChamber?: string, reason?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="treatments" className="py-24 lg:py-32 relative bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            <span>TARGETED INTERVENTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
            Personalized Pain Management
          </h2>
          <p className="mt-4 text-[#5E6872] text-base sm:text-lg leading-relaxed">
            Evidence-based interventional therapies designed to reduce local inflammation, interrupt chronic pain pathways, and restore daily function without relying solely on systemic analgesics.
          </p>
        </div>

        {/* Large Editorial Treatment Blocks Grid (8 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS_LIST.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#E2E7E8] p-6 rounded-2xl flex flex-col justify-between group hover:border-[#3D9C98] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(24,33,43,0.02)] hover:shadow-[0_15px_40px_rgba(61,156,152,0.08)]"
            >
              <div>
                {/* Header: Large Editorial Number & Classification */}
                <div className="flex items-center justify-between text-xs font-mono text-[#5E6872] mb-4">
                  <span className="text-[#3D9C98] uppercase tracking-wider font-semibold">{treatment.classification}</span>
                  <span className="font-display text-2xl font-bold text-[#DDE8E9] group-hover:text-[#3D9C98]/40 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Treatment Title */}
                <h3 className="font-display text-lg font-bold text-[#18212B] mb-2.5 group-hover:text-[#3D9C98] transition-colors">
                  {treatment.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5E6872] leading-relaxed mb-6">
                  {treatment.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#E2E7E8] flex items-center justify-between">
                <button
                  onClick={() => setSelectedTreatment(treatment)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D9C98] group-hover:text-[#31827E] transition-colors cursor-pointer"
                >
                  <span>Procedure Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <span className="text-[11px] font-mono text-[#5E6872]">Outpatient</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible Medical Standard Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2E7E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#3D9C98] shrink-0" />
            <div className="text-xs sm:text-sm text-[#5E6872]">
              <span className="text-[#18212B] font-semibold">Medically Responsible Care:</span> We do not make exaggerated claims of &ldquo;instant cures&rdquo; or &ldquo;100% pain elimination&rdquo;. Each treatment plan is individualized based on diagnostic findings, anatomy, and functional goals.
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-white hover:bg-[#FAFAF7] border border-[#E2E7E8] text-xs font-semibold text-[#18212B] transition-colors cursor-pointer shadow-sm"
          >
            Consultation Inquiry
          </button>
        </div>

      </div>

      {/* Light Treatment Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="absolute inset-0 bg-[#18212B]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white border border-[#E2E7E8] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-1.5 font-medium">
                    {selectedTreatment.classification}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                    {selectedTreatment.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-2">
                    Clinical Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#5E6872] leading-relaxed">
                    {selectedTreatment.detailedOverview}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F3F5F2] border border-[#E2E7E8] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#3D9C98] uppercase tracking-wider font-semibold">
                    <Users className="w-4 h-4" />
                    <span>Who May Benefit</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedTreatment.whoMayBenefit.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#18212B]">
                        <CheckCircle2 className="w-4 h-4 text-[#3D9C98] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8]">
                    <div className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#3D9C98]" />
                      <span>Procedural Approach</span>
                    </div>
                    <p className="text-xs text-[#5E6872] leading-relaxed">
                      {selectedTreatment.procedureApproach}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8]">
                    <div className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#3D9C98]" />
                      <span>Recovery Expectations</span>
                    </div>
                    <p className="text-xs text-[#5E6872] leading-relaxed">
                      {selectedTreatment.recoveryNote}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E7E8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#5E6872]">
                    Requires clinical evaluation prior to scheduling.
                  </div>
                  <button
                    onClick={() => {
                      const reason = selectedTreatment.title;
                      setSelectedTreatment(null);
                      onOpenBooking(undefined, reason);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md"
                  >
                    Schedule Assessment for This Procedure
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
