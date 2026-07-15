export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  timing: string;
  price?: string;
  badge?: string;
  isBestSeller?: boolean;
  features: string[];
  image: string;
  buttonText: string;
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  views: string;
  uploadedAt: string;
  thumbnail: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  category: 'Institute' | 'Students' | 'Classrooms' | 'Events' | 'Certificates';
  title: string;
  image: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  label: string;
  name: string;
  title: string;
  paragraph: string;
  quote: string;
  statBadge: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  /* CLIENT: confirm this is a real review, replace avatar with real photo or remove avatar entirely */
  {
    id: 't-1',
    name: 'Rahul Sharma',
    role: 'Software Engineer @ Google',
    quote: "I came from a Hindi-medium school in Bihar and struggled to speak during stand-up meetings. Raj Sir's Hindi-to-English translation methodology and continuous public speaking drills completely removed my fear. I cracked my Google interview 6 months later!",
    rating: 5,
    avatar: '',
  },
  /* CLIENT: confirm this is a real review, replace avatar with real photo or remove avatar entirely */
  {
    id: 't-2',
    name: 'Priya Verma',
    role: 'MBA Student @ FMS Delhi',
    quote: "The group discussions and daily debate exercises at Raj Sir's institute are top-notch. They don't just teach grammar rules; they build your confidence, pronunciation, and vocabulary to present in corporate settings without hesitation.",
    rating: 5,
    avatar: '',
  },
  /* CLIENT: confirm this is a real review, replace avatar with real photo or remove avatar entirely */
  {
    id: 't-3',
    name: 'Amit Mehra',
    role: 'Project Manager @ Accenture',
    quote: "For working professionals, Raj Sir Delhi Spoken English is a game-changer. The evening batches are highly flexible, and the focus on neutral accent training and official email drafting helped me secure my promotion and handle client calls.",
    rating: 5,
    avatar: '',
  },
  /* CLIENT: confirm this is a real review, replace avatar with real photo or remove avatar entirely */
  {
    id: 't-4',
    name: 'Shweta Goel',
    role: 'Aviation Aspirant',
    quote: "I was extremely shy and would freeze when asked to introduce myself. Raj Sir's personal guidance and the friendly, judgment-free classroom atmosphere helped me find my voice. I have now cleared my cabin crew rounds!",
    rating: 5,
    avatar: '',
  }
];

export const courses: Course[] = [
  {
    id: 'c-english',
    title: 'Spoken English Mastery',
    duration: '3 Months',
    timing: 'Mon-Fri (10:00 AM or 6:00 PM)',
    badge: 'Best Seller',
    isBestSeller: true,
    features: [
      'Hindi-to-English native translation method',
      'Daily group discussions & debate circles',
      'Neutral accent & pronunciation coaching',
      'Comprehensive public speaking practice',
      'Lifetime access to Speaking Clubs'
    ],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80',
    buttonText: 'Enroll Now'
  },
  {
    id: 'c-german',
    title: 'German Language (A1 - B2)',
    duration: '4-6 Months',
    timing: 'Weekend Batches (Sat & Sun)',
    badge: 'New Batch',
    isBestSeller: false,
    features: [
      'Comprehensive Goethe Exam preparation',
      'Structured vocabulary building blocks',
      'Interactive reading, writing & listening sessions',
      'Exclusive German cultural orientation modules',
      'Official study materials & sample tests'
    ],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80',
    buttonText: 'Join Next Batch'
  },
  {
    id: 'c-chinese',
    title: 'Chinese HSK Levels',
    duration: '6 Months',
    timing: 'Evening Batches Online',
    badge: 'Corporate Focus',
    isBestSeller: false,
    features: [
      'HSK 1 to 4 official certification syllabus',
      'Pinyin & character writing drills',
      'Business conversation & negotiation practice',
      'Taught by certified corporate trainers',
      'Direct placement assistance in MNCs'
    ],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop&q=80',
    buttonText: 'Enquire for Batches'
  }
];

