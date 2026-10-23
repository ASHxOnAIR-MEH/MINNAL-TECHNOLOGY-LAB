export type ProjectCategory = 
  | 'Web & Software Projects'
  | 'PHP / Web Application Projects'
  | 'Internet of Things (IoT) Projects'
  | 'Microcontroller & Electronics Projects'
  | 'Mechanical Engineering Projects'
  | 'Mechanical & Industrial Innovation Projects'
  | 'Mechanical Mechanism Projects'
  | 'Robotics & Automation Projects'
  | 'Mechanical Engineering'
  | 'Mechanical Projects'
  | 'IoT & Embedded Systems'
  | 'Electronics & Electrical'
  | 'Software & Web Development'
  | 'Renewable Energy & Sustainability'
  | string;

export type ProjectComplexity = 
  | 'Mini Project (S3-S5)'
  | 'Final Year B.Tech (S7-S8)'
  | 'Working Hardware Prototype'
  | 'Research & Competition Rig';

export interface ProjectItem {
  id: string; // e.g. MH001, MNL-IOT-001
  originalTitle?: string;
  title: string;
  catalogGroup?: string;
  category: ProjectCategory;
  slug?: string;
  complexity?: ProjectComplexity | string;
  shortDescription?: string;
  fullOverview?: string;
  image: string;
  hasCustomImage?: boolean;
  fallbackImage?: string;
  imageAlt?: string;
  imagePrompt?: string;
  tags?: string[];
  hardwareComponents?: string[];
  softwareStack?: string[];
  deliverables?: string[];
  keyFeatures?: string[];
  estimatedTimeline?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  headline: string;
  bio: string;
  initials: string;
  photo?: string;
  linkedin: string;
  instagram?: string;
  instagramHandle?: string;
  badges: string[];
  confirmedAchievements: string[];
  followerCount?: string;
}

export interface AchievementItem {
  id: string;
  badge: string;
  title: string;
  event: string;
  organization: string;
  recipient: string;
  recipientType: 'Individual Achievement' | 'Startup / Team Achievement';
  year?: string;
  description: string;
  iconType: 'award' | 'zap' | 'trophy' | 'target';
}

export interface QuotationFormState {
  name: string;
  institution: string;
  phone: string;
  email: string;
  category: ProjectCategory | '';
  complexity: string;
  budgetRange: string;
  description: string;
  projectId?: string;
}

export interface EcosystemItem {
  id: string;
  name: string;
  label: string;
  description: string;
  iconType: 'building' | 'award' | 'rocket' | 'network';
}
