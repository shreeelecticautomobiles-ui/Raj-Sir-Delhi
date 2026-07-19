import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  showSeoColumn?: boolean;
}

export default function Footer({ showSeoColumn = false }: FooterProps) {
  return (
    <div className="bg-bg-main">
      <footer
        id="main-footer"
        className="w-full bg-[#1D225F] text-white rounded-t-[32px] md:rounded-t-[48px] pt-16 pb-8 px-6 md:px-12 relative overflow-hidden shadow-2xl border-t border-white/5"
      >
        {/* Elegant Background ambient glows */}
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Brand details */}
            <div id="footer-col-brand" className="lg:col-span-5 space-y-6">
              <Link to="/" className="flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-white shadow-lg border border-white/10 shrink-0">
                  <img 
                    src="https://i.ibb.co/wr0kKg1x/IMG-20260717-WA0011-1.jpg" 
                    alt="Raj Sir Delhi Logo" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-extrabold text-2xl tracking-tight">
                  Raj Sir <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">Delhi</span>
                </span>
              </Link>
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                Delhi's premier language training institute helping students transition from hesitation to high-impact professional fluency. Specializing in Hindi-to-English coaching, German Goethe exam prep, and corporate Chinese.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3.5 pt-2">
                <a
                  id="footer-youtube-social"
                  href="https://www.youtube.com/c/rajsirdelhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-red-600 hover:border-red-600 transition-all hover:-translate-y-0.5"
                  aria-label="YouTube channel"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  id="footer-instagram-social"
                  href="https://www.instagram.com/rajsirdelhi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-pink-600 hover:border-pink-600 transition-all hover:-translate-y-0.5"
                  aria-label="Instagram profile"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Container */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* WhatsApp 24/7 Badge exactly like WebVeda */}
              <div className="flex flex-col sm:flex-row items-center justify-between border border-white/15 rounded-2xl sm:rounded-full px-6 py-4 bg-white/5 backdrop-blur-md gap-4">
                <span className="font-sans font-extrabold text-xs md:text-sm tracking-wider text-white uppercase">24X7 Support on Whatsapp</span>
                <a
                  href="https://wa.me/919015424048?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20demo%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#1D225F] hover:bg-slate-100 active:scale-95 transition-all font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full shadow-md shrink-0 cursor-pointer"
                >
                  <span>Chat On WhatsApp</span>
                  <svg className="h-4.5 w-4.5 fill-current text-emerald-500 shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.001-2.005-.002-3.975-.497-5.714-1.429L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436-.002 9.858-4.427 9.861-9.867.002-2.63-1.023-5.102-2.89-6.97-1.865-1.868-4.343-2.895-6.974-2.895-5.437 0-9.86 4.422-9.863 9.86-.001 1.705.452 3.37 1.31 4.8l-.283 1.035-.301 1.102 1.11-.29 1.189-.311zm9.592-3.93c-.277-.139-1.64-.81-1.894-.901-.255-.093-.44-.139-.626.139-.186.278-.72.903-.882 1.087-.162.186-.325.208-.601.069-.277-.14-1.17-.43-2.228-1.374-.824-.735-1.38-1.644-1.542-1.922-.162-.278-.017-.428.121-.567.125-.124.277-.323.415-.485.139-.161.186-.277.277-.462.093-.185.047-.347-.024-.486-.07-.139-.626-1.507-.858-2.064-.226-.543-.453-.468-.626-.477-.162-.009-.348-.01-.533-.01-.186 0-.488.07-.743.347-.256.278-.975.954-.975 2.329s1.001 2.705 1.14 2.89c.14.186 1.97 3.01 4.773 4.218.667.288 1.188.46 1.594.59.67.213 1.28.183 1.762.11.539-.08 1.64-.67 1.872-1.318.23-.647.23-1.203.162-1.319-.069-.115-.255-.207-.532-.346z" />
                  </svg>
                </a>
              </div>

              {/* Navigation columns */}
              <div className="flex flex-wrap gap-8 text-left">
                
                {/* Quick Links */}
                <div className="space-y-4 min-w-[200px]">
                  <h3 className="font-sans font-bold text-white tracking-widest text-xs uppercase">Quick Links</h3>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li>
                      <Link to="/courses" className="hover:text-blue-400 transition-colors">Our Courses</Link>
                    </li>
                    <li>
                      <Link to="/reviews" className="hover:text-blue-400 transition-colors">Success Stories</Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="hover:text-blue-400 transition-colors">Photo Gallery</Link>
                    </li>
                    <li>
                      <Link to="/courses" className="hover:text-blue-400 transition-colors">Batch Timings</Link>
                    </li>
                    <li>
                      <Link to="/about" className="hover:text-blue-400 transition-colors">Our Methodology</Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Bar */}
          <div id="footer-bottom-bar" className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="hidden"></div>

            <p className="text-xs text-slate-400 text-center sm:text-right leading-relaxed w-full sm:text-left flex flex-col sm:flex-row sm:justify-between items-center gap-2">
              <span>© {new Date().getFullYear()} Raj Sir Delhi Spoken English. All rights reserved.</span>
              <span>
                Developed by{' '}
                <a
                  href="https://www.divyanshwebservices.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline font-bold transition-all"
                >
                  DIVYANSH WEB SERVICES
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
