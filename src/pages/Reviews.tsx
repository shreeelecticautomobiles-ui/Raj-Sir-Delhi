import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Quote,
  CheckCircle,
  AlertTriangle,
  Award,
  Sparkles,
  BookOpen,
  User,
  Shield,
  HelpCircle,
  TrendingUp,
  MoveRight,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const getInitials = (name: string) => {
  return name
    .replace('Advocate ', '')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Types for the Case Studies
interface CaseStudyType {
  id: string;
  number: string;
  badgeTitle: string;
  name: string;
  profession: string;
  story: string;
  challenges: string[];
  breakthroughs: string[];
  achievements: string[];
  skills: string[];
  methodology: string[];
  quote: string;
  imageUrl?: string;
}

const CASE_STUDIES_DATA: CaseStudyType[] = [
  {
    id: 'yogendra-soni',
    number: '01',
    badgeTitle: 'FROM HESITATION TO PROFESSIONAL SUCCESS',
    name: 'YOGENDRA SONI',
    profession: 'Five Star Hotel Professional',
    story: "Before joining Raj Sir's classes, Yogendra Soni struggled while communicating confidently in professional environments. Through Raj Sir's practical speaking methodology and confidence building sessions, he significantly improved his fluency, communication skills and professional confidence. Today, he communicates confidently with people and performs exceptionally well in his profession.",
    imageUrl: 'https://i.ibb.co/60h4ZnkV/IMG-20260718-WA0028.jpg',
    challenges: [
      'Hesitation while speaking English',
      'Professional communication anxiety',
      'Lack of confidence',
      'Public speaking fear'
    ],
    breakthroughs: [
      'Fluent Communication',
      'Better Confidence',
      'Professional English',
      'Public Speaking Skills',
      'Personality Development',
      'Professional Growth'
    ],
    achievements: [
      'Five Star Hotel Professional',
      'Excellent Communication Skills',
      'Professional Confidence',
      'Better Fluency',
      'Career Growth'
    ],
    skills: [
      'Fluent Communication',
      'Confidence Building',
      'Professional English',
      'Public Speaking',
      'Personality Development'
    ],
    methodology: [
      'Daily speaking practice.',
      'Confidence building sessions.',
      'Public speaking activities.',
      'Professional communication exercises.',
      'Real world practical language training.'
    ],
    quote: "Raj Sir completely transformed my confidence while speaking English professionally."
  },
  {
    id: 'seenu-chaudhari',
    number: '02',
    badgeTitle: 'PUBLIC SECTOR FLUENCY & PRESENTATION EXCELLENCE',
    name: 'SEENU CHAUDHARI',
    profession: 'Accountant at Ministry',
    story: "Seenu Chaudhari wanted to improve his communication skills for professional growth. Through continuous speaking practice and confidence building exercises, he became more confident while communicating in professional environments, removing all hesitation when coordinating with high-level department officials.",
    imageUrl: 'https://i.ibb.co/0VWZKTvk/IMG-20260717-WA0027.jpg',
    challenges: [
      'Struggled during high-level ministry briefings',
      'Anxiety when speaking in front of senior officials',
      'Hesitation in continuous English conversation',
      'Difficulty articulating complex data points'
    ],
    breakthroughs: [
      'Polished Government Communication',
      'High-Impact Presentation Abilities',
      'Absolute Self-Assurance',
      'Spontaneous Sentence Formulation',
      'Excellent Career Progression'
    ],
    achievements: [
      'Accountant at Ministry',
      'Seamless Official Coordination',
      'Confident Presenter in Briefings',
      'Enhanced Fluent Expression',
      'Departmental Recognition'
    ],
    skills: [
      'Professional Communication',
      'Interview Preparation',
      'Confidence Building',
      'Public Speaking',
      'Better Fluency'
    ],
    methodology: [
      'Government protocol-style speaking drills.',
      'Spontaneous mock ministry briefing roleplays.',
      'Grammar-in-action syntax framework coaching.',
      'Interactive confidence builders.'
    ],
    quote: "The confidence building exercises gave me the exact courage I needed to express my ideas in high-level meetings."
  },
  {
    id: 'binnu-singh',
    number: '03',
    badgeTitle: 'HIGH-STAKES ADVISORY & FINANCIAL LEADERSHIP VOICE',
    name: 'BINNU SINGH',
    profession: 'Chartered Accountant',
    story: "Binnu Singh transformed his professional communication skills and gained greater confidence while presenting ideas and communicating effectively in his profession. He broke the barrier of technical jargon and learned how to pitch audits dynamically to premium client delegations.",
    imageUrl: 'https://i.ibb.co/tw40RqS8/IMG-20260717-WA0026.jpg',
    challenges: [
      'Stage fright during corporate client meetings',
      'Translating complex audit data into clear English speech',
      'Lack of assertive vocal delivery',
      'Hesitation during high-pressure negotiation panels'
    ],
    breakthroughs: [
      'Assertive Corporate Communication',
      'Outstanding Advisory Poise',
      'Polished Executive Body Language',
      'Dynamic Client Management Flow'
    ],
    achievements: [
      'Chartered Accountant',
      'Commanding Advisory Conversions',
      'Fluent Pitching in Boardrooms',
      'Strong Personal Brand Placement'
    ],
    skills: [
      'Executive Oratory',
      'Financial Presentation Mastery',
      'Assertive Client Pitching',
      'Dynamic Vocal Pacing',
      'Professional Dialogue Pacing'
    ],
    methodology: [
      'Corporate boardroom case studies simulation.',
      'Active leadership presentation drills.',
      'Vocabulary enhancement for premium consulting.',
      'Systematic speech-pacing guidelines.'
    ],
    quote: "Technical expertise is secondary if you cannot present it. Raj Sir gave me the actual voice of a financial leader."
  },
  {
    id: 'sandeep-singh',
    number: '04',
    badgeTitle: 'MILITARY DISCIPLINE & AUTHORITATIVE SPEECH COMMAND',
    name: 'SANDEEP SINGH',
    profession: 'Indian Air Force Professional',
    story: "Sandeep Singh developed stronger communication abilities and greater confidence through Raj Sir's practical language learning methodology. He mastered clear, concise, and direct vocal projection standard in defense operations.",
    imageUrl: 'https://i.ibb.co/LX3NdbYH/IMG-20260717-WA0024.jpg',
    challenges: [
      'Briefing high-ranking international military delegations',
      'Pronunciation-induced micro-pauses during rapid speeches',
      'Hesitation during spontaneous team command announcements',
      'Stage shyness'
    ],
    breakthroughs: [
      'Authoritative Vocal Projection',
      'Crisp operational brief articulation',
      'Absolute commanding posture',
      'Zero communication errors under pressure'
    ],
    achievements: [
      'Indian Air Force Professional',
      'Seamless Global Coordination',
      'Flawless Defense Officer Presentation',
      'Exemplary Command Control Fluency'
    ],
    skills: [
      'Precise Command Articulation',
      'Speech Modulation & Pacing',
      'High-Pressure Oratory',
      'Assertive Leadership Presence',
      'Phonetic Accuracy'
    ],
    methodology: [
      'Intense voice projection exercises.',
      'Strategic structural briefing roleplays.',
      'Error-free presentation structures training.',
      'Confidence reinforcement protocols.'
    ],
    quote: "Raj Sir's focus on structured, clear, and direct articulation aligned perfectly with our defense communication standards."
  },
  {
    id: 'anwar',
    number: '05',
    badgeTitle: 'GLOBAL SCALE MULTI-NATIONAL DELEGATION NEGOTIATIONS',
    name: 'ANWAR',
    profession: 'Manager in Dubai',
    story: "Anwar improved his professional English communication skills and gained greater confidence while working in an international environment. He broke through local language accents to lead diverse international teams successfully.",
    imageUrl: 'https://i.ibb.co/jkN7TvTq/IMG-20260717-WA0025.jpg',
    challenges: [
      'Accented pronunciation causing conversation blocks',
      'Nervousness in leading cross-functional multi-cultural teams',
      'Fear of speaking spontaneously on global corporate calls',
      'Limited business vocabulary'
    ],
    breakthroughs: [
      'Neutral Accent Integration',
      'Global Negotiation Power',
      'Fluent Team Alignment Strategies',
      'Impeccable Professional E-Mail & Speech Synergy'
    ],
    achievements: [
      'Manager in Dubai',
      'Successfully led global team expansion projects',
      'Converted high-value international client contracts',
      'Flawless cross-cultural alignment'
    ],
    skills: [
      'Global Business Communication',
      'Accent Neutralization',
      'Assertive Multi-Cultural Negotiating',
      'Spontaneous Argument Framing'
    ],
    methodology: [
      'Phonetics mapping and accent refinement.',
      'Simulated global conference presentations.',
      'Active debate forums.',
      'Corporate vocabulary expansion workshops.'
    ],
    quote: "Living in Dubai requires global fluency. Raj Sir helped me lead strategic meetings with total self-assurance."
  },
  {
    id: 'ranjit-singh',
    number: '06',
    badgeTitle: 'ACADEMIC PEDAGOGY & KEYNOTE PRESENTATION EXCELLENCE',
    name: 'RANJIT SINGH',
    profession: 'IIT Professor',
    story: "Ranjit Singh strengthened his communication and presentation skills through practical language training and confidence building exercises, ensuring his world-class research matches world-class verbal delivery.",
    imageUrl: 'https://i.ibb.co/ds3bbZmL/IMG-20260717-WA0022.jpg',
    challenges: [
      'Monotonous speaking style during extensive research briefs',
      'Nervousness during international symposia Q&As',
      'Difficulty maintaining student engagement during lectures',
      'Micro-hesitation when presenting technical concepts'
    ],
    breakthroughs: [
      'Dynamic Academic Storytelling',
      'Spontaneous, fluent Q&A response flow',
      'Inspirational presentation pacing',
      'Deep engagement with mass student audiences'
    ],
    achievements: [
      'IIT Professor',
      'Addressed high-level international research conventions',
      'Received outstanding student interaction feedback ratings',
      'Fluent academic keynote delivery'
    ],
    skills: [
      'Keynote Presentation Delivery',
      'Spontaneous Dialogue Mastery',
      'Academic Audience Engagement',
      'Voice Modulation & Storytelling'
    ],
    methodology: [
      'Speech dynamics training and micro-pause timing.',
      'Simulated conference presentation loops.',
      'Immediate constructive critiques.',
      'Structured question-handling templates.'
    ],
    quote: "Raj Sir helped me match my presentation delivery with the high standards of IIT academic excellence."
  },
  {
    id: 'ranveer-singh',
    number: '07',
    badgeTitle: 'HIGH-VALUE PORTFOLIO MANAGEMENT & CLIENT CONVERSION',
    name: 'RANVEER SINGH',
    profession: 'Manager at Private Bank',
    story: "Ranveer Singh transformed his professional communication skills and became more confident while interacting with clients and colleagues, driving direct commercial growth and building excellent customer trust.",
    imageUrl: 'https://i.ibb.co/fG4cJPz3/IMG-20260717-WA0023.jpg',
    challenges: [
      'Anxiety in pitching wealth portfolios to HNIs (High Net Worth Individuals)',
      'Hesitation during national banking audits and reviews',
      'Lack of spontaneous conversation during business development dinners',
      'Grammar-based overthinking'
    ],
    breakthroughs: [
      'Persuasive commercial communication flow',
      'Absolute confidence during strict audits',
      'Fluent networking and rapid relationship building',
      'Polished boardroom presence'
    ],
    achievements: [
      'Manager at Private Bank',
      'Consistently achieved high-net-worth portfolio conversions',
      'Outstanding commercial relation retention',
      'Recognized for exceptional communication'
    ],
    skills: [
      'HNI Client Relations',
      'Assertive Corporate Persuasion',
      'Financial Sentence Mechanics',
      'Fearless Business Pitching'
    ],
    methodology: [
      'Real-world commercial business case roleplays.',
      'Active networking simulation panels.',
      'Spontaneous talking prompts.',
      'Sentence-framing speed drills.'
    ],
    quote: "With Raj Sir's frameworks, presenting wealth banking strategies to major investors became incredibly natural."
  },
  {
    id: 'preeti-singh',
    number: '08',
    badgeTitle: 'MNC EXECUTIVE INITIATIVE & HIGH-IMPACT TEAM LEADERSHIP',
    name: 'PREETI SINGH',
    profession: 'Manager in MNC',
    story: "Preeti Singh developed stronger English communication skills and improved her confidence in professional environments. She overcame self-imposed limitations to voice strategic proposals clearly to global executives.",
    imageUrl: 'https://i.ibb.co/VWBCdDdB/IMG-20260717-WA0020.jpg',
    challenges: [
      'Holding back strategic comments during agile standups',
      'Fear of grammatical judgment by senior offshore managers',
      'Trembling voice during major client retrospectives',
      'Anxiety in leading multi-national operations meetings'
    ],
    breakthroughs: [
      'Bold, assertive global calls contribution',
      'Zero fear of language judgment',
      'Clear, commanding executive presentation poise',
      'Polished corporate leadership speech frameworks'
    ],
    achievements: [
      'Manager in MNC',
      'Successfully led global agile system deliveries',
      'Highly rated by global stakeholders for presentation skills',
      'Spearheaded key department alignment initiatives'
    ],
    skills: [
      'Agile Team Collaboration',
      'Executive Leadership English',
      'Impromptu Speaking Frameworks',
      'Persuasive Stakeholder Pitching'
    ],
    methodology: [
      'The \"Structure-of-Three\" communication model training.',
      'Simulated agile standup sprints speaking reviews.',
      'Confidence alignment coaching.',
      'Daily speech recordings analysis.'
    ],
    quote: "This class didn't just teach me vocabulary; it gave me the exact toolset to claim my voice in global boardrooms."
  },
  {
    id: 'manoj-dubedi',
    number: '09',
    badgeTitle: 'CIVIL SERVICE EXPLOITS & COMMANDING ADMINISTRATIVE VOICE',
    name: 'MANOJ DUBEDI',
    profession: 'SDM (Sub-Divisional Magistrate)',
    story: "Manoj Dubedi strengthened his communication abilities through Raj Sir's confidence building methodology and practical speaking exercises, establishing administrative command when addressing critical public situations.",
    imageUrl: 'https://i.ibb.co/C39V90Fs/IMG-20260717-WA0021.jpg',
    challenges: [
      'Stage anxiety when addressing large-scale public assemblies',
      'Micro-hesitation when conducting high-stakes press briefings',
      'Need for authoritative yet diplomatic vocabulary delivery',
      'Time constraints for dedicated continuous learning'
    ],
    breakthroughs: [
      'Commanding public presence',
      'Flawless media press conferences delivery',
      'Highly composed administrative vocabulary mastery',
      'Fast sentence framing in highly volatile environments'
    ],
    achievements: [
      'SDM (Sub-Divisional Magistrate)',
      'Maintained exemplary executive communications in crucial public briefings',
      'Recognized for diplomatic clarity during high-stress press briefings',
      'Highly impactful local administrative speech deliveries'
    ],
    skills: [
      'Administrative Public Address',
      'Crisis Communication Management',
      'Statecraft & Diplomatic Vocabulary',
      'Authoritative Stage Confidence'
    ],
    methodology: [
      'High-pressure press briefing simulation exercises.',
      'Formal protocol vocabulary development.',
      'Strategic pausing and breath coaching.',
      'Customized executive-class timings.'
    ],
    quote: "As a public officer, clarity and composure in speech are non-negotiable. Raj Sir's methodology builds absolute vocal strength."
  },
  {
    id: 'sunil-saksena',
    number: '10',
    badgeTitle: 'GOVERNMENT CABINET EXECUTIVE & FORMAL BRIEFING MASTERY',
    name: 'SUNIL SAKSENA',
    profession: 'Officer at Mantralay',
    story: "Sunil Saksena transformed his communication skills and developed greater professional confidence, presenting departmental files smoothly to top bureaucrats and senior policy panels.",
    imageUrl: 'https://i.ibb.co/TBYS991H/IMG-20260717-WA0019.jpg',
    challenges: [
      'Nervousness when presenting reports to senior ministerial secretaries',
      'Difficulty maintaining formal grammar under strict administrative panels',
      'Hesitation during departmental inter-state meetings',
      'Public address hesitation'
    ],
    breakthroughs: [
      'Grammatically precise file brief presentations',
      'Outstanding verbal assurance before executive committees',
      'Fluent exchange of official briefs with inter-departmental peers',
      'Highly polished administrative articulation'
    ],
    achievements: [
      'Officer at Mantralay',
      'Successfully delivered complex policy briefing reviews',
      'Consistent recognition for administrative coordination precision',
      'Zero hesitation during government protocol meetings'
    ],
    skills: [
      'Government Protocol Vocabulary',
      'Policy Briefing Articulation',
      'Executive Committee Presentation',
      'Formal Grammar Precision'
    ],
    methodology: [
      'Administrative scenario simulation.',
      'Sentence structures for formal government letters & speeches.',
      'Spontaneous public defense loops.',
      'Speech pace normalization drills.'
    ],
    quote: "The personalized focus and structured practices stripped away my lifelong speaking hesitation in a matter of weeks."
  },
  {
    id: 'devendra-singh',
    number: '11',
    badgeTitle: 'LEGAL SYSTEM COORDINATION & CONFIDENT SYSTEM ADVISORY',
    name: 'DEVENDRA SINGH',
    profession: 'Clerk at High Court',
    story: "Devendra Singh significantly improved his professional communication and confidence through continuous speaking practice, coordinating flawlessly within the fast-paced legal environment of the high court.",
    imageUrl: 'https://i.ibb.co/Q7wHJSp7/IMG-20260717-WA0016.jpg',
    challenges: [
      'Hesitation when interacting with senior legal practitioners and judges',
      'Difficulty formulating immediate legal coordination terminology',
      'Shyness in explaining administrative rules to high court delegates',
      'Pronunciation errors'
    ],
    breakthroughs: [
      'Fearless coordination within court systems',
      'Highly professional vocal presentation',
      'Zero micro-hesitation during senior panel coordinates',
      'Flawless legal-office coordination fluency'
    ],
    achievements: [
      'Clerk at High Court',
      'Praiseworthy coordination feedback from judicial officials',
      'Flawless administrative workflow representation',
      'Fluent legal client guidelines support'
    ],
    skills: [
      'Legal Professional Communication',
      'Immediate Sentence Construction',
      'Confidence Building under High Pressure',
      'Pronunciation Refinement'
    ],
    methodology: [
      'Continuous daily speaking loops.',
      'Legal and professional context-based talking prompts.',
      'Active voice recording diagnostic tests.',
      'Real-world mock judicial coordination panels.'
    ],
    quote: "The intensive daily speaking loops removed years of deep-seated English hesitation within my first month."
  },
  {
    id: 'aarti-singh',
    number: '12',
    badgeTitle: 'GLOBAL HR ADVISORY & TEAM CONVERSION LEADERSHIP',
    name: 'AARTI SINGH',
    profession: 'HR Professional at Infosys',
    story: "Aarti Singh developed excellent communication abilities that helped her perform confidently in professional environments, commanding attention during national recruitments and global corporate town halls.",
    imageUrl: 'https://i.ibb.co/Gfwr5Dck/IMG-20260717-WA0015.jpg',
    challenges: [
      'Anxiety when moderating mass global corporate town halls',
      'Hesitation in driving executive alignment during high-level HR reviews',
      'Soft vocal presence failing to hold large candidate forums',
      'Grammar-check blockages during live corporate addresses'
    ],
    breakthroughs: [
      'Powerful corporate presentation voice',
      'Inspirational and empathetic command of large talent assemblies',
      'Fluent, smooth stakeholder communication',
      'Flawless live moderations of multi-national panels'
    ],
    achievements: [
      'HR Professional at Infosys',
      'Successfully moderated large global town halls',
      'Maintained exceptional HR operations coordination feedback',
      'Recognized for corporate speech excellence'
    ],
    skills: [
      'MNC Leadership Communication',
      'Empathetic Professional Vocabulary',
      'Executive Town Hall Moderation',
      'Speech Modulation & Projection'
    ],
    methodology: [
      'Microphone and live public-speaking workshops.',
      'HR policy brief roleplay training.',
      'Active team alignment exercises.',
      'Audience retention oratory tactics.'
    ],
    quote: "Raj Sir's classes transformed my stage anxiety into a commanding and structured voice in front of hundreds of MNC professionals."
  },
  {
    id: 'manglam-singh',
    number: '13',
    badgeTitle: 'ACADEMIC LEADERSHIP & DYNAMIC PEDAGOGY DELIVERY',
    name: 'MANGLAM SINGH',
    profession: 'Professor',
    story: "Manglam Singh enhanced his communication and presentation skills through Raj Sir's practical language methodology, delivering lectures that keep modern students fully engaged and inspired.",
    imageUrl: 'https://i.ibb.co/bgkLNG2q/IMG-20260717-WA0014.jpg',
    challenges: [
      'Difficulty keeping students fully engaged in massive lecture halls',
      'Monotonous presentation of dry academic curriculum data',
      'Nervousness when presiding over national research boards',
      'Hesitation when debating with global scholars'
    ],
    breakthroughs: [
      'Highly interactive educational delivery',
      'Storytelling-based teaching approach with outstanding engagement',
      'Commanding keynote presence in inter-state conferences',
      'Eloquent, fluent scholarly discussions'
    ],
    achievements: [
      'Professor',
      'Successfully delivered acclaimed national research board keynotes',
      'Awarded Best Interactive Professor award by student union',
      'Authored highly fluent academic modules'
    ],
    skills: [
      'Interactive Pedagogy Mastery',
      'Academic Keynote Delivery',
      'Storytelling-Based Lectures',
      'Vocal Dynamics & Projection'
    ],
    methodology: [
      'Interactive academic delivery workshops.',
      'Vocal modulation diagnostics.',
      'Storytelling integration drills.',
      'Panel discussion practice.'
    ],
    quote: "The practical speaking methodology completely reformed my classroom lecture experience. My students are now incredibly engaged."
  },
  {
    id: 'wasim',
    number: '14',
    badgeTitle: 'INSTITUTIONAL ADMINISTRATION & PARTNERSHIP PITCHING',
    name: 'WASIM',
    profession: 'IIT Manager',
    story: "Wasim developed greater confidence and improved professional communication abilities, handling coordinates with high-end sponsor delegations and managing major campus operations seamlessly.",
    imageUrl: 'https://i.ibb.co/7t8wKNHD/IMG-20260717-WA0013.jpg',
    challenges: [
      'Speech blocks during operational proposals to IIT directors',
      'Nervousness when negotiating sponsorships with corporate brands',
      'Lacked assertive managerial vocabulary when addressing teams',
      'Public communication shyness'
    ],
    breakthroughs: [
      'Seamless proposal presentations with zero blockages',
      'Successful high-value brand sponsorship conversions',
      'Highly structured, fluent staff management',
      'Commanding coordination of major institutional events'
    ],
    achievements: [
      'IIT Manager',
      'Coordinated massive national IIT events successfully',
      'Secured key institutional sponsorships through fluent pitches',
      'Received letters of administrative excellence'
    ],
    skills: [
      'Institutional Sponsorship Pitching',
      'Assertive Managerial Dialogue',
      'Executive Event Coordination',
      'Conflict-Resolution Language'
    ],
    methodology: [
      'Managerial roleplays and active corporate pitches.',
      'Debate workshops for impromptu speech stability.',
      'Sentence framing diagnostics under pressure.',
      'Strategic structural briefing training.'
    ],
    quote: "Conquering my public speaking fear with Raj Sir's frameworks is the absolute best career decision I have ever made."
  },
  {
    id: 'mayank-dwivedi',
    number: '15',
    badgeTitle: 'COURTROOM ORATORY & STRATEGIC JUDICIAL PERSUASION',
    name: 'ADVOCATE MAYANK DWIVEDI',
    profession: 'Advocate',
    story: "Mayank Dwivedi strengthened his public speaking and professional communication skills through practical language training, arguing complex matters with outstanding judicial authority and deliberate courtroom presence.",
    imageUrl: 'https://i.ibb.co/KxsntHFW/IMG-20260717-WA0006.jpg',
    challenges: [
      'Micro-hesitation when presenting arguments under intense judicial questioning',
      'Speaking too fast during stressful litigation moments',
      'Lacked structured, crisp opening oratory patterns',
      'Hesitation during spontaneous witness cross-examinations'
    ],
    breakthroughs: [
      'Commanding and deliberate courtroom delivery',
      'Strategic pausing under high-stress questions',
      'Persuasive, highly structured legal narratives',
      'Absolute confidence during rapid-fire judicial interactions'
    ],
    achievements: [
      'Advocate',
      'Argued and won critical litigation cases with fluent presentation',
      'Praised for deliberate and impactful judicial oratory style',
      'Exceptional performance under high-court pressure conditions'
    ],
    skills: [
      'Courtroom Oratory & Rhetoric',
      'Strategic Verbal Persuasion',
      'Deliberate Vocal Pacing & Pitch',
      'Impromptu Argument Construction'
    ],
    methodology: [
      'High-pressure judicial simulation roleplays.',
      'Strategic pause-timing mechanics.',
      'Formal rhetorical styling templates.',
      'Intense voice projection diagnostics.'
    ],
    quote: "Vocal confidence is everything in the courtroom. Raj Sir's classes provided the final professional polish to my legal oratory."
  }
];

export default function Reviews() {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate('/contact');
  };

  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Raj Sir Delhi Language Classes",
      "image": "https://i.ibb.co/wr0kKg1x/IMG-20260717-WA0011-1.jpg",
      "description": "High-impact spoken English, German, and Chinese language coaching with 1081+ Google Reviews with 5.0 Rating.",
      "brand": {
        "@type": "Brand",
        "name": "Raj Sir Delhi"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5.0",
        "worstRating": "1.0",
        "reviewCount": "1081"
      }
    },
    {
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
          "name": "Transformations & Reviews",
          "item": "https://www.rajsirdelhi.com/reviews"
        }
      ]
    }
  ];

  return (
    <div id="reviews-page-wrapper" className="bg-[#F8FAFC] min-h-screen text-slate-900 relative overflow-hidden font-sans selection:bg-[#4F46E5]/20 selection:text-slate-900">
      <SEO
        title="1081+ Google Reviews & Career Transformations | Raj Sir Delhi"
        description="Read verified feedback from our corporate, judicial, government, and student alumni. Learn how Raj Sir's training achieved 1000+ career breakthroughs with a perfect 5.0 Google rating."
        keywords="Raj Sir Delhi reviews, English speaking classes Delhi reviews, Best Spoken English Laxmi Nagar testimonials, Raj Sir Delhi student success, German Language Laxmi Nagar rating"
        schemaMarkup={reviewsSchema}
      />
      
      {/* Background Grid Lines suitable for light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Soft Light Gradients */}
      <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-[#4F46E5]/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute top-[30%] -left-[300px] h-[600px] w-[600px] rounded-full bg-[#252B7B]/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] -right-[300px] h-[600px] w-[600px] rounded-full bg-[#818CF8]/5 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* 1. HERO HEADER - World Class light premium header */}
        <section id="transformation-hero" className="pt-28 pb-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8 text-center space-y-6">
            <ScrollReveal className="space-y-4">
              <span
                id="prestige-award-tag"
                className="inline-flex items-center gap-2 rounded-full bg-[#252B7B]/10 border border-[#252B7B]/25 px-5 py-2 text-xs font-black uppercase tracking-widest text-[#171C59] shadow-sm backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4 animate-pulse text-[#4F46E5]" />
                FROM CLASSROOM TO CAREER SUCCESS
              </span>
              
              <h1
                id="hero-massive-headline"
                className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[#171C59]"
              >
                1000+ CAREER <br />
                <span className="bg-gradient-to-r from-[#171C59] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">
                  TRANSFORMATIONS
                </span>
              </h1>
              
              <div className="pt-4 max-w-3xl mx-auto space-y-3">
                <p className="text-lg md:text-2xl font-bold tracking-wide text-slate-700">
                  Real People. Real Confidence. Real Success Stories.
                </p>
                <p className="text-xs md:text-sm text-[#4F46E5] font-black uppercase tracking-widest leading-relaxed">
                  CONFIDENCE • CAREER GROWTH • PERSONALITY DEVELOPMENT • FLUENT COMMUNICATION • PUBLIC SPEAKING
                </p>
              </div>

              <div className="h-1.5 w-24 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] mx-auto rounded-full mt-6"></div>
            </ScrollReveal>

            <ScrollReveal className="max-w-2xl mx-auto pt-6">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                This is not a list of simple testimonials. It is an ultra-premium, verified portfolio of real corporate, administrative, legal, and academic professionals who unlocked high-impact communications and conquered career plateaus with Raj Sir.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. PREMIUM PORTFOLIO LIST - ALTERNATING DESIGN WITH PREMIUM BLUE GRADIENTS */}
        <section id="verified-portfolio-list" className="pb-32 px-6 md:px-8 relative z-10">
          <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
            
            {CASE_STUDIES_DATA.map((study, idx) => {
              const isEven = idx % 2 === 0;
              const initials = getInitials(study.name);

              return (
                <ScrollReveal
                  id={`case-study-card-${study.id}`}
                  key={study.id}
                  className="w-full bg-gradient-to-b from-[#252B7B] to-[#171C59] border border-white/10 rounded-[32px] md:rounded-[48px] shadow-[0_32px_80px_rgba(23,28,89,0.25)] hover:shadow-[0_45px_100px_rgba(79,70,229,0.3)] hover:border-[#818CF8]/30 transition-all duration-500 overflow-hidden group text-white"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 p-6 md:p-10 lg:p-12 items-stretch gap-8 lg:gap-12">
                    
                    {/* LEFT / RIGHT ALTERNATING IMAGE PLACEHOLDER (col-span-5) */}
                    <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      
                      {/* Student Image or Premium Blue Image Placeholder */}
                      {study.imageUrl ? (
                        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.3)] group-hover:border-[#818CF8]/40 transition-all duration-500">
                          <img 
                            src={study.imageUrl} 
                            alt={study.name} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#171C59]/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gradient-to-tr from-[#171C59] via-[#252B7B] to-[#4F46E5]/40 border border-white/5 shadow-inner flex flex-col items-center justify-center p-6 group">
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(129,140,248,0.15),transparent)]"></div>
                          
                          {/* Glow effect behind initials */}
                          <div className="absolute h-28 w-28 rounded-full bg-[#818CF8]/25 blur-2xl animate-pulse"></div>
                          
                          {/* Custom initials display */}
                          <div className="relative z-10 h-24 w-24 rounded-full flex items-center justify-center text-3xl font-black shadow-2xl bg-[#171C59] border-2 border-[#818CF8]/40 text-white">
                            {initials}
                          </div>
                          
                          <span className="relative z-10 text-[9px] text-[#818CF8] font-black tracking-widest mt-4 uppercase bg-[#171C59]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-md">
                            Client Photo Placeholder
                          </span>
                        </div>
                      )}

                      {/* Info & Achievements details */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-black text-[#818CF8] uppercase tracking-widest bg-[#4F46E5]/20 border border-[#818CF8]/30 px-3 py-1.5 rounded-lg inline-block">
                            Case Study #{study.number}
                          </span>
                          <span className="text-[10px] ml-2 font-black text-slate-300 uppercase tracking-widest block sm:inline-block mt-2 sm:mt-0">
                            {study.badgeTitle}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <h2 className="font-sans text-3xl font-black tracking-tight text-white leading-none">
                            {study.name}
                          </h2>
                          <p className="text-[#818CF8] text-sm font-bold tracking-wide">
                            {study.profession}
                          </p>
                        </div>

                        {/* Current Achievements Block */}
                        <div className="bg-[#171C59]/80 border border-white/5 rounded-2xl p-5 space-y-2.5">
                          <div className="flex items-center gap-2 border-b border-white/5 pb-1.5">
                            <Award className="h-4.5 w-4.5 text-amber-400" />
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">Current Achievements</span>
                          </div>
                          <ul className="grid grid-cols-1 gap-1.5">
                            {study.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="text-xs text-slate-200 font-semibold flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT / LEFT TEXT DETAILS (col-span-7) */}
                    <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      
                      {/* Transformation Story */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-black tracking-widest text-[#818CF8] uppercase">
                          Transformation Story
                        </h4>
                        <p className="text-slate-200 text-sm md:text-base leading-relaxed font-semibold">
                          {study.story}
                        </p>
                      </div>

                      {/* Journey Split Blocks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#171C59]/60 p-5 rounded-2xl border border-white/5">
                        
                        {/* Initial Challenge */}
                        <div className="border-l-2 border-amber-500 pl-4 py-1 space-y-2">
                          <span className="text-[10px] font-black text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            Initial Challenges
                          </span>
                          <ul className="space-y-1 text-slate-300 text-xs font-medium">
                            {study.challenges.map((chal, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-1">
                                <span className="text-amber-500 shrink-0">•</span>
                                <span>{chal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Career Breakthrough */}
                        <div className="border-l-2 border-emerald-500 pl-4 py-1 space-y-2">
                          <span className="text-[10px] font-black text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5" />
                            Career Breakthrough
                          </span>
                          <ul className="space-y-1 text-slate-100 text-xs font-bold">
                            {study.breakthroughs.map((brk, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1">
                                <span className="text-emerald-400 shrink-0">✓</span>
                                <span>{brk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Skills Achieved */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-black tracking-widest text-[#818CF8] uppercase">
                          Skills Achieved
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {study.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-black tracking-wide uppercase px-3.5 py-1.5 bg-[#4F46E5]/30 text-white border border-[#818CF8]/30 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Methodology Highlight */}
                      <div className="bg-[#252B7B]/50 border border-white/5 rounded-2xl p-4 flex items-start gap-3.5">
                        <div className="p-2 bg-[#4F46E5]/30 text-[#818CF8] rounded-xl shrink-0">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest block">Raj Sir's Teaching Methodology</span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                            {study.methodology.map((meth, mIdx) => (
                              <p key={mIdx} className="text-slate-300 text-xs font-medium flex items-center gap-1.5">
                                <span className="h-1 w-1 bg-[#818CF8] rounded-full"></span>
                                {meth}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Premium Beautiful Quote Section */}
                      <div className="relative pl-6 py-2 border-l-4 border-[#818CF8] bg-[#171C59]/40 rounded-r-2xl">
                        <Quote className="absolute top-1 right-4 h-12 w-12 text-[#818CF8]/10 opacity-30 transform scale-x-[-1] pointer-events-none" />
                        <p className="italic font-sans text-sm md:text-base text-white font-bold leading-relaxed relative z-10">
                          "{study.quote}"
                        </p>
                        <span className="text-xs text-[#818CF8] font-black block mt-1.5">— {study.name}</span>
                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              );
            })}

          </div>
        </section>

        {/* 3. PREMIUM HERO CTA BANNER - Netflix & Masterclass Level */}
        <section id="transformation-cta" className="relative py-28 px-6 md:px-8 bg-slate-50 overflow-hidden">
          <div className="mx-auto max-w-5xl bg-gradient-to-br from-[#252B7B] to-[#171C59] border border-[#4F46E5]/20 rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-center space-y-8 relative z-10 shadow-[0_24px_60px_rgba(23,28,89,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#4F46E5]/20 blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-8">
              <ScrollReveal className="space-y-4">
                <h2 className="font-sans text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
                  Begin Your Journey <br className="hidden sm:inline" />
                  To Absolute{' '}
                  <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
                    Self-Assurance.
                  </span>
                </h2>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  If an Air Force Professional, an IIT Professor, and an Infosys HR Professional can break through language hesitation with Raj Sir, you can too. Turn your hesitation into professional power.
                </p>
              </ScrollReveal>

              <ScrollReveal className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  id="career-master-cta-btn"
                  variant="solid-white"
                  onClick={handleEnquire}
                  className="rounded-full shadow-2xl !px-10 !py-4 text-xs md:text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Join Raj Sir Delhi Classes
                </Button>
                <a
                  href="https://wa.me/919015424048?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20free%20demo%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#818CF8] text-white font-black text-xs md:text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-2xl transition-all cursor-pointer hover:scale-105"
                >
                  Book A Free Demo Class
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
