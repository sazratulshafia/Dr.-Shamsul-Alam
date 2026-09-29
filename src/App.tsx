/**
 * DR. SHAMSUL ALAM – PAIN MEDICINE SPECIALIST
 * Premium Personal-Brand Medical Website
 * 
 * Visual Direction: Light Premium International Medical Aesthetic
 * Warm White (#FAFAF7), Soft Ivory (#F3F5F2), Pure White (#FFFFFF),
 * Deep Charcoal (#18212B), Slate Gray (#5E6872), Soft Medical Teal (#3D9C98)
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { FeaturedTreatmentSection } from './components/FeaturedTreatmentSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { ChambersSection } from './components/ChambersSection';
import { PatientEducationSection } from './components/PatientEducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';
import { WordPressThemeModal } from './components/WordPressThemeModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingChamber, setBookingChamber] = useState<string | undefined>(undefined);
  const [bookingReason, setBookingReason] = useState<string | undefined>(undefined);
  const [wpModalOpen, setWpModalOpen] = useState(false);

  const handleOpenBooking = (chamber?: string, reason?: string) => {
    setBookingChamber(chamber);
    setBookingReason(reason);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleContactDoctor = () => {
    const chambersSection = document.getElementById('chambers');
    if (chambersSection) {
      chambersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#18212B] flex flex-col selection:bg-[#3D9C98]/20 selection:text-[#18212B]">
      
      {/* Top Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenWordPressTheme={() => setWpModalOpen(true)}
      />

      {/* Main Content Sections with Subtle Elegant Transitions:
          Warm White -> White -> Soft Ivory -> White -> Pale Blue -> White */}
      <main className="flex-1">
        {/* 05. Hero Experience (Warm White / Ivory with soft atmospheric gradient) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onContactDoctor={handleContactDoctor}
        />

        {/* 08. Trust & Credibility Section (Pure White) */}
        <TrustSection />

        {/* 09 & 13. About Doctor & Professional Journey (Warm White & Clean Light Timeline) */}
        <AboutDoctorSection />

        {/* 10. Expertise ("Understanding Your Pain" - Soft Ivory Background with White Cards) */}
        <ExpertiseSection onOpenBooking={handleOpenBooking} />

        {/* 12. Featured Treatment Experience (Pure White with Light Precision Guidance Visual) */}
        <FeaturedTreatmentSection onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Treatments ("Personalized Pain Management" - Pure White with Large Editorial Blocks) */}
        <TreatmentsSection onOpenBooking={handleOpenBooking} />

        {/* 14. Chambers (Dhanmondi & Panthapath - Soft Ivory / Pale Blue) */}
        <ChambersSection onOpenBooking={handleOpenBooking} />

        {/* 17 & 18. Patient Education & FAQ (Pure White with Clean Accordion) */}
        <PatientEducationSection />

        {/* 16. Patient Testimonials (Warm White with Editorial Layout) */}
        <TestimonialsSection />

        {/* 19. Editorial Blog Insights (Pure White with Minimal Sharp Framing) */}
        <BlogSection />

        {/* 20. Dramatic Final CTA (Light Gradient: Pale Blue -> Soft Teal -> Warm White) */}
        <FinalCTASection
          onOpenBooking={() => handleOpenBooking()}
          onCallChamber={handleContactDoctor}
        />
      </main>

      {/* 21. Comprehensive Medical Practice Footer (#EEF2F1 Light Tone) */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenWordPressTheme={() => setWpModalOpen(true)}
      />

      {/* 25. Persistent Mobile Quick Action Bar (Light Glass) */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* 15. Dedicated Appointment Booking Modal (Pure White / Charcoal) */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialChamber={bookingChamber}
        initialReason={bookingReason}
      />

      {/* Direct WordPress Theme Install Modal */}
      <WordPressThemeModal
        isOpen={wpModalOpen}
        onClose={() => setWpModalOpen(false)}
      />

    </div>
  );
}
