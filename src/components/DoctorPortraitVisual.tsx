import React, { useState } from 'react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface DoctorPortraitProps {
  className?: string;
  size?: 'hero' | 'about';
}

export const DoctorPortraitVisual: React.FC<DoctorPortraitProps> = ({
  className = '',
  size = 'hero'
}) => {
  const [imageError, setImageError] = useState(false);
  const doctorPhoto = DOCTOR_PROFILE.photoUrl || "https://sazratulhub.com/wp-content/uploads/2026/09/doctor_portrait.webp";

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Soft Ambient Glow & Depth Field (Light Atmosphere) */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#3D9C98]/15 via-[#7BAFC4]/15 to-[#E7F2F5]/60 blur-2xl -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Editorial Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2E7E8] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAF9] to-[#F3F5F2] shadow-[0_20px_50px_rgba(24,33,43,0.08)] aspect-[3/4] flex flex-col justify-end">
        
        {/* Real Official Doctor Photograph */}
        {!imageError ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-[#FAFAF7]">
            <img
              src={doctorPhoto}
              alt="Dr. Shamsul Alam - Pain Medicine Specialist"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="eager"
              onError={() => setImageError(true)}
            />
            {/* Subtle Gradient Overlay for Editorial Lighting & Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#18212B]/70 via-[#18212B]/10 to-transparent pointer-events-none" />
          </div>
        ) : (
          /* High-Fidelity Anatomical SVG Fallback if Image Fails to Load */
          <div className="relative w-full h-full flex items-end justify-center z-10">
            <svg
              className="w-[92%] h-[92%] object-contain filter drop-shadow-[0_12px_24px_rgba(24,33,43,0.12)]"
              viewBox="0 0 360 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="docBlazerCharcoal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2A3844" />
                  <stop offset="60%" stopColor="#1E2831" />
                  <stop offset="100%" stopColor="#131B22" />
                </linearGradient>
                <linearGradient id="docShirtWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#EDF2F4" />
                </linearGradient>
              </defs>
              <ellipse cx="180" cy="140" rx="46" ry="58" fill="#F4DCB7" />
              <path d="M 120 250 L 152 230 L 168 285 L 125 480 L 10 480 L 35 285 Z" fill="url(#docBlazerCharcoal)" />
              <path d="M 240 250 L 208 230 L 192 285 L 235 480 L 350 480 L 325 285 Z" fill="url(#docBlazerCharcoal)" />
              <polygon points="180,240 162,215 175,215" fill="url(#docShirtWhite)" />
              <polygon points="180,240 198,215 185,215" fill="url(#docShirtWhite)" />
              <polygon points="176,220 184,220 186,290 180,310 174,290" fill="#3D9C98" />
            </svg>
          </div>
        )}

        {/* Identity Plate Overlay at the bottom */}
        <div className="relative z-30 m-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-between">
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-[#18212B] tracking-wide flex items-center gap-1.5">
              DR. SHAMSUL ALAM
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            </div>
            <div className="text-xs text-[#3D9C98] font-semibold tracking-wide">
              Pain Medicine Specialist
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-[#5E6872] uppercase tracking-wider">
              Practice
            </div>
            <div className="font-mono text-[11px] text-[#18212B] font-semibold tabular-nums">
              15+ YEARS
            </div>
          </div>
        </div>

        {/* Status Badge in Top Corner */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 text-[11px] text-[#18212B] shadow-md font-medium">
          <span className="w-2 h-2 rounded-full bg-[#3D9C98] animate-pulse" />
          <span>Consultations Active</span>
        </div>
      </div>
    </div>
  );
};
