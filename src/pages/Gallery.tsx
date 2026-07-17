import React from 'react';
import { Camera } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  return (
    <div id="gallery-page-container">
      {/* 1. VISUAL HEADER */}
      <section id="gallery-hero" className="bg-gradient-to-b from-blue-50/40 via-white to-bg-main py-16 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-4">
          <span
            id="gallery-badge"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Camera className="h-3.5 w-3.5" />
            Inside Our Campus
          </span>
          <h1 id="gallery-title" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Visual <span className="text-primary">Journey</span>
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
