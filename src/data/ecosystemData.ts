import { EcosystemItem } from '../types';

export const ECOSYSTEM_HEADING = "Recognised Across Kerala’s Innovation Ecosystem";
export const ECOSYSTEM_SUBTITLE = "Actively participating in Kerala’s startup and innovation ecosystem through technology development, innovation programmes, research networks, and entrepreneurial initiatives.";

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  {
    id: 'iedc-ukfcet',
    name: 'IEDC UKFCET',
    label: 'HOST INNOVATION ECOSYSTEM',
    description: 'Connected with the Innovation and Entrepreneurship Development Centre at UKFCET, supporting student innovation, prototyping, and startup initiatives.',
    iconType: 'building',
  },
  {
    id: 'msme-india',
    name: 'MSME India',
    label: 'MSME-REGISTERED ENTERPRISE',
    description: 'A registered enterprise focused on engineering projects, technology development, prototyping, and practical innovation solutions.',
    iconType: 'award',
  },
  {
    id: 'ksum',
    name: 'Kerala Startup Mission (KSUM)',
    label: 'ACTIVE ECOSYSTEM PARTICIPANT',
    description: 'Actively participating in Kerala Startup Mission activities and initiatives that support innovation, entrepreneurship, and startup development.',
    iconType: 'rocket',
  },
  {
    id: 'rink',
    name: 'Research Innovation Network Kerala (RINK)',
    label: 'RESEARCH INNOVATION NETWORK',
    description: 'Connected with Research Innovation Network Kerala (RINK) initiatives to translate research ideas into viable engineering prototypes and practical technology solutions.',
    iconType: 'network',
  },
];
