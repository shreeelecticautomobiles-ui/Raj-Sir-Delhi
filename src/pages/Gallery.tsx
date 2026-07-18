import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  return (
    <div id="gallery-page-container">
      {/* 1. VISUAL HEADER */}
      <section id="gallery-hero" className="bg-gradient-to-b from-blue-50/40 via-white to-bg-main py-16 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-4">
          <span
            id="gallery-badge"
            className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
            INSIDE OUR CAMPUS
          </span>
          <h1 id="gallery-title" className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[#171C59]">
            Visual <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">Journey</span>
          </h1>
          <p id="gallery-subtext" className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Take a sneak peek at our highly engaging classrooms, confidence building activities, and interactive spoken English sessions.
          </p>
        </div>
      </section>

      {/* 2. GRID OF PHOTOS (Responsive 3-Column Grid) */}
      <section id="gallery-grid-section" className="bg-bg-main py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                id={`gallery-photo-card-${item.id}`}
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_12px_24px_rgba(0,0,0,0.02)] aspect-[4/3]"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Fallback empty view */}
          {galleryItems.length === 0 && (
            <div id="gallery-empty" className="text-center py-20 text-text-secondary">
              No gallery images found.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
