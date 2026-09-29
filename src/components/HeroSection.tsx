import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, ArrowDown, ShieldCheck, Activity, Sparkles } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';
import { DoctorPortraitVisual } from './DoctorPortraitVisual';
import { HeroScene3D } from './HeroScene3D';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onContactDoctor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onContactDoctor
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#FAFAF7]">
      {/* Subtle Soft-Blue & Pale-Teal Atmospheric Gradients Behind Hero */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#E7F2F5]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-[#F3F5F2] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#7BAFC4]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Doctor Authority */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center z-10"
          >
            {/* Scientific Specialty Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3D9C98] animate-ping opacity-75" />
              <span>PRECISION IN PAIN CARE</span>
              <span className="text-[#E2E7E8]">/</span>
              <span className="text-[#5E6872]">INTERVENTIONAL SPECIALIST</span>
            </div>

            {/* Doctor Name - Grand Editorial Typography */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#18212B] leading-[1.08] mb-4 text-balance">
              DR. SHAMSUL ALAM
            </h1>

            {/* Sub-Headline Specialty */}
            <div className="text-xl sm:text-2xl font-light text-[#26343D] tracking-wide mb-6">
              Pain Medicine Specialist
            </div>

            {/* Positioning Statement */}
            <p className="text-lg sm:text-xl text-[#5E6872] font-normal leading-relaxed max-w-2xl mb-8">
              &ldquo;{DOCTOR_PROFILE.positioningStatement}&rdquo;
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(61,156,152,0.28)] hover:shadow-[0_8px_25px_rgba(61,156,152,0.38)] hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <button
                onClick={onContactDoctor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#18212B] text-[#18212B] hover:bg-[#E7F2F5]/50 font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#3D9C98]" />
                <span>CONTACT DOCTOR</span>
              </button>
            </div>

            {/* Unboxed Trust Credentials */}
            <div className="pt-6 border-t border-[#E2E7E8] flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#5E6872]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3D9C98] shrink-0" />
                <span>15+ Years Clinical Focus <span className="text-[10px] text-[#3D9C98] font-mono font-medium">(DEMO)</span></span>
              </div>
              <span className="text-[#DDE8E9] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#3D9C98] shrink-0" />
                <span>Fluoroscopy & Ultrasound Guided</span>
              </div>
              <span className="text-[#DDE8E9] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3D9C98] shrink-0" />
                <span>Personalized Multimodal Care</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Doctor Hero Portrait Layered with Light 3D Simulation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Abstract Neural Spine Background Scene (Light frosted glass & soft teal) */}
            <div className="absolute -inset-6 sm:-inset-10 opacity-75 lg:opacity-90 pointer-events-auto">
              <HeroScene3D />
            </div>

            {/* Doctor Editorial Portrait (Primary Visual Focal Point) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md mx-auto z-10"
            >
              <DoctorPortraitVisual size="hero" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-[#5E6872] pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase">EXPLORE CARE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#3D9C98]" />
      </div>
    </section>
  );
};
