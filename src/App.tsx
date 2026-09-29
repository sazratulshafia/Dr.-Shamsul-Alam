import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
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
import { HtmlBlocksModal } from './components/HtmlBlocksModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingChamber, setBookingChamber] = useState<string | undefined>(undefined);
  const [bookingReason, setBookingReason] = useState<string | undefined>(undefined);
  const [wpModalOpen, setWpModalOpen] = useState(false);
  const [htmlBlocksModalOpen, setHtmlBlocksModalOpen] = useState(false);

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
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAFAF7] text-[#18212B] flex flex-col selection:bg-[#3D9C98]/20 selection:text-[#18212B]">
        
        {/* Top Navigation Bar with EN / BN Toggle Switcher */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onOpenWordPressTheme={() => setWpModalOpen(true)}
          onOpenHtmlBlocks={() => setHtmlBlocksModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection
            onOpenBooking={() => handleOpenBooking()}
            onContactDoctor={handleContactDoctor}
          />

          <TrustSection />

          <AboutDoctorSection />

          <ExpertiseSection onOpenBooking={handleOpenBooking} />

          <FeaturedTreatmentSection onOpenBooking={() => handleOpenBooking()} />

          <TreatmentsSection onOpenBooking={handleOpenBooking} />

          <ChambersSection onOpenBooking={handleOpenBooking} />

          <PatientEducationSection />

          <TestimonialsSection />

          <BlogSection />

          <FinalCTASection
            onOpenBooking={() => handleOpenBooking()}
            onCallChamber={handleContactDoctor}
          />
        </main>

        {/* Medical Practice Footer */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
          onOpenWordPressTheme={() => setWpModalOpen(true)}
        />

        {/* Persistent Mobile Quick Action Bar */}
        <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

        {/* Dedicated Appointment Booking Modal */}
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

        {/* Copy-Paste HTML Blocks Modal */}
        <HtmlBlocksModal
          isOpen={htmlBlocksModalOpen}
          onClose={() => setHtmlBlocksModalOpen(false)}
        />

      </div>
    </LanguageProvider>
  );
}
