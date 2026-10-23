export type ProjectCategory = 
  | 'Mechanical Engineering'
  | 'IoT & Embedded Systems'
  | 'Electronics & Electrical'
  | 'Robotics & Automation'
  | 'Software & Web Development'
  | 'Renewable Energy & Sustainability';

export type ProjectComplexity = 
  | 'Mini Project (S3-S5)'
  | 'Final Year B.Tech (S7-S8)'
  | 'Working Hardware Prototype'
  | 'Research & Competition Rig';

export interface ProjectItem {
  id: string; // e.g. MNL-IOT-001
  title: string;
  category: ProjectCategory;
  complexity: ProjectComplexity;
  shortDescription: string;
  fullOverview: string;
  image: string;
  tags: string[];
  hardwareComponents: string[];
  softwareStack: string[];
  deliverables: string[];
  keyFeatures: string[];
  estimatedTimeline: string;
}

export interface TeamMember {
  name: string;
  role: string;
  confirmedAchievements: string[];
  domain: string;
  bio: string;
  initials: string;
}

export interface AchievementItem {
  number: string;
  title: string;
  description: string;
  badge: string;
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
