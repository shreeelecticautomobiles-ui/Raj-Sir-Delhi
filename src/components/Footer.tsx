import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  showSeoColumn?: boolean;
}

export default function Footer({ showSeoColumn = false }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-dark-inverse text-dark-text pt-16 pb-8 border-t border-gray-800/60">
      <div className={`mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 sm:grid-cols-2 ${
        showSeoColumn ? 'md:grid-cols-3 lg:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-3'
      }`}>
        {/* Brand Blurb */}
        <div id="footer-col-brand" className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-white">
            <Globe className="h-6 w-6 text-primary" />
            <span>Raj Sir <span className="text-primary">Delhi</span></span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delhi's premier language training institute helping students transition from hesitation to high-impact professional fluency. Specializing in Hindi-to-English coaching, German Goethe exam prep, and corporate Chinese.
          </p>
          <div className="flex gap-4">
            <a
              id="footer-youtube-social"
              href="https://www.youtube.com/c/rajsirdelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              id="footer-instagram-social"
              href="https://www.instagram.com/rajsirdelhi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600/10 text-pink-500 hover:bg-pink-600 hover:text-white transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div id="footer-col-links" className="space-y-4">
          <h3 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>
              <Link to="/courses" className="hover:text-primary transition-colors">Our Courses</Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-primary transition-colors">Success Stories</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary transition-colors">Photo Gallery</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary transition-colors">Batch Timings</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">Our Methodology</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div id="footer-col-contact" className="space-y-4">
          <h3 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">Contact Us</h3>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Shakarpur Main market, Laxmi Nagar, Delhi, 110092</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a href="tel:+919015424048" className="hover:text-primary transition-colors">+91 90154 24048</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <a href="mailto:info@rajsirdelhi.com" className="hover:text-primary transition-colors">info@rajsirdelhi.com</a>
            </li>
          </ul>
        </div>

        {/* SEO Resources Column */}
        {showSeoColumn && (
          <div id="footer-col-seo" className="space-y-4">
            <h3 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">SEO Resources</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">English Learning Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Delhi Spoken English Centers</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Interview Prep Guide</a>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-primary transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>
        )}

      </div>

      {/* Bottom Bar */}
      <div id="footer-bottom-bar" className="mx-auto max-w-7xl px-6 md:px-8 mt-12 pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Raj Sir Delhi Spoken English. All rights reserved.
          <span className="mx-2">|</span>
          Developed by{' '}
          <a
            href="https://www.divyanshwebservices.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-yellow hover:underline font-bold transition-all"
          >
            DIVYANSH WEB SERVICES
          </a>
        </p>
        <div className="flex gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
