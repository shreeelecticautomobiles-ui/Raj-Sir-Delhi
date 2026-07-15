import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        id="floating-call-btn"
        href="tel:+919015424048"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-tertiary hover:bg-tertiary-dark text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        title="Call Raj Sir"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/919015424048"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </div>
  );
}