export const videos: Video[] = [
  {
    id: 'v-1',
    youtubeId: 'f6ijCa-S8fs',
    title: 'Fluent English Translation Practice: Master Spoken English with Raj Sir',
    views: '450K views',
    uploadedAt: '1 week ago',
    thumbnail: 'https://img.youtube.com/vi/f6ijCa-S8fs/hqdefault.jpg',
    duration: '18:45',
  },
  {
    id: 'v-2',
    youtubeId: 'r5oBh733sKo',
    title: 'Daily Use English Sentences & Practice Drills for Beginners',
    views: '320K views',
    uploadedAt: '2 weeks ago',
    thumbnail: 'https://img.youtube.com/vi/r5oBh733sKo/hqdefault.jpg',
    duration: '14:20',
  },
  {
    id: 'v-3',
    youtubeId: 'enY7CKHbEak',
    title: 'How to Think and Speak in English Fluently without Hesitation',
    views: '610K views',
    uploadedAt: '3 weeks ago',
    thumbnail: 'https://img.youtube.com/vi/enY7CKHbEak/hqdefault.jpg',
    duration: '22:10',
  },
  {
    id: 'v-4',
    youtubeId: 'CrtOWoQQjvo',
    title: 'Spoken English Grammar Keys: Structural Sentence Formula',
    views: '280K views',
    uploadedAt: '1 month ago',
    thumbnail: 'https://img.youtube.com/vi/CrtOWoQQjvo/hqdefault.jpg',
    duration: '15:35',
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'Classrooms',
    title: 'Interactive Spoken Session',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
    description: 'Raj Sir conducting a lively translation drill with our morning batch.',
  },
  {
    id: 'g-2',
    category: 'Events',
    title: 'Confidence Building Seminar',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80',
    description: 'A weekend public speaking seminar filled with 150+ students overcoming stage fear.',
  },
  {
    id: 'g-3',
    category: 'Students',
    title: 'Group Discussion Circles',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
    description: 'Students collaborating in English debating circles during practical hour.',
  },
  {
    id: 'g-4',
    category: 'Certificates',
    title: 'German Graduation Ceremony',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80',
    description: 'Proud students with their verified Goethe language competency certificates.',
  },
  {
    id: 'g-5',
    category: 'Institute',
    title: 'Modern Library & Lab Area',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
    description: 'A study desk where students can practice audio mock tests with high-end headsets.',
  },
  {
    id: 'g-6',
    category: 'Events',
    title: 'Annual Cultural Festival',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80',
    description: 'Celebrating language and communication diversity through speech competitions.',
  },
  {
    id: 'g-7',
    category: 'Classrooms',
    title: 'Corporate Chinese Session',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
    description: 'Intense MNC negotiation simulation in our advanced level evening batch.',
  },
  {
    id: 'g-8',
    category: 'Students',
    title: 'One-on-One Feedback Session',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    description: 'Mentors helping individual students polish their resume and interview body language.',
  },
  {
    id: 'g-9',
    category: 'Institute',
    title: 'Delhi Laxmi Nagar Campus',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
    description: 'The exterior lobby of our center, right at Shakarpur Main market, Laxmi Nagar, Delhi.',
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    label: 'CASE STUDY #01',
    name: 'Rahul Sharma',
    title: 'From Fear to a Job at Google',
    paragraph: "Rahul grew up in rural Bihar and did his schooling in Hindi medium. When he entered the corporate tech sector, he froze during client presentation rounds, feeling inferior to native speakers. After joining Raj Sir's Spoken English Mastery program, he dedicated 3 months to intensive confidence training, neutral accent correction, and corporate speech frameworks.",
    quote: "The fear of being judged completely vanished when Raj Sir told me, 'Hindi is your strength, English is just a skill.' Within three months, I became the primary presenter for my squad.",
    statBadge: 'Software Engineer @ Google — 150% Salary Hike Post-Course',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'cs-2',
    label: 'CASE STUDY #02',
    name: 'Pooja Hegde',
    title: 'Breaking the Barrier of Public Speaking',
    paragraph: "Pooja, a brilliant management graduate, had the data but lacked the stage command. She would get severe stage fright and avoid raising her hand during national academic summits. At Raj Sir's institute, she was pushed into active daily debate rounds, microphone speaking training, and weekly mock corporate boardrooms.",
    quote: "Raj Sir was like a Bade Bhaiya (big brother) to me. He pointed out my micro-hesitations and taught me how to pace my breathing while speaking on a big stage.",
    statBadge: 'Consultant @ Deloitte — Recipient of Best Speaker Award',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
  }
];

export const faqs = [
  {
    question: 'Can I join the course if I know zero English?',
    answer: "Absolutely! Our unique Hindi-to-English translation method is specifically designed for students who start from ground zero. We explain the core rules of sentence construction in Hindi first, then handhold you into translating and practicing verbally."
  },
  {
    question: 'Do you provide certification for Foreign Languages?',
    answer: "Yes. Our German program is fully aligned with the official Goethe Institute CEFR levels (A1 to B2), and our Chinese program matches the Hanban HSK levels. We provide official institute certificates and exhaustive exam prep support."
  },
  {
    question: 'Are there online and offline batches available?',
    answer: "Yes, we run both highly interactive face-to-face classes at our Shakarpur, Laxmi Nagar Center in Delhi, and live interactive video sessions online for remote learners with real-time feedback."
  },
  {
    question: 'Do you offer a refund or demo options?',
    answer: "We offer completely free personal demo classes before enrollment. This lets you sit through our sessions, meet Raj Sir, understand the methodology, and then decide to proceed."
  }
];
