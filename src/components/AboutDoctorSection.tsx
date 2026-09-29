import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DOCTOR_PROFILE, TIMELINE_MILESTONES } from '../data/doctorData';
import { DoctorPortraitVisual } from './DoctorPortraitVisual';
import { CheckCircle2, ChevronRight, GraduationCap, Stethoscope, Microscope, Activity, Building2 } from 'lucide-react';

export const AboutDoctorSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(4); // Default to current practice

  const milestoneIcons = [GraduationCap, Stethoscope, Microscope, Activity, Building2];

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#FAFAF7] overflow-hidden">
      {/* Subtle Light Scientific Background Elements */}
      <div className="absolute top-12 right-12 w-64 h-64 border border-[#E2E7E8] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-[#E7F2F5]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            <span>BIOGRAPHY & CLINICAL PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
            Meet Dr. Shamsul Alam
          </h2>
          <p className="mt-4 text-[#5E6872] max-w-2xl text-base sm:text-lg">
            Dedicated to accurate anatomical diagnosis and compassionate pain management.
          </p>
        </div>

        {/* Top Grid: Doctor Portrait Visual + Professional Biography + Key Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Portrait Column surrounded by ivory and pale-blue depth layers */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <DoctorPortraitVisual size="about" />
              
              {/* Clinical Focus Note Under Portrait */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#E2E7E8] text-xs text-[#5E6872] flex items-center justify-between shadow-sm">
                <span>Practicing in Dhaka, Bangladesh</span>
                <span className="font-mono text-[#3D9C98] font-semibold">DEMO PORTFOLIO</span>
              </div>
            </div>
          </div>

          {/* Biography & Philosophy Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-[#5E6872] text-base sm:text-lg leading-relaxed">
              {DOCTOR_PROFILE.biography.map((paragraph, index) => (
                <p key={index} className="text-[#5E6872]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Credentials Matrix */}
            <div className="pt-6 border-t border-[#E2E7E8]">
              <h3 className="font-display font-semibold text-lg text-[#18212B] mb-4">
                Clinical Focus & Qualifications (DEMO)
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DOCTOR_PROFILE.credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="p-4 rounded-xl bg-white border border-[#E2E7E8] shadow-[0_4px_16px_rgba(24,33,43,0.02)] flex flex-col justify-between"
                  >
                    <div className="text-xs font-mono text-[#3D9C98] uppercase tracking-wider mb-1 font-medium">
                      {cred.label}
                    </div>
                    <div className="text-sm font-semibold text-[#18212B]">
                      {cred.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principle Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#E7F2F5]/80 via-[#F3F5F2] to-white border border-[#3D9C98]/30 shadow-sm">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#3D9C98] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-[#18212B] text-base mb-1">
                    The &ldquo;Precision Generator&rdquo; Standard
                  </h4>
                  <p className="text-sm text-[#5E6872] leading-relaxed">
                    Persistent pain should never be treated as an inevitable decline. Every ache has an anatomical source—identifying whether it is facet arthropathy, nerve impingement, or ligamentous instability allows tailored intervention with minimal systemic drug exposure.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section 13: Clean Light Timeline */}
        <div className="pt-16 border-t border-[#E2E7E8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-2 font-medium">
                CAREER TRAJECTORY
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#18212B] tracking-tight">
                Professional Journey
              </h3>
            </div>
            <div className="text-xs font-mono text-[#5E6872] mt-2 sm:mt-0">
              CONTINUOUS ADVANCEMENT IN PAIN MEDICINE
            </div>
          </div>

          {/* Clean Light Milestone Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const Icon = milestoneIcons[idx];
              const isActive = activeMilestone === idx;
              return (
                <button
                  key={milestone.title}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#3D9C98] shadow-[0_8px_20px_rgba(61,156,152,0.15)] ring-1 ring-[#3D9C98]'
                      : 'bg-white/60 border-[#DDE8E9] hover:bg-white hover:border-[#3D9C98]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-[#3D9C98] uppercase font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#3D9C98]' : 'text-[#5E6872]'}`} />
                  </div>
                  <div className={`font-display text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-[#18212B]' : 'text-[#5E6872]'}`}>
                    {milestone.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#5E6872]/80 truncate mt-0.5">
                    {milestone.yearRange}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Detailed Spotlight Box */}
          <motion.div
            key={activeMilestone}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E7E8] shadow-[0_15px_45px_rgba(24,33,43,0.04)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7F2F5]/50 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#3D9C98] uppercase tracking-wider font-medium">
                  <span>PHASE 0{activeMilestone + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>{TIMELINE_MILESTONES[activeMilestone].category}</span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                  {TIMELINE_MILESTONES[activeMilestone].title}
                </h4>
                <div className="text-base text-[#26343D] font-medium">
                  {TIMELINE_MILESTONES[activeMilestone].focus}
                </div>
                <p className="text-sm text-[#5E6872] max-w-3xl leading-relaxed pt-2">
                  {TIMELINE_MILESTONES[activeMilestone].institutionNote}
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-center min-w-[140px]">
                <div className="text-[11px] font-mono text-[#5E6872] uppercase tracking-widest mb-1">Status</div>
                <div className="font-mono text-sm font-semibold text-[#3D9C98]">
                  {activeMilestone === 4 ? "ACTIVE" : "COMPLETED"}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
