import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import YouTube from './pages/YouTube';
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
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="flex min-h-screen flex-col bg-bg-main selection:bg-blue-100 selection:text-primary">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Action Buttons bottom-right (Call + WhatsApp) */}
      <FloatingActions />

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
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
