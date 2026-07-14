import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  BookOpen,
  Award,
  Calendar,
  Layers,
  Globe2,
  Languages
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { faqs } from '../data';

export default function Courses() {
  const navigate = useNavigate();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleEnquire = () => {
    navigate('/contact');
  };

  return (
    <div id="courses-page-container">
      {/* 1. HERO HEADER */}
      <section id="courses-hero" className="bg-gradient-to-b from-blue-50/50 via-white to-bg-main py-16 md:py-24 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-6">
          <span
            id="courses-badge"
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3 w-3" />
            Curriculum Tailored For Career Growth
          </span>
          <h1 id="courses-title" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Master New <span className="text-primary">Horizons</span>.
          </h1>
          <p id="courses-subtext" className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Choose from our premium linguistic training frameworks designed specifically to bridge native speech habits with global career fluency standards.
          </p>
        </div>
      </section>

      {/* 2. SPOKEN ENGLISH 3-TIER PRICING SECTION */}
      <section id="spoken-english-pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Core Language Suite</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Spoken English Mastery
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our flagship program, split into three focused levels depending on your current conversational control.
            </p>
          </div>

          {/* 3-Tier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
            
            {/* Beginner Level */}
            <div id="tier-beginner" className="rounded-2xl bg-bg-main/60 border border-gray-100 p-8 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-2.5 py-1 rounded-md text-text-secondary">Foundation Badge</span>
                  <span className="text-xs font-semibold text-text-secondary">3 Months</span>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-text-primary">Beginner Level</h3>
                  <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">Perfect if you struggle with basic sentence construction, have zero speaking environment, and translate from Hindi word-by-word.</p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Class Timings</p>
                  <p className="text-sm font-semibold text-text-primary mt-0.5">Morning Batch: 8:00 AM - 10:00 AM</p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-gray-200 text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Basic grammar & structural forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Vocabulary for daily interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Simple sentence translation formulas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Confidence drill & pronunciation basics</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Button id="btn-beginner-enquire" variant="secondary" className="w-full" onClick={handleEnquire}>
                  Enquire for Batch
                </Button>
              </div>
            </div>

            {/* Intermediate Level (Featured / Popular) */}
            <div id="tier-intermediate" className="rounded-2xl bg-white border-2 border-primary p-8 flex flex-col justify-between text-left transition-all duration-300 shadow-xl relative scale-105">
              {/* Highlight badge overlay */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                POPULAR
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md text-primary">FLUENCY TAG</span>
                  <span className="text-xs font-bold text-primary">4 Months</span>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-text-primary">Intermediate Level</h3>
                  <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">Our recommended suite. Best if you understand grammar rules theoretically but freeze or stumble during spontaneous conversations.</p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Class Timings</p>
                  <p className="text-sm font-semibold text-text-primary mt-0.5">Evening Batch: 4:00 PM - 6:00 PM</p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-gray-200 text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Daily debate rounds & podium sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Spontaneous monologue generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Professional resume/email training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Continuous accent correction drills</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Button id="btn-intermediate-enquire" variant="primary" className="w-full shadow-md" onClick={handleEnquire}>
                  Enroll In Fluency Batch
                </Button>
              </div>
            </div>

            {/* Advanced Level */}
            <div id="tier-advanced" className="rounded-2xl bg-bg-main/60 border border-gray-100 p-8 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-2.5 py-1 rounded-md text-text-secondary">Mastery Badge</span>
                  <span className="text-xs font-semibold text-text-secondary">2 Months</span>
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-text-primary">Advanced Level</h3>
                  <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">For corporate executives and senior managers preparing for high-profile business negotiations and cross-border client pitches.</p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Class Timings</p>
                  <p className="text-sm font-semibold text-text-primary mt-0.5">Weekend Only: Sat & Sun</p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-gray-200 text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>High-end public presentation skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Executive leadership communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Mock boardrooms & interview handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Idiomatic expressions & slang neutrality</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Button id="btn-advanced-enquire" variant="secondary" className="w-full" onClick={handleEnquire}>
                  Enquire for Batch
                </Button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. GLOBAL SPECIALIZATIONS */}
      <section id="global-specializations" className="bg-bg-nest py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Global Reach</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Foreign Language Electives
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Boost your resume profile. Master European or Asian business tongues for multinational alignment.
            </p>
          </div>

          {/* 2 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* German Card */}
            <div id="spec-german" className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between shadow-md group">
              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80"
                  alt="Germany landmark representing Goethe Exam preparation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">
                  Goethe Exam Prep
                </span>
              </div>
              <div className="p-8 text-left space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-2xl font-bold text-text-primary">German (Deutsch)</h3>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">A1-A2</span>
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">B1-B2</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Tailored German coaching matching official CEFR standards. Build native reading, writing, listening, and speaking modules under certified bilingual instructors.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <div className="text-xs text-text-secondary font-semibold">Weekend Batches Only</div>
                  <Button id="btn-german-enroll" variant="dark" className="!py-2 !px-4 text-xs font-semibold" onClick={handleEnquire}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Chinese Card */}
            <div id="spec-chinese" className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between shadow-md group">
              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop&q=80"
                  alt="Chinese architecture representing HSK levels"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">
                  Corporate Focus
                </span>
              </div>
              <div className="p-8 text-left space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-2xl font-bold text-text-primary">Chinese (Mandarin)</h3>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">HSK 1-2</span>
                    <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">HSK 3-4</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Master Mandarin grammar tones and complex Pinyin characters. Gain a powerful communication advantage for global supply chain, logistics, and corporate MNC alignment.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <div className="text-xs text-text-secondary font-semibold">Evening Batches Online</div>
                  <Button id="btn-chinese-enroll" variant="primary" className="!py-2 !px-4 text-xs font-semibold" onClick={handleEnquire}>
                    Enquire for Fees
                  </Button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section id="faq-section" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-sm max-w-xl mx-auto">
              Find answers to core queries regarding batch modes, certifications, and starting from basic levels.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div
                  id={`faq-item-${index}`}
                  key={index}
                  className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 bg-bg-main/30 hover:bg-bg-main/50"
                >
                  <button
                    id={`faq-toggle-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-text-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-text-secondary shrink-0" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div id={`faq-answer-${index}`} className="px-5 pb-5 pt-1 text-sm text-text-secondary leading-relaxed border-t border-gray-100/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
