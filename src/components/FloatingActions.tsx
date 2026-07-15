import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      <div 
        id="floating-actions-container" 
        className={`fixed right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
          isContactPage ? 'bottom-6' : 'bottom-24 md:bottom-6'
        }`}
      >
        {/* Call Button */}
        <a
          id="floating-call-btn"
          href="tel:+919015424048"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] hover:bg-[#004AC6] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-y-1 hover:shadow-xl"
          title="Call Raj Sir"
        >
          <Phone className="h-6 w-6" />
        </a>

        {/* WhatsApp Button Wrapper for Pulse Ring */}
        <div className="relative flex items-center justify-center">
          {/* Subtle custom scale + opacity pulse ring */}
          <div className="absolute inset-0 rounded-full bg-emerald-600 animate-pulse-ring"></div>
          
          <a
            id="floating-whatsapp-btn"
            href="https://wa.me/919015424048?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Raj%20Sir%27s%20classes"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-y-1 hover:shadow-xl"
            title="Chat on WhatsApp with Raj Sir"
          >
            <MessageSquare className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar (only below 768px, stays visible, doesn't overlap due to bottom-24 height of floating controls) */}
      {!isContactPage && (
        <div 
          id="mobile-sticky-bottom-bar"
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3.5 z-40 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        >
          <button
            id="mobile-sticky-book-btn"
            onClick={() => navigate('/contact')}
            className="w-full bg-[#2563EB] hover:bg-[#004AC6] text-white py-3.5 px-4 rounded-lg font-sans font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
          >
            <span>Book Free Demo Class</span>
          </button>
        </div>
      )}
    </>
  );
}
