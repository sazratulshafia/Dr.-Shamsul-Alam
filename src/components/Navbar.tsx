import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, FolderArchive } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredChamber?: string, reason?: string) => void;
  onOpenWordPressTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenWordPressTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Doctor', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Chambers', href: '#chambers' },
    { label: 'Education', href: '#education' },
    { label: 'Articles', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E7E8] py-3.5 shadow-[0_4px_25px_rgba(24,33,43,0.04)]'
            : 'bg-[#FAFAF7]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark (Display face, no subtitles in logo per contract) */}
          <a
            href="#"
            className="font-display font-bold text-xl md:text-2xl tracking-tight text-[#18212B] hover:text-[#3D9C98] transition-colors whitespace-nowrap"
          >
            Dr. Shamsul Alam
          </a>

          {/* Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5E6872]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative hover:text-[#18212B] transition-colors duration-200 py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3D9C98] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="flex items-center gap-3">
            {onOpenWordPressTheme && (
              <button
                onClick={onOpenWordPressTheme}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F3F5F2] hover:bg-[#E7F2F5] text-[#18212B] hover:text-[#3D9C98] border border-[#E2E7E8] font-semibold text-xs tracking-wide transition-all cursor-pointer whitespace-nowrap"
                title="Download WordPress Theme"
              >
                <FolderArchive className="w-3.5 h-3.5 text-[#3D9C98]" />
                <span>WP Theme</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_16px_rgba(61,156,152,0.25)] hover:shadow-[0_6px_20px_rgba(61,156,152,0.35)] cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#18212B] hover:bg-black/5 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8"
        >
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-2xl text-[#18212B] hover:text-[#3D9C98] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-[#E2E7E8]">
            {onOpenWordPressTheme && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWordPressTheme();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F3F5F2] border border-[#E2E7E8] text-[#18212B] text-sm font-semibold hover:bg-[#E7F2F5]"
              >
                <FolderArchive className="w-4 h-4 text-[#3D9C98]" />
                <span>Download WordPress Theme (.zip)</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#3D9C98] text-white font-bold text-sm tracking-wide shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>

            <a
              href="tel:+8801700000000"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E2E7E8] text-[#18212B] text-sm font-medium hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-[#3D9C98]" />
              <span>Direct Chamber Call</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
