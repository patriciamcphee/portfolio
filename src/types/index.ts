import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  link: string;
}

export type ProjectCategory = 
  | 'technical-writing' 
  | 'ux-design' 
  | 'prompt-engineering' 
  | 'web-design' 
  | 'ux-writing'
  | 'blog-writing'
  | 'coding';

export interface Category {
  id: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: ExperienceType;
  description: string[];
}

export type ExperienceType = 'Software' | 'Healthcare' | 'Hardware';

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}