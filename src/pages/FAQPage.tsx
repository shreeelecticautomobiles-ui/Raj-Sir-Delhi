import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, MessageSquare, HelpCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function FAQPage() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const faqList = [
    {
      question: 'What are the fees of Spoken English Classes in Delhi?',
      answer: 'The fees of Spoken English Classes at Raj Sir Delhi Spoken English Class are highly affordable and vary depending on the chosen course tier (Beginner, Intermediate, or Advanced) and batch duration (usually 2 to 4 months). We also offer customized package structures for student groups, competitive exam aspirants, and working professionals. Contact our counseling desk for the latest batch discounts and fee charts.',
    },
    {
      question: 'Does Raj Sir provide German language classes?',
      answer: 'Yes! Raj Sir Delhi Spoken English Class offers complete German Language Classes aligning with the official Goethe Institute CEFR standard levels from A1 (Beginner) to B2 (Vantage/Upper-Intermediate). Both online and offline batches are available, taught by professional language educators with extensive certification guidance and test-taking practice materials.',
    },
    {
      question: 'Are online classes available?',
      answer: 'Absolutely! We conduct live, highly interactive online sessions for Spoken English, German Language, and Chinese Language courses. Online classes feature the exact same interactive drills, group debates, and feedback loops as our physical Shakarpur center, so you can learn fluently from any location globally.',
    },
    {
      question: 'Are Hindi medium students welcome?',
      answer: 'Hindi medium students are our primary focus! Raj Sir is famously known for his proprietary Hindi-to-English translation methodology. We start from ground zero (conceptualizing sentences in Hindi first) and build up your fluency step-by-step so you can overcome hesitation, stop translating in your head, and speak naturally and spontaneously.',
    },
    {
      question: 'Do you provide public speaking training?',
      answer: 'Yes. Public speaking and stage presence are core parts of our coaching curriculum. Students participate in daily podium speeches, live debate circles, and extempore practice. We focus on voice modulation, eye contact, body language adjustments, and overcoming stage fright to ensure complete boardroom command.',
    },
    {
      question: 'Are interview preparation classes available?',
      answer: 'Yes! Our courses include dedicated interview preparation workshops. We cover high-impact self-introductions, answering tricky HR and technical panel questions, resume writing guidance, corporate etiquette, and mock interview simulations designed to help you secure placements in top MNCs.',
    },
    {
      question: 'What are the timings of the classes?',
      answer: 'To accommodate both college-goers and working professionals, we operate flexible batches throughout the day from 8:00 AM to 8:30 PM. We run morning batches, afternoon practice classes, evening executive batches, and special weekend-only classes for working professionals.',
    },
    {
      question: 'Is there a free demo class available?',
      answer: 'Yes! We offer a completely free personal demo and evaluation class before you enroll. This lets you meet Raj Sir, experience our unique teaching methodology firsthand, assess your current fluency levels, and choose the perfect batch without any commitment.',
    },
    {
      question: 'Do students receive personality development training?',
      answer: 'Yes, personality development is integrated directly into all of our speaking modules. We coach students on structural body language, official email formatting, corporate dining and workplace etiquette, conversational listening tricks, and positive micro-expression habits to build a magnetic professional persona.',
    },
  ];

  // Build the FAQ Schema structure dynamically
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqList.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <div id="faq-page-container">
      <SEO
        title="Frequently Asked Questions (FAQs) | Raj Sir Delhi Spoken English"
        description="Find answers to all your queries regarding Spoken English fees, German language certification, Chinese batches, online classes, and class timings at Raj Sir Delhi."
        keywords="Spoken English classes Delhi fees, German language classes Laxmi Nagar, Online English speaking Delhi, Learn English from Hindi, public speaking course Delhi"
        schemaMarkup={faqSchema}
      />

      {/* 1. HERO HEADER */}
      <section id="faq-hero" className="bg-gradient-to-b from-blue-50/50 via-white to-bg-main py-16 md:py-24 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-6">
          <span
            id="faq-badge"
            className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
            STUDENT ASSISTANCE & CLARITY DESK
          </span>
          <h1 id="faq-title" className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-[#171C59]">
            Frequently Asked <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">Questions</span>.
          </h1>
          <p id="faq-subtext" className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Got queries? Find official answers regarding batch timings, course fees, certification structures, and eligibility criteria for our premium language classes in Laxmi Nagar, Delhi.
          </p>
        </div>
      </section>

      {/* 2. FAQS LIST SECTION */}
      <section id="faq-list-section" className="bg-white py-12 pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#2563EB]/30 bg-blue-50/10 shadow-[0_4px_20px_rgba(37,99,235,0.03)]'
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-sans font-bold text-sm sm:text-base text-text-primary hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`transition-all overflow-hidden duration-300 ${
                      isExpanded ? 'max-h-[500px] border-t border-slate-100/50' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-text-secondary text-xs sm:text-sm leading-relaxed text-left">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ HELP CTA CARD */}
          <div className="mt-16 bg-bg-main border border-slate-100 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <div className="flex justify-center sm:justify-start items-center gap-2 text-primary">
                <HelpCircle className="h-5 w-5" />
                <span className="text-xs font-bold tracking-widest uppercase">Still have a question?</span>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm">
                Get direct solutions from our language experts over call or WhatsApp. We are here to help 24x7.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                id="faq-cta-demo-btn"
                variant="primary"
                onClick={() => navigate('/contact')}
                className="px-5 py-3 text-xs uppercase tracking-widest font-bold"
              >
                Ask A Counselor
              </Button>
              <a
                id="faq-cta-whatsapp"
                href="https://wa.me/919015424048?text=Hi%2C%20I%20have%20a%20few%20questions%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md active:scale-95 transform cursor-pointer"
                title="WhatsApp Us"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
