import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Map,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import SEO from '../components/SEO';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: 'Spoken English Mastery',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName.trim() && formData.phone.trim()) {
      setFormSubmitted(true);
      // reset form
      setFormData({
        fullName: '',
        phone: '',
        course: 'Spoken English Mastery',
        message: ''
      });
      setTimeout(() => setFormSubmitted(false), 8000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rajsirdelhi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact & Enroll",
        "item": "https://www.rajsirdelhi.com/contact"
      }
    ]
  };

  return (
    <div id="contact-page-container">
      <SEO
        title="Contact Raj Sir Delhi Spoken English Class | Book Free Demo"
        description="Ready to speak English confidently? Contact Raj Sir's admission office in Shakarpur, Laxmi Nagar, Delhi. Call +91 90154 24048 to book a free demo session today."
        keywords="Contact Raj Sir Delhi, English speaking classes Delhi number, Spoken English Laxmi Nagar contact address, Raj Sir demo class booking, learn German Laxmi Nagar office"
        schemaMarkup={contactSchema}
      />
      {/* 1. HERO SECTION */}
      <section id="contact-hero" className="bg-gradient-to-b from-blue-50/50 via-white to-bg-main py-16 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-4">
          <span
            id="contact-badge"
            className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
            DIRECT ENROLLMENT DESK
          </span>
          <h1 id="contact-title" className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[#171C59]">
            Let's Start Your <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">English Journey</span> Today.
          </h1>
          <p id="contact-subtext" className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our career counselors are available from 10:00 AM to 8:00 PM daily to evaluate your spoken proficiency level and recommend the best-suited fast-track batches.
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN LAYOUT */}
      <section id="contact-forms-section" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT: Send a Message Card */}
          <div className="lg:col-span-7">
            <div id="inquiry-form-card" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] text-left">
              <h2 className="font-sans text-2xl font-bold text-text-primary mb-2">Send an Inquiry</h2>
              <p className="text-text-secondary text-xs mb-6">Have a specific question about batch schedules or course fees? Fill out the quick card below.</p>
              
              {formSubmitted ? (
                <div id="contact-success-state" className="bg-emerald-50 border border-emerald-200/50 rounded-2xl p-6 text-center space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-emerald-800">Inquiry Received Successfully!</h3>
                    <p className="text-emerald-700 text-xs mt-1.5 leading-relaxed">
                      Thank you! Our Laxmi Nagar admission counselors have queued your request. One of our course advisors will call or WhatsApp you at your provided number within 15 minutes to schedule your evaluation class.
                    </p>
                  </div>
                </div>
              ) : (
                <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Amit Kumar"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 text-sm bg-bg-main border border-gray-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 text-sm bg-bg-main border border-gray-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="course" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Course Interest</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-bg-main border border-gray-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Spoken English Mastery">Spoken English Mastery (3 Months)</option>
                      <option value="German Language (A1-B2)">German Language (Goethe CEFR levels)</option>
                      <option value="Chinese HSK Levels">Chinese HSK Corporate Language</option>
                      <option value="General Consultation">General Fluent Assessment</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-text-secondary uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share your current language struggle or requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-bg-main border border-gray-200 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button id="contact-submit-btn" variant="primary" type="submit" className="w-full">
                      Send Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Promo card + 4 info cards in 2x2 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Promo Card: Accent Yellow */}
            <div id="promo-demo-card" className="bg-accent-yellow rounded-3xl p-6 border border-amber-300 shadow-md text-left relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-white/20 blur-xl"></div>
              
              <div className="space-y-3 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded text-text-primary">Limited Seats</span>
                <h3 className="font-sans font-extrabold text-xl text-text-primary">Book a Free Demo Class</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Experience Raj Sir's native classroom training face-to-face. No registration fee required. Meet our alumni and experience the environment!
                </p>
                <div className="pt-2">
                  <a
                    id="promo-reserve-btn"
                    href="https://wa.me/919015424048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center bg-dark-inverse hover:bg-dark-inverse-alt text-dark-text py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Reserve My Seat
                  </a>
                </div>
              </div>
            </div>

            {/* 2x2 Info Grid */}
            <div id="info-cards-2x2" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Address */}
              <div id="contact-info-address" className="bg-bg-main rounded-2xl p-5 border border-gray-100 text-left space-y-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-wider">Campus Address</h4>
                <p className="text-text-secondary text-[11px] leading-relaxed">Shakarpur Main market, Laxmi Nagar, Delhi, 110092</p>
              </div>

              {/* Card 2: Timing */}
              <div id="contact-info-hours" className="bg-bg-main rounded-2xl p-5 border border-gray-100 text-left space-y-2">
                <Clock className="h-5 w-5 text-primary" />
                <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-wider">Opening Hours</h4>
                <p className="text-text-secondary text-[11px] leading-relaxed">Mon - Sat: 9:00 AM - 8:00 PM<br />(Sunday Closed)</p>
              </div>

              {/* Card 3: Phone */}
              <div id="contact-info-phone" className="bg-bg-main rounded-2xl p-5 border border-gray-100 text-left space-y-2">
                <Phone className="h-5 w-5 text-primary" />
                <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-wider">Direct Hotline</h4>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  <a href="tel:+919015424048" className="hover:text-primary font-semibold transition-colors">+91 90154 24048</a>
                  <br />Ask for Counselors
                </p>
              </div>

              {/* Card 4: WhatsApp */}
              <div id="contact-info-whatsapp" className="bg-bg-main rounded-2xl p-5 border border-gray-100 text-left space-y-2">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
                <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-wider">Chat Desk</h4>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  <a href="https://wa.me/919015424048" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 font-semibold transition-colors">+91 90154 24048</a>
                  <br />Instant Reply
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. REAL GOOGLE MAP EMBED */}
      <section id="google-map-section" className="bg-bg-main py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-left">
              <h3 className="font-sans text-xl font-bold text-text-primary">Find Us on the Map</h3>
              <p className="text-text-secondary text-xs mt-1">Visit our Laxmi Nagar branch. Tap the pin to get exact navigation on Google Maps.</p>
            </div>
            <a
              id="google-maps-get-directions"
              href="https://www.google.com/maps/place/Raj+Sir+Delhi+Spoken+English+Class/@28.6333829,77.2803281,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfdfc0328b29f:0xbedbeabb9a944622!8m2!3d28.6333782!4d77.282903!16s%2Fg%2F11pf885gsm?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-primary font-bold text-xs px-5 py-2.5 rounded-full shadow-sm hover:bg-bg-nest transition-all"
            >
              <span>Get Directions ↗</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-bg-nest h-[450px]">
            <iframe 
              src="https://maps.google.com/maps?q=Raj%20Sir%20Delhi%20Spoken%20English%20Class&z=17&ie=UTF8&iwloc=A&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Raj Sir Delhi Spoken English Class Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
