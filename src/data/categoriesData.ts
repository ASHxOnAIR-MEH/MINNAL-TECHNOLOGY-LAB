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
    id: 'Mechanical Engineering Projects',
    title: 'Mechanical Engineering',
    badge: 'ME Series · 336 Projects',
    shortDescription: 'Special-purpose machines, agricultural automation, material processing rigs, cutting mechanisms, and CNC fabrication prototypes.',
    image: '/images/cat_mech.jpg',
    sampleCount: 336
  },
  {
    id: 'Mechanical & Industrial Innovation Projects',
    title: 'Industrial Innovation',
    badge: 'MI Series · 273 Projects',
    shortDescription: 'Hydraulic and pneumatic jacks, workshop tooling, power generation rigs, safety braking systems, and shopfloor equipment.',
    image: '/images/cat_mech.jpg',
    sampleCount: 273
  },
  {
    id: 'PHP / Web Application Projects',
    title: 'PHP & Web Applications',
    badge: 'PHP Series · 236 Projects',
    shortDescription: 'Enterprise portal management systems, online booking portals, institutional databases, and full-stack CRUD applications.',
    image: '/images/cat_software.jpg',
    sampleCount: 236
  },
  {
    id: 'Microcontroller & Electronics Projects',
    title: 'Microcontroller & Electronics',
    badge: 'MC Series · 183 Projects',
    shortDescription: 'Embedded motor control, sensor-based safety monitors, RF/GSM tracking, power converters, and intelligent automation systems.',
    image: '/images/cat_elec.jpg',
    sampleCount: 183
  },
  {
    id: 'Robotics & Automation Projects',
    title: 'Robotics & Automation',
    badge: 'MR Series · 129 Projects',
    shortDescription: 'Autonomous mobile robots, stair-climbing wheelchairs, multi-axis robotic arms, firefighting AGVs, and bipedal walkers.',
    image: '/images/cat_robotics.jpg',
    sampleCount: 129
  },
  {
    id: 'Internet of Things (IoT) Projects',
    title: 'Internet of Things (IoT)',
    badge: 'IOT Series · 77 Projects',
    shortDescription: 'Connected smart devices, environmental sensor nodes, edge computing rigs, and cloud telemetry monitoring systems.',
    image: '/images/cat_iot.jpg',
    sampleCount: 77
  },
  {
    id: 'Mechanical Mechanism Projects',
    title: 'Mechanical Mechanisms',
    badge: 'MH Series · 67 Projects',
    shortDescription: 'Scotch yoke linkages, Geneva indexing drives, Whitworth quick-return mechanisms, and gearless power transmissions.',
    image: '/images/cat_mech.jpg',
    sampleCount: 67
  },
  {
    id: 'Composite Material Projects',
    title: 'Composite Materials',
    badge: 'CM Series · 43 Projects',
    shortDescription: 'Fiber-reinforced epoxy laminates, metal matrix composites, natural bio-fibers, buckling analysis, and ASTM characterisation.',
    image: '/images/cat_mech.jpg',
    sampleCount: 43
  },
  {
    id: 'Web & Software Projects',
    title: 'Web & Software Systems',
    badge: 'CWEB Series · 33 Projects',
    shortDescription: 'Full-stack software architectures, graphical authentication, decision prediction models, and cloud database engines.',
    image: '/images/cat_software.jpg',
    sampleCount: 33
  }
];
