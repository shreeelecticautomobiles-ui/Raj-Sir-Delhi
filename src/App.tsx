import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to Top component to ensure clean transitions on page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global Layout wrapper
function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/contact';

  const handleBookDemo = () => {
    navigate('/contact');
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg-main selection:bg-blue-100 selection:text-primary">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main content body - add bottom padding on mobile to clear the sticky CTA bar */}
      <main className={`flex-grow ${isContactPage ? '' : 'pb-20 md:pb-0'}`}>
        {children}
      </main>

      {/* Floating Action Buttons bottom-right (Call + WhatsApp) */}
      <FloatingActions />

      {/* Persistent Mobile Bottom CTA Bar */}
      {!isContactPage && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 p-3.5 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] md:hidden">
          <button
            id="mobile-sticky-cta-btn"
            onClick={handleBookDemo}
            className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-semibold py-3 px-6 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] text-center cursor-pointer shadow-md"
          >
            Book Free Demo
          </button>
        </div>
      )}

      {/* Global Footer (shows SEO column dynamically on Contact page) */}
      <Footer showSeoColumn={isContactPage} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top of page on route shifts */}
      <ScrollToTop />
      
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
