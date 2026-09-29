import React from 'react';

interface DoctorPortraitProps {
  className?: string;
  size?: 'hero' | 'about';
}

export const DoctorPortraitVisual: React.FC<DoctorPortraitProps> = ({
  className = '',
  size = 'hero'
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Outer Soft Ambient Glow & Depth Field (Light Atmosphere) */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#3D9C98]/10 via-[#7BAFC4]/10 to-[#E7F2F5]/40 blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Editorial Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2E7E8] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAF9] to-[#F3F5F2] shadow-[0_20px_50px_rgba(24,33,43,0.07)] aspect-[3/4] flex flex-col justify-end">
        
        {/* Subtle Light Scientific Medical Geometry in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <svg className="w-full h-full" viewBox="0 0 400 533" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="lightTealCenter" cx="50%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#E7F2F5" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#F3F5F2" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="lightNerveLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D9C98" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7BAFC4" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Ambient Background Radial */}
            <rect width="400" height="533" fill="url(#lightTealCenter)" />

            {/* Precision Hairline Grid Circles */}
            <circle cx="200" cy="180" r="140" stroke="#3D9C98" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />
            <circle cx="200" cy="180" r="100" stroke="#7BAFC4" strokeWidth="0.6" strokeOpacity="0.3" />
            <circle cx="200" cy="180" r="60" stroke="#3D9C98" strokeWidth="0.6" strokeOpacity="0.3" />
            
            {/* Fine Crosshair Targeting Guides */}
            <line x1="200" y1="20" x2="200" y2="340" stroke="#7BAFC4" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.3" />
            <line x1="40" y1="180" x2="360" y2="180" stroke="#7BAFC4" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.3" />

            {/* Delicate Anatomical Neural Curves */}
            <path d="M 60 480 Q 120 300 200 240 T 340 120" stroke="url(#lightNerveLine)" strokeWidth="1.2" fill="none" opacity="0.5" />
            <path d="M 340 460 Q 280 320 200 250 T 70 140" stroke="url(#lightNerveLine)" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Doctor Silhouette & Editorial Portrait Layer */}
        <div className="relative w-full h-full flex items-end justify-center z-10">
          <svg
            className="w-[92%] h-[92%] object-contain filter drop-shadow-[0_12px_24px_rgba(24,33,43,0.12)]"
            viewBox="0 0 360 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="docSkinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CB8E68" />
                <stop offset="50%" stopColor="#B67853" />
                <stop offset="100%" stopColor="#985C3A" />
              </linearGradient>
              <linearGradient id="docBlazerCharcoal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#26343D" />
                <stop offset="60%" stopColor="#18212B" />
                <stop offset="100%" stopColor="#111822" />
              </linearGradient>
              <linearGradient id="docShirtWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0F4F5" />
              </linearGradient>
              <linearGradient id="docHairDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#222326" />
                <stop offset="70%" stopColor="#16171A" />
                <stop offset="100%" stopColor="#0E0F12" />
              </linearGradient>
              <linearGradient id="lightRim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3D9C98" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7BAFC4" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Back Neck / Shadows */}
            <path d="M 120 220 L 240 220 L 250 260 L 110 260 Z" fill="#844D2F" opacity="0.4" />

            {/* Neck */}
            <path d="M 152 190 Q 180 205 208 190 L 214 240 Q 180 250 146 240 Z" fill="url(#docSkinTone)" />

            {/* Head Contour */}
            <path
              d="M 140 135 C 138 75, 222 75, 220 135 C 220 172, 204 195, 180 196 C 156 195, 140 172, 140 135 Z"
              fill="url(#docSkinTone)"
            />

            {/* Professional Hair Grooming (Refined side part) */}
            <path
              d="M 136 125 C 134 78, 155 58, 184 56 C 218 54, 228 72, 226 122 C 222 100, 215 88, 186 84 C 158 80, 142 98, 136 125 Z"
              fill="url(#docHairDark)"
            />
            {/* Subtle natural highlights */}
            <path d="M 150 72 Q 180 62 210 74" stroke="#71717A" strokeWidth="1.2" fill="none" opacity="0.3" />
            <path d="M 158 82 Q 185 75 214 84" stroke="#A1A1AA" strokeWidth="1" fill="none" opacity="0.25" />

            {/* Ears */}
            <path d="M 137 132 Q 132 142 138 152 Q 142 146 141 136 Z" fill="#A8653F" />
            <path d="M 223 132 Q 228 142 222 152 Q 218 146 219 136 Z" fill="#A8653F" />

            {/* Facial Features (Intelligent, calm specialist demeanor) */}
            {/* Eyebrows */}
            <path d="M 150 120 Q 164 116 172 121" stroke="#18212B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 188 121 Q 196 116 210 120" stroke="#18212B" strokeWidth="2.5" strokeLinecap="round" />

            {/* Eyes */}
            <ellipse cx="162" cy="130" rx="6" ry="3.5" fill="#FFFFFF" />
            <circle cx="163" cy="130" r="2.8" fill="#1C1917" />
            <circle cx="164" cy="129" r="0.8" fill="#FFFFFF" />

            <ellipse cx="198" cy="130" rx="6" ry="3.5" fill="#FFFFFF" />
            <circle cx="197" cy="130" r="2.8" fill="#1C1917" />
            <circle cx="198" cy="129" r="0.8" fill="#FFFFFF" />

            {/* Upper Eyelids */}
            <path d="M 155 128 Q 163 124 170 128" stroke="#374151" strokeWidth="1.2" fill="none" />
            <path d="M 190 128 Q 197 124 205 128" stroke="#374151" strokeWidth="1.2" fill="none" />

            {/* Modern Titanium Medical Glasses */}
            <rect x="150" y="122" width="26" height="18" rx="4" stroke="#5E6872" strokeWidth="1.4" fill="none" opacity="0.8" />
            <rect x="184" y="122" width="26" height="18" rx="4" stroke="#5E6872" strokeWidth="1.4" fill="none" opacity="0.8" />
            <line x1="176" y1="129" x2="184" y2="129" stroke="#5E6872" strokeWidth="1.4" opacity="0.8" />
            <path d="M 150 127 L 138 132" stroke="#5E6872" strokeWidth="1.2" opacity="0.6" />
            <path d="M 210 127 L 222 132" stroke="#5E6872" strokeWidth="1.2" opacity="0.6" />

            {/* Nose */}
            <path d="M 180 128 L 180 152 Q 176 155 174 153" stroke="#8D4C27" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 174 153 Q 180 157 186 153" stroke="#8D4C27" strokeWidth="1.5" fill="none" />

            {/* Clean groomed facial lines */}
            <path d="M 166 163 Q 180 167 194 163" stroke="#2B2927" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 170 172 Q 180 176 190 172" stroke="#3E3835" strokeWidth="1.2" fill="none" />

            {/* Lips */}
            <path d="M 171 166 Q 180 169 189 166" stroke="#94523B" strokeWidth="2.2" strokeLinecap="round" />

            {/* Tailored Medical Attire */}
            <polygon points="180,240 162,215 175,215" fill="url(#docShirtWhite)" />
            <polygon points="180,240 198,215 185,215" fill="url(#docShirtWhite)" />
            {/* Soft Teal Clinical Tie */}
            <polygon points="176,220 184,220 186,290 180,310 174,290" fill="#3D9C98" />

            {/* Tailored Deep Charcoal Blazer */}
            <path
              d="M 120 250 L 152 230 L 168 285 L 125 480 L 10 480 L 35 285 Z"
              fill="url(#docBlazerCharcoal)"
            />
            <path
              d="M 240 250 L 208 230 L 192 285 L 235 480 L 350 480 L 325 285 Z"
              fill="url(#docBlazerCharcoal)"
            />

            {/* Lapels */}
            <polygon points="152,230 174,285 158,350 138,270" fill="#26343D" stroke="#3D4B54" strokeWidth="0.8" />
            <polygon points="208,230 186,285 202,350 222,270" fill="#26343D" stroke="#3D4B54" strokeWidth="0.8" />

            {/* Stethoscope */}
            <path
              d="M 130 255 C 130 330, 160 365, 172 375"
              stroke="#5E6872"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 230 255 C 230 330, 200 365, 188 375"
              stroke="#5E6872"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="178" cy="385" r="9" fill="#18212B" stroke="#3D9C98" strokeWidth="2.2" />
            <circle cx="178" cy="385" r="4" fill="#7BAFC4" />

            {/* Subtle Light Rim Lighting */}
            <path
              d="M 35 285 L 10 480 M 350 480 L 325 285 M 134 125 C 134 78, 155 58, 184 56 C 218 54, 228 72, 226 122"
              stroke="url(#lightRim)"
              strokeWidth="1.8"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Soft Editorial Fade at Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20 pointer-events-none" />

        {/* Identity Plate */}
        <div className="absolute bottom-5 inset-x-5 z-30 flex items-center justify-between border-t border-[#E2E7E8] pt-3 bg-white/70 backdrop-blur-md px-3 rounded-xl">
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-[#18212B] tracking-wide flex items-center gap-2">
              DR. SHAMSUL ALAM
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            </div>
            <div className="text-xs text-[#3D9C98] font-semibold">Pain Medicine Specialist</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-[#5E6872] uppercase tracking-wider">Interventional</div>
            <div className="font-mono text-[11px] text-[#18212B] font-semibold tabular-nums">15+ YRS (DEMO)</div>
          </div>
        </div>

        {/* Status Badge in Top Corner */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E2E7E8] text-[11px] text-[#18212B] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3D9C98] animate-pulse" />
          <span className="font-medium">Consultations Active</span>
        </div>
      </div>
    </div>
  );
};
