import { EcosystemItem } from '../types';

export const ECOSYSTEM_HEADING = "Recognised Across the Innovation Ecosystem";
export const ECOSYSTEM_SUBTITLE = "Actively participating in state and national startup ecosystems through technology development, competition-winning platforms, and entrepreneurial initiatives.";

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  {
    id: 'msme-india',
    name: 'MSME India',
    label: 'MSME-REGISTERED ENTERPRISE',
    description: 'A registered enterprise focused on engineering projects, technology development, prototyping, and practical innovation solutions.',
    iconType: 'award',
    tag: 'National',
  },
  {
    id: 'ksum',
    name: 'Kerala Startup Mission (KSUM)',
    label: 'ACTIVE ECOSYSTEM PARTICIPANT',
    description: 'Actively participating in Kerala Startup Mission activities and initiatives that support innovation, entrepreneurship, and startup development.',
    iconType: 'rocket',
    tag: 'Kerala',
  },
  {
    id: 'competition-winners',
    name: 'National & State Level Project Competition Winners',
    label: 'COMPETITION WINNERS BACKED INITIATIVE',
    description: 'Backed by winners of prestigious national and state-level engineering project competitions, ideathons, and tech expos — translating competition-grade innovation into viable prototypes and practical technology solutions.',
    iconType: 'trophy',
    tag: 'National & State',
  },
];
