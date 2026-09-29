import React, { useState } from 'react';
import { Download, CheckCircle, FileCode, FolderArchive, ShieldCheck, AlertCircle, Sparkles, Activity } from 'lucide-react';
import { THEME_ZIP_BASE64 } from '../theme-zip-base64';

export const WordPressThemeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  // Direct in-memory blob download guarantees complete 35.4 KB file with no proxy timeout or truncated transfers
  const handleDownloadCompleteZip = () => {
    try {
      const binaryString = atob(THEME_ZIP_BASE64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'dr-shamsul-alam.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 6000);
    } catch {
      window.location.href = '/wordpress-theme/dr-shamsul-alam.zip';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#18212B]/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#E2E7E8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#FAFAF7] border-b border-[#E2E7E8] p-6 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3D9C98]/10 text-[#3D9C98] flex items-center justify-center">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D9C98] bg-[#3D9C98]/10 px-2 py-0.5 rounded">
                  WordPress Production Theme
                </span>
                <span className="text-xs text-[#5E6872]">v1.0.0 (With Full Animations & 3D Spine)</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#18212B]">
                Install WordPress Theme
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-black/5 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Animation notice banner */}
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-4 text-xs text-[#065F46] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#047857]">
              <Sparkles className="w-4 h-4 text-[#059669] shrink-0" />
              <span>Animations Added to Theme Files!</span>
            </div>
            <p className="leading-relaxed">
              Theme-এ সব animation যুক্ত করা হয়েছে: <strong>3D Biomechanical Spine Lattice</strong> canvas, <strong>Scroll-triggered reveal & stagger animations</strong> (IntersectionObserver), <strong>Floating Doctor badge</strong>, এবং <strong>Interactive Fluoroscopy vs Ultrasound guidance monitor</strong>।
            </p>
          </div>

          {/* Download Action Card */}
          <div className="bg-[#F3F5F2] border-2 border-[#3D9C98]/50 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="font-bold text-[#18212B] flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#3D9C98]" />
                dr-shamsul-alam.zip
                <span className="text-[10px] bg-[#3D9C98] text-white px-2 py-0.5 rounded font-bold">Updated ~35 KB</span>
              </div>
              <div className="text-xs text-[#5E6872] mt-1">
                Complete package with animated canvas, dynamic mode switcher, CSS keyframes, and <code>screenshot.png</code>
              </div>
            </div>

            <button
              onClick={handleDownloadCompleteZip}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Theme Zip
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 font-medium animate-fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Downloaded full 35 KB zip! cPanel File Manager-এ আপলোড করে Extract করুন।</span>
            </div>
          )}

          {/* Direct Installation Steps */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18212B]">
              cPanel File Manager-এ ইনস্টলেশন ধাপ:
            </h4>
            <ol className="text-xs text-[#5E6872] space-y-2 list-decimal list-inside bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E7E8]">
              <li>
                cPanel File Manager-এ <code className="text-[#18212B] font-mono bg-white px-1 py-0.5 rounded border border-[#E2E7E8]">public_html/wp-content/themes/</code> ফোল্ডারে যান। আগের অসম্পূর্ণ zip ফাইল থাকলে Delete করে দিন।
              </li>
              <li>
                উপরে <strong>Upload</strong> বাটনে ক্লিক করে নতুন <code className="text-[#3D9C98] font-bold">dr-shamsul-alam.zip</code> ফাইলটি আপলোড করুন।
              </li>
              <li>
                ফাইলটির উপর রাইট ক্লিক করে <strong>Extract</strong> বাটনে ক্লিক করুন।
              </li>
              <li>
                WordPress Admin (<code className="text-[#18212B] font-mono">sazratulhub.com/wp-admin/</code>) &rarr; <strong>Appearance &gt; Themes</strong>-এ গিয়ে <strong>Activate</strong> করুন!
              </li>
            </ol>
          </div>

          {/* Included Features Checklist */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#5E6872]">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#3D9C98]" />
              <span>3D Biomechanical Spine Canvas</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3D9C98]" />
              <span>Scroll-Reveal & Stagger Animations</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3D9C98]" />
              <span>Interactive Imaging Mode Switcher</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3D9C98]" />
              <span>Floating Badges & Gentle Hover States</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAFAF7] border-t border-[#E2E7E8] p-4 px-6 flex justify-between items-center text-xs text-[#5E6872]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#3D9C98]" />
            Includes templates: index, single, chambers, conditions, header & footer
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-[#18212B] hover:text-[#3D9C98] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
