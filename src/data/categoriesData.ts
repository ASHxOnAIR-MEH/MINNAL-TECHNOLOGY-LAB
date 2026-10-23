import { ProjectCategory } from '../types';

export interface CategoryInfo {
  id: ProjectCategory;
  title: string;
  badge: string;
  shortDescription: string;
  image: string;
  sampleCount: number;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'IoT & Embedded Systems',
    title: 'IoT & Embedded Systems',
    badge: 'Reigniting Connected Systems',
    shortDescription: 'Smart microcontrollers, wireless sensor networks, edge telemetry, and real-time remote cloud control.',
    image: '/images/cat_iot.jpg',
    sampleCount: 28
  },
  {
    id: 'Robotics & Automation',
    title: 'Robotics & Automation',
    badge: 'Bridging Autonomous Action',
    shortDescription: 'Autonomous mobile rovers, multi-axis robotic arms, precision LiDAR navigation, and industrial automation.',
    image: '/images/cat_robotics.jpg',
    sampleCount: 22
  },
  {
    id: 'Mechanical Engineering',
    title: 'Mechanical Engineering',
    badge: 'Precision In Motion',
    shortDescription: 'Kinematic mechanism models, CNC precision assemblies, planetary gear systems, and dynamic mechanical rigs.',
    image: '/images/cat_mech.jpg',
    sampleCount: 19
  },
  {
    id: 'Electronics & Electrical',
    title: 'Electronics & Electrical',
    badge: 'Power & Circuit Architecture',
    shortDescription: 'Analog signal conditioning, power electronic converters, thermistor alarms, and closed-loop motor drivers.',
    image: '/images/cat_elec.jpg',
    sampleCount: 24
  },
  {
    id: 'Software & Web Development',
    title: 'Software & Web Development',
    badge: 'Engineering Digital Platforms',
    shortDescription: 'Full-stack engineering telemetry dashboards, C algorithm engines, institutional management systems, and APIs.',
    image: '/images/cat_software.jpg',
    sampleCount: 18
  },
  {
    id: 'Renewable Energy & Sustainability',
    title: 'Renewable Energy & Sustainability',
    badge: 'Green Tech Innovation',
    shortDescription: 'Single and dual-axis solar tracking rigs, micro-hydro generators, and intelligent power optimization setups.',
    image: '/images/cat_renew.jpg',
    sampleCount: 15
  }
];
