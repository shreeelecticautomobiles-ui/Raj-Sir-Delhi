import React, { useState, useEffect } from 'react';
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
  Phone,
  GraduationCap,
  Briefcase,
  Search,
  Languages,
  Home as HomeIcon,
  UserCheck,
  FileText,
  BookOpen
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

  // Transformation Journey active step
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 12);
    }, 2500); // 2.5s per step, looping infinitely in 30 seconds
    return () => clearInterval(interval);
  }, [isPlaying]);

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
      return "https://wa.me/919015424048?text=Hi%2C%20I%27m%20interested%20in%20the%20Spoken%20English%20course%20-%20please%20share%20batch%20timings";
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
      title: 'Speak English Fluently',
      desc: 'Gain natural flow, correct pronunciation, and express your thoughts clearly without translating in your head.',
      icon: <Volume2 className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-2',
      title: 'Build Real Confidence',
      desc: 'Overcome the fear of making mistakes and participate actively in any social or professional conversation.',
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-3',
      title: 'Crack Interviews',
      desc: 'Master professional self-introduction, handle tricky questions, and project absolute authority during job interviews.',
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-4',
      title: 'Public Speaking Skills',
      desc: 'Speak fearlessly from a stage or podium, hold your audience\'s attention, and structure impactful presentations.',
      icon: <Users2 className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-5',
      title: 'Better Communication Skills',
      desc: 'Articulate ideas clearly, listen actively, and build strong interpersonal relations in personal and business life.',
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      id: 'why-6',
      title: 'Professional Personality Development',
      desc: 'Transform your body language, expand your professional vocabulary, and develop a magnetic, corporate-ready aura.',
      icon: <Zap className="h-6 w-6 text-primary" />
    }
  ];

  const whoShouldJoinData = [
    { id: 'wsj-1', label: 'Students', icon: <GraduationCap className="h-6 w-6" /> },
    { id: 'wsj-2', label: 'Working Professionals', icon: <Briefcase className="h-6 w-6" /> },
    { id: 'wsj-3', label: 'Job Seekers', icon: <Search className="h-6 w-6" /> },
    { id: 'wsj-4', label: 'College Students', icon: <BookOpen className="h-6 w-6" /> },
    { id: 'wsj-5', label: 'Hindi Medium Students', icon: <Languages className="h-6 w-6" /> },
    { id: 'wsj-6', label: 'Housewives', icon: <HomeIcon className="h-6 w-6" /> },
    { id: 'wsj-7', label: 'Business Owners', icon: <ArrowUpRight className="h-6 w-6" /> },
    { id: 'wsj-8', label: 'Interview Preparation', icon: <FileText className="h-6 w-6" /> },
    { id: 'wsj-9', label: 'Personality Development', icon: <UserCheck className="h-6 w-6" /> }
  ];

  const journeySteps = [
    {
      stepNum: "DAY 1",
      phase: "THE STARTING BLOCK",
      label: "HESITATION",
      outcome: "I feel hesitant & translation keeps me silent.",
      description: "Fear of making grammatical mistakes, mother tongue influence (MTI), and translating in your head before speaking.",
      icon: "🔇",
      tip: "It's not your fault. Traditional education taught rules, not fluent spoken reflexes."
    },
    {
      stepNum: "STEP 01",
      phase: "INITIATION",
      label: "BOOK FREE DEMO",
      outcome: "I take the first micro-step.",
      description: "Experience Raj Sir's native classroom spoken training method risk-free. No theoretical lectures—only pure practical speaking.",
      icon: "📅",
      tip: "Reserve your seat in seconds via WhatsApp or dynamic booking."
    },
    {
      stepNum: "STEP 02",
      phase: "EVALUATION",
      label: "ATTEND YOUR FIRST CLASS",
      outcome: "I get friendly evaluation.",
      description: "Participate in a highly interactive, welcoming trial session. Map out your starting baseline with expert support.",
      icon: "👥",
      tip: "Zero evaluation stress. We focus entirely on friendly guidance."
    },
    {
      stepNum: "STEP 03",
      phase: "PLACEMENT",
      label: "JOIN YOUR BATCH",
      outcome: "I find my matched-level peers.",
      description: "Get placed in a curated small batch matching your fluency level. No embarrassment, only peer-to-peer acceleration.",
      icon: "✅",
      tip: "Morning & evening slots tailored for students and corporate workers."
    },
    {
      stepNum: "STEP 04",
      phase: "HABIT BUILDER",
      label: "DAILY SPEAKING PRACTICE",
      outcome: "I start practicing daily.",
      description: "Engage in intensive spoken drills, sentence-building frameworks, and real-time conversation feedback loops.",
      icon: "🗣️",
      tip: "80% of class time is dedicated to student speech exercises."
    },
    {
      stepNum: "STEP 05",
      phase: "BREAKTHROUGH",
      label: "BUILD CONFIDENCE",
      outcome: "I overcome the internal block.",
      description: "The mental block shatters. Speak on general topics spontaneously without freezing or second-guessing yourself.",
      icon: "✨",
      tip: "Witness public speaking hesitation drop by 50% within two weeks."
    },
    {
      stepNum: "STEP 06",
      phase: "COMMAND",
      label: "PUBLIC SPEAKING",
      outcome: "I command the official stage.",
      description: "Stand on our official campus podium. Master vocal modulation, microphone confidence, and positive body posture.",
      icon: "🎤",
      tip: "You will stand tall and address an audience completely at ease."
    },
    {
      stepNum: "STEP 07",
      phase: "CAREER BOOSTER",
      label: "INTERVIEW PREPARATION",
      outcome: "I master self-introduction.",
      description: "Crack premium corporate roles. Tailored mock interview rounds covering tricky HR questions and elevator pitches.",
      icon: "📝",
      tip: "We polish your professional profile pitch and presentation style."
    },
    {
      stepNum: "STEP 08",
      phase: "CORPORATE FLUENCY",
      label: "PROFESSIONAL COMMUNICATION",
      outcome: "I lead corporate meetings.",
      description: "Acquire professional corporate vocabulary, presentation techniques, negotiation terms, and email etiquette.",
      icon: "💼",
      tip: "Learn to articulate team updates with natural professional authority."
    },
    {
      stepNum: "STEP 09",
      phase: "CHARISMA",
      label: "PERSONALITY DEVELOPMENT",
      outcome: "I project executive presence.",
      description: "Align your professional body language, handshake cues, and charming interpersonal aura with global standards.",
      icon: "🌟",
      tip: "Unlock elite corporate mannerisms and magnetic social skills."
    },
    {
      stepNum: "STEP 10",
      phase: "ACCELERATION",
      label: "CAREER TRANSFORMATION",
      outcome: "I conquer global opportunities.",
      description: "Break career glass ceilings. Demand promotions, deliver high-stakes pitches, and converse with global teams as an equal.",
      icon: "🚀",
      tip: "Join our alumni community currently leading in Google, Amazon, Infosys, and more."
    },
    {
      stepNum: "STEP 11",
      phase: "DESTINATION",
      label: "BECOME FLUENT",
      outcome: "Today I speak with flow & flair.",
      description: "Absolute self-assurance. You think in English, express complex ideas seamlessly, and command respect instantly.",
      icon: "🏆",
      tip: "The final step to complete native-like speaker authority and success."
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
              id="hero-prestige-tag"
              className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md animate-fade-in"
            >
              <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
              DELHI'S NO.1 ENGLISH & LANGUAGE ACADEMY
            </span>

            <h1 id="hero-headline" className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[#171C59]">
              Speak English <br />
              <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">
                Confidently
              </span> <br className="hidden sm:inline" />
              with Raj Sir
            </h1>
            
            <p id="hero-subtext" className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              Join Delhi's premier destination for English, German, and Chinese speaking fluency. Overcome hesitation with Raj Sir's native classroom method and interactive batches.
            </p>
            
            {/* Call To Actions */}
            <div id="hero-ctas" className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                id="hero-book-demo-btn"
                variant="primary"
                onClick={handleBookDemo}
                className="group font-bold"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/919015424048?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 px-6 py-3 font-bold rounded-lg text-sm tracking-wider uppercase text-emerald-600 hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-95 transform"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Social Trust row (Desktop) */}
            <div id="hero-trust-desktop" className="hidden lg:flex items-center gap-4 pt-6 border-t border-gray-100/80">
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
                  <span className="ml-1.5 text-text-primary text-sm font-extrabold">5.0 ★</span>
                </div>
                {/* SOURCE: live Google Maps listing, update if this changes */}
                <p className="text-xs text-text-secondary font-bold">1,081 Verified Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Hero Right Image / Graphic representation */}
          <div id="hero-image-pane" className="lg:col-span-5 relative flex flex-col justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Backglow blur decorative circle */}
              <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
              
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-slate-50 aspect-[4/3] relative">
                <img
                  src="https://i.ibb.co/6RG29rkW/Gemini-Generated-Image-qyynnnqyynnnqyyn.png"
                  alt="Raj Sir Spoken English Learning"
                  className="object-cover w-full h-full object-center hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
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

            {/* Social Trust row (Mobile) - Stacked BELOW image with proper 24px (mt-8 = 32px) margin */}
            <div id="hero-trust-mobile" className="lg:hidden flex items-center gap-4 mt-12 pt-6 border-t border-gray-100/80 w-full max-w-md text-left">
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
                  <span className="ml-1.5 text-text-primary text-sm font-extrabold">5.0 ★</span>
                </div>
                <p className="text-xs text-text-secondary font-bold">1,081 Verified Google Reviews</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 1.5. WHO SHOULD JOIN? (New Section) */}
      <section id="who-should-join-section" className="bg-[#F1F3FF] py-16 border-y border-gray-100">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Targeted Training</span>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Who Should Join Our Batches?
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Our courses are carefully customized to accelerate career success and build fluent communication for various goals.
            </p>
          </div>

          {/* Grid of 9 Audience Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {whoShouldJoinData.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-text-primary uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TRUST STATISTICS SECTION (Rebuilt 8-item Grid) */}
      <section id="trust-statistics-section" className="bg-white py-16 border-b border-gray-100">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Proven Outcomes</span>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Verified Institute Milestones
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              We deliver real results. Explore the verified metrics that make us Delhi's most trusted spoken language destination.
            </p>
          </div>

          {/* 8-Item Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Stat 1: Google Rating */}
            <div id="stat-rating" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-accent-yellow">
                <Star className="h-6 w-6 fill-current text-accent-yellow" />
              </div>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-text-primary">
                {/* SOURCE: live Google Maps listing, update if this changes */}
                <CountUp end={5.0} decimals={1} />
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Google Rating</p>
              <p className="text-[11px] text-text-secondary">Perfect 5.0 Rating</p>
            </div>

            {/* Stat 2: Google Reviews */}
            <div id="stat-reviews" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <MessageSquare className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-text-primary">
                {/* SOURCE: live Google Maps listing, update if this changes */}
                <CountUp end={1081} />
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Google Reviews</p>
              <p className="text-[11px] text-text-secondary">Verified Students</p>
            </div>

            {/* Stat 3: Languages */}
            <div id="stat-languages" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <Languages className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-text-primary">
                <CountUp end={3} />
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Languages</p>
              <p className="text-[11px] text-text-secondary">English, German, Chinese</p>
            </div>

            {/* Stat 4: Learning Modes */}
            <div id="stat-modes" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <Laptop className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-text-primary">
                <CountUp end={2} />
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Dual Modes</p>
              <p className="text-[11px] text-text-secondary">Online & Offline Classes</p>
            </div>

            {/* Stat 5: Small Batches */}
            <div id="stat-batches" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <Users2 className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-xl sm:text-2xl text-text-primary pt-1">
                Small
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider mt-1">Batch Sizes</p>
              <p className="text-[11px] text-text-secondary">Personalized Attention</p>
            </div>

            {/* Stat 6: Practice Focus */}
            <div id="stat-practice" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <Volume2 className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-xl sm:text-2xl text-text-primary pt-1">
                Daily
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider mt-1">Discussions</p>
              <p className="text-[11px] text-text-secondary">Stage Speeches & Debates</p>
            </div>

            {/* Stat 7: Campus Location */}
            <div id="stat-location" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-sm sm:text-base text-text-primary py-2.5">
                Laxmi Nagar
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Prime Campus</p>
              <p className="text-[11px] text-text-secondary">Shakarpur Main Market, Delhi</p>
            </div>

            {/* Stat 8: Social Community */}
            <div id="stat-socials" className="bg-[#F9F9FF] p-6 rounded-2xl border border-gray-100 text-center space-y-2">
              <div className="flex justify-center text-primary">
                <Award className="h-6 w-6" />
              </div>
              <p className="font-sans font-extrabold text-xl sm:text-2xl text-text-primary pt-1">
                Linked
              </p>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider mt-1">Active Community</p>
              <p className="text-[11px] text-text-secondary">YouTube & Instagram</p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY LEARN FROM RAJ SIR */}
      <section id="why-us-section" className="bg-[#F9F9FF] py-20">
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
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <Users2 className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-sans font-bold text-xs text-text-primary">Photo pending</h4>
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
              <div className="space-y-4">
                {/* High-impact outcome statement highlighted in a prominent banner */}
                <p className="text-xs sm:text-sm font-extrabold text-[#141B2B] leading-relaxed bg-blue-50/50 p-3.5 rounded-xl border-l-4 border-primary">
                  🎯 {courses[courseIndex].features[0]}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-secondary">
                  {courses[courseIndex].features.slice(1).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  id={`carousel-enroll-${courses[courseIndex].id}`}
                  href={getWhatsAppLink(courses[courseIndex].id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 font-bold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer ${
                    courses[courseIndex].isBestSeller 
                      ? "bg-primary hover:bg-primary-dark text-white shadow-md hover:-translate-y-0.5" 
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5"
                  }`}
                >
                  {courses[courseIndex].buttonText}
                </a>
                <button
                  id={`carousel-syllabus-${courses[courseIndex].id}`}
                  onClick={handleBookDemo}
                  className="px-6 py-3 font-bold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer bg-dark-inverse hover:bg-dark-inverse-alt text-dark-text shadow-md hover:-translate-y-0.5"
                >
                  Book Free Demo
                </button>
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

      {/* 4.5 THE TRANSFORMATION JOURNEY - Apple + Linear + Stripe Level */}
      <section 
        id="student-journey-section" 
        className="bg-[#0B0F33] text-white py-24 md:py-32 relative overflow-hidden border-y border-white/[0.05]"
      >
        {/* Ambient Cosmic Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/10 blur-[150px] pointer-events-none" />
        
        {/* Subtle tech background grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4F46E5]/20 border border-[#818CF8]/30 px-5 py-2 text-xs font-black uppercase tracking-widest text-slate-200 shadow-xl backdrop-blur-md">
              <Sparkles className="h-4 w-4 animate-pulse text-[#38BDF8]" />
              THE TRANSFORMATION JOURNEY
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              Your Confidence <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#4F46E5] bg-clip-text text-transparent">
                Transformation Journey
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              We guide you step-by-step from day one hesitation to absolute fluent mastery. Hover or tap on any stage below to witness your future self unfold.
            </p>
          </div>

          {/* Interactive Journey Timeline Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Panel: Real-Time Transformation Dashboard (Sticky on Desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-8 md:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Accent glow on card border */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#4F46E5]" />
                
                {/* Active step progress track */}
                <div className="absolute top-4 right-6 flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.08] px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Phase {activeStep + 1} / 12</span>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl md:text-6xl bg-white/[0.05] h-20 w-20 rounded-2xl flex items-center justify-center border border-white/[0.08] shadow-inner">
                      {journeySteps[activeStep].icon}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-[#38BDF8]">
                        {journeySteps[activeStep].phase}
                      </span>
                      <h4 className="font-sans text-xl md:text-2xl font-black text-white tracking-tight">
                        {journeySteps[activeStep].label}
                      </h4>
                    </div>
                  </div>

                  <hr className="border-white/[0.06]" />

                  {/* Outcome Statement */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 block">
                      MY TRANSFORMATION OUTCOME
                    </span>
                    <p className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
                      "{journeySteps[activeStep].outcome}"
                    </p>
                  </div>

                  {/* Deep Description */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 block">
                      HOW RAJ SIR MAKES IT HAPPEN
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {journeySteps[activeStep].description}
                    </p>
                  </div>

                  {/* Motivational Micro-Tip */}
                  <div className="bg-gradient-to-r from-[#4F46E5]/10 to-[#38BDF8]/10 border border-white/[0.05] p-4 rounded-2xl flex items-start gap-3">
                    <span className="text-lg shrink-0 mt-0.5">💡</span>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-black text-[#38BDF8] block">
                        COACHING STRATEGY
                      </span>
                      <p className="text-xs text-slate-200 font-medium leading-normal">
                        {journeySteps[activeStep].tip}
                      </p>
                    </div>
                  </div>

                  {/* Button trigger */}
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="https://wa.me/919015424048?text=Hi%2C%20I%27m%20ready%20to%20start%20my%20confidence%20transformation%20journey%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#4F46E5] text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl shadow-[0_12px_30px_rgba(79,70,229,0.3)] transition-all cursor-pointer hover:scale-102"
                    >
                      <span>Begin This Phase</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Progress Bar Indicator */}
              <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl space-y-2">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase text-slate-400">
                  <span>Journey Progress</span>
                  <span>{Math.round(((activeStep + 1) / 12) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#4F46E5] via-[#818CF8] to-[#38BDF8] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((activeStep + 1) / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Panel: Scrollable Vertical Track of 12 Steps */}
            <div className="lg:col-span-7 relative pl-12 md:pl-16 space-y-8">
              
              {/* Vertical Connector Line Track */}
              <div className="absolute left-[20px] md:left-[28px] top-4 bottom-4 w-[3px] bg-white/[0.05] rounded-full" />
              
              {/* Dynamic glowing active connector height */}
              <div 
                className="absolute left-[20px] md:left-[28px] top-4 w-[3px] bg-gradient-to-b from-[#4F46E5] via-[#818CF8] to-[#38BDF8] rounded-full transition-all duration-500 shadow-[0_0_15px_#4F46E5]"
                style={{ 
                  height: `calc(${(activeStep / 11) * 100}% - 8px)` 
                }}
              />

              {/* Traveling Glowing Dot Indicator */}
              <div 
                className="absolute left-[20px] md:left-[28px] h-6 w-6 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out flex items-center justify-center shadow-[0_0_30px_#06B6D4,0_0_15px_#3B82F6] z-20"
                style={{ 
                  top: `calc(${4 + (activeStep / 11) * 92}% + 12px)`
                }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-white animate-ping" />
                <div className="absolute h-2 w-2 rounded-full bg-white" />
              </div>

              {journeySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isCompleted = idx < activeStep;
                
                return (
                  <div 
                    key={idx}
                    id={`journey-step-card-${idx}`}
                    onMouseEnter={() => {
                      setIsPlaying(false);
                      setActiveStep(idx);
                    }}
                    onMouseLeave={() => {
                      setIsPlaying(true);
                    }}
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveStep(idx);
                    }}
                    className={`relative text-left group transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'scale-[1.02] md:scale-[1.03] z-10' 
                        : 'hover:scale-[1.01] opacity-60 hover:opacity-90'
                    }`}
                  >
                    {/* Node Circle Indicator */}
                    <div 
                      className={`absolute left-[-44px] md:left-[-52px] top-1/2 -translate-y-1/2 h-8 w-8 rounded-full flex items-center justify-center z-10 transition-all duration-500 border-2 ${
                        isActive
                          ? 'bg-[#0B0F33] border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-110'
                          : isCompleted
                            ? 'bg-[#4F46E5] border-[#4F46E5]'
                            : 'bg-[#141B3B] border-white/10'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-4.5 w-4.5 text-white" />
                      ) : (
                        <span className={`text-[10px] font-black font-mono ${isActive ? 'text-[#38BDF8]' : 'text-slate-500'}`}>
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Step Card Content */}
                    <div 
                      className={`p-6 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#4F46E5]/15 to-[#38BDF8]/5 border-[#818CF8]/30 shadow-[0_20px_50px_rgba(79,70,229,0.15)]'
                          : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                            isActive
                              ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20'
                              : 'bg-white/[0.05] text-slate-400 border-white/[0.05]'
                          }`}>
                            {step.stepNum}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                            {step.phase}
                          </span>
                        </div>
                        
                        <span className="text-xs font-mono font-medium text-slate-500">
                          {idx === 0 ? "Initial Block" : idx === 11 ? "Fluency Mastery" : `Step ${idx}`}
                        </span>
                      </div>

                      <h3 className={`font-sans text-lg font-black tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {step.label}
                      </h3>

                      <p className={`text-xs mt-1 font-semibold leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-[#38BDF8]' : 'text-slate-400'
                      }`}>
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </ScrollReveal>
      </section>

      {/* 5. WHAT OUR STUDENTS SAY */}
      <section id="testimonials-section" className="bg-[#F9F9FF] py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Student Reviews</span>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              What Our Students Say
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <span className="text-lg font-bold text-text-primary">5.0 ★</span>
              <div className="flex text-accent-yellow font-semibold">
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
                <Star className="h-4 w-4 fill-current text-accent-yellow" />
              </div>
              {/* SOURCE: live Google Maps listing, update if this changes */}
              <span className="text-xs text-text-secondary font-bold">(1,081 Google Reviews)</span>
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
      <section id="youtube-section" className="bg-white py-16">
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
      <section id="youtube-cta-banner" className="bg-[#F1F3FF] pb-16">
        <ScrollReveal className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="bg-primary text-white rounded-[32px] py-12 px-8 md:px-16 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left side: Heading & Value Prop */}
            <div className="space-y-4 max-w-xl text-left">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                Never miss a lesson. Subscribe for daily updates.
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Join our active online community and get access to free bite-sized English speaking tips, pronunciation guides, and interactive grammar tutorials directly in your feed.
              </p>
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
      <section id="google-map-section-home" className="bg-white py-16 border-t border-gray-100">
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
                      D-15, Shakarpur Main market Metro pilar no. 49, Laxmi Nagar, Delhi, 110092
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

      {/* FINAL CTA BANNER SECTION */}
      <section id="final-cta-banner-section" className="bg-[#F9F9FF] py-16 px-6 md:px-8">
        <ScrollReveal className="mx-auto max-w-5xl">
          <div className="bg-accent-yellow rounded-3xl md:rounded-[40px] py-16 px-6 md:px-16 shadow-xl border border-amber-300 text-center space-y-8 relative overflow-hidden">
            {/* Ambient overlay light circles */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

            <div className="flex justify-center items-center gap-1.5 text-text-primary relative z-10">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2 text-sm font-extrabold text-text-primary">5.0 Rating · 1,081 Verified Google Reviews</span>
            </div>

            <div className="space-y-4 relative z-10">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
                Start Your English Speaking Journey Today
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Join Delhi's trusted language institute and transform your confidence, communication skills, and career opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
              <Button
                id="final-cta-book-demo-btn"
                variant="dark"
                onClick={handleBookDemo}
                className="px-8 py-4 font-bold text-sm tracking-wider uppercase shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Free Demo Class
              </Button>
              <a
                id="final-cta-whatsapp-btn"
                href="https://wa.me/919015424048?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-text-primary text-text-primary hover:bg-text-primary/5 px-8 py-3.5 font-bold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-95 transform"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Now</span>
              </a>
              <a
                id="final-cta-call-btn"
                href="tel:+919015424048"
                className="inline-flex items-center justify-center gap-2 border-2 border-text-primary/40 text-text-primary hover:bg-text-primary/5 px-8 py-3.5 font-bold rounded-lg text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-95 transform"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
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
