import { ProjectItem } from '../types';
import rawProjects from './projects.json';

export const PROJECTS_DATA: ProjectItem[] = rawProjects as unknown as ProjectItem[];
