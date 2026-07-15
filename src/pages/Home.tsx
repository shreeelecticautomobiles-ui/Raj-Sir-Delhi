import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Laptop,
  CheckCircle,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Zap,
  Volume2,
  Users2,
  HelpCircle,
  Clock,
  ArrowUpRight,
  MapPin,
  Phone
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import CountUp from '../components/CountUp';
import ScrollReveal from '../components/ScrollReveal';
import { courses, testimonials, videos } from '../data';

export default function Home() {
  const navigate = useNavigate();
  
  // Interactive carousel index
  const [courseIndex, setCourseIndex] = useState(0);

  // Video modal player state
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const nextCourse = () => {
    setCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleBookDemo = () => {
    navigate('/contact');
  };

  const getWhatsAppLink = (id: string) => {
    if (id === 'c-english') {
      return "https://wa.me/919015424048?text=Hi%2C%20I%27m%20interested%20in%20the%20Spoken%20English%20Mastery%20course%20-%20please%20share%20batch%20timings";
    } else if (id === 'c-german') {
      return "https://wa.me/919015424048?text=Hi%2C%20I%27m%20interested%20in%20the%20German%20course%20-%20please%20share%20details";
    } else {
      return "https://wa.me/919015424048?text=Hi%2C%20I%27m%20interested%20in%20the%20Chinese%20course%20-%20please%20share%20details";
    }
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const getInitialsBg = (name: string) => {
    const colors = [
      'bg-red-100 text-red-700 border border-red-200',
      'bg-blue-100 text-blue-700 border border-blue-200',
      'bg-green-100 text-green-700 border border-green-200',
      'bg-yellow-100 text-yellow-700 border border-yellow-200',
      'bg-purple-100 text-purple-700 border border-purple-200',
      'bg-pink-100 text-pink-700 border border-pink-200',
      'bg-indigo-100 text-indigo-700 border border-indigo-200',
      'bg-teal-100 text-teal-700 border border-teal-200',
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    const index = sum % colors.length;
    return colors[index];
  };

  const whyUsData = [
    {
      id: 'why-1',
      /* SOURCE: live Google Maps listing, update if this changes */
      title: '1,081 Google Reviews',
      desc: 'Our students consistently rate us 5.0 stars on Google for delivering rapid, real-world spoken language confidence.',
      icon: <Star className="h-6 w-6 text-accent-yellow" fill="#FBBF24" />
    },
    {
      id: 'why-2',
      title: 'Experienced Trainer',
      desc: '15+ years of dedicated expertise by Raj Sir coaching senior corporate executives, job seekers, and students.',
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-3',
      title: 'Practical Practice',
      desc: 'Daily interactive group discussions, podium debates, and public speaking sessions designed to eliminate hesitation.',
      icon: <Volume2 className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-4',
      title: 'Hindi Medium Friendly',
      desc: 'A unique bilingual translation pedagogy designed especially for individuals who think in Hindi and struggle to speak.',
      icon: <Users2 className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-5',
      title: 'Accent Training',
      desc: 'Hone your pronunciation, syllables, and neutralize your regional influence for high-end international corporate standards.',
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-6',
      title: 'Lifetime Support',
      desc: 'Once a student, always a student. Gain complimentary, unlimited access to our speaking circles even after graduation.',
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div id="home-page-container" className="relative">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative overflow-hidden bg-bg-main pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="absolute inset-0 bg-radial-gradient from-blue-50/40 via-transparent to-transparent opacity-70"></div>
        
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 relative grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Hero Left Info */}
          <div id="hero-info" className="lg:col-span-7 space-y-6 text-left">
            <span
              id="hero-badge"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary border border-blue-200/40"
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              Delhi's Most Trusted Language Institute
            </span>
            
            <h1 id="hero-headline" className="font-sans text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl leading-[1.15]">
              Speak English <span className="text-primary">Confidently</span> with Raj Sir
            </h1>
            
            <p id="hero-subtext" className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              Join 10,000+ successful students. Master English, German, and Chinese with our unique Hindi-to-English methodology. 1,081 Verified Google Reviews.
            </p>
            
            {/* Call To Actions */}
            <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                id="hero-book-demo-btn"
                variant="primary"
                onClick={handleBookDemo}
                className="group"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/919015424048?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 px-6 py-3 font-semibold rounded-lg text-sm tracking-wider uppercase text-emerald-600 hover:bg-emerald-50 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Trust row */}
            <div id="hero-trust" className="flex items-center gap-4 pt-6 border-t border-gray-100/80">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 text-xs font-bold ring-2 ring-white border border-blue-200">
                  RS
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold ring-2 ring-white border border-emerald-200">
                  PV
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold ring-2 ring-white border border-indigo-200">
                  AM
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white text-xs font-bold ring-2 ring-white">
                  +1k
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center text-accent-yellow-container font-semibold">
                  <Star className="h-4 w-4 fill-current text-accent-yellow" />
                  <Star className="h-4 w-4 fill-current text-accent-yellow" />
                  <Star className="h-4 w-4 fill-current text-accent-yellow" />
                  <Star className="h-4 w-4 fill-current text-accent-yellow" />
                  <Star className="h-4 w-4 fill-current text-accent-yellow" />
                  {/* SOURCE: live Google Maps listing, update if this changes */}
                  <span className="ml-1.5 text-text-primary text-sm font-bold">5.0/5</span>
                </div>
                {/* SOURCE: live Google Maps listing, update if this changes */}
                <p className="text-xs text-text-secondary font-medium">1,081 Verified Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Hero Right Image / Graphic representation */}
          <div id="hero-image-pane" className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Backglow blur decorative circle */}
              <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
              
              {/* CLIENT: replace with a real photo of Raj Sir's face, ideally teaching a class, OR a 15-20s muted looping video clip of a live class */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-gray-100 aspect-[4/5] relative flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md text-primary">
                  <Users2 className="h-8 w-8" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-sm text-text-primary">Raj Sir Classroom Photo / Video</h3>
                  <p className="text-[10px] text-text-secondary max-w-[220px] mx-auto leading-relaxed">
                    Real classroom snapshot or 15s muted looping class session video clip
                  </p>
                </div>
              </div>

              {/* Next batch starting card overlay */}
              <div
                id="hero-batch-badge"
                className="absolute -bottom-6 -left-6 sm:left-auto sm:-right-6 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-bounce-slow"
              >
                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Next Batch Starts</p>
                  <p className="text-sm font-bold text-text-primary">Monday, 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TRUST BAR STRIP (4 items) */}
      <section id="trust-strip" className="bg-white border-y border-gray-100/60 py-8">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-x-4">
          <div id="trust-item-1" className="flex items-center justify-center gap-3 border-r border-gray-100 last:border-0">
            <Star className="h-6 w-6 text-accent-yellow shrink-0" fill="#FBBF24" />
            <div className="text-left">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <p className="text-sm font-bold text-text-primary leading-none">
                <CountUp end={5.0} decimals={1} suffix=" Rating" />
              </p>
              <p className="text-xs text-text-secondary mt-0.5">Top Spoken English</p>
            </div>
          </div>
          <div id="trust-item-2" className="flex items-center justify-center gap-3 md:border-r border-gray-100 last:border-0">
            <Award className="h-6 w-6 text-primary shrink-0" />
            <div className="text-left">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <p className="text-sm font-bold text-text-primary leading-none">
                <CountUp end={1081} suffix=" Reviews" />
              </p>
              <p className="text-xs text-text-secondary mt-0.5">Verified Students</p>
            </div>
          </div>
          <div id="trust-item-3" className="flex items-center justify-center gap-3 border-r border-gray-100 last:border-0">
            <Laptop className="h-6 w-6 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-text-primary leading-none">Online & Offline</p>
              <p className="text-xs text-text-secondary mt-0.5">Dual Mode Classes</p>
            </div>
          </div>
          <div id="trust-item-4" className="flex items-center justify-center gap-3 last:border-0">
            <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-text-primary leading-none">ISO Certified</p>
              <p className="text-xs text-text-secondary mt-0.5">Standard Methodology</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY LEARN FROM RAJ SIR */}
      <section id="why-us-section" className="bg-bg-nest py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Unlocking Opportunities</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Why Learn From Raj Sir?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              We don't just teach grammar; we build your confidence to speak fluently in any environment.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsData.map((item) => (
              <Card id={item.id} key={item.id} className="p-6 flex flex-col justify-between text-left space-y-4 border-none bg-white">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 4. PREMIUM COURSES SECTION (with carousel controls) */}
      <section id="courses-carousel-section" className="bg-white py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="text-left space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Programs</span>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Our Premium Courses
              </h2>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex gap-2">
              <button
                id="carousel-prev"
                onClick={prevCourse}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-text-primary hover:bg-bg-nest hover:text-primary transition-colors cursor-pointer"
                title="Previous Course"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                id="carousel-next"
                onClick={nextCourse}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-text-primary hover:bg-bg-nest hover:text-primary transition-colors cursor-pointer"
                title="Next Course"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Course Carousel Render */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-bg-main/50 rounded-3xl p-6 sm:p-10 border border-gray-100">
            
            {/* Course Image Side */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 relative shadow-md">
              {courses[courseIndex].id === 'c-english' ? (
                /* CLIENT: replace with real classroom/students photo */
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <Users2 className="h-10 w-10 text-text-secondary" />
                  <div>
                    <h4 className="font-sans font-bold text-xs text-text-primary">Real Classroom & Students Photo</h4>
                    <p className="text-[10px] text-text-secondary mt-0.5">Real classroom or interactive teaching session</p>
                  </div>
                </div>
              ) : (
                <img
                  src={courses[courseIndex].image}
                  alt={courses[courseIndex].title}
                  className="object-cover w-full h-full hover:scale-105 transition-all duration-500"
                />
              )}
              {courses[courseIndex].badge && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm">
                  {courses[courseIndex].badge}
                </span>
              )}
            </div>

            {/* Course Details Side */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <h3 className="font-sans text-2xl font-bold text-text-primary sm:text-3xl">
                  {courses[courseIndex].title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-text-secondary font-semibold">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-gray-100">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {courses[courseIndex].duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-gray-100">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {courses[courseIndex].timing}
                  </span>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary">
                {courses[courseIndex].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  id={`carousel-enroll-${courses[courseIndex].id}`}
                  href={getWhatsAppLink(courses[courseIndex].id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 font-semibold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer ${
                    courses[courseIndex].isBestSeller 
                      ? "bg-primary hover:bg-primary-dark text-white shadow-md hover:-translate-y-[3px] hover:shadow-lg" 
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-[3px] transition-all"
                  }`}
                >
                  {courses[courseIndex].buttonText}
                </a>
                <a
                  id={`carousel-syllabus-${courses[courseIndex].id}`}
                  href={getWhatsAppLink(courses[courseIndex].id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-semibold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer bg-dark-inverse hover:bg-dark-inverse-alt text-dark-text shadow-md hover:-translate-y-[3px] hover:shadow-lg"
                >
                  View Details
                </a>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {courses.map((_, idx) => (
              <button
                id={`carousel-dot-${idx}`}
                key={idx}
                onClick={() => setCourseIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  courseIndex === idx ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300'
                }`}
                title={`Go to course ${idx + 1}`}
              ></button>
            ))}
          </div>

        </ScrollReveal>
      </section>

      {/* 5. WHAT OUR STUDENTS SAY */}
      <section id="testimonials-section" className="bg-bg-alt/40 py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Student Reviews</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              What Our Students Say
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <span className="text-lg font-bold text-text-primary">5.0/5.0</span>
              <div className="flex text-accent-yellow font-semibold">
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
              </div>
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <span className="text-xs text-text-secondary font-medium">(1,081 Google Reviews)</span>
            </div>
          </div>

          {/* Testimonial Cards (First 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item) => (
              <Card id={item.id} key={item.id} className="flex flex-col justify-between text-left h-full bg-white relative">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex text-accent-yellow">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-6">
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
            ))}
          </div>

          <div className="text-center pt-2">
            <Button
              id="view-all-reviews-btn"
              variant="secondary"
              onClick={() => navigate('/reviews')}
            >
              View All Student Reviews
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. LEARN FOR FREE ON YOUTUBE (Dark rounded card section) */}
      <section id="youtube-section" className="bg-bg-main py-16">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="bg-dark-inverse text-dark-text rounded-3xl py-12 px-6 md:px-12 space-y-12 shadow-xl relative overflow-hidden">
            
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="text-left space-y-3 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Official Channel</span>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Learn For Free on YouTube
                </h2>
                <p className="text-gray-400 text-sm">
                  Get high-impact spoken lessons, foreign grammar breakdowns, and vocabulary booster tips daily.
                </p>
              </div>
              <a
                id="youtube-subscribe-top-btn"
                href="https://www.youtube.com/c/rajsirdelhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Play className="h-4 w-4 fill-white shrink-0" />
                <span>Subscribe Now</span>
              </a>
            </div>

            {/* 4 Video Thumbnail Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((vid) => (
                <div
                  id={`vid-card-${vid.id}`}
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.youtubeId)}
                  className="group relative cursor-pointer bg-dark-inverse-alt rounded-2xl overflow-hidden border border-gray-800/60 hover:border-red-600/40 transition-all duration-300 shadow-sm"
                >
                  {/* Thumbnail aspect */}
                  <div className="aspect-video w-full bg-gray-900 relative overflow-hidden">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="object-cover w-full h-full filter brightness-90 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-white ml-0.5" />
                      </span>
                    </div>
                    {/* Duration pill */}
                    <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-md text-white">
                      {vid.duration}
                    </span>
                  </div>
                  {/* Meta text */}
                  <div className="p-4 text-left">
                    <h3 className="font-sans text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-red-400 transition-colors">
                      {vid.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>{vid.views}</span>
                      <span>•</span>
                      <span>{vid.uploadedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 6.5 YOUTUBE CTA BANNER CARD */}
      <section id="youtube-cta-banner" className="bg-bg-main pb-16">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="bg-primary text-white rounded-[32px] py-12 px-8 md:px-16 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left side: Heading & Stats */}
            <div className="space-y-8 max-w-xl">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Never miss a lesson. Subscribe for daily updates.
              </h3>
              
              {/* CLIENT: insert real subscriber count and real video count from YouTube Studio before launch */}
              <div className="flex flex-row gap-8 justify-center md:justify-start items-center">
                <div className="text-left">
                  <p className="text-3xl font-extrabold text-white tracking-tight">[7K+]</p>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-0.5">Subscribers</p>
                </div>
                <div className="h-8 w-px bg-blue-400/30"></div>
                <div className="text-left">
                  <p className="text-3xl font-extrabold text-white tracking-tight">[1,200+]</p>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-0.5">Videos Published</p>
                </div>
              </div>
            </div>

            {/* Right side: Button & Subtext */}
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <a
                id="youtube-subscribe-bottom-btn"
                href="https://www.youtube.com/c/rajsirdelhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-2xl text-sm font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="uppercase tracking-wider">Subscribe Now</span>
                <span className="text-base">🔔</span>
              </a>
              <p className="text-blue-100 text-xs tracking-wide">
                Join the fastest growing language community
              </p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 4. REAL GOOGLE MAP EMBED */}
      <section id="google-map-section-home" className="bg-bg-main py-16 border-t border-gray-100">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visit Our Academy details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <h3 className="font-sans text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
                  Visit Our Classes
                </h3>
                <p className="text-text-secondary text-sm">
                  Come experience Raj Sir's highly effective interactive classes in person. Located at Shakarpur Main market, Laxmi Nagar.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary border border-indigo-100/50 shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-text-primary">Address</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Shakarpur Main market, Laxmi Nagar, Delhi, 110092
                    </p>
                  </div>
                </div>

                {/* Mobile/Phone Item */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary border border-indigo-100/50 shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-text-primary">Direct Hotline</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      <a href="tel:+919015424048" className="hover:text-primary font-semibold transition-colors">+91 90154 24048</a>
                      <span className="text-xs text-text-secondary block mt-0.5">(Ask for Course Counselors)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="home-maps-get-directions"
                  href="https://www.google.com/maps/place/Raj+Sir+Delhi+Spoken+English+Class/@28.6333829,77.2803281,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfdfc0328b29f:0xbedbeabb9a944622!8m2!3d28.6333782!4d77.282903!16s%2Fg%2F11pf885gsm?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-primary text-white font-bold text-xs px-6 py-3 rounded-full shadow-md hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed with rounded corner */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[32px] overflow-hidden border border-gray-200 shadow-xl bg-bg-nest h-[450px]">
                <iframe 
                  src="https://maps.google.com/maps?q=Raj%20Sir%20Delhi%20Spoken%20English%20Class&z=17&ie=UTF8&iwloc=A&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Raj Sir Delhi Spoken English Class Location on Home Page"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Video Modal Player Overlay */}
      {activeVideoId && (
        <div
          id="video-player-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-gray-800">
            {/* Direct Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors border border-gray-700 font-bold"
            >
              ✕
            </button>
            <iframe
              title="Raj Sir English YouTube Lesson Player"
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
