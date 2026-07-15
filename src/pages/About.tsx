import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Award,
  Sparkles,
  Users2,
  Heart,
  BookOpen,
  ArrowRight,
  Star,
  Quote,
  MessageSquare,
  Phone
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { testimonials } from '../data';

export default function About() {
  const routerNavigate = useNavigate();

  const handleBookConsultation = () => {
    routerNavigate('/contact');
  };

  return (
    <div id="about-page-container">
      {/* 1. ABOUT HERO */}
      <section id="about-hero" className="relative bg-bg-main pt-16 pb-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Hero text */}
          <div id="about-hero-text" className="lg:col-span-7 space-y-6 text-left">
            <span
              id="about-badge"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary border border-blue-200/40"
            >
              Empowering Hindi-Medium Students
            </span>
            
            <h1 id="about-h1" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl leading-[1.15]">
              Meet <span className="text-primary">Raj Sir</span>: The Architect of Modern Fluency.
            </h1>
            
            <p id="about-subtext" className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              With over 25+ years of core experience bridging local dialects and global communication standards, Raj Sir has transformed the spoken capabilities of thousands who previously struggled with translation hesitation.
            </p>

            <div className="pt-2">
              <Button
                id="about-consultation-btn"
                variant="primary"
                onClick={handleBookConsultation}
              >
                Book a Personal Consultation
              </Button>
            </div>

            {/* Avatar stack */}
            <div id="about-avatars" className="flex items-center gap-3 pt-6 border-t border-gray-100/80">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop" alt="Student" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop" alt="Student" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop" alt="Student" />
              </div>
              <span className="text-xs text-text-secondary font-semibold">Joined by 10k+ language learners</span>
            </div>
          </div>

          {/* Hero Portrait Side */}
          <div id="about-hero-image" className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 -m-4 rounded-3xl bg-blue-50/70 border border-blue-100/40 transform rotate-2"></div>
              
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white aspect-[4/5] relative">
                <img
                  src="https://i.ibb.co/jkG8VPTt/Screenshot-2026-07-14-233324.png"
                  alt="Raj Sir Professional Portrait"
                  className="object-cover w-full h-full object-top filter hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Floating consultation callout triggers */}
              <div className="absolute -left-6 bottom-1/4 bg-white p-3.5 rounded-2xl border border-gray-50 shadow-lg flex flex-col gap-2">
                <a
                  id="portrait-whatsapp"
                  href="https://wa.me/919015424048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-sm"
                  title="WhatsApp Raj Sir"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                </a>
                <a
                  id="portrait-call"
                  href="tel:+919015424048"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-tertiary hover:bg-tertiary-dark text-white transition-all shadow-sm"
                  title="Call Raj Sir"
                >
                  <Phone className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & METHODOLOGY (Asymmetric Grid) */}
      <section id="philosophy-section" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Core Principles</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Philosophy & Methodology
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We don't just teach grammar rules, we train you to think directly in your target language.
            </p>
          </div>

          {/* Asymmetric 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: The Comfort-First Philosophy (Light Card) */}
            <div className="lg:col-span-7 rounded-2xl bg-bg-nest p-8 border border-gray-100 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-text-primary">The Comfort-First Philosophy</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We believe standard vocabulary cannot be retained unless the environment removes the constant fear of judgment. Our classes are structured with absolute zero judgment policies, encouraging mistake-making as the quickest pathway to native-like conversational mechanics.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200/50 mt-6 text-xs font-semibold text-primary uppercase tracking-wider">
                Psychology Centered Training
              </div>
            </div>

            {/* Card 2: Solid Blue Stat Card */}
            <div className="lg:col-span-5 rounded-2xl bg-primary text-white p-8 shadow-md flex flex-col justify-between text-left">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-md">Our Achievements</span>
                <h3 className="font-sans font-extrabold text-5xl leading-none">25+ Years</h3>
                <p className="text-blue-100 text-sm leading-relaxed font-medium">
                  Empowering language skills across students and corporate professionals in Delhi NCR.
                </p>
              </div>
              <ul className="space-y-2 pt-6 border-t border-blue-400/30 mt-6 text-sm text-blue-50 font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-yellow" />
                  <span>500+ Corporate Batches</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-yellow" />
                  <span>10,000+ Students Coached</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-yellow" />
                  <span>250+ Successful Career Placements</span>
                </li>
              </ul>
            </div>

            {/* Card 3: A Friendly Mentor */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-accent-yellow/10 text-accent-yellow-container rounded-xl flex items-center justify-center font-bold">
                  B
                </div>
                <h3 className="font-sans font-bold text-xl text-text-primary">A Friendly Mentor ("Bade Bhaiya")</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Raj Sir acts less like an unapproachable academic professor and more like a supportive 'Bade Bhaiya'. His handholding approach gives students the psychological cushion to raise hands and voice queries without feeling self-conscious.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Supportive Culture
              </div>
            </div>

            {/* Card 4: Our Vision & Mission */}
            <div className="lg:col-span-7 rounded-2xl bg-dark-inverse text-dark-text p-8 relative overflow-hidden flex flex-col justify-between text-left">
              {/* background imagery simulation */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.15),transparent)]"></div>
              
              <div className="space-y-4 relative z-10">
                <div className="h-10 w-10 bg-blue-500/10 text-primary rounded-xl flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white">Our Vision & Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our mission is to level the economic playing field. English shouldn't be a privilege of elite schools. We build confidence, eliminate grammar confusion, and empower students with native fluency to command respect in global MNC boardrooms.
                </p>
              </div>
              
              <div className="relative z-10 pt-6 mt-6 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Inclusive Access</span>
                <span className="text-xs italic text-gray-400">"He understands where we stumble."</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. IMAGE + CHECKLIST SPLIT */}
      <section id="split-checklist" className="bg-bg-nest py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Mockup tablet side */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-video bg-white">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
                alt="Interactive Digital Mockup representing Spoken Lessons"
                className="w-full h-full object-cover filter brightness-95"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <Quote className="h-6 w-6 transform scale-x-[-1]" />
                </span>
              </div>
            </div>
          </div>

          {/* Checklist side */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
              Why Raj Sir is the Best Choice for Hindi-Medium Students
            </h2>
            
            <div className="space-y-5 pt-4">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary">Bilingual Excellence</h4>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    Direct native translation from Hindi to spoken English helps you understand underlying sentence patterns, instead of trying to blindly memorize foreign idioms.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary">Mindset Transformation</h4>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    We attack the psychological hesitation first. Our modules prepare you to raise hands during college workshops and present with absolute authority.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary">Cultural Context</h4>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    Learn contextual modern metaphors, official email drafting syntax, and neutral pronunciation instead of outdated bookish definitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SUCCESS STORIES (Dark Navy Section) */}
      <section id="dark-stories-section" className="bg-dark-inverse text-dark-text py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="text-left space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Student Impact</span>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Alumni Career Milestones
              </h2>
            </div>
            <button
              id="view-all-stories-btn"
              onClick={() => routerNavigate('/reviews')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-white transition-colors"
            >
              <span>View all stories</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(1, 4).map((item) => (
              <div
                id={`about-story-card-${item.id}`}
                key={item.id}
                className="bg-dark-inverse-alt rounded-2xl p-6 border border-gray-800/60 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex text-accent-yellow">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-800/80 mt-6">
                  <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full object-cover shrink-0" />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <section id="closing-cta" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="bg-bg-alt rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-blue-100/30 blur-2xl"></div>
            
            <h3 className="font-sans text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
              Ready to start your communication transformation?
            </h3>
            
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Unlock life-changing placement offers, master Goethe exams, and talk fluently without translation gaps under Raj Sir's personal mentorship.
            </p>
            
            <div className="pt-2">
              <Button
                id="closing-book-consult-btn"
                variant="primary"
                onClick={handleBookConsultation}
              >
                Book a Personal Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
