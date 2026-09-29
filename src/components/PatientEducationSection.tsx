import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EDUCATION_ITEMS, FAQ_LIST, EducationItem } from '../data/doctorData';
import { Play, FileText, ChevronDown, X, CheckCircle, Video } from 'lucide-react';

export const PatientEducationSection: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<EducationItem | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_LIST[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <section id="education" className="py-24 lg:py-32 relative bg-[#FFFFFF] border-t border-[#E2E7E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            <span>EMPOWERING PATIENTS THROUGH KNOWLEDGE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
            Patient Education & Resources
          </h2>
          <p className="mt-4 text-[#5E6872] text-base sm:text-lg">
            Informed patients achieve superior long-term outcomes. Explore clinical lectures, clinical guides, and answers to common interventional pain care inquiries.
          </p>
        </div>

        {/* Featured Educational Media Cards (Clean Light Cards) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E2E7E8]">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#18212B]">
              Featured Clinical Lectures & Guides
            </h3>
            <span className="font-mono text-xs text-[#3D9C98] font-semibold">DEMO CURRICULUM</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDUCATION_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedMedia(item)}
                className="group rounded-2xl border border-[#E2E7E8] bg-white overflow-hidden hover:border-[#3D9C98] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-[0_10px_30px_rgba(24,33,43,0.03)] hover:shadow-[0_15px_40px_rgba(61,156,152,0.08)]"
              >
                <div>
                  {/* Video Thumbnail Visual (Clean Light Gradient) */}
                  <div className="relative aspect-video bg-gradient-to-tr from-[#E7F2F5] via-[#F3F5F2] to-[#FFFFFF] flex items-center justify-center p-4 overflow-hidden border-b border-[#E2E7E8]">
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 170" fill="none">
                      <path d="M 0 85 Q 75 20 150 85 T 300 85" stroke="#3D9C98" strokeWidth="2" fill="none" />
                      <circle cx="150" cy="85" r="40" stroke="#7BAFC4" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>

                    {/* Play Button Indicator */}
                    <div className="w-14 h-14 rounded-full bg-[#3D9C98] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-10">
                      {item.type === 'video' ? (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      ) : (
                        <FileText className="w-6 h-6" />
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#18212B]/80 font-mono text-[11px] text-white">
                      {item.durationOrReadTime}
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-white border border-[#E2E7E8] font-mono text-[10px] text-[#3D9C98] uppercase font-semibold">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#18212B] group-hover:text-[#3D9C98] transition-colors mb-2.5 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#5E6872] leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-[#3D9C98]">
                  <span>{item.type === 'video' ? 'Watch Lecture' : 'Read Guide'}</span>
                  <span className="font-mono text-[#5E6872] text-[11px]">Free Patient Access</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 18: Clean Light FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-[#E2E7E8]">
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-2 font-medium">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#18212B] tracking-tight">
              Understanding Pain Care & Appointments
            </h3>
            <p className="mt-3 text-[#5E6872] text-sm sm:text-base">
              Clear answers regarding procedures, preparation, and consultation expectations.
            </p>
          </div>

          {/* Clean Accordion with Thin Dividers and Teal Indicators */}
          <div className="divide-y divide-[#E2E7E8] border-y border-[#E2E7E8]">
            {FAQ_LIST.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-2 transition-colors">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-[#18212B] group-hover:text-[#3D9C98] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#3D9C98] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="pb-6 pt-1 text-sm sm:text-base text-[#5E6872] leading-relaxed pr-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Light Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
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
                onClick={() => setSelectedMedia(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-1.5 font-medium">
                    <Video className="w-3.5 h-3.5" />
                    <span>{selectedMedia.category} · {selectedMedia.durationOrReadTime}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                    {selectedMedia.title}
                  </h3>
                </div>

                {/* Simulated Player Container */}
                <div className="relative aspect-video rounded-xl bg-[#F3F5F2] border border-[#E2E7E8] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-[#3D9C98]/15 border border-[#3D9C98]/40 flex items-center justify-center text-[#3D9C98] mb-3 shadow-sm">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <div className="font-display font-semibold text-[#18212B] text-base">
                    Simulated Clinical Lecture Stream
                  </div>
                  <div className="text-xs text-[#5E6872] mt-1 max-w-md">
                    In a production deployment, this player streams the verified high-definition educational video with chapter markers.
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-2">
                    Lecture Summary
                  </h4>
                  <p className="text-sm text-[#5E6872] leading-relaxed">
                    {selectedMedia.summary}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8]">
                  <h4 className="text-xs font-mono text-[#3D9C98] uppercase tracking-wider mb-2.5 font-semibold">
                    Key Clinical Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {selectedMedia.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#18212B]">
                        <CheckCircle className="w-4 h-4 text-[#3D9C98] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E2E7E8] flex justify-end">
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
                  >
                    Done Reading
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
