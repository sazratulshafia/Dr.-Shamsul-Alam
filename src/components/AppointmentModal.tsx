import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, CheckCircle2, MessageSquare, AlertCircle, FileText } from 'lucide-react';
import { CHAMBERS_LIST } from '../data/doctorData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChamber?: string;
  initialReason?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialChamber,
  initialReason
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredChamber, setPreferredChamber] = useState(initialChamber || CHAMBERS_LIST[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('6:30 PM');
  const [reasonForConsultation, setReasonForConsultation] = useState(initialReason || '');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialChamber) {
      setPreferredChamber(initialChamber);
    }
    if (initialReason) {
      setReasonForConsultation(initialReason);
    }
  }, [initialChamber, initialReason, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 8) {
      setErrorMsg('Please provide a valid contact phone number.');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please select your preferred consultation date.');
      return;
    }

    setErrorMsg('');
    const refCode = `ALAM-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#18212B]/40 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-xl bg-white border border-[#E2E7E8] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-[#18212B]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-1.5 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>CLINICAL CONSULTATION REQUEST</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                Book an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6872] mt-1">
                Consult with Dr. Shamsul Alam at Dhanmondi or Panthapath.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammad Tariqul Islam"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] placeholder-[#5E6872]/60 text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +880 1712 345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] placeholder-[#5E6872]/60 text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                />
              </div>

              {/* Preferred Chamber */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                  Preferred Chamber *
                </label>
                <select
                  value={preferredChamber}
                  onChange={(e) => setPreferredChamber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                >
                  {CHAMBERS_LIST.map((chamber) => (
                    <option key={chamber.id} value={chamber.name} className="text-[#18212B]">
                      {chamber.name} ({chamber.area} — {chamber.days})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                  >
                    <option value="3:30 PM">3:30 PM – 4:30 PM (Panthapath)</option>
                    <option value="5:00 PM">5:00 PM – 6:00 PM (Panthapath)</option>
                    <option value="6:30 PM">6:30 PM – 7:30 PM (Dhanmondi / Panthapath)</option>
                    <option value="8:00 PM">8:00 PM – 9:00 PM (Dhanmondi)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Consultation */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#5E6872] mb-1.5 font-medium">
                  Reason for Consultation / Condition
                </label>
                <input
                  type="text"
                  placeholder="e.g. Persistent lower back pain radiating down leg (Sciatica)"
                  value={reasonForConsultation}
                  onChange={(e) => setReasonForConsultation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] text-[#18212B] placeholder-[#5E6872]/60 text-sm focus:outline-none focus:border-[#3D9C98] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_4px_16px_rgba(61,156,152,0.25)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>

              {/* Privacy & Fast Track Call */}
              <div className="flex items-center justify-between text-xs text-[#5E6872] pt-2 border-t border-[#E2E7E8]">
                <span>Direct Hotline: <a href="tel:+8801716840850" className="text-[#3D9C98] hover:underline font-medium">+880 1716 840850</a></span>
                <span className="font-mono text-[#5E6872] text-[11px]">DEMO BOOKING</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E7F2F5] border border-[#7BAFC4]/40 text-[#3D9C98] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="font-mono text-xs text-[#3D9C98] uppercase tracking-widest mb-1 font-semibold">
                APPOINTMENT REQUEST RECEIVED
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                Thank You, {fullName}
              </h3>
              <p className="text-sm text-[#5E6872] mt-2 max-w-md mx-auto">
                Your consultation request has been logged. Our clinical chamber coordinator will reach out to confirm your scheduled slot.
              </p>
            </div>

            {/* Reference Box */}
            <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#E2E7E8] text-left space-y-2">
              <div className="flex items-center justify-between text-xs border-b border-[#E2E7E8] pb-2">
                <span className="text-[#5E6872] font-mono">BOOKING REFERENCE</span>
                <span className="text-[#3D9C98] font-mono font-bold">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#5E6872]">Chamber:</span>
                <span className="text-[#18212B] font-medium">{preferredChamber}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#5E6872]">Date & Slot:</span>
                <span className="text-[#18212B] font-medium">{preferredDate} at {preferredTime}</span>
              </div>
              {reasonForConsultation && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5E6872]">Condition:</span>
                  <span className="text-[#3D9C98] font-medium truncate max-w-[200px]">{reasonForConsultation}</span>
                </div>
              )}
            </div>

            {/* Preparation Instructions */}
            <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E2E7E8] text-left text-xs text-[#18212B] space-y-1.5">
              <div className="font-semibold text-[#18212B] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#3D9C98]" />
                <span>What to Bring to Your Visit:</span>
              </div>
              <p className="text-[#5E6872]">· Prior MRI / X-Ray discs and radiologist reports</p>
              <p className="text-[#5E6872]">· Complete list of current pain medications and supplements</p>
              <p className="text-[#5E6872]">· Previous surgical notes or discharge certificates</p>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/8801716840850?text=Hello%20Dr.%20Shamsul%20Alam%20Team,%20my%20name%20is%20${encodeURIComponent(fullName)}.%20I%20have%20booked%20an%20appointment%20with%20reference%20${bookingRef}%20for%20${encodeURIComponent(preferredChamber)}%20on%20${preferredDate}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl border border-[#E2E7E8] text-[#18212B] hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="text-[11px] font-mono text-[#5E6872]">
              DEMO SIMULATION · NO REAL PAYMENT OR DATA SUBMITTED
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
