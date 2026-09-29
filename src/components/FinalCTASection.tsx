import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
  onCallChamber: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenBooking,
  onCallChamber
}) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#E7F2F5] via-[#DCEFED] to-[#F7F7F2] border-t border-[#E2E7E8]">
      {/* Subtle Soft Translucent Decorative Geometric Elements in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-white/60 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -top-16 -left-16 w-80 h-80 border border-[#3D9C98]/20 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-[#7BAFC4]/25 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Scientific Discipline Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#DDE8E9] text-xs font-mono uppercase tracking-widest text-[#3D9C98] font-medium shadow-sm">
            <span>START YOUR CLINICAL RECOVERY PATHWAY</span>
          </div>

          {/* Headline in Deep Charcoal */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#18212B] tracking-tight text-balance">
            Take the Next Step Toward Better Pain Care
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#5E6872] max-w-2xl mx-auto leading-relaxed text-balance">
            Discuss your symptoms with a specialist and explore an appropriate treatment pathway.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(61,156,152,0.3)] hover:shadow-[0_10px_30px_rgba(61,156,152,0.4)] hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <button
              onClick={onCallChamber}
              className="px-8 py-4 rounded-xl border border-[#18212B] hover:bg-white/80 bg-white/50 text-[#18212B] font-medium text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#3D9C98]" />
              <span>CALL THE CHAMBER</span>
            </button>
          </div>

          {/* Consultation Assurance Micro-Text */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#5E6872]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3D9C98]" />
              <span>Confidential Medical Consultation</span>
            </div>
            <span>·</span>
            <div>Dhanmondi & Panthapath Chambers</div>
            <span>·</span>
            <div>Pre-Procedure Diagnostic Imaging Reviews</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
