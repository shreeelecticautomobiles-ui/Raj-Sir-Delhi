import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, Youtube, CheckCircle2, Instagram } from 'lucide-react';
import Button from './Button';

interface FooterProps {
  showSeoColumn?: boolean;
}

export default function Footer({ showSeoColumn = false }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="bg-dark-inverse text-dark-text pt-16 pb-8 border-t border-gray-800/60">
      <div className={`mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 sm:grid-cols-2 ${
        showSeoColumn ? 'md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-4 lg:grid-cols-4'
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
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
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

        {/* Newsletter Column */}
        <div id="footer-col-newsletter" className="space-y-4">
          <h3 className="font-sans font-semibold text-white tracking-wider text-sm uppercase">Newsletter</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Subscribe to get free learning materials, batch announcements, and confidence-building tips directly in your inbox.
          </p>
          {subscribed ? (
            <div id="newsletter-success" className="flex items-center gap-2 p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Thanks for subscribing! Check your inbox soon.</span>
            </div>
          ) : (
            <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <input
                id="footer-email-input"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-sm bg-dark-inverse-alt border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                id="footer-subscribe-btn"
                variant="yellow"
                type="submit"
                className="w-full sm:w-auto md:w-full lg:w-auto shrink-0 !py-2 !px-4 text-xs font-bold"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div id="footer-bottom-bar" className="mx-auto max-w-7xl px-6 md:px-8 mt-12 pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Raj Sir Delhi Spoken English. All rights reserved.
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
