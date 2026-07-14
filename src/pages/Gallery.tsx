import React, { useState } from 'react';
import { Camera, Layers, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data';

type Category = 'All' | 'Institute' | 'Students' | 'Classrooms' | 'Events' | 'Certificates';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const categories: Category[] = ['All', 'Institute', 'Students', 'Classrooms', 'Events', 'Certificates'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            Take a sneak peek at our highly engaging classrooms, confidence building seminars, official language graduation milestones, and student activity spaces.
          </p>
        </div>
      </section>

      {/* 2. FILTER PILLS */}
      <section id="gallery-filter-section" className="bg-white py-4 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => (
            <button
              id={`filter-tab-${cat.toLowerCase()}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg-nest text-text-secondary hover:bg-bg-alt hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GRID OF PHOTOS (Masonry/Responsive 3-Column Grid) */}
      <section id="gallery-grid-section" className="bg-bg-main py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                id={`gallery-photo-card-${item.id}`}
                key={item.id}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_12px_24px_rgba(0,0,0,0.02)] aspect-[4/3] cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                />

                {/* Categories Badge on Image */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-gray-100 shadow-sm z-10">
                  {item.category}
                </span>

                {/* Overlying Details on Hover */}
                {hoveredItemId === item.id && (
                  <div
                    id={`gallery-overlay-${item.id}`}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-left transition-opacity duration-300"
                  >
                    <div className="space-y-1.5">
                      <h4 className="font-sans font-bold text-base text-white flex items-center gap-2">
                        <span>{item.title}</span>
                        <ZoomIn className="h-4 w-4 text-primary shrink-0" />
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fallback empty view */}
          {filteredItems.length === 0 && (
            <div id="gallery-empty" className="text-center py-20 text-text-secondary">
              No gallery images found in this category.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
