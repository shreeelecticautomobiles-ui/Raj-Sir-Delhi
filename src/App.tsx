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
import FAQPage from './pages/FAQPage';

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
          
          {/* Course-specific SEO Landing Pages */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/spoken-english-course" element={<Courses courseType="spoken-english" />} />
          <Route path="/german-language-course" element={<Courses courseType="german" />} />
          <Route path="/chinese-language-course" element={<Courses courseType="chinese" />} />
          <Route path="/public-speaking-course" element={<Courses courseType="public-speaking" />} />
          <Route path="/interview-preparation-course" element={<Courses courseType="interview-preparation" />} />
          
          {/* Transformations & Reviews Pages */}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/career-transformations" element={<Reviews />} />
          
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
