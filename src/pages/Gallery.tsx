import React, { useState } from 'react';
import { Camera, Sparkles, Filter, Users, BookOpen, Presentation } from 'lucide-react';
import { galleryItems } from '../data';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'Students', label: 'Successful Students', icon: Users },
  { id: 'Classrooms', label: 'Interactive Classrooms', icon: BookOpen },
  { id: 'Events', label: 'Events & Presentations', icon: Presentation }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rajsirdelhi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://www.rajsirdelhi.com/gallery"
      }
    ]
  };

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div id="gallery-page-container" className="bg-[#F8FAFC] min-h-screen">
      <SEO
        title="Our Student & Campus Photo Gallery | Raj Sir Delhi Spoken English"
        description="Browse through physical classroom session updates, student success moments, live presentation events, debate circles, and active spoken English practice at Raj Sir Delhi."
        keywords="Raj Sir Delhi campus photos, English speaking classes Delhi classrooms, English coaching Laxmi Nagar learning environment, student activities Delhi, Raj Sir students"
        schemaMarkup={gallerySchema}
      />
      
      {/* 1. VISUAL HEADER */}
      <section id="gallery-hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent pt-24 pb-12 text-center">
        <div className="absolute inset-0 bg-radial-gradient from-blue-50/40 via-transparent to-transparent opacity-70"></div>
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-6 relative">
          <span
            id="gallery-badge"
            className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md animate-fade-in"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
            MEET OUR TRANSFORMED STUDENTS & CAMPUS
          </span>
          <h1 id="gallery-title" className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[#171C59]">
            Campus <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p id="gallery-subtext" className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Take a visual tour of Delhi's highest-rated language academy. Experience our lively group sessions, physical classroom activities, and the actual successful students trained under Raj Sir.
          </p>
        </div>
      </section>

      {/* 2. PREMIUM INTERACTIVE CATEGORY TABS */}
      <section id="gallery-filters" className="pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-[#252B7B] text-white shadow-lg shadow-indigo-900/15 scale-102 border border-[#252B7B]'
                      : 'bg-white text-[#171C59] border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <IconComponent className={`h-4 w-4 ${isActive ? 'text-blue-300' : 'text-[#4F46E5]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GRID OF PHOTOS (With beautiful entrance animations) */}
      <section id="gallery-grid-section" className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  id={`gallery-photo-card-${item.id}`}
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_16px_36px_rgba(23,28,89,0.04)] hover:shadow-[0_24px_48px_rgba(23,28,89,0.1)] aspect-[4/3] flex flex-col cursor-pointer"
                >
                  {/* Photo with responsive referrer policy */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay for hover info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
                  </div>

                  {/* Absolute Details Overlay - Always readable and stylish */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white z-10 flex flex-col justify-end pointer-events-none">
                    <span className="inline-block self-start px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-blue-200 mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-sans font-black text-lg leading-tight tracking-tight text-white mb-1 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Fallback empty view */}
          {filteredItems.length === 0 && (
            <div id="gallery-empty" className="text-center py-20 text-text-secondary bg-white rounded-3xl border border-slate-100 shadow-sm max-w-md mx-auto">
              <Camera className="h-12 w-12 mx-auto text-slate-300 mb-3 animate-pulse" />
              <p className="font-bold text-slate-600 text-lg">No gallery images found.</p>
              <p className="text-xs text-slate-400 mt-1">Check back later for newly uploaded student batch photos!</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
