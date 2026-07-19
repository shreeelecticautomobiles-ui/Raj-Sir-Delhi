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
