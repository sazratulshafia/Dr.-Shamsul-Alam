import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E2E7E8] px-3 py-2.5 shadow-[0_-4px_20px_rgba(24,33,43,0.06)] safe-area-inset-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call Chamber */}
        <a
          href="tel:+8801716840850"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] hover:bg-[#F3F5F2] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#3D9C98] mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">CALL</span>
        </a>

        {/* WhatsApp Consultation */}
        <a
          href="https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20team,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#E7F2F5] border border-[#7BAFC4]/40 text-[#3D9C98] hover:bg-[#3D9C98] hover:text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#3D9C98] mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">WHATSAPP</span>
        </a>

        {/* Primary Action: Book Appointment */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.6] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#3D9C98] text-white font-bold text-xs tracking-wider uppercase shadow-md cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK APPOINTMENT</span>
        </button>

      </div>
    </div>
  );
};
