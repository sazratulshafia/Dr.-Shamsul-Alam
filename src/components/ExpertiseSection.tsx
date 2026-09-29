import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONDITIONS_LIST, Condition } from '../data/doctorData';
import { ArrowRight, X, Activity, CheckCircle } from 'lucide-react';

interface ExpertiseSectionProps {
  onOpenBooking: (preferredChamber?: string, reason?: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);

  const categories = ['All', 'Spine', 'Nerves', 'Joints', 'Musculoskeletal'];

  const filteredConditions = activeCategory === 'All'
    ? CONDITIONS_LIST
    : CONDITIONS_LIST.filter(c => c.category === activeCategory);

  return (
    <section id="expertise" className="py-24 lg:py-32 relative bg-[#F3F5F2] border-t border-[#E2E7E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>CLINICAL FOCUS AREAS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              Understanding Your Pain
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              Pain is not just a symptom—it is a signal with a precise anatomical source. Explore key conditions managed with interventional precision.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E2E7E8] rounded-xl overflow-x-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#3D9C98] text-white font-semibold shadow-sm'
                    : 'text-[#5E6872] hover:text-[#18212B] hover:bg-[#FAFAF7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Condition Cards Grid (10 items) - Pure White Cards, Thin Borders, Subtle Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition, idx) => (
            <motion.div
              key={condition.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#E2E7E8] p-6 rounded-2xl flex flex-col justify-between group hover:border-[#3D9C98] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(24,33,43,0.03)] hover:shadow-[0_15px_40px_rgba(61,156,152,0.1)]"
            >
              <div>
                {/* Card Category & Index */}
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-[#5E6872]">
                  <span className="text-[#3D9C98] uppercase tracking-wider font-medium">{condition.category}</span>
                  <span>#{String(idx + 1).padStart(2, '0')}</span>
                </div>

                {/* Condition Title */}
                <h3 className="font-display text-xl font-bold text-[#18212B] mb-3 group-hover:text-[#3D9C98] transition-colors">
                  {condition.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#5E6872] leading-relaxed line-clamp-3 mb-6">
                  {condition.shortDescription}
                </p>
              </div>

              {/* Action / Learn More */}
              <div className="pt-4 border-t border-[#E2E7E8] flex items-center justify-between">
                <button
                  onClick={() => setSelectedCondition(condition)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#3D9C98] group-hover:text-[#31827E] transition-colors cursor-pointer"
                >
                  <span>Learn Clinical Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenBooking(undefined, condition.title)}
                  className="text-[11px] font-mono text-[#5E6872] hover:text-[#18212B] transition-colors cursor-pointer"
                >
                  Book Consult
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Light Condition Deep-Dive Modal */}
      <AnimatePresence>
        {selectedCondition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCondition(null)}
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
                onClick={() => setSelectedCondition(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-1.5 font-medium">
                    <Activity className="w-3.5 h-3.5" />
                    <span>{selectedCondition.category} Condition Analysis</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                    {selectedCondition.title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#F3F5F2] border border-[#E2E7E8]">
                  <div className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-1">
                    Anatomical Focus
                  </div>
                  <div className="text-sm font-semibold text-[#18212B]">
                    {selectedCondition.anatomicalFocus}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-2">
                    Clinical Pathophysiology
                  </h4>
                  <p className="text-sm sm:text-base text-[#5E6872] leading-relaxed">
                    {selectedCondition.clinicalOverview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-2.5">
                    Common Clinical Presentations
                  </h4>
                  <ul className="space-y-2">
                    {selectedCondition.commonSymptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#18212B]">
                        <CheckCircle className="w-4 h-4 text-[#3D9C98] shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-2.5">
                    Targeted Interventional Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCondition.potentialInterventions.map((intervention, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#E7F2F5] border border-[#7BAFC4]/30 text-xs text-[#18212B] font-medium"
                      >
                        {intervention}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E7E8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#5E6872]">
                    Structured for specialized interventional assessment.
                  </div>
                  <button
                    onClick={() => {
                      const reason = selectedCondition.title;
                      setSelectedCondition(null);
                      onOpenBooking(undefined, reason);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md"
                  >
                    Book Consultation for This Condition
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
