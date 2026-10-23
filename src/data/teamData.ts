import { TeamMember, AchievementItem } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Muhammed Sadikh N',
    role: 'Founder & Advisor',
    domain: 'Strategic Leadership & Project Advisory',
    bio: 'Guiding MINNAL TECHNOLOGY LAB from its inception, overseeing technical strategy, institutional incubation, and project standards.',
    initials: 'MS',
    confirmedAchievements: [
      'Founder & Strategic Advisor, Minnal Technology Lab',
      'Incubation Mentor at IEDC UKFCET',
      'Oversees multi-disciplinary engineering project architecture'
    ]
  },
  {
    name: 'Sibshine',
    role: 'Research Fellow, IIT Kanpur',
    domain: 'Advanced Research & Academic Mentorship',
    bio: 'Conducting advanced research at the Indian Institute of Technology Kanpur, providing rigorous scientific review and academic direction for complex engineering builds.',
    initials: 'SS',
    confirmedAchievements: [
      'Research Fellow at Indian Institute of Technology (IIT) Kanpur',
      'Specialized in advanced scientific computing and analytical validation',
      'Academic research advisor for advanced prototype development'
    ]
  },
  {
    name: 'Muhammed Ashik S',
    role: 'IoT Developer & Technical Lead',
    domain: 'IoT, Embedded Systems & Cloud Telemetry',
    bio: 'Lead IoT developer specializing in low-power microcontrollers, sensor integration, telemetry dashboards, and prototype development.',
    initials: 'MA',
    confirmedAchievements: [
      'International Finalist, IEFK 2026',
      'Former Academic Intern, Kerala Startup Mission (KSUM) & RINK',
      'IPR & Research Lead, IEDC UKFCET',
      'IEEE Student Branch Representative'
    ]
  },
  {
    name: 'Saibu Jhon',
    role: 'Hardware Expert & Prototype Developer',
    domain: 'Electronics, PCB Fabrication & Hardware Integration',
    bio: 'Hardware fabrication and embedded electronics specialist with extensive hands-on experience in circuit prototyping, sensor wiring, and hardware benchmarking.',
    initials: 'SJ',
    confirmedAchievements: [
      'Winner, Prototype 3.0 at College of Engineering Perumon',
      'Lead hardware prototyping developer on 50+ builds',
      'Specialized in circuit assembly, testing, and fabrication'
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    number: '100+',
    title: 'Engineered Project Builds',
    description: 'Working prototypes, mini projects, and final-year B.Tech projects successfully designed, assembled, and documented.',
    badge: 'Hardware & Software'
  },
  {
    number: 'IEFK 2026',
    title: 'International Finalist',
    description: 'Team technical lead selected as International Finalist at the International Entrepreneurship Festival Kerala 2026.',
    badge: 'Global Innovation'
  },
  {
    number: '1st Prize',
    title: 'Prototype 3.0 Winner',
    description: 'Secured first place in the state-level Prototype 3.0 engineering development competition at College of Engineering Perumon.',
    badge: 'Hardware Excellence'
  },
  {
    number: 'KSUM & RINK',
    title: 'Ecosystem Association',
    description: 'Direct internship and technology transfer exposure with Kerala Startup Mission (KSUM) and Research Innovation Network Kerala.',
    badge: 'Startup Ecosystem'
  }
];
