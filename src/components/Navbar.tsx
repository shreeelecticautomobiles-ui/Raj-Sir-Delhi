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
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all duration-200 ease-in-out ${
        scrolled
          ? 'bg-white/90 shadow-sm border-gray-200/50'
          : 'bg-white/70 border-gray-200/30'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-200 ease-in-out md:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        {/* Brand Logo */}
        <Link
          id="nav-brand-logo"
          to="/"
          className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-primary hover:text-primary-dark transition-colors"
          onClick={closeMenu}
        >
          <Globe className="h-6 w-6 text-primary" />
          <span>Raj Sir <span className="text-text-primary">Delhi</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              id={`nav-link-${link.name.toLowerCase()}`}
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-sans text-sm font-semibold tracking-wider transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-text-secondary hover:text-primary'
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
            className="rounded-full !py-2.5 !px-5 shadow-none"
            onClick={() => navigate('/contact')}
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={toggleMenu}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200/80 active:bg-gray-200 text-text-primary hover:text-primary lg:hidden transition-colors cursor-pointer shrink-0"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-4 px-6 py-6 bg-white">
            {navLinks.map((link) => (
              <NavLink
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-sans text-base font-semibold py-2 border-b border-gray-50 ${
                    isActive ? 'text-primary pl-2 border-l-2 border-l-primary' : 'text-text-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Button
                id="mobile-nav-demo-btn"
                variant="primary"
                className="w-full rounded-lg"
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
                className="flex items-center justify-center gap-2 w-full py-3 text-center border border-gray-200 rounded-lg text-text-primary font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-tertiary" />
                Call +91 90154 24048
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
