import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Users2,
  CheckCircle,
  Quote,
  TrendingUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import { testimonials, caseStudies } from '../data';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getInitialsBg = (name: string) => {
  const colors = [
    'bg-blue-100 text-blue-700 border border-blue-200',
    'bg-emerald-100 text-emerald-700 border border-emerald-200',
    'bg-indigo-100 text-indigo-700 border border-indigo-200',
    'bg-purple-100 text-purple-700 border border-purple-200',
    'bg-amber-100 text-amber-700 border border-amber-200',
    'bg-rose-100 text-rose-700 border border-rose-200',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export default function Reviews() {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate('/contact');
  };

  const handleSyllabus = () => {
    navigate('/courses');
  };

  return (
    <div id="reviews-page-container">
      {/* 1. HERO HEADER */}
      <section id="reviews-hero" className="bg-gradient-to-b from-blue-50/50 via-white to-bg-main pt-16 pb-12 text-center">
        <ScrollReveal className="mx-auto max-w-4xl px-6 md:px-8 space-y-4">
          <span
            id="reviews-badge"
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            {/* SOURCE: live Google Maps listing, update if this changes */}
            Trusted by 1,000+ Students
          </span>
          <h1 id="reviews-title" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            What Our <span className="text-primary">Students Say</span>
          </h1>
          <p id="reviews-subtext" className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Read verified reviews from students and corporate professionals who rebuilt their career trajectories through Raj Sir's native-first speaking methodology.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. RATING SUMMARY CARD */}
      <section id="rating-summary-section" className="bg-bg-main pb-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <ScrollReveal id="summary-card" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] text-center space-y-6">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <svg className="h-7 w-7 shrink-0 text-primary" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-sans font-bold text-lg text-text-primary tracking-tight">Verified Google Maps Listing</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                {/* SOURCE: live Google Maps listing, update if this changes */}
                <span className="text-6xl font-sans font-extrabold text-text-primary tracking-tight">5.0</span>
                <span className="text-text-secondary text-lg font-semibold">/ 5.0</span>
              </div>
            </div>
            <div className="flex justify-center text-accent-yellow">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div>
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <p className="font-sans font-bold text-base text-text-primary">Based on 1,081 Verified Google Reviews</p>
              <p className="text-xs text-text-secondary mt-1">Our classes maintain a perfect 5.0 rating on Google Maps for English & Foreign language coaching in Delhi NCR.</p>
            </div>
            <div className="pt-2">
              <a
                id="write-google-review-btn"
                href="https://www.google.com/maps/place/Raj+Sir+Delhi+Spoken+English+Class/@28.6333782,77.282903,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              >
                <span>Write a Google Review</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. TESTIMONIAL GRID (4 Cards) */}
      <section id="testimonial-grid-section" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
            
            {testimonials.map((item, index) => {
              // Add overlapping floating enquire button to the 3rd testimonial card
              const hasOverlapButton = index === 2;
              
              return (
                <div key={item.id} className="relative">
                  <Card id={`review-card-${item.id}`} className="flex flex-col justify-between text-left h-full bg-white relative p-8">
                    <div className="space-y-4">
                      {/* Rating */}
                      <div className="flex text-accent-yellow">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-text-secondary text-sm italic leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-6 z-10">
                      {item.avatar ? (
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="h-10 w-10 rounded-full object-cover shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getInitialsBg(item.name)}`}>
                          {getInitials(item.name)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-sans font-bold text-sm text-text-primary leading-tight">{item.name}</h4>
                        <p className="text-xs text-text-secondary">{item.role}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Overlapping Enquire Now button representation */}
                  {hasOverlapButton && (
                    <div className="absolute -bottom-4 -right-2 z-20">
                      <Button
                        id="review-card-overlap-enquire-btn"
                        variant="yellow"
                        onClick={handleEnquire}
                        className="rounded-full shadow-lg !py-2.5 !px-5 text-[10px]"
                      >
                        Enquire Now
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}

          </ScrollReveal>

        </div>
      </section>

      {/* 4. CAREER TRANSFORMATIONS (2 Case Studies) */}
      <section id="case-studies-section" className="bg-bg-nest py-20 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-16">
          
          <ScrollReveal className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">In-Depth Chronicles</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Career Transformations
            </h2>
            <p className="text-text-secondary text-sm">
              Discover how Hindi-medium graduates transformed their speech patterns to secure placements at premium multinational firms.
            </p>
          </ScrollReveal>

          {/* Case study rows */}
          <div className="space-y-16">
            {caseStudies.map((study, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal
                  id={`case-study-${study.id}`}
                  key={study.id}
                  className={`flex flex-col gap-10 items-center lg:grid lg:grid-cols-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Portrait photo column */}
                  <div className={`lg:col-span-5 w-full max-w-sm ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white aspect-[4/5] shadow-md relative group">
                      <img
                        src={study.image}
                        alt={study.name}
                        className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Stat badge absolute bottom overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-primary text-white text-xs font-semibold p-3.5 rounded-xl shadow-md text-left flex items-start gap-2 border border-blue-400/30">
                        <TrendingUp className="h-4.5 w-4.5 text-accent-yellow shrink-0 mt-0.5" />
                        <span>{study.statBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative details column */}
                  <div className={`lg:col-span-7 text-left space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                      {study.label}
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-text-primary sm:text-3xl leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {study.paragraph}
                    </p>
                    
                    {/* Rich Quote box */}
                    <div className="border-l-4 border-primary pl-5 py-2.5 bg-white rounded-r-xl border border-gray-100 shadow-sm relative">
                      <Quote className="absolute top-2 right-4 h-8 w-8 text-blue-100 opacity-60 transform scale-x-[-1]" />
                      <p className="text-text-primary text-sm font-medium italic relative z-10 leading-relaxed">
                        "{study.quote}"
                      </p>
                      <span className="text-xs text-text-secondary font-semibold block mt-1.5">— {study.name}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. STYLIZED ROUNDED CTA BANNER CARD */}
      <section id="reviews-cta-banner" className="bg-bg-main py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <ScrollReveal className="bg-primary text-white rounded-3xl py-16 px-6 md:px-12 text-center space-y-6 shadow-xl relative overflow-hidden">
            <h3 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to write your own story?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Don't let language be a barrier to your dreams. Join Raj Sir and start your journey towards professional fluency today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                id="reviews-cta-story-btn"
                variant="solid-white"
                onClick={handleEnquire}
                className="rounded-full"
              >
                Be our next success story
              </Button>
              <Button
                id="reviews-cta-syllabus-btn"
                variant="outline-white"
                onClick={handleSyllabus}
                className="rounded-full"
              >
                View Syllabus
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
