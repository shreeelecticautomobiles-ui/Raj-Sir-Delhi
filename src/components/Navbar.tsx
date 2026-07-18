import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full transition-all duration-300 ease-in-out bg-transparent px-4 py-3 md:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50 border border-gray-200/50 rounded-[24px] py-2.5 px-6 md:px-8'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30 rounded-none py-4 px-6 md:px-8'
        }`}
      >
        {/* Brand Logo with beautiful custom image */}
        <Link
          id="nav-brand-logo"
          to="/"
          className="flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight transition-colors"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shadow-md shadow-primary/10 border border-gray-100/50 bg-white">
            <img 
              src="https://i.ibb.co/wr0kKg1x/IMG-20260717-WA0011-1.jpg" 
              alt="Raj Sir Delhi Logo" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-text-primary font-extrabold tracking-tight">
            Raj Sir <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Delhi</span>
          </span>
        </Link>

        {/* Desktop Navigation with high-fashion design */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              id={`nav-link-${link.name.toLowerCase()}`}
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-200 px-4 py-2 rounded-xl ${
                  isActive
                    ? 'text-primary bg-primary/5 border border-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            id="nav-book-demo-btn"
            variant="primary"
            className="rounded-full !py-2.5 !px-5 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            onClick={() => navigate('/contact')}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={toggleMenu}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200/80 border border-gray-200/50 text-text-primary hover:text-primary lg:hidden transition-all duration-200 cursor-pointer shrink-0"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer with premium spacing */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden absolute left-4 right-4 backdrop-blur-lg shadow-2xl transition-all duration-300 ease-in-out z-50 ${
            scrolled
              ? 'top-[calc(100%+8px)] bg-white/95 rounded-2xl border border-gray-200/50 shadow-lg'
              : 'top-[calc(100%+12px)] bg-white/95 rounded-2xl border border-gray-200/30'
          }`}
        >
          <div className="flex flex-col gap-3 px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-wider font-bold py-3 px-4 rounded-xl border-l-4 transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary/5 border-l-primary shadow-inner' 
                      : 'text-text-secondary hover:text-primary border-l-transparent hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-gray-100 mt-2">
              <Button
                id="mobile-nav-demo-btn"
                variant="primary"
                className="w-full rounded-xl py-3 shadow-lg shadow-primary/15 active:scale-95 transform transition-all font-bold text-xs uppercase tracking-wider"
                onClick={() => {
                  closeMenu();
                  navigate('/contact');
                }}
              >
                Book Free Demo
              </Button>
              <a
                id="mobile-nav-call-btn"
                href="tel:+919015424048"
                className="flex items-center justify-center gap-2 w-full py-3 text-center border border-gray-200 rounded-xl text-text-primary font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all active:scale-95 transform"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                <span>Call +91 90154 24048</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
