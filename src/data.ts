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
    title: 'Master Spoken English',
    duration: '3 Months',
    timing: 'Mon-Fri (10:00 AM or 6:00 PM)',
    badge: 'Best Seller',
    isBestSeller: true,
    features: [
      'Become fluent. Build real confidence. Communicate without hesitation.',
      'Hindi-to-English native translation method',
      'Daily group discussions & debate circles',
      'Neutral accent & pronunciation coaching',
      'Comprehensive public speaking practice'
    ],
    image: '',
    buttonText: 'Enroll Now'
  },
  {
    id: 'c-german',
    title: 'Master German (A1-B2)',
    duration: '4-6 Months',
    timing: 'Weekend Batches (Sat & Sun)',
    badge: 'New Batch',
    isBestSeller: false,
    features: [
      'Open doors to international opportunities.',
      'Comprehensive Goethe Exam preparation',
      'Structured vocabulary building blocks',
      'Interactive reading, writing & listening sessions',
      'Official study materials & sample tests'
    ],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80',
    buttonText: 'Join Next Batch'
  },
  {
    id: 'c-chinese',
    title: 'Master Chinese (HSK)',
    duration: '6 Months',
    timing: 'Evening Batches Online',
    badge: 'Corporate Focus',
    isBestSeller: false,
    features: [
      'Professional-level language training for global careers.',
      'HSK 1 to 4 official certification syllabus',
      'Pinyin & character writing drills',
      'Business conversation & negotiation practice',
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
    title: 'Interactive Group Session',
    image: 'https://i.ibb.co/HLdbh1vB/IMG-20260717-WA0008.jpg',
    description: 'Students actively practicing translation and conversational speaking drills.',
  },
  {
    id: 'g-2',
    category: 'Classrooms',
    title: 'Live Guidance by Raj Sir',
    image: 'https://i.ibb.co/GfJ32QCc/IMG-20260717-WA0010-1.jpg',
    description: 'Raj Sir providing personal, micro-level feedback and confidence tricks.',
  },
  {
    id: 'g-3',
    category: 'Students',
    title: 'Peer Learning & Discussions',
    image: 'https://i.ibb.co/h1ntT6fL/IMG-20260717-WA0011.jpg',
    description: 'Students building dialogue flow together in an encouraging peer environment.',
  },
  {
    id: 'g-4',
    category: 'Students',
    title: 'Confidence and Speech Training',
    image: 'https://i.ibb.co/tMKkzhqK/IMG-20260717-WA0034.jpg',
    description: 'Practical training designed to overcome hesitation and master stage presence.',
  },
  {
    id: 'g-5',
    category: 'Classrooms',
    title: 'Dynamic Translation Exercises',
    image: 'https://i.ibb.co/s9WrgQZ4/IMG-20260717-WA0040.jpg',
    description: 'Fun translation techniques translating thoughts directly to English.',
  },
  {
    id: 'g-6',
    category: 'Students',
    title: 'Engaging Group Drills',
    image: 'https://i.ibb.co/MDLpbvwX/IMG-20260717-WA0043.jpg',
    description: 'Interactive classroom circles where hesitation is broken down.',
  },
  {
    id: 'g-7',
    category: 'Events',
    title: 'Class Presentation & Speaking',
    image: 'https://i.ibb.co/RmD1zpy/IMG-20260717-WA0046.jpg',
    description: 'Classroom speaking activities to improve articulation and body language.',
  },
  {
    id: 'g-8',
    category: 'Students',
    title: 'MNC Interview Preparation',
    image: 'https://i.ibb.co/knK8G2j/IMG-20260717-WA0051.jpg',
    description: 'Mock interview practices simulating real-world job interview questions.',
  },
  {
    id: 'g-9',
    category: 'Classrooms',
    title: 'Interactive Group Discussions',
    image: 'https://i.ibb.co/WpFHm2M6/IMG-20260718-WA0029.jpg',
    description: 'Students participating in a group communication exercise.',
  },
  {
    id: 'g-10',
    category: 'Students',
    title: 'Individual Presentation Drills',
    image: 'https://i.ibb.co/FL33Q5ft/IMG-20260718-WA0030.jpg',
    description: 'Developing independent public speaking skills under supervision.',
  },
  {
    id: 'g-11',
    category: 'Classrooms',
    title: 'Confidence Building Activities',
    image: 'https://i.ibb.co/MDSff7g4/IMG-20260718-WA0032.jpg',
    description: 'Fun and interactive public speaking games to remove fear.',
  },
  {
    id: 'g-12',
    category: 'Classrooms',
    title: 'Active Learning Environment',
    image: 'https://i.ibb.co/RpJGw9cz/IMG-20260718-WA0033.jpg',
    description: 'Dynamic translation sessions to build spontaneous response times.',
  },
  {
    id: 'g-13',
    category: 'Students',
    title: 'Doubt Clearing Sessions',
    image: 'https://i.ibb.co/nshZzW0d/IMG-20260718-WA0042.jpg',
    description: 'One-on-one personal guidance for neutral accent training.',
  },
  {
    id: 'g-14',
    category: 'Classrooms',
    title: 'Spoken English Learning Circles',
    image: 'https://i.ibb.co/Hf9MPFzq/IMG-20260718-WA0043.jpg',
    description: 'Group-based pronunciation drills to build corporate-level vocabulary.',
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
