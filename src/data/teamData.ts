import { TeamMember, AchievementItem } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Muhammad Sadikh N',
    role: 'Founder & Advisor',
    headline: 'Fellow, IIT Kanpur | Control Systems | Healthcare Technology | Entrepreneurship',
    bio: 'Fellow at the Indian Institute of Technology (IIT) Kanpur (School of International Biodesign – Synergizing Healthcare Innovation and Entrepreneurship, SIB-SHInE). Former Academic Intern at Kerala Startup Mission (KSUM). Former Control Systems Engineer at Genrobotics and co-founder of Scify Technologies, bringing proven expertise in multidisciplinary engineering, healthcare technology, and startup incubation.',
    initials: 'MS',
    photo: '/images/team/muhammad_sadikh.jpg',
    linkedin: 'https://www.linkedin.com/in/muhammad-sadikh-n-55683a36a/',
    instagram: 'https://www.instagram.com/s_d_ik_?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==',
    instagramHandle: '@s_d_ik_',
    badges: [
      'Fellow, IIT Kanpur (SIB-SHInE)',
      'Former Intern, Kerala Startup Mission',
      'KTU-Funded Innovator',
      'Ex-Genrobotics Control Systems',
      'Co-Founder, Scify Technologies'
    ],
    confirmedAchievements: [
      'Fellow at IIT Kanpur — School of International Biodesign (SIB-SHInE)',
      'Former Academic Intern, Kerala Startup Mission (KSUM)',
      'KTU-Funded Innovator for engineering research and startup technology',
      'Former Control Systems Engineer at Genrobotics',
      'Co-Founder, Scify Technologies',
      'Incubation Mentor at IEDC UKFCET'
    ]
  },
  {
    name: 'Muhammed Ashik S',
    role: 'IoT Developer',
    headline: 'IoT Developer | Embedded Systems | Innovation & Entrepreneurship',
    bio: 'IoT developer and embedded systems engineer specializing in low-power microcontrollers, sensor integration, edge telemetry, and rapid prototyping. Active across Kerala’s startup ecosystem with an engaged community of 10,000+ LinkedIn followers.',
    initials: 'MA',
    photo: '/images/team/muhammed_ashik.jpg',
    linkedin: 'https://www.linkedin.com/in/connentashik/',
    instagram: 'https://www.instagram.com/ashxon.air/?__pwa=1#',
    instagramHandle: '@ashxon.air',
    followerCount: '10K+',
    badges: [
      '10K+ LinkedIn Followers',
      'IEFK 2026 — International Finalist',
      'KSUM / RINK Academic Internship',
      'IEDC NEST 4.0'
    ],
    confirmedAchievements: [
      '10K+ LinkedIn Followers engaged in IoT, hardware, and engineering projects',
      'International Finalist at International Energy Festival Kerala (IEFK) 2026',
      'Former Academic Intern associated with Kerala Startup Mission (KSUM) and RINK',
      'Associated with IEDC NEST 4.0 & IPR / Research Lead, IEDC UKFCET',
      'Technical Lead across 50+ delivered hardware and embedded builds'
    ]
  },
  {
    name: 'Saybu Jhon',
    role: 'Hardware Expert',
    headline: 'Hardware Expert | Electronics Prototyping | Product Development',
    bio: 'Hardware development and physical prototyping specialist. Focuses on physical prototyping, electronics integration, circuit troubleshooting, board testing, and functional engineering build construction.',
    initials: 'SJ',
    photo: '/images/team/saybu_jhon.jpg',
    linkedin: 'https://www.linkedin.com/in/sybu-john-03251a361/',
    instagram: 'https://www.instagram.com/_e_xo_dus_29_?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==',
    instagramHandle: '@_e_xo_dus_29_',
    badges: [
      'Prototype 3.0 Winner',
      'Hardware Development Specialist',
      'Electronics Integration & Prototyping'
    ],
    confirmedAchievements: [
      'Winner, Prototype 3.0 competition at College of Engineering Perumon',
      'Specialist in physical hardware fabrication, assembly, and test benches',
      'Electronics integration lead for sensors, actuators, and motor drives',
      'Hands-on bench calibration across 50+ delivered engineering prototypes'
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ktu-innovator',
    badge: 'KTU-FUNDED INNOVATOR',
    title: 'KTU-Funded Innovator',
    event: 'APJ Abdul Kalam Technological University Innovation Grant',
    organization: 'APJ Abdul Kalam Technological University (KTU)',
    recipient: 'Muhammad Sadikh N (Founder & Advisor)',
    recipientType: 'Individual Achievement',
    year: '2025',
    description: 'Awarded innovation grant funding by APJ Abdul Kalam Technological University (KTU) to advance engineering research, technical prototyping, and entrepreneurial innovation.',
    iconType: 'award'
  },
  {
    id: 'iefk-2026',
    badge: 'IEFK 2026 — INTERNATIONAL FINALIST',
    title: 'International Finalist — IEFK 2026',
    event: 'International Energy Festival Kerala (IEFK) 2026',
    organization: 'Government of Kerala / Energy Management Centre',
    recipient: 'Muhammed Ashik S (IoT Developer)',
    recipientType: 'Individual Achievement',
    year: '2026',
    description: 'Recognized as an International Finalist at the International Energy Festival Kerala (IEFK) 2026 for high-impact IoT engineering and sustainable smart energy monitoring.',
    iconType: 'zap'
  },
  {
    id: 'nec-top4',
    badge: 'TOP 4 — NATIONAL ENTREPRENEURSHIP CONCLAVE',
    title: 'Top 4 — National Entrepreneurship Conclave',
    event: 'National Entrepreneurship Conclave (NEC)',
    organization: 'LEAD College of Management, Palakkad',
    recipient: 'Minnal Technology Lab',
    recipientType: 'Startup / Team Achievement',
    year: '2026',
    description: 'Secured a Top 4 national ranking at the National Entrepreneurship Conclave (NEC), hosted at LEAD College of Management, Palakkad, demonstrating business-model viability, scalability, and pitch excellence.',
    iconType: 'trophy'
  },
  {
    id: 'leap-2025',
    badge: 'LEAP 2025 — FINALIST',
    title: 'Finalist — LEAP 2025 (₹3 Crore Ideathon)',
    event: 'LEAP 2025 Startup Ideathon by Msigma Gokulam',
    organization: 'Msigma Gokulam',
    recipient: 'Minnal Technology Lab',
    recipientType: 'Startup / Team Achievement',
    year: '2025',
    description: 'Selected as a Finalist in LEAP 2025, the flagship ₹3 Crore Startup Funding Ideathon conducted by Msigma Gokulam, advancing to the final venture pitching opportunity.',
    iconType: 'target'
  },
  {
    id: 'expo-ideathon-winners',
    badge: 'MULTIPLE EXPO & IDEATHON WINNERS',
    title: 'Multiple Inter-College Ideathons & Project Expos',
    event: 'State-Level Technical Symposia & Project Competitions',
    organization: 'Leading Engineering Colleges across Kerala',
    recipient: 'Minnal Technology Lab & Mentored Builds',
    recipientType: 'Startup / Team Achievement',
    year: '2025–2026',
    description: 'Consistently secured 1st prize and top podium rankings across multiple inter-college technical project exhibitions, hardware hackathons, and innovation ideathons.',
    iconType: 'trophy'
  }
];
