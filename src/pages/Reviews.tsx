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
import { testimonials, caseStudies } from '../data';

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
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-4">
          <span
            id="reviews-badge"
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            Trusted by 10,000+ Students
          </span>
          <h1 id="reviews-title" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            What Our <span className="text-primary">Students Say</span>
          </h1>
          <p id="reviews-subtext" className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Read verified reviews from students and corporate professionals who rebuilt their career trajectories through Raj Sir's native-first speaking methodology.
          </p>
        </div>
      </section>

      {/* 2. RATING SUMMARY CARD */}
      <section id="rating-summary-section" className="bg-bg-main pb-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div id="summary-card" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] text-center space-y-4">
            <h3 className="text-6xl font-sans font-extrabold text-text-primary">5.0</h3>
            <div className="flex justify-center text-accent-yellow">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-text-primary">Google Reviews — Based on 2,450+ verified student reviews</p>
              <p className="text-xs text-text-secondary mt-1">Our institute maintains a near-perfect 5.0 ranking for Spoken English & Goethe Training in Delhi NCR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL GRID (4 Cards) */}
      <section id="testimonial-grid-section" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
            
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
                      <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full object-cover shrink-0" />
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

          </div>

        </div>
      </section>

      {/* 4. CAREER TRANSFORMATIONS (2 Case Studies) */}
      <section id="case-studies-section" className="bg-bg-nest py-20 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">In-Depth Chronicles</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Career Transformations
            </h2>
            <p className="text-text-secondary text-sm">
              Discover how Hindi-medium graduates transformed their speech patterns to secure placements at premium multinational firms.
            </p>
          </div>

          {/* Case study rows */}
          <div className="space-y-16">
            {caseStudies.map((study, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  id={`case-study-${study.id}`}
                  key={study.id}
                  className={`flex flex-col gap-10 items-center lg:grid lg:grid-cols-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Portrait photo column */}
                  <div className={`lg:col-span-5 w-full max-w-sm ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white aspect-[4/5] shadow-md relative">
                      <img
                        src={study.image}
                        alt={study.name}
                        className="object-cover w-full h-full object-top"
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
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. STYLIZED ROUNDED CTA BANNER CARD */}
      <section id="reviews-cta-banner" className="bg-bg-main py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="bg-primary text-white rounded-3xl py-16 px-6 md:px-12 text-center space-y-6 shadow-xl relative overflow-hidden">
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
          </div>
        </div>
      </section>
    </div>
  );
}
